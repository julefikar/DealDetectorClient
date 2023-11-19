// analytics.js
export function recordSearchQuery(query) {
    // Retrieve existing data from local storage or initialize an empty array
    const searchData = JSON.parse(localStorage.getItem('searchData')) || [];

    // Find the existing entry for the query, if it exists
    const existingEntry = searchData.find((entry) => entry.query === query);

    if (existingEntry) {
        // If the query already exists, increment the count
        existingEntry.count += 1;
    } else {
        // If the query is new, add it to the array
        searchData.push({ query, count: 1 });
    }

    // Save the updated data back to local storage
    localStorage.setItem('searchData', JSON.stringify(searchData));
}