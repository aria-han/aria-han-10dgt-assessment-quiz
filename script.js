function displayWrong(element) {
    element.classList.remove("right_answer");
    element.classList.add("wrong_answer");
}

function displayRight(element) {
    element.classList.add("right_answer");
    element.classList.remove("wrong_answer");
}

// Runs when user checks answers
function checkAnswer() {
    try {
        // Get username
        username = document.getElementById("askname").value;

        // Check for username
        console.log(username);

        // Get Question 1 score
        q1score = parseInt(document.querySelector('input[name="question1"]:checked')?.value) || 0;

        // Get Question 2 score
        q2score = parseInt(document.querySelector('input[name="question2"]:checked')?.value) || 0;

        // Get Question 3 score
        q3score = parseInt(document.querySelector('input[name="question3"]:checked')?.value) || 0;

        // Get Question 4 score
        q4score = parseInt(document.querySelector('input[name="question4"]:checked')?.value) || 0;


        // Question 5 score point allocation
        var checked_reasons = document.querySelectorAll(".question5:checked");
        var reasons = [];
        var q5score = 0;
        checked_reasons.forEach(function (element) {
            reasons.push(element.name);
        });
        if (reasons.includes("budget")) {
            q5score = q5score + 0.5;
        }
        if (reasons.includes("unease")) {
            q5score = q5score + 0.5;
        }
        if (reasons.includes("honour")) {
            q5score = 0;
        } else if (reasons.includes("please")) {
            q5score = 0;
        }

        // Used for debugging
        console.log(reasons);

        // Calculate Question 6 score
        var q6answer = Number(document.getElementById("question6").value);
        var q6score = 0;
        if (q6answer === 12) {
            q6score = 1;
        } else {
            q6score = 0;
        }

        // Calculate Question 7 score
        var q7answer = Number(document.getElementById("question7").value);
        var q7score = 0;
        if (q7answer === 1816) {
            q7score = 1;
        } else {
            q7score = 0;
        }

        // Calculate total score
        var totalScore = q1score + q2score + q3score + q4score + q5score + q6score + q7score

        // Checking score for each question for debugging
        console.log(totalScore);
        console.log(q1score);
        console.log(q2score);
        console.log(q3score);
        console.log(q4score);
        console.log(q5score);
        console.log(q6score);
        console.log(q7score);

        // Providing commentary for different scores
        if (totalScore === 0) {
            document.getElementById("result").value = `Your score is 0. Good effort ${username}! It seems that you still have a lot to learn. Try again later!`
        } else if (totalScore >= 0.5 && totalScore <= 3) {
            document.getElementById("result").value = `Your score is ${totalScore}. Nice try, ${username}. You're on the right track!`
        } else if (totalScore >= 3.5 && totalScore <= 6) {
            document.getElementById("result").value = `Your score is ${totalScore}. Good job, ${username}! You know a lot about digital art.`
        } else if (totalScore == 6.5) {
            document.getElementById("result").value = `Your score is 6.5. Well done, ${username}. You're so close to 100%!`
        } else if (totalScore == 7) {
            document.getElementById("result").value = `Perfect score!!! Congratulations, ${username}—you got 100% on this quiz. Have you considered becoming a teacher?`
        }

        // Function that adds red border to incomplete/unanswered questions and green border to correct answers
        if (q1score != 1) {
            displayWrong(document.getElementById("q1"));
        } else {
            displayRight(document.getElementById("q1"));
        }

        if (q2score != 1) {
            displayWrong(document.getElementById("q2"));
        } else {
            displayRight(document.getElementById("q2"));
        }

        if (q3score != 1) {
            displayWrong(document.getElementById("q3"));
        } else {
            displayRight(document.getElementById("q3"));
        }

        if (q4score != 1) {
            displayWrong(document.getElementById("q4"));
        } else {
            displayRight(document.getElementById("q4"));
        }

        if (q5score != 1) {
            displayWrong(document.getElementById("q5"));
        } else {
            displayRight(document.getElementById("q5"));
        }

        if (q6score != 1) {
            displayWrong(document.getElementById("q6"));
        } else {
            displayRight(document.getElementById("q6"));
        }

        if (q7score != 1) {
            displayWrong(document.getElementById("q7"));
        } else {
            displayRight(document.getElementById("q7"));
        }

        if (username == "") {
            displayWrong(document.getElementById("ask_name"));
            document.getElementById("result").value = "Please enter a name!";
        } else {
            displayRight(document.getElementById("ask_name"));
        }

        // Checking errors for debugging
    } catch (e) {
        console.error(e);
    }
}