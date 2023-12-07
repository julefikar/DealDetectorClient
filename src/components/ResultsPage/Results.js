import React from 'react'
import Products from './Products';
import { useLocation } from 'react-router-dom';

const Results = ()=>{
    const location = useLocation()
    const searchData = location.state ? JSON.parse(location.state.searchData) : null;


    if (!searchData) {
        return (
            <div>
                <p>No search data available.</p>
            </div>
        );
    }
    return(
        <div>
            <Products data={searchData}/>
        </div>
    )
}

export default Results