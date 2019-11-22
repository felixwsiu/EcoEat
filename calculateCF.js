// Import this function by:
//   var calculateCarbonFoodprint = require("./calculateCF.js");

// Sample Data 
var data = {
    ingredients: [
        {
            name: "lamb",
            amount: {
                metric: {
                    value: 10.1,
                    unit: "gram",
                },
            },
        },
        {
            name: "cheese",
            amount: {
                metric: {
                    value: 15,
                    unit: "gram",
                },
            }
        },
        {

            name: "fruit",
            amount: {
                metric: {
                    value: 10,
                    unit: "gram",
                },
            }
        }]
};

// calculate Carbon footprint from the food ingredients
exports.calculateCFFromIngredients = function (ingredients) {
    "use strict";

    //TODO: Read the data from the parsed JSON
    const GHGConstants = {
        lamb: 39.2,
        chicken: 6.9,
        beef: 27.0,
        cheese: 13.5,
        pork: 12.1,
        eggs: 4.8,
        potatoes: 2.9,
        rice: 2.7,
        vegetables: 2.0,
        fruit: 1.1,
    };

    const igdToCO2 = function (igd) {
        console.log(igd); // for debug purpose, delete after
        let GHGperG = GHGConstants[igd.name.toLowerCase()];
        if (GHGperG) {
            return GHGperG * igd.amount.metric.value;
        } else {
            console.log("We don't have the GHG data for this ingredient...");
            return 10; // FIXME: find the avg value
        }
    };

    const igdsToCO2 = function (igds) {
        let totalEmission = 0;
        for (var i = 0; i < igds.length; i++) {
            totalEmission += igdToCO2(igds[i]);
        };
        return totalEmission;
    };


    const pineTreeForestCapacity = 2.4;
    const vehicleCO2PerMile = 404;
    // This gives an array of strings of quotes
    const generateQuotes = function (CO2) {
        // "A m^2 of pine tree forest in Finland spends xx days to fully offset this emission."
        let pineTree = "A square meter of pine tree forest in Finland spends around " + Math.round(CO2/pineTreeForestCapacity) + " days to fully offset this emission."
        // "An average passenger vehicle emits about 404 grams of CO2 per mile"
        let vehicle = "It produces the same amount of emission as a car driving " + Math.round(CO2/vehicleCO2PerMile) + " miles."
        return [pineTree, vehicle];
    };

    let CO2 = igdsToCO2(data.ingredients);
    let quotes = generateQuotes(CO2);
    let response = {CO2: CO2, quotes:quotes};
    console.log("Carbon Emission: " + response.CO2);
    console.log("Quote 1: " + response.quotes[0]);
    console.log("Quote 1: " + response.quotes[1]);
    return response;
}


// this.calculateCFFromIngredients(data);

// Reference:
// https://www.globe.gov/explore-science/scientists-blog/archived-posts/sciblog/2008/08/11/release-of-carbon-dioxide-by-individual-humans/comment-page-1/index.html
// 