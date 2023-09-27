import React from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
    return (
        <SearchContainer>
            <SearchInput placeholder="Search for product or category" />
            <SearchButton>
                <FiSearch />
            </SearchButton>
        </SearchContainer>
    );
};

export default SearchBar;

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 50px; /* Make the container borders round */
    padding: 8px;
    width: 100%;
    max-width: 600px;
`;

const SearchInput = styled.input`
    border: none;
    outline: none;
    flex: 1;
    padding: 8px;
    text-align: center;
    vertical-align: middle;
    border-radius: 50px; /* Make the input borders round */
`;

const SearchButton = styled.button`
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
