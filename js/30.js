// Fetch API - Async and Await

const url = 'https://jsonplaceholder.typicode.com/comments';

const consultarAPI = async () => {
    const response = await fetch(url)
    const data = await response.json()
}
consultarAPI()