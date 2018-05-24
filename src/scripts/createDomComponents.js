const $ = require("jquery");
const APIManager = require("./api/APIManager");

const container = $("#politician-container");

const createDomComponents = function(){
    APIManager.getCollection("politicians").then(politicians => {
        politicians.forEach(politician => {
            container.append(`<div style="border: 1px solid black" id=politician_${politician.id}><h1>${politician.name}</h1></div>`)
            $(`#politician_${politician.id}`).append(`<ul id="bills_${politician.id}">Bills sponsored by this politician: </ul>`)
            $(`#politician_${politician.id}`).append(`<ul id="pacs_${politician.id}">Pacs Associated with this politician: </ul>`)
        })
    })
}

module.exports = createDomComponents;