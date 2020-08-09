function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your score: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("What is the Official Language of Pakistan?", ["Urdu", "English","Sindhi", "None"], "English"),
    new Question("Muhammad Ali Jinnah died in which year?", ["1947", "1948", "1949", "1951"], "1948"),
    new Question("Who was the first Prime Minister of Pakistan?", ["Mohammad Ali Bogra", "Ibrahim Ismail","Liaquat Ali Khan", "Khawaja Nazimuddin"], "Liaquat Ali Khan"),
    new Question("When Pakistan National Anthem was approved?", ["1948", "1950", "1952", "1954"], "1954"),
    new Question("The second highest mountain of Pakistan?", ["Gasherbrum-I", "Nanga Parbat", "Kunyang Kish", "Trich Mir"], "Nanga Parbat")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();