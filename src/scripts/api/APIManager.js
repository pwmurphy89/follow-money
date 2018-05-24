const $ = require("jquery");

const APIManager = Object.create(null, {
    getCollection: {
        value: function (collection){
            return $.ajax(`http://localhost:8088/${collection}`);
        }
    },
    getBill: {
        value: function(billID){
            return $.ajax(`http://localhost:8088/bills/${billID}`);
        }
    },
    getCollectionByPolitician: {
        value: function(politicianId, collection, item){
            return $.ajax(`http://localhost:8088/${collection}?politicianId=${politicianId}&_expand=${item}`);
        }
    },
    getCorpsByPac: {
        value: function(pacId){
            return $.ajax(`http://localhost:8088/corpDonations?pacId=${pacId}&_expand=corp`);
        }
    }
})

module.exports = APIManager;