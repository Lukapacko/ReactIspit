export function fetchData(url, setData, setError){
    return fetch(url)
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => setError(error.toString()));
}