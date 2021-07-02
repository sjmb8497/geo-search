const fetch = require('node-fetch')

export const getLocation = async (query) => {
    const response = await fetch(`http://localhost:3000/locations?q=${query}`);
    console.log(response)
    const foo = await response.json();
    console.log('foo', foo)
    return foo;
}