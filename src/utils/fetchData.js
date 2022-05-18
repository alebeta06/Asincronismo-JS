let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fetchData = (url_api) => {
   return new Promise((resolve, rejct) => {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true);
    xhttp.onreadystatechange = (() => {
        if (xhttp.readyState === 4) {
          (xhttp.status === 200)
              ? resolve(JSON.parse(xhttp.responseText))
              : rejct(new Error('Error ', url_api))
        }
    });
    xhttp.send();
   });
}

module.exports = fetchData;