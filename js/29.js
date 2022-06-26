// Fetch API

const url = 'https://jsonplaceholder.typicode.com/users';

const consultarAPI = () => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            data.forEach(user => {
                console.log(user.name);
            })
        });
}

consultarAPI()