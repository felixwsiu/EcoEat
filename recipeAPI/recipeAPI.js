const request = require('request-promise');
const AuthKey = require('./apiKey.js');

const apiKey = AuthKey.getApiKey();

module.exports = function (incompleteFoodName) {
    const options = {
        url:'https://api.spoonacular.com/recipes/autocomplete?number=100&query=' + incompleteFoodName + '&apiKey=' + apiKey,
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'GET'
    }
    return request(options).then(body => {
        return fetchFoodId(body, incompleteFoodName).then(foodIngredients => {
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
    if (!found && foodIds.JSON) {
        console.log('did not find exact, returning closest match '+ foodIdsJSON[0].id);
        return fetchFoodIngredients(foodIdsJSON[0].id);
    } else {
        console.log('We do not have info on this dish on our database. Sorry!');
        return fetchFoodIngredients(null);
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
        return parsedJSON;
    }).catch(error => {
        console.log(error);
        return null;
    });
}




