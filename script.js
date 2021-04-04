let quiz = [
    {
       
     question:"What does HTML stand for?",
     option:[
         "HighText Machine Language",
         "HyperText and links Markup Language",
         "HyperText Markup Language",
         "None of these"
     ],
   answer: 3,
 
    },
    {
       
     question:"Which is not a property of attribute Behaviour of <Marquee> tag?",
     option:[
         "alternate",
          "blur",
          "scroll",
          "slide"
         
     ],
   answer: 2,
 
    },
    {
       
     question:"_________ keyword is used to declare variables in javascript.",
     option:[
         "Var",
          "Dim",
         "String",
         "None of the above"
     ],
   answer: 1,
 
    },
    {
       
     question:"The attribute used to define a new namespace is.",
     option:[
         " XMLNS",
          "XmlNameSpace",
           "Xmlns",
          "XmlNs"
     ],
   answer: 3,
 
    },
    {
       
     question:"Whats so great about XML?",
     option:[
         " Easy data exchange",
 "High speed on network",
 " Only B.is correct",
 "Both A & B"
     ],
   answer: 4,
 
    }
 ]

let index = 0;
let attempt = 0;
let score =0;
let wrong =0;

$(function(){
  let totalTime = 100;
  let min=0;
  let sec=0;
  let counter=0;

  let timer = setInterval(function(){
     counter++;
     min= Math.floor((totalTime-counter)/60);
     sec=totalTime-min*60-counter;
     $(".timerBox span").text(min + ":"+ sec);
     if(counter == totalTime){

        alert("Time is up. Press ok to show the result.");
        result();
        contact(0);
        fifty(0);
         clearInterval(timer);
     }
   
    },1000);

    printQuestion(index);






});
let questions = quiz.sort(function(){
    return 0.5 - Math.random();
});
let totalQuestion = questions.length;
function printQuestion(i){
    console.log(questions[0]);
    $(".questionBox").text(questions[i].question);
    $(".optionBox span").eq(0).text(questions[i].option[0]);
    $(".optionBox span").eq(1).text(questions[i].option[1]);
    $(".optionBox span").eq(2).text(questions[i].option[2]);
    $(".optionBox span").eq(3).text(questions[i].option[3]);
}


function checkAnswer(option){
    attempt++;

    let optionClicked = $(option).data("opt");
    console.log(questions[index]);
    
    if(optionClicked == questions[index].answer){
      $(option).addClass("right");
      score++;
    }
    else{
        $(option).addClass("wrong");
        wrong++;
    }

    $(".scoreBox span").text(score);
    $(".optionBox span").attr("onclick","");

}

function showNext(){

     if(index >= questions.length - 1){
         showResult(0);
        
         return;
     }

    index++;

    $(".optionBox span").removeClass();

    $(".optionBox span").attr("onclick","checkAnswer(this)");
    printQuestion(index);
}

function showResult(j){

    if(j == 1 && index < questions.length-1 && !confirm("Quiz has not finished yet.Press ok to skip quiz & get you final result.")){
        return ;
    }
    result();
}
  
   



function result(){
 
    $("#questionScreen").hide();
   $("#resultScreen").show();
   
   $("#totalQuestion").text(totalQuestion);
   $("#correctquestion").text(score);
   $("#wrongquestion").text(wrong);
   $("#attempted").text(attempt);
}

function contact(j){
    if(j == 1  && !confirm("Already used lifeline!")){
        return ;
    }
    $(".phone a").attr("onclick","");
}

function fifty(){

}