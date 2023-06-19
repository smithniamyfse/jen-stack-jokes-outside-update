console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');
    
    //TODO getJokes()

    // Event listener for the add joke button
    $('#addJokeButton').on('click', addJoke);

}

function addJoke() {
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

}
