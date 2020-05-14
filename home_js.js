// JavaScript File
/*global$*/

document.addEventListener("DOMContentLoaded", function() {
    loadCovid19Data1("https://api.covid19api.com/country/romania/status/confirmed");
    loadCovid19Data2("https://api.apify.com/v2/datasets/n1XtXTelVG5dJhDhy/items?format=json&clean=1");
});

function loadCovid19Data1(url) {
    function manipulateDom(response) {
        for(const row of response) {
            insertTrToApi1Table(row);
        }
    }
    
    getDataFromRequest(url, manipulateDom);
}

function loadCovid19Data2(url) {
    function manipulateDom(response) {
        for(const row of response) {
            insertTrToApi2Table(row);
        }
    }
    
    getDataFromRequest(url, manipulateDom);
}

function getDataFromRequest(url, callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            callback(JSON.parse(xhttp.response));
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function insertTrToApi1Table(rowData) {
    const tbody = document.querySelector('#api1_table .api_body');
    let tr = document.createElement('div');
    tr.classList.add('api_row');
    let parsedDate =  new Date(rowData.Date);
    const ye = new Intl.DateTimeFormat('ro', { year: 'numeric' }).format(parsedDate);
    const mo = new Intl.DateTimeFormat('ro', { month: 'short' }).format(parsedDate);
    const da = new Intl.DateTimeFormat('ro', { day: '2-digit' }).format(parsedDate);
    const formattedDate = da + ' ' + mo + ' ' + ye;
    
    tr.innerHTML = `
        <div>${rowData.CountryCode}</div>
        <div>${formattedDate}</div>
        <div>${rowData.Cases}</div>
        <div>${rowData.Status}</div>
    `;
    tbody.append(tr);
}
function insertTrToApi2Table(rowData) {
   // console.log(rowData);
    const tbody = document.querySelector('#api2_table .api_body');
    let tr = document.createElement('div');
    tr.classList.add('api_row');
    let parsedDate =  new Date(rowData.lastUpdatedAtSource);
    const ye = new Intl.DateTimeFormat('ro', { year: 'numeric' }).format(parsedDate);
    const mo = new Intl.DateTimeFormat('ro', { month: 'short' }).format(parsedDate);
    const da = new Intl.DateTimeFormat('ro', { day: '2-digit' }).format(parsedDate);
    const formattedDate = da + ' ' + mo + ' ' + ye;
    
    tr.innerHTML = `
        <div>${formattedDate}</div>
        <div>${rowData.tested}</div>
        <div>${rowData.recovered}</div>
        <div>${rowData.deceased}</div>
        <a href="${rowData.sourceUrl}">LINK</a>
    `;
    tbody.append(tr);
}
