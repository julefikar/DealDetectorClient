import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from "react-icons/fi";
import algoliasearch from 'algoliasearch/lite';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LoadingScreen from '../Miscellaneous/LoadingScreen';
import { recordSearchQuery } from '../Miscellaneous/Analytics';
import { sendSearchAnalytics } from '../Miscellaneous/SendToAlgolia';
import './SearchBar.css';
import Axios from 'axios';

const searchClient = algoliasearch('QGXKTHTJGY', '8cd7adea0720a2f9af20cd6ac20f5203');
const index = searchClient.initIndex('searchterms');
const analytics = searchClient.initIndex('searchAnalytics');

const SearchBar = () => {

    const [query, setQuery] = useState('');
    const [hits, setHits] = useState([]);
    const [trends, setTrends] = useState([]);
    const [selectedResult, setSelectedResult] = useState(-1);
    const [searchHistory, setSearchHistory] = useState([]);
    const [isDropdownOpen, setDropdownOpen] = useState(false); // Track if suggestions or history are open
    const [queryChange, setQueryChange] = useState(true); // Flag for search action
    const dropdownRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // Load search history from local storage on component mount
    useEffect(() => {
        const savedHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
        setSearchHistory(savedHistory);
    }, []);

    useEffect(() => {
        if (query.trim() === '') {
            setHits([]);

            getTrend();

            document.addEventListener('mousedown', handleClickOutside);
            setDropdownOpen(false);
            return;
        }
        else {
            setTrends([]);
        }

        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                // Clicked outside the search bar and dropdown
                setDropdownOpen(false);
            }

            console.log("clicked out");
        }

        async function fetchSuggestions() {
            if (queryChange) {
                const { hits } = await index.search(query, {
                    hitsPerPage: 10, //limit 10 suggestions per query
                });
                setHits(hits);
            }
        }

        fetchSuggestions();

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };

    }, [query]);

    const handleInputChange = async (event) => {
        const userInput = event.target.value;

        setQuery(userInput);

        setDropdownOpen(true); // Open dropdown when input changes
        setSelectedResult(-1);
    };

    const getTrend = async () => {
        try {
            const getTrends = await analytics.search('', {
                hitsPerPage: 5,
                attributesToRetrieve: ['objectID', 'search_term', 'customRanking(desc(count))'], // Include other attributes you want to retrieve
            });

            //console.log('Algolia Response:', getTrends);

            setTrends(getTrends.hits);
        } catch (error) {
            console.error('Error fetching trend', error);
        }
    }

    // Function to save searches to the search history
    const saveToSearchHistory = (search) => {
        const newSearchHistory = [...searchHistory];
        if (!newSearchHistory.includes(search)) {
            newSearchHistory.push(search);
        }
        setSearchHistory(newSearchHistory);

        //save history
        localStorage.setItem('searchHistory', JSON.stringify(newSearchHistory));
    };

    const deleteSearch = (index) => {
        const updatedHistory = [...searchHistory];
        updatedHistory.splice(index, 1);
        setSearchHistory(updatedHistory);

        //save history
        localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
    };

    const searchWithAPI = async (query) => {
        try {
            setLoading(true);
            const postResponse = await Axios.post('http://127.0.0.1:5000/search', {
                searchQuery: query,
            });

             //console.log(postResponse)
             if(postResponse.status === 200){
                const res = await Axios.get('http://127.0.0.1:5000/results')

               // console.log(res)
                navigate('/results', {state:{searchData: JSON.stringify(res)}})
            
           }
        

            recordSearchQuery(query); //send data to algolia

            try {
                sendSearchAnalytics();
            } catch (error) {
                console.error('Error in sendSearchAnalytics:', error);
            }

        }
        catch (error) {
            console.log(error)
        }
        finally{
            setLoading(false);
        }
    };

    //search button pressed
    const searchInput = async () => {
        //TODO: implement search function to API
        if (query.trim() !== '') {
            searchWithAPI(query);
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'ArrowDown') {
            event.preventDefault();

            setSelectedResult((prevIndex) => Math.min(prevIndex + 1, hits.length + trends.length + relevantSearchHistory.length - 1));

        } else if (event.key === 'ArrowUp' && selectedResult > 0) {
            event.preventDefault();

            setSelectedResult((prevIndex) => Math.max(prevIndex - 1, -1));

        } else if (event.key === 'Enter') {
            if (selectedResult >= 0) {
                event.preventDefault();
                setQueryChange(false);

                if (selectedResult < relevantSearchHistory.length) {
                    // Handle suggestion selection
                    const selectedHistory = relevantSearchHistory[selectedResult];
                    setQuery(selectedHistory);
                } else {
                    // Handle search history selection
                    const selectedSuggestion = hits[selectedResult - relevantSearchHistory.length];
                    setQuery(selectedSuggestion.search_term);
                }

                setSelectedResult(-1);

            } else if (query.trim() !== '' && queryChange) {
                // Only perform the search if no item is selected
                setQueryChange(false); // Disable search action

                saveToSearchHistory(query);

                setDropdownOpen(false); // Close dropdown on Enter

                //ADD SEARCH FUNCTION HERE
                searchWithAPI(query);
            }
        } else {
            setQueryChange(true);
        }
    };

    // Filter the relevant search history based on the current query
    const relevantSearchHistory = searchHistory.filter((search) =>
        search.toLowerCase().includes(query.toLowerCase())
    );

    const handleResultClick = (result) => {
        setQueryChange(false);
        // Handle the selection of a result
        setSelectedResult(result);
        setQuery(result.search_term); // Update the query with the selected result
        setSelectedResult(-1);
    };

    const handleClearButtonClick = () => {
        setQuery(''); // Clear the search input
    };

    return (
        <div className="SearchContainer" ref={dropdownRef}>
            {loading && <LoadingScreen/>}
            <input
                onFocus={() => setDropdownOpen(true)}
                type="text"
                placeholder="Search..."
                value={query}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                className="SearchInput"
            />
            {query && ( // Render the "Clear" button when there's text in the input
                <button className="clear-button" onClick={handleClearButtonClick}>
                    X
                </button>
            )}
            <button onClick={searchInput} className="SearchButton">
                <FiSearch />
            </button>
            {isDropdownOpen && (
                <ul className="SearchHistory"> {relevantSearchHistory.map((search, index) => (
                    <li key={index} className={`HistoryList ${index === selectedResult ? 'selected' : ''}`} 
                        onClick={() => setQuery(search)}> <HistoryOutlinedIcon /> {String(search)}
                        <button onClick={(e) => {
                            e.stopPropagation(); //ensures that the click event from the li above is stopped at this button
                            deleteSearch(index);
                        }}>X</button>
                    </li>
                ))}
                </ul>
            )}
            {isDropdownOpen && (
                <ul className="SearchSuggestions">
                    {hits.map((hit, index) => (
                        <li key={hit.objectID} className={index === selectedResult - relevantSearchHistory.length ? 'selected' : ''} onClick={() => handleResultClick(hit)}>
                            {hit.search_term}
                        </li>
                    ))}
                </ul>
            )}
            {isDropdownOpen && (
                <ul className="SearchSuggestions">
                    {Array.isArray(trends) && trends.map((result, index) => (
                        <li key={result.objectID} className={index === selectedResult - relevantSearchHistory.length ? 'selected' : ''} onClick={() => handleResultClick(result)}>
                            <TrendingUpIcon /> {result.search_term}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBar;