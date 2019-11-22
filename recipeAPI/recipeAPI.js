const request = require('request-promise');
const AuthKey = require('./apiKey.js');

const apiKey = AuthKey.getApiKey();

function fetchFoodIds(incompleteFoodName) {
    const options = {
        url:'https://api.spoonacular.com/recipes/autocomplete?number=100&query=' + incompleteFoodName + '&apiKey=' + apiKey,
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'GET'
    }
    console.log('BEFORE FIRST FETCH FOOD ID');
    return request(options).then(body => {
        console.log('BEFORE FETCHING FOOD ID');
        fetchFoodId(body, incompleteFoodName).then(foodIngredients => {
            console.log('RETURNING FOOD ID');
            return foodIngredients;
        }).catch(error => {
            console.log(error);
            return null;
        });
    }).catch(error => {
        console.log(error);
        return null;
    });
};

function fetchFoodId(foodIds, incompleteFoodName) {
    const foodIdsJSON = JSON.parse(foodIds);
    let found = false;
    for (var foodItem of foodIdsJSON) {
        if (foodItem.title === incompleteFoodName) {
            found = true;
            return fetchFoodIngredients(foodItem.id).then(foodIngredients => {
                return foodIngredients;
            }).catch(error => {
                console.log(error);
                return null;
            });
        }
    }
    if (!found) {
        console.log('did not find exact, returning closest match '+ foodIdsJSON[0].id);
        return fetchFoodIngredients(foodIdsJSON[0].id);
    }
}

function fetchFoodIngredients(foodID) {
    const options = {
        url:'https://api.spoonacular.com/recipes/'+foodID+'/ingredientWidget.json' + '?apiKey=' + apiKey,
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'GET'
    }
    return request(options).then(body => {
        let parsedJSON = [];
        const bodyJSON = JSON.parse(body);
        for (var item of bodyJSON.ingredients) {
            var itemJSON = [];
            itemJSON.push({name: item.name, amount: item.amount.metric});
            parsedJSON.push(itemJSON);
        }
        return bodyJSON.ingredients;
    }).catch(error => {
        console.log(error);
        return null;
    });
}

fetchFoodIds('spaghetti');





