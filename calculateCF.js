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
                    unit: gram,
                },
            },
        },
        {
            name: "cheese",
            amount: {
                metric: {
                    value: 15,
                    unit: gram,
                },
            }
        },
        {

            name: "fruit",
            amount: {
                metric: {
                    value: 10,
                    unit: gram,
                },
            }
        }]
};

exports.calculateCarbonFoodprint = function (ingredients) {
    "use strict";

    //TODO: Read the data from the parsed JSON
    const GHGConstants = {
        lamb: 39.2,
        chicken: 27.0,
        cheese: 13.5,
        pork: 12.1,
        eggs: 4.8,
        potatoes: 2.9,
        rice: 2.7,
        vegetables: 2.0,
        fruit: 1.1,
    };

    const igdToCo2 = function (igd) {
        console.log(igd); // for debug purpose, delete after
        let GHGperG = GHGConstants[igd.name.toLowerCase()];
        if (GHGperG) {
            return GHGperG * igd.amount.metric.value;
        } else {
            console.log("We don't have the GHG data for this ingredient...");
            return 0;
        }
    };

    const igdsToCo2 = function (igds) {
        let totalEmission = 0;
        for (var i = 0; i < igds.length; i++) {
            totalEmission += igdToCo2(igds[i]);
        };
        return totalEmission;
    };
    return igdsToCo2(data.ingredients);
}

// console.log(this.calculateCarbonFoodprint(data.ingredients));
