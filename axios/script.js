/*gloabl axios*/
// const axios = require('axios');

// Click handler
function handleClick() {
    console.log('button is clicked');
    makeAPIcall();
}

function makeAPIcall() {

    const input = document.getElementById('input').value;
    const url = `https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&search=${input}&limit=10&namespace=0&format=json`;

    axios.get(url)
        .then(function(response) {
            displayResults(response.data[1], response.data[2], response.data[3]);
        })
        .catch(function(error) {
            console.log(error);
        });

    // fetch(url)
    //     .then(function(response) {
    //         return response.json()
    //     })
    //     .then(function(response) {
    //         console.log(response);
    //         // response[1] is displaying the Titles
    //         displayResults(response[1], response[3]);
    //     });
}

// this function displays results(a array) on the page as a list
function displayResults(titles, links, description) {

    // titles.map goes through each element in the array

    const newResponse = titles.map(function(item, index) {
        console.log(description);
        // return '<li>' + '<a href=' + links[index] + '>' + item + '</a>' + '</li>'
        return `<li><a href=${links[index]}>${item}</a><br>${description}</li>`;
    });
    
    const joinedResponse = newResponse.join('');
    console.log(joinedResponse);

    document.getElementById('results').innerHTML = joinedResponse;
}


// display title, snippit of the code, and the page link
