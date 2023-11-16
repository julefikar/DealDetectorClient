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

    try {
        const response = await axios.post('http://127.0.0.1:5000/addPopularTerms', {
            terms: terms,
        });

        const data = response.data;

        console.log(data);

        if (data.success) {
            console.log('Popular terms added to Algolia:', data.objectIDs);
        } else {
            console.error('Failed to add popular terms:', data.error);
        }
    } catch (error) {
        console.error('Error adding popular terms:', error.message);
    }

    //localStorage.removeItem('searchData');
}