// global fetch below will make fetch error go away
/* global fetch */

const response = ['apple', 'banana', 'orange'];

// Click handler
function handleClick() {
    console.log('button is clicked');
    makeAPIcall();
}

function makeAPIcall() {

    const input = document.getElementById('input').value;
    console.log(input);
    const url = `https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&search=${input}&limit=10&namespace=0&format=json`

    fetch(url)
        .then(function(response) {
            return response.json()
        })
        .then(function(response) {
            console.log(response);
            // response[1] is displaying the Titles
            displayResults(response[1], response[3]);
        });
}

// this function displays results(a array) on the page as a list
function displayResults(titles, links) {

    // titles.map goes through each element in the array
    
    const newResponse = titles.map(function(item, index) {
        console.log(item);
        return '<li>' + '<a href=' + links[index] + '>' + item + '</a>' + '</li>'
    });
    const joinedResponse = newResponse.join('');
    console.log(joinedResponse);

    document.getElementById('results').innerHTML = joinedResponse;
}


// display title, snippit of the code, and the page link
