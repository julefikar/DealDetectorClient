import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import algoliasearch from 'algoliasearch/lite';

const searchClient = algoliasearch('QGXKTHTJGY', '8cd7adea0720a2f9af20cd6ac20f5203');
const index = searchClient.initIndex('ecommerce');

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [hits, setHits] = useState([]);

    const handleInputChange = async (event) => {
        const userInput = event.target.value;
        setQuery(userInput);

        if (userInput) {
            const { hits } = await index.search(userInput);
            setHits(hits);
        } else {
            setHits([]);
        }
    };

    return (
        <SearchContainer>
            <SearchInput 
                type="text"
                placeholder="Search..."
                value={query}
                onChange={handleInputChange} 
            />
            <SearchButton>
                <FiSearch />
            </SearchButton>
            <SearchSuggestions>
                {hits.map((hit) => (
                    <li key={hit.objectID}>{hit.name}</li>
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
    max-height: 150px;
    overflow-y: auto;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;
