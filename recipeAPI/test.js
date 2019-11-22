const recipeAPI = require('./recipeAPI.js');

async function test() {
    const res = await recipeAPI('chicken');
    console.log(res);
}

test();
