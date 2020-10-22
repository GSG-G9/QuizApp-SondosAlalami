

const nameBox= document.getElementById("name-box");

const startGame= document.getElementById("start-game");
const home=document.getElementById("home");
const quizPage= document.querySelector("#hide");
const quiz= document.getElementById("hide");
const question= document.querySelector(".question");
const option1=document.getElementById("op1");
const option2=document.getElementById("op2");
const option3=document.getElementById("op3");
const option4=document.getElementById("op4");

const answerr=document.getElementsByClassName("answer");

const submit=document.getElementById("submit");


const option44=document.getElementById("option4");

const inputList=document.getElementsByTagName("input");

const nextQuestion= document.getElementById("next-question");
const current=document.getElementById("current-question");

const userName=document.getElementById("user-name");

const finish=document.getElementById("finish");
const result=document.getElementById("result");
const high=document.getElementById("high-score")




let score=0, count=0, currentQuestion=1, scores=[];



for (i=0; i<localStorage.length; i++){
    scores.push(localStorage.getItem(localStorage.key(i)));

}

console.log(scores);
let highScore=Math.max(...scores);
let index= scores.indexOf(`${highScore}`);
let name= window.localStorage.key(index);
console.log(index);

if(localStorage.length){
high.textContent= ` ${name} ${highScore}`;

current.textContent= `${currentQuestion}/10`;

}
function showNameBox(){
    
        nameBox.style.display = "flex";
     
    
}

function removeHome(){

    if (userName.value===""){
        alert("Enter your name, please");
    }
    else{
   home.style.display="none";
   quizPage.removeAttribute("id", "hide");}

}

let questionList= [
    {"question":"Choose the correct HTML tag for the largest heading.",
"1":"h1",
"2":"heading",
"3":"head",
"4":"h6",
"answer":"1"} ,

{"question":"How can you make a list that lists the items with numbers?",
"1":"dl",
"2":"ol",
"3":"ul",
"4":"list",
"answer":"2"},

{"question":"What does CSS stand for?",
"1":"Colorful Style Sheets",
"2":"Creative Style Sheets",
"3":"Cascading Style Sheets",
"4":"Creative Style Sheets",
"answer":"3"},

{"question":"Which HTML attribute is used to define inline styles?",
"1":"styles",
"2":"font",
"3":"class",
"4":"style",
"answer":"4"},

{"question":"Which is the correct CSS syntax?",
"1":"{body:color=black;}",
"2":"{body;color:black;}",
"3":"body:color=black;",
"4":"body {color: black;}  ",
"answer":"4"},

{"question":"Which CSS property controls the text size?",
"1":"font-size",
"2":"text-size",
"3":"font-style",
"4":"text-style",
"answer":"1"},

{"question":"How do you display hyperlinks without an underline?",
"1":"a {underline:none;}",
"2":"a {text-decoration:none;}  ",
"3":"a {text-decoration:no-underline;}",
"4":"a {decoration:no-underline;}",
"answer":"2"},

{"question":"How do you make each word in a text start with a capital letter?",
"1":"text-style:capitalize",
"2":"transform:capitalize",
"3":"text-transform:capitalize",
"4":"You can't do that with CSS",
"answer":"3"},

{"question":"Choose the correct HTML element to define important text",
"1":"<important>",
"2":"<strong>",
"3":"<b>",
"4":"<i>",
"answer":"2"},
  

{"question":"Which of these elements are all <table> elements?",
"1":"<table><tr><tt>  ",
"2":"<thead><body><tr>",
"3":"<table><tr><td>  ",
"4":"<table><head><tfoot>",
"answer":"3"},

];



var nums = [0,1,2,3,4,5,6,7,8,9],
    ranNums = [],
    i = nums.length,
    j = 0;

while (i--) {
    j = Math.floor(Math.random() * (i+1));
    ranNums.push(nums[j]);
    nums.splice(j,1);
}


question.textContent= questionList[ranNums[0]].question;
option1.textContent= questionList[ranNums[0]]["1"];
option2.textContent= questionList[ranNums[0]]["2"];
option3.textContent= questionList[ranNums[0]]["3"];
option4.textContent= questionList[ranNums[0]]["4"];



 function isChecked(){
for (let i=0; i<inputList.length; i++){
    
    if (inputList[i].type=="radio" && inputList[i].checked){
       
        nextQuestion.disabled= false;
    }
    
}


}





function CheckAnswer(){
    
    for (let i=0; i<inputList.length; i++){
          let x=inputList[i].id;
          let y=x.substr(x.length - 1);
         
        if (inputList[i].type=="radio" && inputList[i].checked ){
           if (y == questionList[ranNums[count]]["answer"]){
                score++;
                
            }
        
        }
        
    }
    
   
    count++;
    currentQuestion++;
    current.textContent= `${currentQuestion}/10`;

    question.textContent=  questionList[ranNums[count]].question;
    option1.textContent= questionList[ranNums[count]]["1"];
    option2.textContent= questionList[ranNums[count]]["2"];
    option3.textContent= questionList[ranNums[count]]["3"];
    option4.textContent= questionList[ranNums[count]]["4"];

     if (currentQuestion==10){
        nextQuestion.style.display="none";
        finish.style.display="block";

    }

    
}


function finishGame(){
    quizPage.setAttribute("id", "hide");
    result.style.display="block";
    result.textContent = `Your Score is ${score}`;
    localStorage.setItem(`${userName.value}`, score);

}

