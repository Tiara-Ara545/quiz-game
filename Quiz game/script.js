let questions = [
,{
        question: "what is the capital of France?",
        answer: [
            {
            text:"Paris", correct: true},
            {
            text:"Berlin", correct: false}, 
            {
            text:"Madrid", correct: false},
            {
            text:"Rome", correct: false}],
       

            }
      
,{
        question: "What is the organ that pumps blood?",
        answer: [
            {
            text:"Heart", correct: true},
            {
            text:"Liver", correct: false}, 
            {
            text:"Kidney", correct: false},
            {
            text:"Brain", correct: false}],
       

            }

            ,{
        question: "What is 12*12?",
        answer: [
            {
            text:"234", correct: false},
            {
            text:"144", correct: true}, 
            {
            text:"120", correct: false},
            {
            text:"132", correct: false}],
       

            }

];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button")
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
 let currentQuestion = questions[currentQuestionIndex];
 let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
 question;
 currentQuestion.answer.forEach(answer => {
    const button= document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    button.addEventListener("click", function() {
        if (answer.correct) {
            button.dataset.correct = answer.correct ;

        }
        button.addEventListener("click", selectAnswer);
 })
})
}

function resetState() { 
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);

    }

}
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";   
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }}
startQuiz();


// function readQuestion() {
//     const currentQuestion = questions[currentQuestionIndex];
//     questionElement.textContent = currentQuestion.question;
//     choicesElement.innerHTML = "";
//     currentQuestion.choices.forEach(choice => {
//         const button = document.createElement("button");
//         button.textContent = choice;
//         button.addEventListener("click", () => checkAnswer(choice));
//         choicesElement.appendChild(button);
//     });
// }

// function checkAnswer(selectedChoice) {
//     const currentQuestion = questions[currentQuestionIndex];
//     if (selectedChoice === currentQuestion.answer) {
//         score++;
//         scoreElement.textContent = `Score: ${score}`;
//     }
//     currentQuestionIndex++;
//     if (currentQuestionIndex < questions.length) {
//         readQuestion();
//     } else {
//         questionElement.textContent = "Quiz completed!";
//         choicesElement.innerHTML = "";
//         nextButton.style.display = "none";
//     }
// }

// let currentQuestionIndex = 0;
// let score = 0;
// const questionElement = document.getElementById("question");
// const choicesElement = document.getElementById("choices");
// const scoreElement = document.getElementById("score");
// const nextButton = document.getElementById("next");
