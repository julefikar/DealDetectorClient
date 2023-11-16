// sendToAlgolia.js
import axios from 'axios';

export async function sendSearchAnalytics() {
    // Retrieve data from local storage
    const searchData = JSON.parse(localStorage.getItem('searchData')) || [];

    // Sort the search data by count in descending order
    const sortedData = searchData.sort((a, b) => b.count - a.count);

    // Take the top N most popular terms (adjust the number as needed)
    const topTerms = sortedData.slice(0, 10);

    // Extract the terms from the top search queries
    const terms = topTerms.map((entry) => entry.query);
    const count_ = topTerms.map((entry) => entry.count);

    try {
        const response = await axios.post('http://127.0.0.1:5000/addPopularTerms', {
            terms: terms,
            count: count_,
        });
    } catch (error) {
        console.error('Error:', error.message);
    }

    //implement option to clear cache
    //localStorage.removeItem('searchData');
}