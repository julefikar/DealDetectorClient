import React, { useState, useEffect } from 'react';
import { FiSearch } from "react-icons/fi";
import algoliasearch from 'algoliasearch/lite';

import Axios from 'axios';

const searchClient = algoliasearch('QGXKTHTJGY', '8cd7adea0720a2f9af20cd6ac20f5203');
const index = searchClient.initIndex('searchterms');

const SearchBar = () => {

    const [query, setQuery] = useState('');
    const [hits, setHits] = useState([]);
    const [selectedResult, setSelectedResult] = useState(-1);
    const [searchHistory, setSearchHistory] = useState([]);

    // Load search history from local storage on component mount
    useEffect(() => {
        const savedHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
        setSearchHistory(savedHistory);
    }, []);

    useEffect(() => {
        if (query.trim() === '') {
            setHits([]);
            return;
        }

        async function fetchSuggestions() {
            const { hits } = await index.search(query, {
                hitsPerPage: 10, //limit 10 suggestions per query
            });
            setHits(hits);
        }

        fetchSuggestions();
    }, [query]);

    const handleInputChange = async (event) => {
        const userInput = event.target.value;
        setQuery(userInput);
        setSelectedResult(-1);
    };

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

    const handleKeyDown = (event) => {
        if (event.key === 'ArrowDown' && selectedResult < hits.length - 1) {
            setSelectedResult(selectedResult + 1);
        } else if (event.key === 'ArrowUp' && selectedResult > 0) {
            setSelectedResult(selectedResult - 1);
        } else if (event.key === 'Enter') {
            if (selectedResult >= 0) {
                // Handle selection and perform an action (e.g., navigate to a page)
                const selectedSuggestion = hits[selectedResult];
                setQuery(selectedSuggestion.search_term);
                setSelectedResult(-1);
            }
            else {
                //TODO: implement search function to API

                //search result and save to history
                saveToSearchHistory(query);
            }
        }
    };

    const handleResultClick = (result) => {
        // Handle the selection of a result
        setSelectedResult(result);
        setQuery(result.search_term); // Update the query with the selected result
        setSelectedResult(-1);
    };

    //search button pressed
    const searchInput = async () => {
        //TODO: implement search function to API
        if (query.trim() !== '') {
        try{
            const response = await Axios.post('http://127.0.0.1:5000/get_price_data', {
                searchQuery: query, 
            });

            console.log(response.data)
        }
        catch (error){
            console.log(error)
        }
        
            saveToSearchHistory(query);
        }
    };

    return (
        <div className="relative bg-white shadow-sm rounded-full flex items-center pl-3 pr-2 w-80">  {/* Adjusted width and padding */}
            <FiSearch className="text-gray-400" />
            <input 
                type="text"
                placeholder="Search..."
                value={query}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                className="flex-grow bg-transparent outline-none ml-2 text-sm" 
            />
            <button onClick={searchInput} className="bg-blue-500 text-white rounded-full p-1 hover:bg-blue-600 transition">  {/* Adjusted padding */}
                <FiSearch />
            </button>
            <ul className="absolute left-0 mt-10 w-80 bg-white border border-gray-300 divide-y divide-gray-200 rounded shadow-lg z-10">  {/* Adjusted width */}
                {searchHistory.map((search, index) => (
                    <li key={index} className="p-2 cursor-pointer flex justify-between" onClick={() => setQuery(search)}>
                        {String(search)} 
                        <button onClick={() => deleteSearch(index)} className="text-red-500 hover:text-red-600">X</button>
                    </li>
                ))}
            </ul>
            <ul className="absolute left-0 mt-10 w-80 bg-white border border-gray-300 divide-y divide-gray-200 rounded shadow-lg z-10">  {/* Adjusted width */}
                {hits.map((hit, index) => (
                    <li key={hit.objectID} className={`p-2 cursor-pointer ${index === selectedResult ? 'bg-gray-200' : ''}`} onClick={() => handleResultClick(hit)}>
                        {hit.search_term}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchBar;