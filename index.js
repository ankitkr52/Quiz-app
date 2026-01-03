const question = [
    
    {
        question: "which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue-whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
        ]
    },

    {
        question: "which is the smallest country in the world?",
        answers: [
            { text: "Vetican city", correct: true },
            { text: "Bhutan", correct: false },
            { text: "Nepal", correct: false },
            { text: "India", correct: false },
        ]

    },
    {
        question: "Which is the largest ocean in the world?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Pacific Ocean", correct: true },
            { text: "Arctic Ocean", correct: false },
        ]

    },
    {
        question: "Which is the highest mountain peak in the world?",
        answers: [
            { text: "K2", correct: false },
            { text: "Kangchenjunga", correct: false },
            { text: "Lhotse", correct: false },
            { text: "Mount Everest", correct: true },
        ]
    },
    {
        question: "Which is the longest river in the world?",
        answers: [
            { text: "Amazon River", correct: false },
            { text: "Nile River", correct: true },
            { text: "Yangtze River", correct: false },
            { text: "Mississippi River", correct: false }
        ]
    },
    {
        question: "In JavaScript, what keyword is used to declare a variable that cannot be reassigned?",
        answers: [
            { text: "let", correct: false },
            { text: "var", correct: false },
            { text: "const", correct: true },
            { text: "static", correct: false }
        ]
    },
    {
        question: "In React, what is the built-in hook used to manage state in functional components?",
        answers: [
            { text: "useEffect", correct: false },
            { text: "useState", correct: true },
            { text: "useContext", correct: false },
            { text: "useReducer", correct: false }
        ]
    },
    {
        question: "In JavaScript, which method adds one or more elements to the end of an array?",
        answers: [
            { text: "push()", correct: true },
            { text: "pop()", correct: false },
            { text: "shift()", correct: false },
            { text: "unshift()", correct: false }
        ]
    },
    {
        question: "In React, what is the virtual representation of the UI kept in memory and synced with the real DOM?",
        answers: [
            { text: "Shadow DOM", correct: false },
            { text: "Virtual DOM", correct: true },
            { text: "Real DOM", correct: false },
            { text: "Component Tree", correct: false }
        ]
    },
    {
    question: "Who is known as the father of modern computer science?",
    answers: [
        { text: "Charles Babbage", correct: false },
        { text: "John von Neumann", correct: false },
        { text: "Alan Turing", correct: true },
        { text: "Bill Gates", correct: false },
    ]
},
{
    question: "In JavaScript, which symbol is used for strict equality comparison?",
    answers: [
        { text: "===", correct: true },
        { text: "==", correct: false },
        { text: "=", correct: false },
        { text: "!==", correct: false },
    ]
},
{
    question: "In React, what is the correct way to handle side effects in functional components?",
    answers: [
        { text: "useState", correct: false },
        { text: "useContext", correct: false },
        { text: "useEffect", correct: true },
        { text: "useReducer", correct: false },
    ]
},
{
    question: "Which planet is known as the Red Planet?",
    answers: [
        { text: "Venus", correct: false },
        { text: "Mars", correct: true },
        { text: "Jupiter", correct: false },
        { text: "Saturn", correct: false },
    ]
},
{
    question: "In JavaScript, what does the 'this' keyword refer to in a regular function (non-arrow)?",
    answers: [
        { text: "The global object always", correct: false },
        { text: "The parent function", correct: false },
        { text: "Undefined", correct: false },
        { text: "The object that called the function", correct: true },
    ]
},
{
    question: "In React, what is used to pass data from a parent component to a child component?",
    answers: [
        { text: "State", correct: false },
        { text: "Props", correct: true },
        { text: "Context", correct: false },
        { text: "Hooks", correct: false },
    ]
},
{
    question: "In JavaScript, which operator is used for exponentiation?",
    answer: [
        { text: "**", correct: true },
        { text: "^", correct: false },
        { text: "pow()", correct: false },
        { text: "*", correct: false }
    ]
},
{
    question: "In React, what hook is used to perform cleanup when a component unmounts?",
    answer: [
        { text: "useLayoutEffect", correct: false },
        { text: "useState", correct: false },
        { text: "useEffect", correct: true },
        { text: "useRef", correct: false }
    ]
},
{
    question: "In JavaScript, what will '[] + {}' evaluate to?",
    answer: [
        { text: "\"[object Object]\"", correct: true },
        { text: "\"{}\"", correct: false },
        { text: "undefined", correct: false },
        { text: "NaN", correct: false }
    ]
},
{
    question: "In React, which lifecycle method is equivalent to the cleanup function in useEffect?",
    answer: [
        { text: "componentDidMount", correct: false },
        { text: "componentWillUnmount", correct: true },
        { text: "componentDidUpdate", correct: false },
        { text: "shouldComponentUpdate", correct: false }
    ]
},
{
    question: "In JavaScript, what does the 'async' keyword before a function do?",
    answer: [
        { text: "Runs the function asynchronously", correct: false },
        { text: "Allows the use of try/catch", correct: false },
        { text: "Makes the function return a Promise", correct: true },
        { text: "Prevents hoisting", correct: false },
    ]
},

{
    question: "In JavaScript, which method is used to convert a JSON string into a JavaScript object?",
    answers: [
        { text: "JSON.parse()", correct: true },
        { text: "JSON.stringify()", correct: false },
        { text: "parseJSON()", correct: false },
        { text: "Object.parse()", correct: false }
    ]
},
{
    question: "In JavaScript, which method creates a new array with the results of calling a function on every element?",
    answer: [
        { text: "filter()", correct: false },
        { text: "forEach()", correct: false },
        { text: "map()", correct: true },
        { text: "reduce()", correct: false }
    ]
},
{
    question: "In React, what hook is used to access context values?",
    answers: [
        { text: "useState", correct: false },
        { text: "useEffect", correct: false },
        { text: "useRef", correct: false },
        { text: "useContext", correct: true },
    ]
},
{
    question: "In React, what is the purpose of the 'key' prop in a list of elements?",
    answer: [
        { text: "Helps React identify which items have changed", correct: true },
        { text: "Styles the element", correct: false },
        { text: "Passes data to the child", correct: false },
        { text: "Triggers re-render", correct: false }
    ]
},
{
    question: "In React, what is the correct way to update state based on the previous state?",
    answer: [
        { text: "setCount(count + 1)", correct: false },
        { text: "setCount(prev => prev + 1)", correct: true },
        { text: "setCount = count + 1", correct: false },
        { text: "this.setState(count + 1)", correct: false }
    ]
},
{
    question: "Which company developed the React library?",
    answers: [
        { text: "Facebook (Meta)", correct: true },
        { text: "Google", correct: false },
        { text: "Microsoft", correct: false },
        { text: "Amazon", correct: false }
    ]
},
];
const questionElement=document.getElementById("question");
const answerbtn=document.getElementById("answers-buttons");
const nextbtn=document.getElementById("next-btn")

let currentquestionindex=0;
let score=0;

function startquiz(){
    currentquestionindex=0;
    score=0;
    nextbtn.innerHTML="Next";
    showquestion();
}
function showquestion(){
    resetState()
let currentquestion=question[currentquestionindex]
let questionNo=currentquestionindex+1;
questionElement.innerHTML=questionNo +". "+currentquestion.question;

currentquestion.answers.forEach(answer => {
    const button=document.createElement("button");
    button.innerHTML=answer.text;
    button.classList.add("btn");
    answerbtn.appendChild(button)
    if(answer.correct){
        button.dataset.correct=answer.correct;
    }
    button.addEventListener("click",selectanswers)
});

}
function resetState(){
    nextbtn.style.display="none";
    while(answerbtn.firstChild){
        answerbtn.removeChild(answerbtn.firstChild);
    }
}

function selectanswers(e){
    const selectedbtn=e.target;
    const iscorrect=selectedbtn.dataset.correct==="true";
    if(iscorrect){
        selectedbtn.classList.add("correct");
        score++; 
    }
    else{
        selectedbtn.classList.add("incorrect");
    }
    Array.from(answerbtn.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    })
    nextbtn.style.display="block"
}
function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${question.length}! `;
    nextbtn.innerHTML="Play Again"
    nextbtn.style.display="block"
}
function handelnextbtn(){
    currentquestionindex++;
    if(currentquestionindex<question.length){
        showquestion();
    }
    else{
        showScore();
    }
}



nextbtn.addEventListener("click",()=>{
    if(currentquestionindex<question.length){
        handelnextbtn();
    }
    else{
        startquiz()
    }
})
startquiz();