const BASE_URL='https://jsonplaceholder.typicode.com'
fetch(`${BASE_URL}/users/1`)
    .then(response =>  console.log(response.json()))
    .then(data =>  console.log(data))
    .catch(error => console.log(error))
