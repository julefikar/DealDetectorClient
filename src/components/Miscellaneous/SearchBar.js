import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import algoliasearch from 'algoliasearch/lite';

const searchClient = algoliasearch('QGXKTHTJGY', '8cd7adea0720a2f9af20cd6ac20f5203');
const index = searchClient.initIndex('searchterms');

const SearchBar = () => {

    const [query, setQuery] = useState('');
    const [hits, setHits] = useState([]);
    const [selectedResult, setSelectedResult] = useState(-1);

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

    const handleKeyDown = (event) => {
        if (event.key === 'ArrowDown' && selectedResult < hits.length - 1) {
            setSelectedResult(selectedResult + 1);
        } else if (event.key === 'ArrowUp' && selectedResult > 0) {
            setSelectedResult(selectedResult - 1);
        } else if (event.key === 'Enter' && selectedResult >= 0) {
            // Handle selection and perform an action (e.g., navigate to a page)
            const selectedSuggestion = hits[selectedResult];
            setQuery(selectedSuggestion.search_term);
            setSelectedResult(-1);
            //console.log('Selected:', selectedSuggestion);
        }
    };

    const handleResultClick = (result) => {
        // Handle the selection of a result
        setSelectedResult(result);
        setQuery(result.search_term); // Update the query with the selected result
        setSelectedResult(-1);
    };

    return (
        <SearchContainer>
            <SearchInput
                type="text"
                placeholder="Search..."
                value={query}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
            />
            <SearchButton>
                <FiSearch />
            </SearchButton>
            <SearchSuggestions>
                {hits.map((hit, index) => (
                    <li key={hit.objectID} className={index === selectedResult ? 'selected' : ''} onClick={() => handleResultClick(hit)}>{hit.search_term}</li>
                ))}
            </SearchSuggestions>
        </SearchContainer>
    );
};

export default SearchBar;


const SearchContainer = styled.div`
    display: inline-block;
    align-items: center;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 50px; /* Make the container borders round */
    padding: 8px;
    width: 100%;
    max-width: 600px;
    height: 30px;
`;

const SearchInput = styled.input`
    border: none;
    outline: none;
    padding: 8px;
    text-align: center;
    vertical-align: middle;
    border-radius: 50px; /* Make the input borders round */
    width: 90%;
`;

const SearchButton = styled.button`
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 8px;
    align-items: center;
    justify-content: center;
`;

const SearchSuggestions = styled.ul`
    display: block;
    list-style-type: none;
    padding: 0;
    margin: 0;
    position: relative;
    width: 100%;
    background-color: #fff;
    border: 1px solid #ccc;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

    li {
        padding: 8px;
        cursor: pointer;
    }

    li:hover {
        background-color: #f1f1f1;
    }

    .selected {
        background-color: #f1f1f1;
    }
`;
