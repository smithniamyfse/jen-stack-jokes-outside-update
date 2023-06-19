const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );
const PORT = 5000;

app.use(express.static('server/public'));

// use bodyParser.urlencoded throughout the app with this:
app.use(bodyParser.urlencoded({ extended: true }));

let jokes = [
  {
    whoseJoke: "Danny",
    jokeQuestion: "Why do scuba divers fall backwards out of boats?",
    punchLine: "If they fell forwards they’d still be in the boat!"
  },
  {
    whoseJoke: "Luke",
    jokeQuestion: "Two fish are in a tank. What did one fish say to the other?",
    punchLine: "Do you know how to drive this thing?"
  },
  {
    whoseJoke: "Millie",
    jokeQuestion: "What do you call a pile of cats?",
    punchLine: "A meowntain!"
  },
  {
    whoseJoke: "dEv",
    jokeQuestion: "Why should you not play cards in the forest?",
    punchLine: "Too many Cheetahs!"
  },
  {
    whoseJoke: "Scott",
    jokeQuestion: "I went to the zoo the other day, it had one dog...",
    punchLine: "It was a shih tzu."
  }
];

// * Express Request / Response Body


app.get('/jokes', (req, res) => {

    res.send(jokes);
})



// * EXPRESS POST Request: Adding new data to the server
// POST: save new data to the server
// Route is set up to handle POST requests to the '/calculate' endpoint
app.post('/addJokes', (req, res) => {
    let data = req.body;
    let whoseJokeIn = data.whoseJokeIn;
    let questionIn = data.questionIn;
    let punchlineIn = data.punchlineIn;


    let pushJoke = {
      whoseJokeIn: whoseJokeIn,
      questionIn: questionIn,
      punchlineIn: punchlineIn
    };

    jokes.push(pushJoke);

    // If the post was successful, a status code of 
    // 200, meaning OK, is sent in response. 
    res.sendStatus(200);

});







app.listen(PORT, () => {
  console.log('server running on: ', PORT);
}); // end spin up server
