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


const option44=document.getElementById("option4");

const inputList=document.getElementsByTagName("input");

const nextQuestion= document.getElementById("next-question");
const current=document.getElementById("current-question");

let score=0, count=0, currentQuestion=1;


console.log(current);
current.textContent= `${currentQuestion}/10`;


function showNameBox(){
    
        nameBox.style.display = "flex";
     
    
}

function removeHome(){
   home.style.display="none";
   quizPage.removeAttribute("id", "hide");
   

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




console.log(question.textContent);
console.log(option1);

var random1 = Math.floor(Math.random() * questionList.length) ;
var choice1 = questionList[random1];

console.log(random1);
console.log(choice1);


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


let randomArray= [];

for (i=0; i<10; i++){
    var random=Math.floor(Math.random() * 10);
    randomArray.push(random);
}
console.log(randomArray);


console.log(ranNums);
// questionList.splice(random1, 1);

// var random2 = Math.floor(Math.random() * questionList.length) ;
// var choice2 = questionList[random2];

// console.log(random2);
// console.log(choice2);


// var coffee = document.forms[0];
// var txt = "";
// var i;
// for (i = 0; i < coffee.length; i++) {
//   if (coffee[i].checked) {
//     txt = txt + coffee[i].textContent + " ";
//     console.log(txt);
//   }
// }






// for (i = 0; i < answerr.length; i++) {
//       if (answerr[i].checked) {
        
//         console.log("done");
//       }
//     }

// console.log(option44.checked);

// console.log(option44.name);



console.log(quizPage);

console.log(option1);
console.log(option2);




 function isChecked(){
for (let i=0; i<inputList.length; i++){
    let x=inputList[i].id;
    let y=x.substr(x.length - 1);
    if (inputList[i].type=="radio" && inputList[i].checked){
        console.log(y);
        nextQuestion.disabled= false;
    }
    
}


}

// function isChecked(){
//     for (let i=0; i<answerr.length; i++){
//         if (this.clicked){
//             console.log("done");
//             nextQuestion.disabled= false;
//         }
        
//     }
//     console.log("hi");
//     console.log(this.clicked);
// }


isChecked();
console.log(answerr);

function foo(){
    console.log("foo");
}

function CheckAnswer(){
    console.log("hiii");
    
  
    for (let i=0; i<inputList.length; i++){
          let x=inputList[i].id;
         let y=x.substr(x.length - 1);
         
        if (inputList[i].type=="radio" && inputList[i].checked ){
           if (y == questionList[ranNums[count]]["answer"]){
                score++;
                console.log(y);
            }
        
        }
        
    }
    
    console.log(questionList[ranNums[count]]["answer"]);

    count++;
    currentQuestion++;
    console.log(score);
    console.log(current);
    current.textContent= `${currentQuestion}/10`;
    

   

    // var random1 = Math.floor(Math.random() * questionList.length) ;

    // console.log(random1);
question.textContent=  questionList[ranNums[count]].question;
option1.textContent= questionList[ranNums[count]]["1"];
option2.textContent= questionList[ranNums[count]]["2"];
option3.textContent= questionList[ranNums[count]]["3"];
option4.textContent= questionList[ranNums[count]]["4"];

    
}