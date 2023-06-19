console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');
    
    getJokes()

    // Event listener for the add joke button
    $('#addJokeButton').on('click', addJokes);

}




function addJokes() {
    console.log('in addJoke()');
    let whoseJokeIn = $('#whoseJokeIn').val();
    let questionIn = $('#questionIn').val();
    let punchlineIn = $('#punchlineIn').val();

    let addJokeData = {
        whoseJokeIn: whoseJokeIn,
        questionIn: questionIn,
        punchlineIn: punchlineIn
    }

console.log(`${JSON.stringify(addJokeData)}`);

    // AJAX POST Method: Sends data to the server 
    $.ajax({
        method: 'POST',
        url: '/addJokes',
        data: addJokesData
    }).then(function(response) {

       
        getJokes(response);

        // displayJokes();

        // Will display error alert window if issue with code
    }).catch(function(error) {
        alert('❌ Error sending joke', error);
    })

}




function getJokes() {
    console.log('in getJokes()');
        // AJAX GET Method: Requests data. This can be tested in the browser.
        $.ajax({
            method: 'GET',
            url: '/jokes'
    
        }).then(function(response) {
            console.log('getJokes', response);
            displayJokes(response);
    
        }).catch(function(error) {
            alert('❌ Error in retrieving list of jokes.', error);
        });

}

function displayJokes(jokes) {
    console.log('in displayJokes()');

    $('#outputDiv').empty();

    for(let joke of jokes) {

        $('#outputDiv').append(`
            <div>${joke.whoseJokeIn}</div>
            <div>${joke.questionIn}</div>
            <div>${joke.punchlineIn}</div>
        `)

    }

}