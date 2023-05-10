"use strict";

let info = {
    name: "Levi",
    address: "141 Main Street",
    city: "Miami",
    state: "Fl",
    zip: "33145",
};
printContact (info);

function printContact(info) {
    console.log(info.name +", "+ info.address +", "+ info.city + "," +info.state + "," + info.zip);
};