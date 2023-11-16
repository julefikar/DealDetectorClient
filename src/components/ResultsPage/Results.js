import React from 'react'
import { useLocation } from 'react-router-dom';

const Results = ()=>{
    const location = useLocation()
    const searchData = location.state ? location.state.searchData : null;

    console.log(searchData)

    if (!searchData) {
        // Handle the case when searchData is not available, e.g., redirect to another page
        // or show an error message.
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