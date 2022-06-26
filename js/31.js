// Fetch API - Async and Await (multiple requests)

const url = 'https://jsonplaceholder.typicode.com/comments';
const url2 = 'https://jsonplaceholder.typicode.com/photos';

const consultarAPI = async () => {

    const init = performance.now()
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data)

    // console.log('-----------------------------------------------------')

    const response2 = await fetch(url2)
    const data2 = await response2.json()

    // console.log(data2)

    const end = performance.now()

    console.log(`Exec first Async ${end - init} ms `)
}
consultarAPI();

const consultarAPI2 = async () => {
    const init = performance.now()
    const [response, response2] = await Promise.all([fetch(url), fetch(url2)])
    const data = await response.json()
    const data2 = await response2.json()

    // console.log(data)
    // console.log(data2)
    const end = performance.now()

    console.log(`Exec second Async ${end - init} ms `)
}

consultarAPI2();