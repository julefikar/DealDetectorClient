import React from 'react'
import { useLocation } from 'react-router-dom';

const Results = ()=>{
    const location = useLocation()
    const searchData = location.state ? location.state.searchData : null;


    if (!searchData) {
        return (
            <div>
                <p>No search data available.</p>
            </div>
        );
    }
    return(
        <div>
            {searchData}
        </div>
    )
}

export default Results