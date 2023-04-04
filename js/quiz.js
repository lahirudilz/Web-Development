//Creating an array and passing the number, question, options, and answers
let questions = [{
    number: 1, question: "What is the highest mountain peak in Sri Lanka?",
    answer: "Pidurutalagala",
    options: [
        "Adam's Peak",
        "Pidurutalagala",
        "Horton Plains",
        "Knuckles Mountain Range"]
},
{
    number: 2,
    question: "Which city is known as the cultural capital of Sri Lanka?",
    answer: "Kandy",
    options: [
        "Colombo",
        "Galle",
        "Anuradhapura",
        "Kandy"
    ]
},
{
    number: 3,
    question: "What is the name of the ancient rock fortress located in the northern Matale District of the Central Province?",
    answer: "Sigiriya",
    options: [
        "Polonnaruwa",
        "Dambulla",
        "Anuradhapura",
        "Sigiriya"
    ]
},
{
    number: 4,
    question: "Which of the following is not a UNESCO World Heritage Site in Sri Lanka?",
    answer: "Lipton's Seat",
    options: [
        "Ancient City of Polonnaruwa",
        "Sacred City of Anuradhapura",
        "Old Town of Galle and its Fortifications",
        "Lipton's Seat"
    ]
},
{
    number: 5,
    question: "What is the name of the beach town located in the south coast of Sri Lanka, known for its surfing spots?",
    answer: "Mirissa",
    options: [
        "Hikkaduwa",
        "Unawatuna",
        "Bentota",
        "Mirissa"
    ]
},
{
    number: 6,
    question: "Which of the following is a famous national park in Sri Lanka, known for its elephant population?",
    answer: "Minneriya National Park",
    options: [
        "Wilpattu National Park",
        "Yala National Park",
        "Udawalawe National Park",
        "Minneriya National Park"
    ]
},
{
    number: 7,
    question: "What is the name of the historical port city located in the Northern Province of Sri Lanka?",
    answer: "Jaffna",
    options: [
        "Trincomalee",
        "Galle",
        "Batticaloa",
        "Jaffna"
    ]
},
{
    number: 8,
    question: "Which of the following is a famous hill station in Sri Lanka, known for its tea plantations?",
    answer: "Nuwara Eliya",
    options: [
        "Ella",
        "Kandy",
        "Horton Plains",
        "Nuwara Eliya"
    ]
},
{
    number: 9,
    question: "What is the name of the largest river in Sri Lanka?",
    answer: "Mahaweli River",
    options: [
        "Kelani River",
        "Kalu River",
        "Gin River",
        "Mahaweli River"
    ]
},
{
    number: 10,
    question: "Which of the following is a famous temple complex located in the eastern coast of Sri Lanka?",
    answer: "Koneswaram Temple",
    options: [
        "Temple of the Tooth",
        "Lankatilaka Temple",
        "Mihintale",
        "Koneswaram Temple"
    ]
}]

//setting all required elements
const quiz_start_button = document.querySelector(".quiz_start_button button");
const rule_box = document.querySelector(".rule_box");
const quiz_box = document.querySelector(".quiz_box");
const timeLine = quiz_box.querySelector(".timer .time_line");
const timeCount = quiz_box.querySelector(".timer .time_seconds");
const exit_button = rule_box.querySelector(".button .exit_button");
const continue_button = rule_box.querySelector(".button .continue_button");

const answers_text = document.querySelector(".answers_text");

const next_quiz_button = quiz_box.querySelector(".next_quiz_button");
const result_box = document.querySelector(".result_box");
const reattempt_button = result_box.querySelector(".button .reattempt_button");
const quit_button = result_box.querySelector(".button .quit_button");



//If start Quiz Button Clicked
quiz_start_button.onclick = () => {
    rule_box.classList.add("showRuleBox"); //show the info box
}

//If Exit Button Clicked
exit_button.onclick = () => {
    rule_box.classList.remove("showRuleBox"); // hide the info box
}

//If Continue Button Clicked
continue_button.onclick = () => {
    rule_box.classList.remove("showRuleBox"); // hide the info box
    quiz_box.classList.add("showQuizBox"); // Show the Quiz box
    showQuestions(0);
    showQuestionNumber(0);
    startTimer(60);
}

//If Reattempt button clicked
reattempt_button.onclick = () => {
    result_box.classList.remove("activeResult");
    rule_box.classList.add("showRuleBox");
    elapsedTime = 0;
    showQuestions(0);
    showQuestionNumber(0);
    


    counter;
    question_counter = 0;
    question_number = 1;
    timeValue = 60;
    marks = 0;

    clearInterval(counter);
}

//If Quit button clicked
quit_button.onclick = () => {
    result_box.classList.remove("ActiveResult");
    window.location.href = "/index.html";
}

var question_counter = 0;
var question_number = 1;
var counter;
var timeValue = 60;
var marks = 0;

//Show the quiz number

function showQuestionNumber(index) {

    var q_num = document.getElementById("question_counter");
    q_num.innerHTML = questions[index].number + " / 10";


}


//If next button clicked
next_quiz_button.onclick = () => {

    if (question_counter < questions.length - 1) {
        question_counter++;
        question_number++;
        showQuestions(question_counter);
        showQuestionNumber(question_counter);
        clearInterval(counter);
        startTimer(timeValue);
    } else {
        console.log("Questions Completed");
        showResultBox();
    }

}
//getting questions and options from array
function showQuestions(index) {

    const question_txt = document.querySelector(".question_txt");
    let question_tag = '<span>' + questions[index].question + '</span>';
    let option_tag = '<div class="option">' + questions[index].options[0] + '<span></span></div>'
        + '<div class="option">' + questions[index].options[1] + '<span></span></div>'
        + '<div class="option">' + questions[index].options[2] + '<span></span></div>'
        + '<div class="option">' + questions[index].options[3] + '<span></span></div>';
    question_txt.innerHTML = question_tag;
    answers_text.innerHTML = option_tag;
    const option = answers_text.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionselected(this)");
    }
}

let rightSign = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let wrongSign = '<div class="icon cross"><i class="fas fa-times"></i></div>';

function optionselected(answer) {
    clearInterval(counter);
    let userAns = answer.textContent;
    let correctOption = questions[question_counter].answer;
    let alloption = answers_text.children.length;
    if (userAns == correctOption) {
        marks += 10;
        console.log(marks);
        answer.classList.add("correct");
        console.log("Answer is correct");
        answer.insertAdjacentHTML("beforeend", rightSign);
    } else {
        answer.classList.add("incorrect");
        answer.insertAdjacentHTML("beforeend", wrongSign);

        //if answers is incorrect then automatically selected the correct answer
        for (let i = 0; i < alloption; i++) {
            if (answers_text.children[i].textContent == correctOption) {
                answers_text.children[i].setAttribute("class", "option correct");
                answers_text.children[i].insertAdjacentHTML("beforeend", rightSign);
            }
        }
    }
    for (let i = 0; i < alloption; i++) {
        answers_text.children[i].classList.add("disabled");
    }
}

function showResultBox() {
    
    rule_box.classList.remove("showRuleBox");
    quiz_box.classList.remove("showQuizBox");
    result_box.classList.add("activeResult");

    const scoreText = result_box.querySelector(".score_text");
    const elapsed_time = result_box.querySelector(".elapsedTime");
    elapsed_time.innerHTML = '<span><br> You have taken ' + elapsedTime + ' seconds</span>';
    if (marks > 70) {
        let scoreTag = '<span>Congratulations!, <p>' + marks + '</p> out of <p>100</p></span>';
        scoreText.innerHTML = scoreTag;
        scoreText.style.color = "green";
    }
    else if (marks > 30) {
        let scoreTag = '<span>Nice, <p>' + marks + '</p> out of <p> 100 </p></span>';
        scoreText.innerHTML = scoreTag;
        scoreText.style.color = "blue";
    }
    else {
        let scoreTag = '<span>Sorry, <p>' + marks + '</p> out of <p> 100 </p></span>';
        scoreText.innerHTML = scoreTag;
        scoreText.style.color = "red";
    }
}
var elapsedTime = 0;
function startTimer(time) {
    counter = setInterval(timer, 1000);

    function timer() {



        timeCount.textContent = time;
        time--;

        elapsedTime++;
        
        if (time < 0) {
            clearInterval(counter);

            if (question_counter < questions.length - 1) {
                question_counter++;
                question_number++;
                showQuestions(question_counter);
                showQuestionNumber(question_counter);

                clearInterval(counter);
                startTimer(timeValue);
            } else {
                console.log("Questions Completed");
                showResultBox();
            }
        }
    }
}