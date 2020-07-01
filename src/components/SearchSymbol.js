import Router from 'next/router';


export default function redirectSymbol() {
    let symbol = document.getElementById("symbol").valueOf().toString();
    console.log("Symbol Sent: ", symbol);
    let URL = "";

    URL.concat("/symbol/",symbol);
    return Router.push(URL,"/symbol/" + symbol);
}

