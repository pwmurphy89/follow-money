const $ = require("jquery");
const APIManager = require("./APIManager");

const getPromises = function(collection, item){
    return APIManager.getCollection("politicians").then(politicians => {
        const promises = politicians.map(politician => {
            return APIManager.getCollectionByPolitician(politician.id, collection, item)
        })
        return Promise.all(promises);
    })
}

module.exports = getPromises;