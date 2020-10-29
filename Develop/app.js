let todaysDate = document.getElementById('currentDay');

function getApi() {
    var requestUrl = 'https://momentjs.com/';
    
    fetch(requestUrl)
    .then(function (response) {
    return response.json();
    })
    .then(function (data) {
    // Use the console to examine the response
    console.log("hi")
    // TODO: Loop through the data and generate your HTML
    for (let i = 0; i < data.length; i++) {
        console.log("Hi there.")
    //diplayDate.textContent = data[i].login;
    //today.append("Hello Punk");
    }
    });

    moment().format();

}