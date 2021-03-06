const $ = require("jquery");
const APIManager = require("./api/APIManager");
const getPromises = require("./api/getPromises")

const fillDomComponents = function() {
    getPromises("sponsoredBills","bill")
    .then(sponsoredBills => {
        sponsoredBills.forEach(billArray => {
            billArray.forEach(bill => {
                $(`#bills_${bill.politicianId}`).append(`<li>${bill.bill.name}</li>`)
            })
        })
    })
    getPromises("pacDonations","pac")
    .then(pacDonations => {
        pacDonations.forEach(pacArray => {
            pacArray.forEach(pac => {
                $(`#pacs_${pac.politicianId}`).append(`<li>${pac.pac.name}</li>`)
                $(`#pacs_${pac.politicianId}`).append(`<ul id="corps_${pac.pacId}">Corps Associated with ${pac.pac.name}: </ul>`)
                APIManager.getCorpsByPac(pac.pacId)
                .then(corpDonations => {
                    corpDonations.forEach(corp => {
                            $(`#corps_${pac.pacId}`).append(`<li>${corp.corp.name}</li>`)
                        })
                    })
            })
        })
    })
};

module.exports = fillDomComponents;