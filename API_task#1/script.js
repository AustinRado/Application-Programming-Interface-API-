const HOST = 'server.com/';

const goElement = document.getElementsByClassName("go")[0];
goElement.onclick = function() {
    const inputElement = document.getElementsByClassName("test")[0];
    api.get(HOST + "menus", {menu: inputElement.value}, displayText);
}
function displayText(response){
    const outputElement = document.getElementsByClassName("output")[0];
    outputElement.innerHTML += (response + "<br>");
}

//server

function getMenus (data){
    switch (data.menu){
        case "a":
            return "I got an A";
        case "b":
        return "I got a B";
        default: 
        return "I got nothing";
    }
}
const endpoints = {
    "/":{
        "get": () => "hello world"
    },
    "/menus":{
        "get": getMenus
    }
}

function getFunction(url, data, callback) {
    const domain = url.substring(0, url.indexOf("/"));
    const endpoint = url.substring(url.indexOf("/"), url.length);

    callback(endpoints[endpoint]["get"](data));
}
const api = {
    get: getFunction
};