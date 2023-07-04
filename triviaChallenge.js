window.onbeforeunload = function (){return false;}
var plays = {
    correct: function () {
        var x = document.getElementById("correct");
        x.play();
    },
    wrong: function () {
        var x = document.getElementById("wrong");
        x.play();
    },
    select: function () {
        var x = document.getElementById("select");
        x.play();
    }, 
    submit: function () {
        var x = document.getElementById("submit");
        x.play();
    },
    next: function () {
        var x = document.getElementById("next");
        x.play();
    },
    ending: function () {
        var x = document.getElementById("end");
        x.play();
    }
};
document.getElementById("answercheck1").addEventListener("click", plays.select);
document.getElementById("answercheck2").addEventListener("click", plays.select);
document.getElementById("answercheck3").addEventListener("click", plays.select);
document.getElementById("answercheck1").addEventListener("touchstart", plays.select);
document.getElementById("answercheck2").addEventListener("touchstart", plays.select);
document.getElementById("answercheck3").addEventListener("touchstart", plays.select);  
var hideYesNo = false; 
var menuHide = false; 
var navMenu = document.getElementById("positionHeader");
var hiddenMenu = document.getElementById("hiddenMenu"); 
var threeLineMenu = document.getElementById("threeLines"); 
var detailsArrows = document.getElementById("detailsArrow");
function hideMenu(){
    menuHide = !menuHide;    
    if(menuHide === false){  
        fadeOUT1();
    }
    if(menuHide === true){
        fadeIN1();
    }
}
function fadeIN1(){
    threeLineMenu.className = "fa-solid fa-x fa-2x";
    hiddenMenu.style.display = "flex";
    hiddenMenu.style.opacity = "25%";
    hiddenMenu.style.height = "100px";
    setTimeout(fadeIN2, 40);
}
function fadeIN2(){
    hiddenMenu.style.opacity = "50%";
    hiddenMenu.style.height = "200px";
    setTimeout(fadeIN3, 40);
}
function fadeIN3(){
    hiddenMenu.style.opacity = "75%";
    hiddenMenu.style.height = "300px";
    setTimeout(fadeIN4, 40);
}
function fadeIN4(){
    hiddenMenu.style.opacity = "100%";
    hiddenMenu.style.height = "350px";
}
function fadeOUT1(){
    threeLineMenu.className = "fa-solid fa-bars fa-2x";
    hiddenMenu.style.opacity = "75%";
    hiddenMenu.style.height = "300px";
    setTimeout(fadeOUT2, 40);
}
function fadeOUT2(){
    hiddenMenu.style.opacity = "50%";
    hiddenMenu.style.height = "200px";
    setTimeout(fadeOUT3, 40);
}
function fadeOUT3(){
    hiddenMenu.style.opacity = "25%";
    hiddenMenu.style.height = "100px";
    setTimeout(fadeOUT4, 40);
}
function fadeOUT4(){
    hiddenMenu.style.opacity = "0%";
    hiddenMenu.style.display = "none";
}
function arrowChange(){
    hideYesNo = !hideYesNo; 
    if (hideYesNo === true){
        detailsArrows.className = "fa-solid fa-arrow-right";
        setTimeout(arrowFlipUp, 50); 
    }
    if (hideYesNo === false){
        detailsArrows.className = "fa-solid fa-arrow-right";
        setTimeout(arrowFlipDown, 50);
    }
}
function arrowFlipUp(){
    detailsArrows.className = "fa-solid fa-arrow-up";
} 
function arrowFlipDown(){
    detailsArrows.className = "fa-solid fa-arrow-down";
}
function timerBox(){
    var time = Number(document.getElementById("timer").value);
    var hours = Math.floor(time / 60 / 60); 
    var minute = Math.floor(time / 60) - (hours * 60);
    var seconds = time % 60; 
    var wholeTime = hours + ':' + minute + ':' + seconds;
    document.getElementById("timerVisable").value = wholeTime;
}
function timer1(){
    var timer = true;
    if (timer === true){
    setTimeout(count1, 500);
}
}
function count1(){
    var time = Number(document.getElementById("timer").value);
    var addTime = time + 1; 
    document.getElementById("timer").value = addTime;
    setTimeout(timer1, 500);
    setTimeout(timerBox);
}
function lastQuestion(){
    document.getElementById("trivbutton").style.display = "none"; 
    document.getElementById("trivanswer").style.display = "none";
    document.getElementById("timer").style.display = "none";
    var finalWrongNumber = Number(document.getElementById("numberWrong").value);
    var finalWrongTime = document.getElementById("timerVisable").value;
    document.getElementById("formNumberWrong").value = finalWrongNumber;
    document.getElementById("formNumberTime").value = finalWrongTime;
    document.getElementById("formFill").style.display = "flex";
    document.getElementById("answercheck1").style.display = "none";
    document.getElementById("answercheck2").style.display = "none";
    document.getElementById("answercheck3").style.display = "none";
    document.getElementById("trivquestion").style.display = "none";
    document.getElementById("timerEnd").style.display = "none";
    document.getElementById("fewWrong").style.display = "none";
    document.getElementById("numWrong").style.display = "none";
}
var form = document.getElementById("my-form");
async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        status.innerHTML = "Thanks for your submission!";
        form.reset()
    }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
    });
}
form.addEventListener("submit", handleSubmit)

function hideForm() {
        document.getElementById("formFill").style.display = "none";
        document.getElementById("thanksFinnish").style.display = "block"; 
}
function startOverReset() {
    document.getElementById("pos19").style.display = "block";
}
function leaderButton() {
    document.getElementById("pos19").style.display = "block";
}
function startOverNo() {
    document.getElementById("pos19").style.display = "none";
}
function clearButton1() { 
    document.getElementById("answer2").checked = false; 
    document.getElementById("answer3").checked = false; 
}
function clearButton2() {
    document.getElementById("answer1").checked = false;  
    document.getElementById("answer3").checked = false; 
}
function clearButton3() { 
    document.getElementById("answer1").checked = false; 
    document.getElementById("answer2").checked = false; 
}
function clearButtonColor() {
    document.getElementById("boxCorrect1").style.backgroundColor = "white";
    document.getElementById("boxWrong2").style.backgroundColor = "white";
    document.getElementById("boxWrong1").style.backgroundColor = "white";
}



    function trivia() { //match function value to line #5 above. 
        var answer1 = document.getElementById("answer1"); 
        var answer2 = document.getElementById("answer2"); 
        var answer3 = document.getElementById("answer3"); 
        var wrongAnswer = Number(document.getElementById("numberWrong").value);
        var nextButton = '<button class="buttonPush" onclick="changePage(); timer1();">Next Question</button>'; //change onclick Id value.                               LINE #2 
        var displayanswer = '<img class="checkMark" src="img/GreenCheck.png">' + //on last question change onclick above function to lastQuestion and button to Finish. 
        '<strong class="correctAnswer">Correct!</strong> ' +
        ' <img class="checkMark" src="img/GreenCheck.png"><br>' +  
        nextButton;
        var displayanswerw = '<img class="redX" src="img/thumbsDown.png"> <strong class="wrongAnswer">Wrong</strong> <img class="redX" src="img/thumbsDown.png">' +
                             '<h3 class="tryAgain">Try another answer!</h3>';
    if (answer1.checked === true && answer2.checked === false && answer3.checked === false){ //match true and false values to correct and incorrect answer values above.    
        document.getElementById("triviaAnswer").innerHTML = displayanswer; 
        plays.correct();  
        document.getElementById("boxCorrect1").style.backgroundColor = "rgb(38, 255, 18)"; //answer1.true = boxCorrect1, answer2.true = boxWrong1, answer3.true = boxWrong2.
    }
    else if (answer1.checked === false && answer2.checked === false && answer3.checked === true){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong2").style.backgroundColor = "rgb(251, 21, 21)"; //
        plays.wrong(); 
    }
    else if (answer1.checked === false && answer2.checked === true && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong1").style.backgroundColor = "rgb(251, 21, 21)"; //
        plays.wrong(); 
    }
    }
    function displayAnswer() { //change function value to match line #4 above. 
        var answerDisplay1 = document.getElementById("answer1"); 
        var answerDisplay2 = document.getElementById("answer2"); 
        var answerDisplay3 = document.getElementById("answer3"); 
        var answer1 = ' <strong class="answerMimic" id="answerCopy">2023</strong>'; //change answer to match answer1 from above. 
        var answer2 = ' <strong class="answerMimic" id="answerCopy">2010</strong>'; //change to answer2 from above.
        var answer3 = ' <strong class="answerMimic" id="answerCopy">2000</strong>'; //change to answer3 from above. 
        var answer4 = ' <strong class="answerMimic" id="answerCopy"></strong>'; //leave blank so answer can clear. 
        if (answerDisplay1.checked === true){
            document.getElementById("answerCopy").innerHTML = answer1;
        }
        else if (answerDisplay2.checked === true){
            document.getElementById("answerCopy").innerHTML = answer2;
        }
        else if (answerDisplay3.checked === true){
            document.getElementById("answerCopy").innerHTML = answer3;
        }
        else{
            document.getElementById("answerCopy").innerHTML = answer4;
        }
    }
    function changePage() { //change to new onclick id value on line #2 above. 
        plays.submit(); 
        var questionNum = Number(document.getElementById("questionNumber").value);
        var nextNumber = questionNum + 1; 
        document.getElementById("questionNumber").value = nextNumber; 
        var question2 = '<strong class="question">How many keys are on the standard piano?</strong><strong class="answerMimic" id="answerCopy"></strong>'; //make new question.
        document.getElementById("trivquestion").innerHTML = question2;
        var check1 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer1(); clearButton1();">' + //change displayAnswer value.                 LINE #4
        '<input type="checkbox" class="checkBox" id="answer1"><strong class="answerText">62</strong>'+ //change answer. 
        '<span class="boxInput" id="boxCorrect1"></span>' + 
        '</label>';
        document.getElementById("answercheck1").innerHTML = check1;
        var check2 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer1(); clearButton2();">' + //match displayAnswer value to new value. 
        '<input type="checkbox" class="checkBox" id="answer2"><strong class="answerText">88</strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong1"></span>' + 
        '</label>';
        document.getElementById("answercheck2").innerHTML = check2;
        var check3 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer1(); clearButton3();">' + //match displayAnswer value to new value. 
        '<input type="checkbox" class="checkBox" id="answer3"><strong class="answerText">120</strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong2"></span>' + 
        '</label>';
        document.getElementById("answercheck3").innerHTML = check3;
        var button = '<button class="answerButton" onclick="trivia2()">Submit</button>'; //change onclick function value.                                          LINE #5
        document.getElementById("trivbutton").innerHTML = button;
        var answer = '<p class="questionAnswer" id="triviaAnswer"></p>';
        document.getElementById("trivanswer").innerHTML = answer; 
    }
    function trivia2() { //match function value to line #5 above. 
        var answer1 = document.getElementById("answer1"); 
        var answer2 = document.getElementById("answer2"); 
        var answer3 = document.getElementById("answer3"); 
        var wrongAnswer = Number(document.getElementById("numberWrong").value);
        var nextButton = '<button class="buttonPush" onclick="changePage1();">Next Question</button>'; //change onclick Id value.                                 LINE #2
        var displayanswer = '<img class="checkMark" src="img/GreenCheck.png">' + //on last question change onclick above function to lastQuestion and button to Finish. 
        '<strong class="correctAnswer">Correct!</strong> ' +
        ' <img class="checkMark" src="img/GreenCheck.png"><br>' +  
        nextButton;
        var displayanswerw = '<img class="redX" src="img/thumbsDown.png"> <strong class="wrongAnswer">Wrong</strong> <img class="redX" src="img/thumbsDown.png">' +
                             '<h3 class="tryAgain">Guess Again!</h3>';
    if (answer1.checked === false && answer2.checked === true && answer3.checked === false){ //match true and false values to correct and incorrect answer values above.    
        document.getElementById("triviaAnswer").innerHTML = displayanswer;
        plays.correct();  
        document.getElementById("boxWrong1").style.backgroundColor = "rgb(38, 255, 18)"; //answer1.true = boxCorrect1, answer2.true = boxWrong1, answer3.true = boxWrong2.
    }
    else if (answer1.checked === true && answer2.checked === false && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxCorrect1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    else if (answer1.checked === false && answer2.checked === false && answer3.checked === true){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong2").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong(); 
    }
    }
    function displayAnswer1() { //change function value to match line #4 above. 
        var answerDisplay1 = document.getElementById("answer1"); 
        var answerDisplay2 = document.getElementById("answer2"); 
        var answerDisplay3 = document.getElementById("answer3"); 
        var answer1 = ' <strong class="answerMimic" id="answerCopy">62</strong>'; //change answer to match answer1 from above. 
        var answer2 = ' <strong class="answerMimic" id="answerCopy">88</strong>'; //change to answer2 from above.
        var answer3 = ' <strong class="answerMimic" id="answerCopy">120</strong>'; //change to answer3 from above. 
        var answer4 = ' <strong class="answerMimic" id="answerCopy"></strong>'; //leave blank so answer can clear. 
        if (answerDisplay1.checked === true){
            document.getElementById("answerCopy").innerHTML = answer1;
        }
        else if (answerDisplay2.checked === true){
            document.getElementById("answerCopy").innerHTML = answer2;
        }
        else if (answerDisplay3.checked === true){
            document.getElementById("answerCopy").innerHTML = answer3;
        }
        else{
            document.getElementById("answerCopy").innerHTML = answer4;
        }
    }
    function changePage1() { //change to new onclick id value on line #2 above. 
        plays.submit();
        var questionNum = Number(document.getElementById("questionNumber").value);
        var nextNumber = questionNum + 1; 
        document.getElementById("questionNumber").value = nextNumber; 
        var question2 = '<strong class="question">What city is the Taj Mahal located?</strong><strong class="answerMimic" id="answerCopy"></strong>'; //make new question.
        document.getElementById("trivquestion").innerHTML = question2;
        var check1 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer2(); clearButton1();">' + //change displayAnswer value.                 LINE #4
        '<input type="checkbox" class="checkBox" id="answer1"><strong class="answerText">India</strong>'+ //change answer. 
        '<span class="boxInput" id="boxCorrect1"></span>' + 
        '</label>';
        document.getElementById("answercheck1").innerHTML = check1;
        var check2 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer2(); clearButton2();">' + //match displayAnswer value to new value. 
        '<input type="checkbox" class="checkBox" id="answer2"><strong class="answerText">Kolkata</strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong1"></span>' + 
        '</label>';
        document.getElementById("answercheck2").innerHTML = check2;
        var check3 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer2(); clearButton3();">' + //match displayAnswer value to new value. 
        '<input type="checkbox" class="checkBox" id="answer3"><strong class="answerText">Agra</strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong2"></span>' + 
        '</label>';
        document.getElementById("answercheck3").innerHTML = check3;
        var button = '<button class="answerButton" onclick="trivia3()">Submit</button>'; //change onclick function value.                                          LINE #5
        document.getElementById("trivbutton").innerHTML = button;
        var answer = '<p class="questionAnswer" id="triviaAnswer"></p>';
        document.getElementById("trivanswer").innerHTML = answer; 
    }
    function trivia3() { //match function value to line #5 above. 
        var answer1 = document.getElementById("answer1"); 
        var answer2 = document.getElementById("answer2"); 
        var answer3 = document.getElementById("answer3"); 
        var wrongAnswer = Number(document.getElementById("numberWrong").value);
        var nextButton = '<button class="buttonPush" onclick="changePage2();">Next Question</button>'; //change onclick Id value.                                 LINE #2
        var displayanswer = '<img class="checkMark" src="img/GreenCheck.png">' + //on last question change onclick above function to lastQuestion() and button to Finish. 
        '<strong class="correctAnswer">Correct!</strong> ' +
        ' <img class="checkMark" src="img/GreenCheck.png"><br>' +  
        nextButton;
        var displayanswerw = '<img class="redX" src="img/thumbsDown.png"> <strong class="wrongAnswer">Wrong</strong> <img class="redX" src="img/thumbsDown.png">' +
                             '<h3 class="tryAgain">Guess Again!</h3>';
    if (answer1.checked === false && answer2.checked === false && answer3.checked === true){ //match true and false values to correct and incorrect answer values above.    
        document.getElementById("triviaAnswer").innerHTML = displayanswer; 
        plays.correct(); 
        document.getElementById("boxWrong2").style.backgroundColor = "rgb(38, 255, 18)"; //answer1.true = boxCorrect1, answer2.true = boxWrong1, answer3.true = boxWrong2.
    }
    else if (answer1.checked === true && answer2.checked === false && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxCorrect1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    else if (answer1.checked === false && answer2.checked === true && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    }
    function displayAnswer2() { //change function value to match line #4 above. 
        var answerDisplay1 = document.getElementById("answer1"); 
        var answerDisplay2 = document.getElementById("answer2"); 
        var answerDisplay3 = document.getElementById("answer3"); 
        var answer1 = ' <strong class="answerMimic" id="answerCopy">India</strong>'; //change answer to match answer1 from above. 
        var answer2 = ' <strong class="answerMimic" id="answerCopy">Kolkata</strong>'; //change to answer2 from above.
        var answer3 = ' <strong class="answerMimic" id="answerCopy">Agra</strong>'; //change to answer3 from above. 
        var answer4 = ' <strong class="answerMimic" id="answerCopy"></strong>'; //leave blank so answer can clear. 
        if (answerDisplay1.checked === true){
            document.getElementById("answerCopy").innerHTML = answer1;
        }
        else if (answerDisplay2.checked === true){
            document.getElementById("answerCopy").innerHTML = answer2;
        }
        else if (answerDisplay3.checked === true){
            document.getElementById("answerCopy").innerHTML = answer3;
        }
        else{
            document.getElementById("answerCopy").innerHTML = answer4;
        }
    }
    function changePage2() { //change to new onclick id value on line #2 above. 
        plays.submit();
        var questionNum = Number(document.getElementById("questionNumber").value);
        var nextNumber = questionNum + 1; 
        document.getElementById("questionNumber").value = nextNumber; 
        var question2 = '<strong class="question">If you shake a bottle of soda the air pressure inside</strong><strong class="answerMimic" id="answerCopy"></strong>'; //make new question.
        document.getElementById("trivquestion").innerHTML = question2;
        var check1 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer3(); clearButton1();">' + //change displayAnswer value.                 LINE #4
        '<input type="checkbox" class="checkBox" id="answer1"><strong class="answerText">Increases</strong>'+ //change answer. 
        '<span class="boxInput" id="boxCorrect1"></span>' + 
        '</label>';
        document.getElementById("answercheck1").innerHTML = check1;
        var check2 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer3(); clearButton2();">' + //match displayAnswer value to new value. 
        '<input type="checkbox" class="checkBox" id="answer2"><strong class="answerText">Stays the same</strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong1"></span>' + 
        '</label>';
        document.getElementById("answercheck2").innerHTML = check2;
        var check3 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer3(); clearButton3();">' + //match displayAnswer value to new value. 
        '<input type="checkbox" class="checkBox" id="answer3"><strong class="answerText">Decreases</strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong2"></span>' + 
        '</label>';
        document.getElementById("answercheck3").innerHTML = check3;
        var button = '<button class="answerButton" onclick="trivia4()">Submit</button>'; //make new onclick function value.                                          LINE #5
        document.getElementById("trivbutton").innerHTML = button;
        var answer = '<p class="questionAnswer" id="triviaAnswer"></p>';
        document.getElementById("trivanswer").innerHTML = answer; 
    }



    function trivia4() { //match function value to line #5 above. 
        var answer1 = document.getElementById("answer1"); 
        var answer2 = document.getElementById("answer2"); 
        var answer3 = document.getElementById("answer3"); 
        var wrongAnswer = Number(document.getElementById("numberWrong").value);
        var nextButton = '<button class="buttonPush" onclick="changePage3();">Next Question</button>'; //change onclick Id value.                                 LINE #2
        var displayanswer = '<img class="checkMark" src="img/GreenCheck.png">' + //on last question change onclick above function to lastQuestion() and button to Finish. 
        '<strong class="correctAnswer">Correct!</strong> ' +
        ' <img class="checkMark" src="img/GreenCheck.png"><br>' +  
        nextButton;
        var displayanswerw = '<img class="redX" src="img/thumbsDown.png"> <strong class="wrongAnswer">Wrong</strong> <img class="redX" src="img/thumbsDown.png">' +
                             '<h3 class="tryAgain">Guess Again!</h3>';
    if (answer1.checked === false && answer2.checked === true && answer3.checked === false){ //match true and false values to correct and incorrect answer values above.    
        document.getElementById("triviaAnswer").innerHTML = displayanswer;  
        plays.correct();
        document.getElementById("boxWrong1").style.backgroundColor = "rgb(38, 255, 18)"; //answer1.true = boxCorrect1, answer2.true = boxWrong1, answer3.true = boxWrong2.
    }
    else if (answer1.checked === true && answer2.checked === false && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxCorrect1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong(); 
    }
    else if (answer1.checked === false && answer2.checked === false && answer3.checked === true){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong2").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    }
    function displayAnswer3() { //change function value to match line #4 above. 
        var answerDisplay1 = document.getElementById("answer1"); 
        var answerDisplay2 = document.getElementById("answer2"); 
        var answerDisplay3 = document.getElementById("answer3"); 
        var answer1 = ' <strong class="answerMimic" id="answerCopy">Increases</strong>'; //change answer to match answer1 from above. 
        var answer2 = ' <strong class="answerMimic" id="answerCopy">Stays the same</strong>'; //change to answer2 from above.
        var answer3 = ' <strong class="answerMimic" id="answerCopy">Decreases</strong>'; //change to answer3 from above. 
        var answer4 = ' <strong class="answerMimic" id="answerCopy"></strong>'; //leave blank so answer can clear. 
        if (answerDisplay1.checked === true){
            document.getElementById("answerCopy").innerHTML = answer1;
        }
        else if (answerDisplay2.checked === true){
            document.getElementById("answerCopy").innerHTML = answer2;
        }
        else if (answerDisplay3.checked === true){
            document.getElementById("answerCopy").innerHTML = answer3;
        }
        else{
            document.getElementById("answerCopy").innerHTML = answer4;
        }
    }
    function changePage3() { //change to new onclick id value on line #2 above. 
        plays.submit();
        var questionNum = Number(document.getElementById("questionNumber").value);
        var nextNumber = questionNum + 1; 
        document.getElementById("questionNumber").value = nextNumber; 
        var question2 = '<strong class="question">How fast is 300 miles per hour </strong><strong class="answerMimic" id="answerCopy"></strong>'; //make new question.
        document.getElementById("trivquestion").innerHTML = question2;
        var check1 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer4(); clearButton1();">' + //change displayAnswer value.                 LINE #4
        '<input type="checkbox" class="checkBox" id="answer1"><strong class="answerText">482.803 km/h</strong>'+ //change answer. 
        '<span class="boxInput" id="boxCorrect1"></span>' + 
        '</label>';
        document.getElementById("answercheck1").innerHTML = check1;
        var check2 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer4(); clearButton2();">' + //match displayAnswer value to new value. 
        '<input type="checkbox" class="checkBox" id="answer2"><strong class="answerText">563.607 km/h</strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong1"></span>' + 
        '</label>';
        document.getElementById("answercheck2").innerHTML = check2;
        var check3 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer4(); clearButton3();">' + //match displayAnswer value to new value. 
        '<input type="checkbox" class="checkBox" id="answer3"><strong class="answerText">325.97 km/h</strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong2"></span>' + 
        '</label>';
        document.getElementById("answercheck3").innerHTML = check3;
        var button = '<button class="answerButton" onclick="trivia5()">Submit</button>'; //make new onclick function value.                                          LINE #5
        document.getElementById("trivbutton").innerHTML = button;
        var answer = '<p class="questionAnswer" id="triviaAnswer"></p>';
        document.getElementById("trivanswer").innerHTML = answer; 
    }



    function trivia5() { //match function value to line #5 above. 
        var answer1 = document.getElementById("answer1"); 
        var answer2 = document.getElementById("answer2"); 
        var answer3 = document.getElementById("answer3"); 
        var wrongAnswer = Number(document.getElementById("numberWrong").value);
        var nextButton = '<button class="buttonPush" onclick="changePage4();">Next Question</button>'; //change onclick Id value.                                 LINE #2
        var displayanswer = '<img class="checkMark" src="img/GreenCheck.png">' + //on last question change onclick above function to lastQuestion() and button to Finish. 
        '<strong class="correctAnswer">Correct!</strong> ' +
        ' <img class="checkMark" src="img/GreenCheck.png"><br>' +  
        nextButton;
        var displayanswerw = '<img class="redX" src="img/thumbsDown.png"> <strong class="wrongAnswer">Wrong</strong> <img class="redX" src="img/thumbsDown.png">' +
                             '<h3 class="tryAgain">Guess Again!</h3>';
    if (answer1.checked === true && answer2.checked === false && answer3.checked === false){ //match true and false values to correct and incorrect answer values above.    
        document.getElementById("triviaAnswer").innerHTML = displayanswer;
        plays.correct();  
        document.getElementById("boxCorrect1").style.backgroundColor = "rgb(38, 255, 18)"; //answer1.true = boxCorrect1, answer2.true = boxWrong1, answer3.true = boxWrong2.
    }
    else if (answer1.checked === false && answer2.checked === true && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    else if (answer1.checked === false && answer2.checked === false && answer3.checked === true){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong2").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    }
    function displayAnswer4() { //change function value to match line #4 above. 
        var answerDisplay1 = document.getElementById("answer1"); 
        var answerDisplay2 = document.getElementById("answer2"); 
        var answerDisplay3 = document.getElementById("answer3"); 
        var answer1 = ' <strong class="answerMimic" id="answerCopy">482.803 km/h</strong>'; //change answer to match answer1 from above. 
        var answer2 = ' <strong class="answerMimic" id="answerCopy">563.607 km/h</strong>'; //change to answer2 from above.
        var answer3 = ' <strong class="answerMimic" id="answerCopy">325.97 km/h</strong>'; //change to answer3 from above. 
        var answer4 = ' <strong class="answerMimic" id="answerCopy"></strong>'; //leave blank so answer can clear. 
        if (answerDisplay1.checked === true){
            document.getElementById("answerCopy").innerHTML = answer1;
        }
        else if (answerDisplay2.checked === true){
            document.getElementById("answerCopy").innerHTML = answer2;
        }
        else if (answerDisplay3.checked === true){
            document.getElementById("answerCopy").innerHTML = answer3;
        }
        else{
            document.getElementById("answerCopy").innerHTML = answer4;
        }
    }
    function changePage4() { //change to new onclick id value on line #2 above.
        plays.submit(); 
        var questionNum = Number(document.getElementById("questionNumber").value);
        var nextNumber = questionNum + 1; 
        document.getElementById("questionNumber").value = nextNumber; 
        var question2 = '<strong class="question">What color is a Girraffs tounge </strong><strong class="answerMimic" id="answerCopy"></strong>'; //make new question.
        document.getElementById("trivquestion").innerHTML = question2;
        var check1 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer5(); clearButton1();">' + //change displayAnswer value.                 LINE #4
        '<input type="checkbox" class="checkBox" id="answer1"><strong class="answerText">Red</strong>'+ //change answer. 
        '<span class="boxInput" id="boxCorrect1"></span>' + 
        '</label>';
        document.getElementById("answercheck1").innerHTML = check1;
        var check2 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer5(); clearButton2();">' + //match displayAnswer value to new value. 
        '<input type="checkbox" class="checkBox" id="answer2"><strong class="answerText">Brown</strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong1"></span>' + 
        '</label>';
        document.getElementById("answercheck2").innerHTML = check2;
        var check3 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer5(); clearButton3();">' + //match displayAnswer value to new value. 
        '<input type="checkbox" class="checkBox" id="answer3"><strong class="answerText">Black</strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong2"></span>' + 
        '</label>';
        document.getElementById("answercheck3").innerHTML = check3;
        var button = '<button class="answerButton" onclick="trivia6()">Submit</button>'; //make new onclick function value.                                          LINE #5
        document.getElementById("trivbutton").innerHTML = button;
        var answer = '<p class="questionAnswer" id="triviaAnswer"></p>';
        document.getElementById("trivanswer").innerHTML = answer; 
    }



    function trivia6() { //match function value to line #5 above. 
        var answer1 = document.getElementById("answer1"); 
        var answer2 = document.getElementById("answer2"); 
        var answer3 = document.getElementById("answer3"); 
        var wrongAnswer = Number(document.getElementById("numberWrong").value);
        var nextButton = '<button class="buttonPush" onclick="changePage5();">Next Question</button>'; //change onclick Id value.                                 LINE #2
        var displayanswer = '<img class="checkMark" src="img/GreenCheck.png">' + //on last question change onclick above function to lastQuestion() and button to Finish. 
        '<strong class="correctAnswer">Correct!</strong> ' +
        ' <img class="checkMark" src="img/GreenCheck.png"><br>' +  
        nextButton;
        var displayanswerw = '<img class="redX" src="img/thumbsDown.png"> <strong class="wrongAnswer">Wrong</strong> <img class="redX" src="img/thumbsDown.png">' +
                             '<h3 class="tryAgain">Guess Again!</h3>';
    if (answer1.checked === false && answer2.checked === false && answer3.checked === true){ //match true and false values to correct and incorrect answer values above.    
        document.getElementById("triviaAnswer").innerHTML = displayanswer; 
        plays.correct(); 
        document.getElementById("boxWrong2").style.backgroundColor = "rgb(38, 255, 18)"; //answer1.true = boxCorrect1, answer2.true = boxWrong1, answer3.true = boxWrong2.
    }
    else if (answer1.checked === false && answer2.checked === true && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong(); 
    }
    else if (answer1.checked === true && answer2.checked === false && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxCorrect1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong(); 
    }
    }
    function displayAnswer5() { //change function value to match line #4 above. 
        var answerDisplay1 = document.getElementById("answer1"); 
        var answerDisplay2 = document.getElementById("answer2"); 
        var answerDisplay3 = document.getElementById("answer3"); 
        var answer1 = ' <strong class="answerMimic" id="answerCopy">Red</strong>'; //change answer to match answer1 from above. 
        var answer2 = ' <strong class="answerMimic" id="answerCopy">Brown</strong>'; //change to answer2 from above.
        var answer3 = ' <strong class="answerMimic" id="answerCopy">Black</strong>'; //change to answer3 from above. 
        var answer4 = ' <strong class="answerMimic" id="answerCopy"></strong>'; //leave blank so answer can clear. 
        if (answerDisplay1.checked === true){
            document.getElementById("answerCopy").innerHTML = answer1;
        }
        else if (answerDisplay2.checked === true){
            document.getElementById("answerCopy").innerHTML = answer2;
        }
        else if (answerDisplay3.checked === true){
            document.getElementById("answerCopy").innerHTML = answer3;
        }
        else{
            document.getElementById("answerCopy").innerHTML = answer4;
        }
    }
    function changePage5() { //change to new onclick id value on line #2 above. 
        plays.submit();
        var questionNum = Number(document.getElementById("questionNumber").value);
        var nextNumber = questionNum + 1; 
        document.getElementById("questionNumber").value = nextNumber; 
        var question2 = '<strong class="question">What is a cuddle fish </strong><strong class="answerMimic" id="answerCopy"></strong>'; //make new question.
        document.getElementById("trivquestion").innerHTML = question2;
        var check1 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer6(); clearButton1();">' + //change displayAnswer value.                 LINE #4
        '<input type="checkbox" class="checkBox" id="answer1"><strong class="answerText">Molluscs</strong>'+ //change answer. 
        '<span class="boxInput" id="boxCorrect1"></span>' + 
        '</label>';
        document.getElementById("answercheck1").innerHTML = check1;
        var check2 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer6(); clearButton2();">' + //match displayAnswer value to new value. 
        '<input type="checkbox" class="checkBox" id="answer2"><strong class="answerText">Crab</strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong1"></span>' + 
        '</label>';
        document.getElementById("answercheck2").innerHTML = check2;
        var check3 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer6(); clearButton3();">' + //match displayAnswer value to new value. 
        '<input type="checkbox" class="checkBox" id="answer3"><strong class="answerText">Shark</strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong2"></span>' + 
        '</label>';
        document.getElementById("answercheck3").innerHTML = check3;
        var button = '<button class="answerButton" onclick="trivia7()">Submit</button>'; //make new onclick function value.                                          LINE #5
        document.getElementById("trivbutton").innerHTML = button;
        var answer = '<p class="questionAnswer" id="triviaAnswer"></p>';
        document.getElementById("trivanswer").innerHTML = answer; 
    }



    function trivia7() { //match function value to line #5 above. 
        var answer1 = document.getElementById("answer1"); 
        var answer2 = document.getElementById("answer2"); 
        var answer3 = document.getElementById("answer3"); 
        var wrongAnswer = Number(document.getElementById("numberWrong").value);
        var nextButton = '<button class="buttonPush" onclick="changePage6();">Next Question</button>'; //change to new onclick Id value.                                 LINE #2
        var displayanswer = '<img class="checkMark" src="img/GreenCheck.png">' + //on last question change onclick above function to lastQuestion() and button to Finish. 
        '<strong class="correctAnswer">Correct!</strong> ' +
        ' <img class="checkMark" src="img/GreenCheck.png"><br>' +  
        nextButton;
        var displayanswerw = '<img class="redX" src="img/thumbsDown.png"> <strong class="wrongAnswer">Wrong</strong> <img class="redX" src="img/thumbsDown.png">' +
                             '<h3 class="tryAgain">Guess Again!</h3>';
    if (answer1.checked === true && answer2.checked === false && answer3.checked === false){ //match true and false values to correct and incorrect answer values above.    
        document.getElementById("triviaAnswer").innerHTML = displayanswer;
        plays.correct();  
        document.getElementById("boxCorrect1").style.backgroundColor = "rgb(38, 255, 18)"; //answer1.true = boxCorrect1, answer2.true = boxWrong1, answer3.true = boxWrong2.
    }
    else if (answer1.checked === false && answer2.checked === true && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    else if (answer1.checked === false && answer2.checked === false && answer3.checked === true){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong2").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    }
    function displayAnswer6() { //change function value to match line #4 above. 
        var answerDisplay1 = document.getElementById("answer1"); 
        var answerDisplay2 = document.getElementById("answer2"); 
        var answerDisplay3 = document.getElementById("answer3"); 
        var answer1 = ' <strong class="answerMimic" id="answerCopy">Molluscs</strong>'; //change answer to match answer1 from above. 
        var answer2 = ' <strong class="answerMimic" id="answerCopy">Crab</strong>'; //change to answer2 from above.
        var answer3 = ' <strong class="answerMimic" id="answerCopy">Shark</strong>'; //change to answer3 from above. 
        var answer4 = ' <strong class="answerMimic" id="answerCopy"></strong>'; //leave blank so answer can clear. 
        if (answerDisplay1.checked === true){
            document.getElementById("answerCopy").innerHTML = answer1;
        }
        else if (answerDisplay2.checked === true){
            document.getElementById("answerCopy").innerHTML = answer2;
        }
        else if (answerDisplay3.checked === true){
            document.getElementById("answerCopy").innerHTML = answer3;
        }
        else{
            document.getElementById("answerCopy").innerHTML = answer4;
        }
    }
    function changePage6() { //change to new onclick id value on line #2 above. 
        plays.submit();
        var questionNum = Number(document.getElementById("questionNumber").value);
        var nextNumber = questionNum + 1; 
        document.getElementById("questionNumber").value = nextNumber; 
        var question2 = '<strong class="question">Which planet is largest in our solar system? </strong><strong class="answerMimic" id="answerCopy"></strong>'; //make new question.
        document.getElementById("trivquestion").innerHTML = question2;
        var check1 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer7(); clearButton1();">' + //change displayAnswer value.                 LINE #4
        '<input type="checkbox" class="checkBox" id="answer1"><strong class="answerText">Saturn</strong>'+ //change answer. 
        '<span class="boxInput" id="boxCorrect1"></span>' + 
        '</label>';
        document.getElementById("answercheck1").innerHTML = check1;
        var check2 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer7(); clearButton2();">' + //match displayAnswer value to new value. 
        '<input type="checkbox" class="checkBox" id="answer2"><strong class="answerText">Jupiter</strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong1"></span>' + 
        '</label>';
        document.getElementById("answercheck2").innerHTML = check2;
        var check3 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer7(); clearButton3();">' + //match displayAnswer value to new value. 
        '<input type="checkbox" class="checkBox" id="answer3"><strong class="answerText">Mars</strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong2"></span>' + 
        '</label>';
        document.getElementById("answercheck3").innerHTML = check3;
        var button = '<button class="answerButton" onclick="trivia8()">Submit</button>'; //make new onclick function value.                                          LINE #5
        document.getElementById("trivbutton").innerHTML = button;
        var answer = '<p class="questionAnswer" id="triviaAnswer"></p>';
        document.getElementById("trivanswer").innerHTML = answer; 
    }




    function trivia8() { //match function value to line #5 above. 
        var answer1 = document.getElementById("answer1"); 
        var answer2 = document.getElementById("answer2"); 
        var answer3 = document.getElementById("answer3"); 
        var wrongAnswer = Number(document.getElementById("numberWrong").value);
        var nextButton = '<button class="buttonPush" onclick="changePage7();">Next Question</button>'; //change to new onclick Id value.                                 LINE #2
        var displayanswer = '<img class="checkMark" src="img/GreenCheck.png">' + //on last question change onclick above function to lastQuestion() and button to Finish. 
        '<strong class="correctAnswer">Correct!</strong> ' +
        ' <img class="checkMark" src="img/GreenCheck.png"><br>' +  
        nextButton;
        var displayanswerw = '<img class="redX" src="img/thumbsDown.png"> <strong class="wrongAnswer">Wrong</strong> <img class="redX" src="img/thumbsDown.png">' +
                             '<h3 class="tryAgain">Guess Again!</h3>';
    if (answer1.checked === false && answer2.checked === true && answer3.checked === false){ //correct answer here, match true and false values to correct and incorrect answer values above. 
        document.getElementById("triviaAnswer").innerHTML = displayanswer;  
        plays.correct();
        document.getElementById("boxWrong1").style.backgroundColor = "rgb(38, 255, 18)"; //answer1.true = boxCorrect1, answer2.true = boxWrong1, answer3.true = boxWrong2.
    }
    else if (answer1.checked === true && answer2.checked === false && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxCorrect1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    else if (answer1.checked === false && answer2.checked === false && answer3.checked === true){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong2").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    }
    function displayAnswer7() { //change function value to match line #4 above. 
        var answerDisplay1 = document.getElementById("answer1"); 
        var answerDisplay2 = document.getElementById("answer2"); 
        var answerDisplay3 = document.getElementById("answer3"); 
        var answer1 = ' <strong class="answerMimic" id="answerCopy">Saturn</strong>'; //change answer to match answer1 from above. 
        var answer2 = ' <strong class="answerMimic" id="answerCopy">Jupiter</strong>'; //change to answer2 from above.
        var answer3 = ' <strong class="answerMimic" id="answerCopy">Mars</strong>'; //change to answer3 from above. 
        var answer4 = ' <strong class="answerMimic" id="answerCopy"></strong>'; //leave blank so answer can clear. 
        if (answerDisplay1.checked === true){
            document.getElementById("answerCopy").innerHTML = answer1;
        }
        else if (answerDisplay2.checked === true){
            document.getElementById("answerCopy").innerHTML = answer2;
        }
        else if (answerDisplay3.checked === true){
            document.getElementById("answerCopy").innerHTML = answer3;
        }
        else{
            document.getElementById("answerCopy").innerHTML = answer4;
        }
    }
    function changePage7() { //change to new onclick id value on line #2 above.
        plays.submit(); 
        var questionNum = Number(document.getElementById("questionNumber").value);
        var nextNumber = questionNum + 1; 
        document.getElementById("questionNumber").value = nextNumber; 
        var question2 = '<strong class="question">What stones were used to build the pyramids of Giza? </strong><strong class="answerMimic" id="answerCopy"></strong>'; //make new question.
        document.getElementById("trivquestion").innerHTML = question2;
        var check1 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer8(); clearButton1();">' + //change displayAnswer value.                 LINE #4
        '<input type="checkbox" class="checkBox" id="answer1"><strong class="answerText">Sandstone and bluestone</strong>'+ //change answer. 
        '<span class="boxInput" id="boxCorrect1"></span>' + 
        '</label>';
        document.getElementById("answercheck1").innerHTML = check1;
        var check2 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer8(); clearButton2();">' + //match displayAnswer value to new value. 
        '<input type="checkbox" class="checkBox" id="answer2"><strong class="answerText">Limestone and sandstone</strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong1"></span>' + 
        '</label>';
        document.getElementById("answercheck2").innerHTML = check2;
        var check3 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer8(); clearButton3();">' + //match displayAnswer value to new value. 
        '<input type="checkbox" class="checkBox" id="answer3"><strong class="answerText">Limestone and granite</strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong2"></span>' + 
        '</label>';
        document.getElementById("answercheck3").innerHTML = check3;
        var button = '<button class="answerButton" onclick="trivia9()">Submit</button>'; //make new onclick function value.                                          LINE #5
        document.getElementById("trivbutton").innerHTML = button;
        var answer = '<p class="questionAnswer" id="triviaAnswer"></p>';
        document.getElementById("trivanswer").innerHTML = answer; 
    }
    



    function trivia9() { //match function value to line #5 above. 
        var answer1 = document.getElementById("answer1"); 
        var answer2 = document.getElementById("answer2"); 
        var answer3 = document.getElementById("answer3"); 
        var wrongAnswer = Number(document.getElementById("numberWrong").value);
        var nextButton = '<button class="buttonPush" onclick="changePage9();">Next Question</button>'; //change to new onclick Id value.                                 LINE #2
        var displayanswer = '<img class="checkMark" src="img/GreenCheck.png">' + //on last question change onclick above function to lastQuestion() and button to Finish. 
        '<strong class="correctAnswer">Correct!</strong> ' +
        ' <img class="checkMark" src="img/GreenCheck.png"><br>' +  
        nextButton;
        var displayanswerw = '<img class="redX" src="img/thumbsDown.png"> <strong class="wrongAnswer">Wrong</strong> <img class="redX" src="img/thumbsDown.png">' +
                             '<h3 class="tryAgain">Guess Again!</h3>';
    if (answer1.checked === false && answer2.checked === false && answer3.checked === true){ //correct answer here, match true and false values to correct and incorrect answer values above. 
        document.getElementById("triviaAnswer").innerHTML = displayanswer; 
        plays.correct(); 
        document.getElementById("boxWrong2").style.backgroundColor = "rgb(38, 255, 18)"; //answer1.true = boxCorrect1, answer2.true = boxWrong1, answer3.true = boxWrong2.
    }
    else if (answer1.checked === true && answer2.checked === false && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxCorrect1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    else if (answer1.checked === false && answer2.checked === true && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    }
    function displayAnswer8() { //change function value to match line #4 above. 
        var answerDisplay1 = document.getElementById("answer1"); 
        var answerDisplay2 = document.getElementById("answer2"); 
        var answerDisplay3 = document.getElementById("answer3"); 
        var answer1 = ' <strong class="answerMimic" id="answerCopy">Sandstone and bluestone</strong>'; //change answer to match answer1 from above. 
        var answer2 = ' <strong class="answerMimic" id="answerCopy">Limestone and sandstone</strong>'; //change to answer2 from above.
        var answer3 = ' <strong class="answerMimic" id="answerCopy">Limestone and granite</strong>'; //change to answer3 from above. 
        var answer4 = ' <strong class="answerMimic" id="answerCopy"></strong>'; //leave blank so answer can clear. 
        if (answerDisplay1.checked === true){
            document.getElementById("answerCopy").innerHTML = answer1;
        }
        else if (answerDisplay2.checked === true){
            document.getElementById("answerCopy").innerHTML = answer2;
        }
        else if (answerDisplay3.checked === true){
            document.getElementById("answerCopy").innerHTML = answer3;
        }
        else{
            document.getElementById("answerCopy").innerHTML = answer4;
        }
    }
    function changePage9() { //change to new onclick id value on line #2 above. 
        plays.submit();
        var questionNum = Number(document.getElementById("questionNumber").value);
        var nextNumber = questionNum + 1; 
        document.getElementById("questionNumber").value = nextNumber; 
        var question2 = '<strong class="question">What fish lives deepest in the ocean? </strong><strong class="answerMimic" id="answerCopy"></strong>'; //make new question.
        document.getElementById("trivquestion").innerHTML = question2;
        var check1 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer9(); clearButton1();">' + //change displayAnswer value.                 LINE #4
        '<input type="checkbox" class="checkBox" id="answer1"><strong class="answerText">Blobfish</strong>'+ //change answer. 
        '<span class="boxInput" id="boxCorrect1"></span>' + 
        '</label>';
        document.getElementById("answercheck1").innerHTML = check1;
        var check2 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer9(); clearButton2();">' + //match displayAnswer value to new value. 
        '<input type="checkbox" class="checkBox" id="answer2"><strong class="answerText">Anglerfish</strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong1"></span>' + 
        '</label>';
        document.getElementById("answercheck2").innerHTML = check2;
        var check3 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer9(); clearButton3();">' + //match displayAnswer value to new value. 
        '<input type="checkbox" class="checkBox" id="answer3"><strong class="answerText">Snailfish</strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong2"></span>' + 
        '</label>';
        document.getElementById("answercheck3").innerHTML = check3;
        var button = '<button class="answerButton" onclick="trivia10()">Submit</button>'; //make new onclick function value.                                          LINE #5
        document.getElementById("trivbutton").innerHTML = button;
        var answer = '<p class="questionAnswer" id="triviaAnswer"></p>';
        document.getElementById("trivanswer").innerHTML = answer; 
    }




    function trivia10() { //match function value to line #5 above. 
        var answer1 = document.getElementById("answer1"); 
        var answer2 = document.getElementById("answer2"); 
        var answer3 = document.getElementById("answer3"); 
        var wrongAnswer = Number(document.getElementById("numberWrong").value);
        var nextButton = '<button class="buttonPush" onclick="changePage10();">Next Question</button>'; //change to new onclick Id value.                                 LINE #2
        var displayanswer = '<img class="checkMark" src="img/GreenCheck.png">' + //on last question change onclick above function to lastQuestion() and button (Next Question) to Finish. 
        '<strong class="correctAnswer">Correct!</strong> ' +
        ' <img class="checkMark" src="img/GreenCheck.png"><br>' + 
        nextButton;
        var displayanswerw = '<img class="redX" src="img/thumbsDown.png"> <strong class="wrongAnswer">Wrong</strong> <img class="redX" src="img/thumbsDown.png">' +
                             '<h3 class="tryAgain">Guess Again!</h3>';
    if (answer1.checked === false && answer2.checked === false && answer3.checked === true){ //correct answer here, match true and false values to correct and incorrect answer values above. 
        document.getElementById("triviaAnswer").innerHTML = displayanswer;  
        plays.correct();
        document.getElementById("boxWrong2").style.backgroundColor = "rgb(38, 255, 18)"; //answer1.true = boxCorrect1, answer2.true = boxWrong1, answer3.true = boxWrong2.
    }
    else if (answer1.checked === true && answer2.checked === false && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxCorrect1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    else if (answer1.checked === false && answer2.checked === true && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    }
    function displayAnswer9() { //change function value to match line #4 above. 
        var answerDisplay1 = document.getElementById("answer1"); 
        var answerDisplay2 = document.getElementById("answer2"); 
        var answerDisplay3 = document.getElementById("answer3"); 
        var answer1 = ' <strong class="answerMimic" id="answerCopy">Blobfish</strong>'; //change answer to match answer1 from above. 
        var answer2 = ' <strong class="answerMimic" id="answerCopy">Anglerfish</strong>'; //change to answer2 from above.
        var answer3 = ' <strong class="answerMimic" id="answerCopy">Snailfish</strong>'; //change to answer3 from above. 
        var answer4 = ' <strong class="answerMimic" id="answerCopy"></strong>'; //leave blank so answer can clear. 
        if (answerDisplay1.checked === true){
            document.getElementById("answerCopy").innerHTML = answer1;
        }
        else if (answerDisplay2.checked === true){
            document.getElementById("answerCopy").innerHTML = answer2;
        }
        else if (answerDisplay3.checked === true){
            document.getElementById("answerCopy").innerHTML = answer3;
        }
        else{
            document.getElementById("answerCopy").innerHTML = answer4;
        }
    }
    function changePage10() { //change to new onclick id value on line #2 above. 
        plays.submit();
        var questionNum = Number(document.getElementById("questionNumber").value);
        var nextNumber = questionNum + 1; 
        document.getElementById("questionNumber").value = nextNumber; 
        var question2 = '<strong class="question">What is the Milky Way?</strong><strong class="answerMimic" id="answerCopy"></strong>'; //make new question.
        document.getElementById("trivquestion").innerHTML = question2;
        var check1 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer10(); clearButton1();">' + //change displayAnswer value.                 LINE #4
        '<input type="checkbox" class="checkBox" id="answer1"><strong class="answerText">A galaxy</strong>'+ //change answer. 
        '<span class="boxInput" id="boxCorrect1"></span>' + 
        '</label>';
        document.getElementById("answercheck1").innerHTML = check1;
        var check2 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer10(); clearButton2();">' + //match displayAnswer value to new value. 
        '<input type="checkbox" class="checkBox" id="answer2"><strong class="answerText">A solar system</strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong1"></span>' + 
        '</label>';
        document.getElementById("answercheck2").innerHTML = check2;
        var check3 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer10(); clearButton3();">' + //match displayAnswer value to new value. 
        '<input type="checkbox" class="checkBox" id="answer3"><strong class="answerText">A star</strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong2"></span>' + 
        '</label>';
        document.getElementById("answercheck3").innerHTML = check3;
        var button = '<button class="answerButton" onclick="trivia11()">Submit</button>'; //make new onclick function value.                                          LINE #5
        document.getElementById("trivbutton").innerHTML = button;
        var answer = '<p class="questionAnswer" id="triviaAnswer"></p>';
        document.getElementById("trivanswer").innerHTML = answer; 
    }




    function trivia11() { //match function value to line #5 above. 
        var answer1 = document.getElementById("answer1"); 
        var answer2 = document.getElementById("answer2"); 
        var answer3 = document.getElementById("answer3"); 
        var wrongAnswer = Number(document.getElementById("numberWrong").value);
        var nextButton = '<button class="buttonPush" onclick="changePage11();">Next Question</button>'; //change to new onclick Id value.                                 LINE #2
        var displayanswer = '<img class="checkMark" src="img/GreenCheck.png">' + //on last question change onclick above function to lastQuestion() and button (Next Question) to Finish. 
        '<strong class="correctAnswer">Correct!</strong> ' +
        ' <img class="checkMark" src="img/GreenCheck.png"><br>' + 
        nextButton;
        var displayanswerw = '<img class="redX" src="img/thumbsDown.png"> <strong class="wrongAnswer">Wrong</strong> <img class="redX" src="img/thumbsDown.png">' +
                             '<h3 class="tryAgain">Guess Again!</h3>';
    if (answer1.checked === true && answer2.checked === false && answer3.checked === false){ //correct answer here, match true and false values to correct and incorrect answer values above. 
        document.getElementById("triviaAnswer").innerHTML = displayanswer;  
        plays.correct();
        document.getElementById("boxCorrect1").style.backgroundColor = "rgb(38, 255, 18)"; //answer1.true = boxCorrect1, answer2.true = boxWrong1, answer3.true = boxWrong2.
    }
    else if (answer1.checked === false && answer2.checked === true && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    else if (answer1.checked === false && answer2.checked === false && answer3.checked === true){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong2").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong(); 
    }
    }
    function displayAnswer10() { //change function value to match line #4 above. 
        var answerDisplay1 = document.getElementById("answer1"); 
        var answerDisplay2 = document.getElementById("answer2"); 
        var answerDisplay3 = document.getElementById("answer3"); 
        var answer1 = ' <strong class="answerMimic" id="answerCopy">A galaxy</strong>'; //change answer to match answer1 from above. 
        var answer2 = ' <strong class="answerMimic" id="answerCopy">A solar system</strong>'; //change to answer2 from above.
        var answer3 = ' <strong class="answerMimic" id="answerCopy">A star</strong>'; //change to answer3 from above. 
        var answer4 = ' <strong class="answerMimic" id="answerCopy"></strong>'; //leave blank so answer can clear. 
        if (answerDisplay1.checked === true){
            document.getElementById("answerCopy").innerHTML = answer1;
        }
        else if (answerDisplay2.checked === true){
            document.getElementById("answerCopy").innerHTML = answer2;
        }
        else if (answerDisplay3.checked === true){
            document.getElementById("answerCopy").innerHTML = answer3;
        }
        else{
            document.getElementById("answerCopy").innerHTML = answer4;
        }
    }
    function changePage11() { //change to new onclick id value on line #2 above. 
        plays.submit();
        var questionNum = Number(document.getElementById("questionNumber").value);
        var nextNumber = questionNum + 1; 
        document.getElementById("questionNumber").value = nextNumber; 
        var question2 = '<strong class="question">What is radiums atomic number?</strong><strong class="answerMimic" id="answerCopy"></strong>'; //make new question.
        document.getElementById("trivquestion").innerHTML = question2;
        var check1 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer11(); clearButton1();">' + //change displayAnswer value.                 LINE #4
        '<input type="checkbox" class="checkBox" id="answer1"><strong class="answerText">73</strong>'+ //change answer. 
        '<span class="boxInput" id="boxCorrect1"></span>' + 
        '</label>';
        document.getElementById("answercheck1").innerHTML = check1;
        var check2 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer11(); clearButton2();">' + //match displayAnswer value to new value. 
        '<input type="checkbox" class="checkBox" id="answer2"><strong class="answerText">88</strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong1"></span>' + 
        '</label>';
        document.getElementById("answercheck2").innerHTML = check2;
        var check3 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer11(); clearButton3();">' + //match displayAnswer value to new value. 
        '<input type="checkbox" class="checkBox" id="answer3"><strong class="answerText">108</strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong2"></span>' + 
        '</label>';
        document.getElementById("answercheck3").innerHTML = check3;
        var button = '<button class="answerButton" onclick="trivia12()">Submit</button>'; //make new onclick function value.                                          LINE #5
        document.getElementById("trivbutton").innerHTML = button;
        var answer = '<p class="questionAnswer" id="triviaAnswer"></p>';
        document.getElementById("trivanswer").innerHTML = answer; 
    }




    function trivia12() { //match function value to line #5 above. 
        var answer1 = document.getElementById("answer1"); 
        var answer2 = document.getElementById("answer2"); 
        var answer3 = document.getElementById("answer3"); 
        var wrongAnswer = Number(document.getElementById("numberWrong").value);
        var nextButton = '<button class="buttonPush" onclick="changePage12();">Next Question</button>'; //change to new onclick Id value.                                 LINE #2
        var displayanswer = '<img class="checkMark" src="img/GreenCheck.png">' + //on last question change onclick above function to lastQuestion() and button (Next Question) to Finish. 
        '<strong class="correctAnswer">Correct!</strong> ' +
        ' <img class="checkMark" src="img/GreenCheck.png"><br>' + 
        nextButton;
        var displayanswerw = '<img class="redX" src="img/thumbsDown.png"> <strong class="wrongAnswer">Wrong</strong> <img class="redX" src="img/thumbsDown.png">' +
                             '<h3 class="tryAgain">Guess Again!</h3>';
    if (answer1.checked === false && answer2.checked === true && answer3.checked === false){ //correct answer here, match true and false values to correct and incorrect answer values above. 
        document.getElementById("triviaAnswer").innerHTML = displayanswer;  
        plays.correct();
        document.getElementById("boxWrong1").style.backgroundColor = "rgb(38, 255, 18)"; //answer1.true = boxCorrect1, answer2.true = boxWrong1, answer3.true = boxWrong2.
    }
    else if (answer1.checked === true && answer2.checked === false && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxCorrect1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    else if (answer1.checked === false && answer2.checked === false && answer3.checked === true){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong2").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    }
    function displayAnswer11() { //change function value to match line #4 above. 
        var answerDisplay1 = document.getElementById("answer1"); 
        var answerDisplay2 = document.getElementById("answer2"); 
        var answerDisplay3 = document.getElementById("answer3"); 
        var answer1 = ' <strong class="answerMimic" id="answerCopy">73</strong>'; //change answer to match answer1 from above. 
        var answer2 = ' <strong class="answerMimic" id="answerCopy">88</strong>'; //change to answer2 from above.
        var answer3 = ' <strong class="answerMimic" id="answerCopy">108</strong>'; //change to answer3 from above. 
        var answer4 = ' <strong class="answerMimic" id="answerCopy"></strong>'; //leave blank so answer can clear. 
        if (answerDisplay1.checked === true){
            document.getElementById("answerCopy").innerHTML = answer1;
        }
        else if (answerDisplay2.checked === true){
            document.getElementById("answerCopy").innerHTML = answer2;
        }
        else if (answerDisplay3.checked === true){
            document.getElementById("answerCopy").innerHTML = answer3;
        }
        else{
            document.getElementById("answerCopy").innerHTML = answer4;
        }
    }
    function changePage12() { //change to new onclick id value on line #2 above. 
        plays.submit();
        var questionNum = Number(document.getElementById("questionNumber").value);
        var nextNumber = questionNum + 1; 
        document.getElementById("questionNumber").value = nextNumber; 
        var question2 = '<strong class="question">How many 40lb bags are in one ton?</strong><strong class="answerMimic" id="answerCopy"></strong>'; //make new question.
        document.getElementById("trivquestion").innerHTML = question2;
        var check1 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer12(); clearButton1();">' + //change displayAnswer value.
        '<input type="checkbox" class="checkBox" id="answer1"><strong class="answerText">50</strong>'+ //change answer. 
        '<span class="boxInput" id="boxCorrect1"></span>' + 
        '</label>';
        document.getElementById("answercheck1").innerHTML = check1;
        var check2 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer12(); clearButton2();">' + //match displayAnswer value to new value. 
        '<input type="checkbox" class="checkBox" id="answer2"><strong class="answerText">40</strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong1"></span>' + 
        '</label>';
        document.getElementById("answercheck2").innerHTML = check2;
        var check3 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer12(); clearButton3();">' + //match displayAnswer value to new value.       LINE #4
        '<input type="checkbox" class="checkBox" id="answer3"><strong class="answerText">100</strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong2"></span>' + 
        '</label>';
        document.getElementById("answercheck3").innerHTML = check3;
        var button = '<button class="answerButton" onclick="trivia13()">Submit</button>'; //make new onclick function value.                                          LINE #5
        document.getElementById("trivbutton").innerHTML = button;
        var answer = '<p class="questionAnswer" id="triviaAnswer"></p>';
        document.getElementById("trivanswer").innerHTML = answer; 
    }




    function trivia13() { //match function value to line #5 above. 
        var answer1 = document.getElementById("answer1"); 
        var answer2 = document.getElementById("answer2"); 
        var answer3 = document.getElementById("answer3"); 
        var wrongAnswer = Number(document.getElementById("numberWrong").value);
        var nextButton = '<button class="buttonPush" onclick="changePage13();">Next Question</button>'; //change to new onclick Id value.                                 LINE #2
        var displayanswer = '<img class="checkMark" src="img/GreenCheck.png">' + //on last question change onclick above function to lastQuestion() and button (Next Question) to Finish. 
        '<strong class="correctAnswer">Correct!</strong> ' +
        ' <img class="checkMark" src="img/GreenCheck.png"><br>' + 
        nextButton;
        var displayanswerw = '<img class="redX" src="img/thumbsDown.png"> <strong class="wrongAnswer">Wrong</strong> <img class="redX" src="img/thumbsDown.png">' +
                             '<h3 class="tryAgain">Guess Again!</h3>';
    if (answer1.checked === true && answer2.checked === false && answer3.checked === false){ //correct answer here, match true and false values to correct and incorrect answer values above. 
        document.getElementById("triviaAnswer").innerHTML = displayanswer; 
        plays.correct(); 
        document.getElementById("boxCorrect1").style.backgroundColor = "rgb(38, 255, 18)"; //answer1.true = boxCorrect1, answer2.true = boxWrong1, answer3.true = boxWrong2.
    }
    else if (answer1.checked === false && answer2.checked === true && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    else if (answer1.checked === false && answer2.checked === false && answer3.checked === true){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong2").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    }
    function displayAnswer12() { //change function value to match line #4 above. 
        var answerDisplay1 = document.getElementById("answer1"); 
        var answerDisplay2 = document.getElementById("answer2"); 
        var answerDisplay3 = document.getElementById("answer3"); 
        var answer1 = ' <strong class="answerMimic" id="answerCopy">50</strong>'; //change answer to match answer1 from above. 
        var answer2 = ' <strong class="answerMimic" id="answerCopy">40</strong>'; //change to answer2 from above.
        var answer3 = ' <strong class="answerMimic" id="answerCopy">100</strong>'; //change to answer3 from above. 
        var answer4 = ' <strong class="answerMimic" id="answerCopy"></strong>'; //leave blank so answer can clear. 
        if (answerDisplay1.checked === true){
            document.getElementById("answerCopy").innerHTML = answer1;
        }
        else if (answerDisplay2.checked === true){
            document.getElementById("answerCopy").innerHTML = answer2;
        }
        else if (answerDisplay3.checked === true){
            document.getElementById("answerCopy").innerHTML = answer3;
        }
        else{
            document.getElementById("answerCopy").innerHTML = answer4;
        }
    }
    function changePage13() { //change to new onclick id value on line #2 above. 
        plays.submit();
        var questionNum = Number(document.getElementById("questionNumber").value);
        var nextNumber = questionNum + 1; 
        document.getElementById("questionNumber").value = nextNumber; 
        var question2 = '<strong class="question">What year was Elon Musk born?</strong><strong class="answerMimic" id="answerCopy"></strong>'; //make new question.
        document.getElementById("trivquestion").innerHTML = question2;
        var check1 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer13(); clearButton1();">' + //change displayAnswer value.
        '<input type="checkbox" class="checkBox" id="answer1"><strong class="answerText">1974</strong>'+ //change answer. 
        '<span class="boxInput" id="boxCorrect1"></span>' + 
        '</label>';
        document.getElementById("answercheck1").innerHTML = check1;
        var check2 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer13(); clearButton2();">' + //match displayAnswer value to new value. 
        '<input type="checkbox" class="checkBox" id="answer2"><strong class="answerText">1971</strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong1"></span>' + 
        '</label>';
        document.getElementById("answercheck2").innerHTML = check2;
        var check3 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer13(); clearButton3();">' + //match displayAnswer value to new value.       LINE #4
        '<input type="checkbox" class="checkBox" id="answer3"><strong class="answerText">1965</strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong2"></span>' + 
        '</label>';
        document.getElementById("answercheck3").innerHTML = check3;
        var button = '<button class="answerButton" onclick="trivia14()">Submit</button>'; //make new onclick function value.                                          LINE #5
        document.getElementById("trivbutton").innerHTML = button;
        var answer = '<p class="questionAnswer" id="triviaAnswer"></p>';
        document.getElementById("trivanswer").innerHTML = answer; 
    }




    function trivia14() { //match function value to line #5 above. 
        var answer1 = document.getElementById("answer1"); 
        var answer2 = document.getElementById("answer2"); 
        var answer3 = document.getElementById("answer3"); 
        var wrongAnswer = Number(document.getElementById("numberWrong").value);
        var nextButton = '<button class="buttonPush" onclick="changePage14();">Next Question</button>'; //change to new onclick Id value.                                 LINE #2
        var displayanswer = '<img class="checkMark" src="img/GreenCheck.png">' + //on last question change onclick above function to lastQuestion() and button (Next Question) to Finish. 
        '<strong class="correctAnswer">Correct!</strong> ' +
        ' <img class="checkMark" src="img/GreenCheck.png"><br>' + 
        nextButton;
        var displayanswerw = '<img class="redX" src="img/thumbsDown.png"> <strong class="wrongAnswer">Wrong</strong> <img class="redX" src="img/thumbsDown.png">' +
                             '<h3 class="tryAgain">Guess Again!</h3>';
    if (answer1.checked === false && answer2.checked === true && answer3.checked === false){ //correct answer here, match true and false values to correct and incorrect answer values above. 
        document.getElementById("triviaAnswer").innerHTML = displayanswer;  
        plays.correct();
        document.getElementById("boxWrong1").style.backgroundColor = "rgb(38, 255, 18)"; //answer1.true = boxCorrect1, answer2.true = boxWrong1, answer3.true = boxWrong2.
    }
    else if (answer1.checked === true && answer2.checked === false && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxCorrect1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    else if (answer1.checked === false && answer2.checked === false && answer3.checked === true){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong2").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    }
    function displayAnswer13() { //change function value to match line #4 above. 
        var answerDisplay1 = document.getElementById("answer1"); 
        var answerDisplay2 = document.getElementById("answer2"); 
        var answerDisplay3 = document.getElementById("answer3"); 
        var answer1 = ' <strong class="answerMimic" id="answerCopy">1974</strong>'; //change answer to match answer1 from above. 
        var answer2 = ' <strong class="answerMimic" id="answerCopy">1971</strong>'; //change to answer2 from above.
        var answer3 = ' <strong class="answerMimic" id="answerCopy">1965</strong>'; //change to answer3 from above. 
        var answer4 = ' <strong class="answerMimic" id="answerCopy"></strong>'; //leave blank so answer can clear. 
        if (answerDisplay1.checked === true){
            document.getElementById("answerCopy").innerHTML = answer1;
        }
        else if (answerDisplay2.checked === true){
            document.getElementById("answerCopy").innerHTML = answer2;
        }
        else if (answerDisplay3.checked === true){
            document.getElementById("answerCopy").innerHTML = answer3;
        }
        else{
            document.getElementById("answerCopy").innerHTML = answer4;
        }
    }
    function changePage14() { //change to new onclick id value on line #2 above.
        plays.submit(); 
        var questionNum = Number(document.getElementById("questionNumber").value);
        var nextNumber = questionNum + 1; 
        document.getElementById("questionNumber").value = nextNumber; 
        var question2 = '<strong class="question">What year was Jeff Bezos born?</strong><strong class="answerMimic" id="answerCopy"></strong>'; //make new question.
        document.getElementById("trivquestion").innerHTML = question2;
        var check1 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer14(); clearButton1();">' + //change displayAnswer value.
        '<input type="checkbox" class="checkBox" id="answer1"><strong class="answerText">1971</strong>'+ //change answer. 
        '<span class="boxInput" id="boxCorrect1"></span>' + 
        '</label>';
        document.getElementById("answercheck1").innerHTML = check1;
        var check2 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer14(); clearButton2();">' + //match displayAnswer value to new value. 
        '<input type="checkbox" class="checkBox" id="answer2"><strong class="answerText">1961</strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong1"></span>' + 
        '</label>';
        document.getElementById("answercheck2").innerHTML = check2;
        var check3 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer14(); clearButton3();">' + //match displayAnswer value to new value.       LINE #4
        '<input type="checkbox" class="checkBox" id="answer3"><strong class="answerText">1964</strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong2"></span>' + 
        '</label>';
        document.getElementById("answercheck3").innerHTML = check3;
        var button = '<button class="answerButton" onclick="trivia15()">Submit</button>'; //make new onclick function value.                                          LINE #5
        document.getElementById("trivbutton").innerHTML = button;
        var answer = '<p class="questionAnswer" id="triviaAnswer"></p>';
        document.getElementById("trivanswer").innerHTML = answer; 
    }




    function trivia15() { //match function value to line #5 above. 
        var answer1 = document.getElementById("answer1"); 
        var answer2 = document.getElementById("answer2"); 
        var answer3 = document.getElementById("answer3"); 
        var wrongAnswer = Number(document.getElementById("numberWrong").value);
        var nextButton = '<button class="buttonPush" onclick="changePage15();">Next Question</button>'; //change to new onclick Id value.                                 LINE #2
        var displayanswer = '<img class="checkMark" src="img/GreenCheck.png">' + //on last question change onclick above function to lastQuestion() and button (Next Question) to Finish. 
        '<strong class="correctAnswer">Correct!</strong> ' +
        ' <img class="checkMark" src="img/GreenCheck.png"><br>' + 
        nextButton;
        var displayanswerw = '<img class="redX" src="img/thumbsDown.png"> <strong class="wrongAnswer">Wrong</strong> <img class="redX" src="img/thumbsDown.png">' +
                             '<h3 class="tryAgain">Guess Again!</h3>';
    if (answer1.checked === false && answer2.checked === false && answer3.checked === true){ //correct answer here, match true and false values to correct and incorrect answer values above. 
        document.getElementById("triviaAnswer").innerHTML = displayanswer;  
        plays.correct();
        document.getElementById("boxWrong2").style.backgroundColor = "rgb(38, 255, 18)"; //answer1.true = boxCorrect1, answer2.true = boxWrong1, answer3.true = boxWrong2.
    }
    else if (answer1.checked === true && answer2.checked === false && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxCorrect1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    else if (answer1.checked === false && answer2.checked === true && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    }
    function displayAnswer14() { //change function value to match line #4 above. 
        var answerDisplay1 = document.getElementById("answer1"); 
        var answerDisplay2 = document.getElementById("answer2"); 
        var answerDisplay3 = document.getElementById("answer3"); 
        var answer1 = ' <strong class="answerMimic" id="answerCopy">1971</strong>'; //change answer to match answer1 from above. 
        var answer2 = ' <strong class="answerMimic" id="answerCopy">1961</strong>'; //change to answer2 from above.
        var answer3 = ' <strong class="answerMimic" id="answerCopy">1964</strong>'; //change to answer3 from above. 
        var answer4 = ' <strong class="answerMimic" id="answerCopy"></strong>'; //leave blank so answer can clear. 
        if (answerDisplay1.checked === true){
            document.getElementById("answerCopy").innerHTML = answer1;
        }
        else if (answerDisplay2.checked === true){
            document.getElementById("answerCopy").innerHTML = answer2;
        }
        else if (answerDisplay3.checked === true){
            document.getElementById("answerCopy").innerHTML = answer3;
        }
        else{
            document.getElementById("answerCopy").innerHTML = answer4;
        }
    }
    function changePage15() { //change to new onclick id value on line #2 above. 
        plays.submit();
        var questionNum = Number(document.getElementById("questionNumber").value);
        var nextNumber = questionNum + 1; 
        document.getElementById("questionNumber").value = nextNumber; 
        var question2 = '<strong class="question">How many miles is Mars from Earth?</strong><strong class="answerMimic" id="answerCopy"></strong>'; //make new question.
        document.getElementById("trivquestion").innerHTML = question2;
        var check1 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer15(); clearButton1();">' + //change displayAnswer value.
        '<input type="checkbox" class="checkBox" id="answer1"><strong class="answerText">226.66</strong>'+ //change answer. 
        '<span class="boxInput" id="boxCorrect1"></span>' + 
        '</label>';
        document.getElementById("answercheck1").innerHTML = check1;
        var check2 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer15(); clearButton2();">' + //match displayAnswer value to new value. 
        '<input type="checkbox" class="checkBox" id="answer2"><strong class="answerText">336.55</strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong1"></span>' + 
        '</label>';
        document.getElementById("answercheck2").innerHTML = check2;
        var check3 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer15(); clearButton3();">' + //match displayAnswer value to new value.       LINE #4
        '<input type="checkbox" class="checkBox" id="answer3"><strong class="answerText">263.64</strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong2"></span>' + 
        '</label>';
        document.getElementById("answercheck3").innerHTML = check3;
        var button = '<button class="answerButton" onclick="trivia16()">Submit</button>'; //make new onclick function value.                                          LINE #5
        document.getElementById("trivbutton").innerHTML = button;
        var answer = '<p class="questionAnswer" id="triviaAnswer"></p>';
        document.getElementById("trivanswer").innerHTML = answer; 
    }




    function trivia16() { //match function value to line #5 above. 
        var answer1 = document.getElementById("answer1"); 
        var answer2 = document.getElementById("answer2"); 
        var answer3 = document.getElementById("answer3"); 
        var wrongAnswer = Number(document.getElementById("numberWrong").value);
        var nextButton = '<button class="buttonPush" onclick="changePage16();">Next Question</button>'; //change to new onclick Id value.                                 LINE #2
        var displayanswer = '<img class="checkMark" src="img/GreenCheck.png">' + //on last question change onclick above function to lastQuestion() and button (Next Question) to Finish. 
        '<strong class="correctAnswer">Correct!</strong> ' +
        ' <img class="checkMark" src="img/GreenCheck.png"><br>' + 
        nextButton;
        var displayanswerw = '<img class="redX" src="img/thumbsDown.png"> <strong class="wrongAnswer">Wrong</strong> <img class="redX" src="img/thumbsDown.png">' +
                             '<h3 class="tryAgain">Guess Again!</h3>';
    if (answer1.checked === true && answer2.checked === false && answer3.checked === false){ //correct answer here, match true and false values to correct and incorrect answer values above. 
        document.getElementById("triviaAnswer").innerHTML = displayanswer;  
        plays.correct();
        document.getElementById("boxCorrect1").style.backgroundColor = "rgb(38, 255, 18)"; //answer1.true = boxCorrect1, answer2.true = boxWrong1, answer3.true = boxWrong2.
    }
    else if (answer1.checked === false && answer2.checked === true && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    else if (answer1.checked === false && answer2.checked === false && answer3.checked === true){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong2").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    }
    function displayAnswer15() { //change function value to match line #4 above. 
        var answerDisplay1 = document.getElementById("answer1"); 
        var answerDisplay2 = document.getElementById("answer2"); 
        var answerDisplay3 = document.getElementById("answer3"); 
        var answer1 = ' <strong class="answerMimic" id="answerCopy">266.66</strong>'; //change answer to match answer1 from above. 
        var answer2 = ' <strong class="answerMimic" id="answerCopy">336.55</strong>'; //change to answer2 from above.
        var answer3 = ' <strong class="answerMimic" id="answerCopy">263.64</strong>'; //change to answer3 from above. 
        var answer4 = ' <strong class="answerMimic" id="answerCopy"></strong>'; //leave blank so answer can clear. 
        if (answerDisplay1.checked === true){
            document.getElementById("answerCopy").innerHTML = answer1;
        }
        else if (answerDisplay2.checked === true){
            document.getElementById("answerCopy").innerHTML = answer2;
        }
        else if (answerDisplay3.checked === true){
            document.getElementById("answerCopy").innerHTML = answer3;
        }
        else{
            document.getElementById("answerCopy").innerHTML = answer4;
        }
    }
    function changePage16() { //change to new onclick id value on line #2 above. 
        plays.submit();
        var questionNum = Number(document.getElementById("questionNumber").value);
        var nextNumber = questionNum + 1; 
        document.getElementById("questionNumber").value = nextNumber; 
        var question2 = '<strong class="question">What year did Xbox launch?</strong><strong class="answerMimic" id="answerCopy"></strong>'; //make new question.
        document.getElementById("trivquestion").innerHTML = question2;
        var check1 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer16(); clearButton1();">' + //change displayAnswer value.
        '<input type="checkbox" class="checkBox" id="answer1"><strong class="answerText">2001</strong>'+ //change answer. 
        '<span class="boxInput" id="boxCorrect1"></span>' + 
        '</label>';
        document.getElementById("answercheck1").innerHTML = check1;
        var check2 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer16(); clearButton2();">' + //match displayAnswer value to new value. 
        '<input type="checkbox" class="checkBox" id="answer2"><strong class="answerText">2010</strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong1"></span>' + 
        '</label>';
        document.getElementById("answercheck2").innerHTML = check2;
        var check3 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer16(); clearButton3();">' + //match displayAnswer value to new value.       LINE #4
        '<input type="checkbox" class="checkBox" id="answer3"><strong class="answerText">1999</strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong2"></span>' + 
        '</label>';
        document.getElementById("answercheck3").innerHTML = check3;
        var button = '<button class="answerButton" onclick="trivia17()">Submit</button>'; //make new onclick function value.                                          LINE #5
        document.getElementById("trivbutton").innerHTML = button;
        var answer = '<p class="questionAnswer" id="triviaAnswer"></p>';
        document.getElementById("trivanswer").innerHTML = answer; 
    }




    function trivia17() { //match function value to line #5 above. 
        var answer1 = document.getElementById("answer1"); 
        var answer2 = document.getElementById("answer2"); 
        var answer3 = document.getElementById("answer3"); 
        var wrongAnswer = Number(document.getElementById("numberWrong").value);
        var nextButton = '<button class="buttonPush" onclick="changePage17();">Next Question</button>'; //change to new onclick Id value.                                 LINE #2
        var displayanswer = '<img class="checkMark" src="img/GreenCheck.png">' + //on last question change onclick above function to lastQuestion() and button (Next Question) to Finish. 
        '<strong class="correctAnswer">Correct!</strong> ' +
        ' <img class="checkMark" src="img/GreenCheck.png"><br>' + 
        nextButton;
        var displayanswerw = '<img class="redX" src="img/thumbsDown.png"> <strong class="wrongAnswer">Wrong</strong> <img class="redX" src="img/thumbsDown.png">' +
                             '<h3 class="tryAgain">Guess Again!</h3>';
    if (answer1.checked === true && answer2.checked === false && answer3.checked === false){ //correct answer here, match true and false values to correct and incorrect answer values above. 
        document.getElementById("triviaAnswer").innerHTML = displayanswer;  
        plays.correct();
        document.getElementById("boxCorrect1").style.backgroundColor = "rgb(38, 255, 18)"; //answer1.true = boxCorrect1, answer2.true = boxWrong1, answer3.true = boxWrong2.
    }
    else if (answer1.checked === false && answer2.checked === true && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    else if (answer1.checked === false && answer2.checked === false && answer3.checked === true){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong2").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    }
    function displayAnswer16() { //change function value to match line #4 above. 
        var answerDisplay1 = document.getElementById("answer1"); 
        var answerDisplay2 = document.getElementById("answer2"); 
        var answerDisplay3 = document.getElementById("answer3"); 
        var answer1 = ' <strong class="answerMimic" id="answerCopy">2001</strong>'; //change answer to match answer1 from above. 
        var answer2 = ' <strong class="answerMimic" id="answerCopy">2010</strong>'; //change to answer2 from above.
        var answer3 = ' <strong class="answerMimic" id="answerCopy">1999</strong>'; //change to answer3 from above. 
        var answer4 = ' <strong class="answerMimic" id="answerCopy"></strong>'; //leave blank so answer can clear. 
        if (answerDisplay1.checked === true){
            document.getElementById("answerCopy").innerHTML = answer1;
        }
        else if (answerDisplay2.checked === true){
            document.getElementById("answerCopy").innerHTML = answer2;
        }
        else if (answerDisplay3.checked === true){
            document.getElementById("answerCopy").innerHTML = answer3;
        }
        else{
            document.getElementById("answerCopy").innerHTML = answer4;
        }
    }
    function changePage17() { //change to new onclick id value on line #2 above. 
        plays.submit();
        var questionNum = Number(document.getElementById("questionNumber").value);
        var nextNumber = questionNum + 1; 
        document.getElementById("questionNumber").value = nextNumber; 
        var question2 = '<strong class="question">How long can a bolt of lightning light a light bulb?</strong><strong class="answerMimic" id="answerCopy"></strong>'; //make new question.
        document.getElementById("trivquestion").innerHTML = question2;
        var check1 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer17(); clearButton1();">' + //change displayAnswer value.
        '<input type="checkbox" class="checkBox" id="answer1"><strong class="answerText">3 years</strong>'+ //change answer. 
        '<span class="boxInput" id="boxCorrect1"></span>' + 
        '</label>';
        document.getElementById("answercheck1").innerHTML = check1;
        var check2 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer17(); clearButton2();">' + //match displayAnswer value to new value. 
        '<input type="checkbox" class="checkBox" id="answer2"><strong class="answerText">1 month</strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong1"></span>' + 
        '</label>';
        document.getElementById("answercheck2").innerHTML = check2;
        var check3 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer17(); clearButton3();">' + //match displayAnswer value to new value.       LINE #4
        '<input type="checkbox" class="checkBox" id="answer3"><strong class="answerText">3 months</strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong2"></span>' + 
        '</label>';
        document.getElementById("answercheck3").innerHTML = check3;
        var button = '<button class="answerButton" onclick="trivia18()">Submit</button>'; //make new onclick function value.                                          LINE #5
        document.getElementById("trivbutton").innerHTML = button;
        var answer = '<p class="questionAnswer" id="triviaAnswer"></p>';
        document.getElementById("trivanswer").innerHTML = answer; 
    }




    function trivia18() { //match function value to line #5 above. 
        var answer1 = document.getElementById("answer1"); 
        var answer2 = document.getElementById("answer2"); 
        var answer3 = document.getElementById("answer3"); 
        var wrongAnswer = Number(document.getElementById("numberWrong").value);
        var nextButton = '<button class="buttonPush" onclick="changePage18();">Next Question</button>'; //change to new onclick Id value.                                 LINE #2
        var displayanswer = '<img class="checkMark" src="img/GreenCheck.png">' + //on last question change onclick above function to lastQuestion() and button (Next Question) to Finish. 
        '<strong class="correctAnswer">Correct!</strong> ' +
        ' <img class="checkMark" src="img/GreenCheck.png"><br>' + 
        nextButton;
        var displayanswerw = '<img class="redX" src="img/thumbsDown.png"> <strong class="wrongAnswer">Wrong</strong> <img class="redX" src="img/thumbsDown.png">' +
                             '<h3 class="tryAgain">Guess Again!</h3>';
    if (answer1.checked === false && answer2.checked === false && answer3.checked === true){ //correct answer here, match true and false values to correct and incorrect answer values above. 
        document.getElementById("triviaAnswer").innerHTML = displayanswer;  
        plays.correct();
        document.getElementById("boxWrong2").style.backgroundColor = "rgb(38, 255, 18)"; //answer1.true = boxCorrect1, answer2.true = boxWrong1, answer3.true = boxWrong2.
    }
    else if (answer1.checked === false && answer2.checked === true && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    else if (answer1.checked === true && answer2.checked === false && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxCorrect1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    }
    function displayAnswer17() { //change function value to match line #4 above. 
        var answerDisplay1 = document.getElementById("answer1"); 
        var answerDisplay2 = document.getElementById("answer2"); 
        var answerDisplay3 = document.getElementById("answer3"); 
        var answer1 = ' <strong class="answerMimic" id="answerCopy">3 weeks</strong>'; //change answer to match answer1 from above. 
        var answer2 = ' <strong class="answerMimic" id="answerCopy">1 month</strong>'; //change to answer2 from above.
        var answer3 = ' <strong class="answerMimic" id="answerCopy">3 months</strong>'; //change to answer3 from above. 
        var answer4 = ' <strong class="answerMimic" id="answerCopy"></strong>'; //leave blank so answer can clear. 
        if (answerDisplay1.checked === true){
            document.getElementById("answerCopy").innerHTML = answer1;
        }
        else if (answerDisplay2.checked === true){
            document.getElementById("answerCopy").innerHTML = answer2;
        }
        else if (answerDisplay3.checked === true){
            document.getElementById("answerCopy").innerHTML = answer3;
        }
        else{
            document.getElementById("answerCopy").innerHTML = answer4;
        }
    }
    function changePage18() { //change to new onclick id value on line #2 above. 
        plays.submit();
        var questionNum = Number(document.getElementById("questionNumber").value);
        var nextNumber = questionNum + 1; 
        document.getElementById("questionNumber").value = nextNumber; 
        var question2 = '<strong class="question">How many letters are on an Xbox controller?</strong><strong class="answerMimic" id="answerCopy"></strong>'; //make new question.
        document.getElementById("trivquestion").innerHTML = question2;
        var check1 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer18(); clearButton1();">' + //change displayAnswer value.
        '<input type="checkbox" class="checkBox" id="answer1"><strong class="answerText">13</strong>'+ //change answer. 
        '<span class="boxInput" id="boxCorrect1"></span>' + 
        '</label>';
        document.getElementById("answercheck1").innerHTML = check1;
        var check2 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer18(); clearButton2();">' + //match displayAnswer value to new value. 
        '<input type="checkbox" class="checkBox" id="answer2"><strong class="answerText">8</strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong1"></span>' + 
        '</label>';
        document.getElementById("answercheck2").innerHTML = check2;
        var check3 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer18(); clearButton3();">' + //match displayAnswer value to new value.       LINE #4
        '<input type="checkbox" class="checkBox" id="answer3"><strong class="answerText">10</strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong2"></span>' + 
        '</label>';
        document.getElementById("answercheck3").innerHTML = check3;
        var button = '<button class="answerButton" onclick="trivia19()">Submit</button>'; //make new onclick function value.                                          LINE #5
        document.getElementById("trivbutton").innerHTML = button;
        var answer = '<p class="questionAnswer" id="triviaAnswer"></p>';
        document.getElementById("trivanswer").innerHTML = answer; 
    }




    function trivia19() { //match function value to line #5 above. 
        var answer1 = document.getElementById("answer1"); 
        var answer2 = document.getElementById("answer2"); 
        var answer3 = document.getElementById("answer3"); 
        var wrongAnswer = Number(document.getElementById("numberWrong").value);
        var nextButton = '<button class="buttonPush" onclick="changePage19();">Next Question</button>'; //change to new onclick Id value.                                 LINE #2
        var displayanswer = '<img class="checkMark" src="img/GreenCheck.png">' + //on last question change onclick above function to lastQuestion() and button (Next Question) to Finish. 
        '<strong class="correctAnswer">Correct!</strong> ' +
        ' <img class="checkMark" src="img/GreenCheck.png"><br>' + 
        nextButton;
        var displayanswerw = '<img class="redX" src="img/thumbsDown.png"> <strong class="wrongAnswer">Wrong</strong> <img class="redX" src="img/thumbsDown.png">' +
                             '<h3 class="tryAgain">Guess Again!</h3>';
    if (answer1.checked === true && answer2.checked === false && answer3.checked === false){ //correct answer here, match true and false values to correct and incorrect answer values above. 
        document.getElementById("triviaAnswer").innerHTML = displayanswer;  
        plays.correct();
        document.getElementById("boxCorrect1").style.backgroundColor = "rgb(38, 255, 18)"; //answer1.true = boxCorrect1, answer2.true = boxWrong1, answer3.true = boxWrong2.
    }
    else if (answer1.checked === false && answer2.checked === true && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    else if (answer1.checked === false && answer2.checked === false && answer3.checked === true){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong2").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    }
    function displayAnswer18() { //change function value to match line #4 above. 
        var answerDisplay1 = document.getElementById("answer1"); 
        var answerDisplay2 = document.getElementById("answer2"); 
        var answerDisplay3 = document.getElementById("answer3"); 
        var answer1 = ' <strong class="answerMimic" id="answerCopy">13</strong>'; //change answer to match answer1 from above. 
        var answer2 = ' <strong class="answerMimic" id="answerCopy">8</strong>'; //change to answer2 from above.
        var answer3 = ' <strong class="answerMimic" id="answerCopy">10</strong>'; //change to answer3 from above. 
        var answer4 = ' <strong class="answerMimic" id="answerCopy"></strong>'; //leave blank so answer can clear. 
        if (answerDisplay1.checked === true){
            document.getElementById("answerCopy").innerHTML = answer1;
        }
        else if (answerDisplay2.checked === true){
            document.getElementById("answerCopy").innerHTML = answer2;
        }
        else if (answerDisplay3.checked === true){
            document.getElementById("answerCopy").innerHTML = answer3;
        }
        else{
            document.getElementById("answerCopy").innerHTML = answer4;
        }
    }
    function changePage19() { //change to new onclick id value on line #2 above. 
        plays.submit();
        var questionNum = Number(document.getElementById("questionNumber").value);
        var nextNumber = questionNum + 1; 
        document.getElementById("questionNumber").value = nextNumber; 
        var question2 = '<strong class="question">What cryptocurrency has the largest market cap?</strong><strong class="answerMimic" id="answerCopy"></strong>'; //make new question.
        document.getElementById("trivquestion").innerHTML = question2;
        var check1 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer19(); clearButton1();">' + //change displayAnswer value.
        '<input type="checkbox" class="checkBox" id="answer1"><strong class="answerText">Ethereum</strong>'+ //change answer. 
        '<span class="boxInput" id="boxCorrect1"></span>' + 
        '</label>';
        document.getElementById("answercheck1").innerHTML = check1;
        var check2 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer19(); clearButton2();">' + //match displayAnswer value to new value. 
        '<input type="checkbox" class="checkBox" id="answer2"><strong class="answerText">Bitcoin</strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong1"></span>' + 
        '</label>';
        document.getElementById("answercheck2").innerHTML = check2;
        var check3 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer19(); clearButton3();">' + //match displayAnswer value to new value.       LINE #4
        '<input type="checkbox" class="checkBox" id="answer3"><strong class="answerText">Tether</strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong2"></span>' + 
        '</label>';
        document.getElementById("answercheck3").innerHTML = check3;
        var button = '<button class="answerButton" onclick="trivia20()">Submit</button>'; //make new onclick function value.                                          LINE #5
        document.getElementById("trivbutton").innerHTML = button;
        var answer = '<p class="questionAnswer" id="triviaAnswer"></p>';
        document.getElementById("trivanswer").innerHTML = answer; 
    }




    function trivia20() { //match function value to line #5 above. 
        var answer1 = document.getElementById("answer1"); 
        var answer2 = document.getElementById("answer2"); 
        var answer3 = document.getElementById("answer3"); 
        var wrongAnswer = Number(document.getElementById("numberWrong").value);
        var nextButton = '<button class="buttonPush" onclick="changePage20();">Next Question</button>'; //change to new onclick Id value.                                 LINE #2
        var displayanswer = '<img class="checkMark" src="img/GreenCheck.png">' + //on last question change onclick above function to lastQuestion() and button (Next Question) to Finish. 
        '<strong class="correctAnswer">Correct!</strong> ' +
        ' <img class="checkMark" src="img/GreenCheck.png"><br>' + 
        nextButton;
        var displayanswerw = '<img class="redX" src="img/thumbsDown.png"> <strong class="wrongAnswer">Wrong</strong> <img class="redX" src="img/thumbsDown.png">' +
                             '<h3 class="tryAgain">Guess Again!</h3>';
    if (answer1.checked === false && answer2.checked === true && answer3.checked === false){ //correct answer here, match true and false values to correct and incorrect answer values above. 
        document.getElementById("triviaAnswer").innerHTML = displayanswer; 
        plays.correct(); 
        document.getElementById("boxWrong1").style.backgroundColor = "rgb(38, 255, 18)"; //answer1.true = boxCorrect1, answer2.true = boxWrong1, answer3.true = boxWrong2.
    }
    else if (answer1.checked === true && answer2.checked === false && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxCorrect1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    else if (answer1.checked === false && answer2.checked === false && answer3.checked === true){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong2").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    }
    function displayAnswer19() { //change function value to match line #4 above. 
        var answerDisplay1 = document.getElementById("answer1"); 
        var answerDisplay2 = document.getElementById("answer2"); 
        var answerDisplay3 = document.getElementById("answer3"); 
        var answer1 = ' <strong class="answerMimic" id="answerCopy">Ethereum</strong>'; //change answer to match answer1 from above. 
        var answer2 = ' <strong class="answerMimic" id="answerCopy">Bitcoin</strong>'; //change to answer2 from above.
        var answer3 = ' <strong class="answerMimic" id="answerCopy">Tether</strong>'; //change to answer3 from above. 
        var answer4 = ' <strong class="answerMimic" id="answerCopy"></strong>'; //leave blank so answer can clear. 
        if (answerDisplay1.checked === true){
            document.getElementById("answerCopy").innerHTML = answer1;
        }
        else if (answerDisplay2.checked === true){
            document.getElementById("answerCopy").innerHTML = answer2;
        }
        else if (answerDisplay3.checked === true){
            document.getElementById("answerCopy").innerHTML = answer3;
        }
        else{
            document.getElementById("answerCopy").innerHTML = answer4;
        }
    }
    function changePage20() { //change to new onclick id value on line #2 above. 
        plays.submit();
        var questionNum = Number(document.getElementById("questionNumber").value);
        var nextNumber = questionNum + 1; 
        document.getElementById("questionNumber").value = nextNumber; 
        var question2 = '<strong class="question">What is the symbol for Potassium?</strong><strong class="answerMimic" id="answerCopy"></strong>'; //make new question.
        document.getElementById("trivquestion").innerHTML = question2;
        var check1 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer20(); clearButton1();">' + //change displayAnswer value.
        '<input type="checkbox" class="checkBox" id="answer1"><strong class="answerText">K</strong>'+ //change answer. 
        '<span class="boxInput" id="boxCorrect1"></span>' + 
        '</label>';
        document.getElementById("answercheck1").innerHTML = check1;
        var check2 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer20(); clearButton2();">' + //match displayAnswer value to new value. 
        '<input type="checkbox" class="checkBox" id="answer2"><strong class="answerText">P</strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong1"></span>' + 
        '</label>';
        document.getElementById("answercheck2").innerHTML = check2;
        var check3 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer20(); clearButton3();">' + //match displayAnswer value to new value.       LINE #4
        '<input type="checkbox" class="checkBox" id="answer3"><strong class="answerText">Pa</strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong2"></span>' + 
        '</label>';
        document.getElementById("answercheck3").innerHTML = check3;
        var button = '<button class="answerButton" onclick="trivia21()">Submit</button>'; //make new onclick function value.                                          LINE #5
        document.getElementById("trivbutton").innerHTML = button;
        var answer = '<p class="questionAnswer" id="triviaAnswer"></p>';
        document.getElementById("trivanswer").innerHTML = answer; 
    }




    function trivia21() { //match function value to line #5 above. 
        var answer1 = document.getElementById("answer1"); 
        var answer2 = document.getElementById("answer2"); 
        var answer3 = document.getElementById("answer3"); 
        var wrongAnswer = Number(document.getElementById("numberWrong").value);
        var nextButton = '<button class="buttonPush" onclick="changePage21();">Next Question</button>'; //change to new onclick Id value.                                 LINE #2
        var displayanswer = '<img class="checkMark" src="img/GreenCheck.png">' + //on last question change onclick above function to lastQuestion() and button (Next Question) to Finish. 
        '<strong class="correctAnswer">Correct!</strong> ' +
        ' <img class="checkMark" src="img/GreenCheck.png"><br>' + 
        nextButton;
        var displayanswerw = '<img class="redX" src="img/thumbsDown.png"> <strong class="wrongAnswer">Wrong</strong> <img class="redX" src="img/thumbsDown.png">' +
                             '<h3 class="tryAgain">Guess Again!</h3>';
    if (answer1.checked === true && answer2.checked === false && answer3.checked === false){ //correct answer here, match true and false values to correct and incorrect answer values above. 
        document.getElementById("triviaAnswer").innerHTML = displayanswer;
        plays.correct();  
        document.getElementById("boxCorrect1").style.backgroundColor = "rgb(38, 255, 18)"; //answer1.true = boxCorrect1, answer2.true = boxWrong1, answer3.true = boxWrong2.
    }
    else if (answer1.checked === false && answer2.checked === true && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    else if (answer1.checked === false && answer2.checked === false && answer3.checked === true){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong2").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    }
    function displayAnswer20() { //change function value to match line #4 above. 
        var answerDisplay1 = document.getElementById("answer1"); 
        var answerDisplay2 = document.getElementById("answer2"); 
        var answerDisplay3 = document.getElementById("answer3"); 
        var answer1 = ' <strong class="answerMimic" id="answerCopy">K</strong>'; //change answer to match answer1 from above. 
        var answer2 = ' <strong class="answerMimic" id="answerCopy">P</strong>'; //change to answer2 from above.
        var answer3 = ' <strong class="answerMimic" id="answerCopy">Pa</strong>'; //change to answer3 from above. 
        var answer4 = ' <strong class="answerMimic" id="answerCopy"></strong>'; //leave blank so answer can clear. 
        if (answerDisplay1.checked === true){
            document.getElementById("answerCopy").innerHTML = answer1;
        }
        else if (answerDisplay2.checked === true){
            document.getElementById("answerCopy").innerHTML = answer2;
        }
        else if (answerDisplay3.checked === true){
            document.getElementById("answerCopy").innerHTML = answer3;
        }
        else{
            document.getElementById("answerCopy").innerHTML = answer4;
        }
    }
    function changePage21() { //change to new onclick id value on line #2 above. 
        plays.submit();
        var questionNum = Number(document.getElementById("questionNumber").value);
        var nextNumber = questionNum + 1; 
        document.getElementById("questionNumber").value = nextNumber; 
        var question2 = '<strong class="question">It is said a cat has how many lives?</strong><strong class="answerMimic" id="answerCopy"></strong>'; //make new question.
        document.getElementById("trivquestion").innerHTML = question2;
        var check1 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer21(); clearButton1();">' + //change displayAnswer value.
        '<input type="checkbox" class="checkBox" id="answer1"><strong class="answerText">3</strong>'+ //change answer. 
        '<span class="boxInput" id="boxCorrect1"></span>' + 
        '</label>';
        document.getElementById("answercheck1").innerHTML = check1;
        var check2 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer21(); clearButton2();">' + //match displayAnswer value to new value. 
        '<input type="checkbox" class="checkBox" id="answer2"><strong class="answerText">9</strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong1"></span>' + 
        '</label>';
        document.getElementById("answercheck2").innerHTML = check2;
        var check3 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer21(); clearButton3();">' + //match displayAnswer value to new value.       LINE #4
        '<input type="checkbox" class="checkBox" id="answer3"><strong class="answerText">12</strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong2"></span>' + 
        '</label>';
        document.getElementById("answercheck3").innerHTML = check3;
        var button = '<button class="answerButton" onclick="trivia22()">Submit</button>'; //make new onclick function value.                                          LINE #5
        document.getElementById("trivbutton").innerHTML = button;
        var answer = '<p class="questionAnswer" id="triviaAnswer"></p>';
        document.getElementById("trivanswer").innerHTML = answer; 
    }




    function trivia22() { //match function value to line #5 above. 
        var answer1 = document.getElementById("answer1"); 
        var answer2 = document.getElementById("answer2"); 
        var answer3 = document.getElementById("answer3"); 
        var wrongAnswer = Number(document.getElementById("numberWrong").value);
        var nextButton = '<button class="buttonPush" onclick="changePage22();">Next Question</button>'; //change to new onclick Id value.                                 LINE #2
        var displayanswer = '<img class="checkMark" src="img/GreenCheck.png">' + //on last question change onclick above function to lastQuestion() and button (Next Question) to Finish. 
        '<strong class="correctAnswer">Correct!</strong> ' +
        ' <img class="checkMark" src="img/GreenCheck.png"><br>' + 
        nextButton;
        var displayanswerw = '<img class="redX" src="img/thumbsDown.png"> <strong class="wrongAnswer">Wrong</strong> <img class="redX" src="img/thumbsDown.png">' +
                             '<h3 class="tryAgain">Guess Again!</h3>';
    if (answer1.checked === false && answer2.checked === true && answer3.checked === false){ //correct answer here, match true and false values to correct and incorrect answer values above. 
        document.getElementById("triviaAnswer").innerHTML = displayanswer; 
        plays.correct(); 
        document.getElementById("boxWrong1").style.backgroundColor = "rgb(38, 255, 18)"; //answer1.true = boxCorrect1, answer2.true = boxWrong1, answer3.true = boxWrong2.
    }
    else if (answer1.checked === true && answer2.checked === false && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxCorrect1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    else if (answer1.checked === false && answer2.checked === false && answer3.checked === true){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong2").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    }
    function displayAnswer21() { //change function value to match line #4 above. 
        var answerDisplay1 = document.getElementById("answer1"); 
        var answerDisplay2 = document.getElementById("answer2"); 
        var answerDisplay3 = document.getElementById("answer3"); 
        var answer1 = ' <strong class="answerMimic" id="answerCopy">3</strong>'; //change answer to match answer1 from above. 
        var answer2 = ' <strong class="answerMimic" id="answerCopy">9</strong>'; //change to answer2 from above.
        var answer3 = ' <strong class="answerMimic" id="answerCopy">12</strong>'; //change to answer3 from above. 
        var answer4 = ' <strong class="answerMimic" id="answerCopy"></strong>'; //leave blank so answer can clear. 
        if (answerDisplay1.checked === true){
            document.getElementById("answerCopy").innerHTML = answer1;
        }
        else if (answerDisplay2.checked === true){
            document.getElementById("answerCopy").innerHTML = answer2;
        }
        else if (answerDisplay3.checked === true){
            document.getElementById("answerCopy").innerHTML = answer3;
        }
        else{
            document.getElementById("answerCopy").innerHTML = answer4;
        }
    }
    function changePage22() { //change to new onclick id value on line #2 above. 
        plays.submit();
        var questionNum = Number(document.getElementById("questionNumber").value);
        var nextNumber = questionNum + 1; 
        document.getElementById("questionNumber").value = nextNumber; 
        var question2 = '<strong class="question">Which is the most efficient light bulb?</strong><strong class="answerMimic" id="answerCopy"></strong>'; //make new question.
        document.getElementById("trivquestion").innerHTML = question2;
        var check1 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer22(); clearButton1();">' + //change displayAnswer value.
        '<input type="checkbox" class="checkBox" id="answer1"><strong class="answerText">Florescent</strong>'+ //change answer. 
        '<span class="boxInput" id="boxCorrect1"></span>' + 
        '</label>';
        document.getElementById("answercheck1").innerHTML = check1;
        var check2 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer22(); clearButton2();">' + //match displayAnswer value to new value. 
        '<input type="checkbox" class="checkBox" id="answer2"><strong class="answerText">Incandescent</strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong1"></span>' + 
        '</label>';
        document.getElementById("answercheck2").innerHTML = check2;
        var check3 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer22(); clearButton3();">' + //match displayAnswer value to new value.       LINE #4
        '<input type="checkbox" class="checkBox" id="answer3"><strong class="answerText">LED</strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong2"></span>' + 
        '</label>';
        document.getElementById("answercheck3").innerHTML = check3;
        var button = '<button class="answerButton" onclick="trivia23()">Submit</button>'; //make new onclick function value.                                          LINE #5
        document.getElementById("trivbutton").innerHTML = button;
        var answer = '<p class="questionAnswer" id="triviaAnswer"></p>';
        document.getElementById("trivanswer").innerHTML = answer; 
    }




    function trivia23() { //match function value to line #5 above. 
        var answer1 = document.getElementById("answer1"); 
        var answer2 = document.getElementById("answer2"); 
        var answer3 = document.getElementById("answer3"); 
        var wrongAnswer = Number(document.getElementById("numberWrong").value);
        var nextButton = '<button class="buttonPush" onclick="changePage23();">Next Question</button>'; //change to new onclick Id value.                                 LINE #2
        var displayanswer = '<img class="checkMark" src="img/GreenCheck.png">' + //on last question change onclick above function to lastQuestion() and button (Next Question) to Finish. 
        '<strong class="correctAnswer">Correct!</strong> ' +
        ' <img class="checkMark" src="img/GreenCheck.png"><br>' + 
        nextButton;
        var displayanswerw = '<img class="redX" src="img/thumbsDown.png"> <strong class="wrongAnswer">Wrong</strong> <img class="redX" src="img/thumbsDown.png">' +
                             '<h3 class="tryAgain">Guess Again!</h3>';
    if (answer1.checked === false && answer2.checked === false && answer3.checked === true){ //correct answer here, match true and false values to correct and incorrect answer values above. 
        document.getElementById("triviaAnswer").innerHTML = displayanswer;  
        plays.correct();
        document.getElementById("boxWrong2").style.backgroundColor = "rgb(38, 255, 18)"; //answer1.true = boxCorrect1, answer2.true = boxWrong1, answer3.true = boxWrong2.
    }
    else if (answer1.checked === true && answer2.checked === false && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxCorrect1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    else if (answer1.checked === false && answer2.checked === true && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    }
    function displayAnswer22() { //change function value to match line #4 above. 
        var answerDisplay1 = document.getElementById("answer1"); 
        var answerDisplay2 = document.getElementById("answer2"); 
        var answerDisplay3 = document.getElementById("answer3"); 
        var answer1 = ' <strong class="answerMimic" id="answerCopy">Florescent</strong>'; //change answer to match answer1 from above. 
        var answer2 = ' <strong class="answerMimic" id="answerCopy">Incandescent</strong>'; //change to answer2 from above.
        var answer3 = ' <strong class="answerMimic" id="answerCopy">LED</strong>'; //change to answer3 from above. 
        var answer4 = ' <strong class="answerMimic" id="answerCopy"></strong>'; //leave blank so answer can clear. 
        if (answerDisplay1.checked === true){
            document.getElementById("answerCopy").innerHTML = answer1;
        }
        else if (answerDisplay2.checked === true){
            document.getElementById("answerCopy").innerHTML = answer2;
        }
        else if (answerDisplay3.checked === true){
            document.getElementById("answerCopy").innerHTML = answer3;
        }
        else{
            document.getElementById("answerCopy").innerHTML = answer4;
        }
    }
    function changePage23() { //change to new onclick id value on line #2 above. 
        plays.submit();
        var questionNum = Number(document.getElementById("questionNumber").value);
        var nextNumber = questionNum + 1; 
        document.getElementById("questionNumber").value = nextNumber; 
        var question2 = '<strong class="question">What color is a primary color?</strong><strong class="answerMimic" id="answerCopy"></strong>'; //make new question.
        document.getElementById("trivquestion").innerHTML = question2;
        var check1 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer70(); clearButton1();">' + //change displayAnswer value.
        '<input type="checkbox" class="checkBox" id="answer1"><strong class="answerText">Purple</strong>'+ //change answer. 
        '<span class="boxInput" id="boxCorrect1"></span>' + 
        '</label>';
        document.getElementById("answercheck1").innerHTML = check1;
        var check2 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer70(); clearButton2();">' + //match displayAnswer value to new value. 
        '<input type="checkbox" class="checkBox" id="answer2"><strong class="answerText">Green</strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong1"></span>' + 
        '</label>';
        document.getElementById("answercheck2").innerHTML = check2;
        var check3 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer70(); clearButton3();">' + //match displayAnswer value to new value.       LINE #4
        '<input type="checkbox" class="checkBox" id="answer3"><strong class="answerText">Yellow</strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong2"></span>' + 
        '</label>';
        document.getElementById("answercheck3").innerHTML = check3;
        var button = '<button class="answerButton" onclick="trivia24()">Submit</button>'; //make new onclick function value.                                          LINE #5
        document.getElementById("trivbutton").innerHTML = button;
        var answer = '<p class="questionAnswer" id="triviaAnswer"></p>';
        document.getElementById("trivanswer").innerHTML = answer; 
    }




    function trivia24() { //match function value to line #5 above. 
        var answer1 = document.getElementById("answer1"); 
        var answer2 = document.getElementById("answer2"); 
        var answer3 = document.getElementById("answer3"); 
        var wrongAnswer = Number(document.getElementById("numberWrong").value);
        var nextButton = '<button class="buttonPush" onclick="changePage24();">Next Question</button>'; //change to new onclick Id value.                                 LINE #2
        var displayanswer = '<img class="checkMark" src="img/GreenCheck.png">' + //on last question change onclick above function to lastQuestion() and button (Next Question) to Finish. 
        '<strong class="correctAnswer">Correct!</strong> ' +
        ' <img class="checkMark" src="img/GreenCheck.png"><br>' + 
        nextButton;
        var displayanswerw = '<img class="redX" src="img/thumbsDown.png"> <strong class="wrongAnswer">Wrong</strong> <img class="redX" src="img/thumbsDown.png">' +
                             '<h3 class="tryAgain">Guess Again!</h3>';
    if (answer1.checked === false && answer2.checked === false && answer3.checked === true){ //correct answer here, match true and false values to correct and incorrect answer values above. 
        document.getElementById("triviaAnswer").innerHTML = displayanswer; 
        plays.correct(); 
        document.getElementById("boxWrong2").style.backgroundColor = "rgb(38, 255, 18)"; //answer1.true = boxCorrect1, answer2.true = boxWrong1, answer3.true = boxWrong2.
    }
    else if (answer1.checked === true && answer2.checked === false && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxCorrect1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    else if (answer1.checked === false && answer2.checked === true && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    }
    function displayAnswer70() { //change function value to match line #4 above. 
        var answerDisplay1 = document.getElementById("answer1"); 
        var answerDisplay2 = document.getElementById("answer2"); 
        var answerDisplay3 = document.getElementById("answer3"); 
        var answer1 = ' <strong class="answerMimic" id="answerCopy">Purple</strong>'; //change answer to match answer1 from above. 
        var answer2 = ' <strong class="answerMimic" id="answerCopy">Green</strong>'; //change to answer2 from above.
        var answer3 = ' <strong class="answerMimic" id="answerCopy">Yellow</strong>'; //change to answer3 from above. 
        var answer4 = ' <strong class="answerMimic" id="answerCopy"></strong>'; //leave blank so answer can clear. 
        if (answerDisplay1.checked === true){
            document.getElementById("answerCopy").innerHTML = answer1;
        }
        else if (answerDisplay2.checked === true){
            document.getElementById("answerCopy").innerHTML = answer2;
        }
        else if (answerDisplay3.checked === true){
            document.getElementById("answerCopy").innerHTML = answer3;
        }
        else{
            document.getElementById("answerCopy").innerHTML = answer4;
        }
    }
    function changePage24() { //change to new onclick id value on line #2 above.
        plays.submit(); 
        var questionNum = Number(document.getElementById("questionNumber").value);
        var nextNumber = questionNum + 1; 
        document.getElementById("questionNumber").value = nextNumber; 
        var question2 = '<strong class="question">What year did AL and NL baseball merge?</strong><strong class="answerMimic" id="answerCopy"></strong>'; //make new question.
        document.getElementById("trivquestion").innerHTML = question2;
        var check1 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer71(); clearButton1();">' + //change displayAnswer value.
        '<input type="checkbox" class="checkBox" id="answer1"><strong class="answerText">1993</strong>'+ //change answer. 
        '<span class="boxInput" id="boxCorrect1"></span>' + 
        '</label>';
        document.getElementById("answercheck1").innerHTML = check1;
        var check2 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer71(); clearButton2();">' + //match displayAnswer value to new value. 
        '<input type="checkbox" class="checkBox" id="answer2"><strong class="answerText">1903</strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong1"></span>' + 
        '</label>';
        document.getElementById("answercheck2").innerHTML = check2;
        var check3 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer71(); clearButton3();">' + //match displayAnswer value to new value.       LINE #4
        '<input type="checkbox" class="checkBox" id="answer3"><strong class="answerText">1839</strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong2"></span>' + 
        '</label>';
        document.getElementById("answercheck3").innerHTML = check3;
        var button = '<button class="answerButton" onclick="trivia25()">Submit</button>'; //make new onclick function value.                                          LINE #5
        document.getElementById("trivbutton").innerHTML = button;
        var answer = '<p class="questionAnswer" id="triviaAnswer"></p>';
        document.getElementById("trivanswer").innerHTML = answer; 
    }




    function trivia25() { //match function value to line #5 above. 
        var answer1 = document.getElementById("answer1"); 
        var answer2 = document.getElementById("answer2"); 
        var answer3 = document.getElementById("answer3"); 
        var wrongAnswer = Number(document.getElementById("numberWrong").value);
        var nextButton = '<button class="buttonPush" onclick="changePage25();">Next Question</button>'; //change to new onclick Id value.                                 LINE #2
        var displayanswer = '<img class="checkMark" src="img/GreenCheck.png">' + //on last question change onclick above function to lastQuestion() and button (Next Question) to Finish. 
        '<strong class="correctAnswer">Correct!</strong> ' +
        ' <img class="checkMark" src="img/GreenCheck.png"><br>' + 
        nextButton;
        var displayanswerw = '<img class="redX" src="img/thumbsDown.png"> <strong class="wrongAnswer">Wrong</strong> <img class="redX" src="img/thumbsDown.png">' +
                             '<h3 class="tryAgain">Guess Again!</h3>';
    if (answer1.checked === false && answer2.checked === true && answer3.checked === false){ //correct answer here, match true and false values to correct and incorrect answer values above. 
        document.getElementById("triviaAnswer").innerHTML = displayanswer; 
        plays.correct(); 
        document.getElementById("boxWrong1").style.backgroundColor = "rgb(38, 255, 18)"; //answer1.true = boxCorrect1, answer2.true = boxWrong1, answer3.true = boxWrong2.
    }
    else if (answer1.checked === true && answer2.checked === false && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxCorrect1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    else if (answer1.checked === false && answer2.checked === false && answer3.checked === true){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong2").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    }
    function displayAnswer71() { //change function value to match line #4 above. 
        var answerDisplay1 = document.getElementById("answer1"); 
        var answerDisplay2 = document.getElementById("answer2"); 
        var answerDisplay3 = document.getElementById("answer3"); 
        var answer1 = ' <strong class="answerMimic" id="answerCopy">1993</strong>'; //change answer to match answer1 from above. 
        var answer2 = ' <strong class="answerMimic" id="answerCopy">1903</strong>'; //change to answer2 from above.
        var answer3 = ' <strong class="answerMimic" id="answerCopy">1839</strong>'; //change to answer3 from above. 
        var answer4 = ' <strong class="answerMimic" id="answerCopy"></strong>'; //leave blank so answer can clear. 
        if (answerDisplay1.checked === true){
            document.getElementById("answerCopy").innerHTML = answer1;
        }
        else if (answerDisplay2.checked === true){
            document.getElementById("answerCopy").innerHTML = answer2;
        }
        else if (answerDisplay3.checked === true){
            document.getElementById("answerCopy").innerHTML = answer3;
        }
        else{
            document.getElementById("answerCopy").innerHTML = answer4;
        }
    }
    function changePage25() { //change to new onclick id value on line #2 above.
        plays.submit(); 
        var questionNum = Number(document.getElementById("questionNumber").value);
        var nextNumber = questionNum + 1; 
        document.getElementById("questionNumber").value = nextNumber; 
        var question2 = '<strong class="question">How deep is the Marianas Trench?</strong><strong class="answerMimic" id="answerCopy"></strong>'; //make new question.
        document.getElementById("trivquestion").innerHTML = question2;
        var check1 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer24(); clearButton1();">' + //change displayAnswer value.
        '<input type="checkbox" class="checkBox" id="answer1"><strong class="answerText">11,034m</strong>'+ //change answer. 
        '<span class="boxInput" id="boxCorrect1"></span>' + 
        '</label>';
        document.getElementById("answercheck1").innerHTML = check1;
        var check2 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer24(); clearButton2();">' + //match displayAnswer value to new value. 
        '<input type="checkbox" class="checkBox" id="answer2"><strong class="answerText">36,201m</strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong1"></span>' + 
        '</label>';
        document.getElementById("answercheck2").innerHTML = check2;
        var check3 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer24(); clearButton3();">' + //match displayAnswer value to new value.       LINE #4
        '<input type="checkbox" class="checkBox" id="answer3"><strong class="answerText">23,421m</strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong2"></span>' + 
        '</label>';
        document.getElementById("answercheck3").innerHTML = check3;
        var button = '<button class="answerButton" onclick="trivia26()">Submit</button>'; //make new onclick function value.                                          LINE #5
        document.getElementById("trivbutton").innerHTML = button;
        var answer = '<p class="questionAnswer" id="triviaAnswer"></p>';
        document.getElementById("trivanswer").innerHTML = answer; 
    }




    function trivia26() { //match function value to line #5 above. 
        var answer1 = document.getElementById("answer1"); 
        var answer2 = document.getElementById("answer2"); 
        var answer3 = document.getElementById("answer3"); 
        var wrongAnswer = Number(document.getElementById("numberWrong").value);
        var nextButton = '<button class="buttonPush" onclick="changePage26();">Next Question</button>'; //change to new onclick Id value.                                 LINE #2
        var displayanswer = '<img class="checkMark" src="img/GreenCheck.png">' + //on last question change onclick above function to lastQuestion() and button (Next Question) to Finish. 
        '<strong class="correctAnswer">Correct!</strong> ' +
        ' <img class="checkMark" src="img/GreenCheck.png"><br>' + 
        nextButton;
        var displayanswerw = '<img class="redX" src="img/thumbsDown.png"> <strong class="wrongAnswer">Wrong</strong> <img class="redX" src="img/thumbsDown.png">' +
                             '<h3 class="tryAgain">Guess Again!</h3>';
    if (answer1.checked === true && answer2.checked === false && answer3.checked === false){ //correct answer here, match true and false values to correct and incorrect answer values above. 
        document.getElementById("triviaAnswer").innerHTML = displayanswer; 
        plays.correct(); 
        document.getElementById("boxCorrect1").style.backgroundColor = "rgb(38, 255, 18)"; //answer1.true = boxCorrect1, answer2.true = boxWrong1, answer3.true = boxWrong2.
    }
    else if (answer1.checked === false && answer2.checked === true && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    else if (answer1.checked === false && answer2.checked === false && answer3.checked === true){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong2").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    }
    function displayAnswer24() { //change function value to match line #4 above. 
        var answerDisplay1 = document.getElementById("answer1"); 
        var answerDisplay2 = document.getElementById("answer2"); 
        var answerDisplay3 = document.getElementById("answer3"); 
        var answer1 = ' <strong class="answerMimic" id="answerCopy"> 11,034m </strong>'; //change answer to match answer1 from above. 
        var answer2 = ' <strong class="answerMimic" id="answerCopy"> 36,201m </strong>'; //change to answer2 from above.
        var answer3 = ' <strong class="answerMimic" id="answerCopy"> 23,421m </strong>'; //change to answer3 from above. 
        var answer4 = ' <strong class="answerMimic" id="answerCopy"></strong>'; //leave blank so answer can clear. 
        if (answerDisplay1.checked === true){
            document.getElementById("answerCopy").innerHTML = answer1;
        }
        else if (answerDisplay2.checked === true){
            document.getElementById("answerCopy").innerHTML = answer2;
        }
        else if (answerDisplay3.checked === true){
            document.getElementById("answerCopy").innerHTML = answer3;
        }
        else{
            document.getElementById("answerCopy").innerHTML = answer4;
        }
    }
    function changePage26() { //change to new onclick id value on line #2 above. 
        plays.submit();
        var questionNum = Number(document.getElementById("questionNumber").value);
        var nextNumber = questionNum + 1; 
        document.getElementById("questionNumber").value = nextNumber; 
        var question2 = '<strong class="question"> When was Bill Gates born? </strong><strong class="answerMimic" id="answerCopy"></strong>'; //make new question.
        document.getElementById("trivquestion").innerHTML = question2;
        var check1 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer25(); clearButton1();">' + //change displayAnswer value.
        '<input type="checkbox" class="checkBox" id="answer1"><strong class="answerText"> 1961 </strong>'+ //change answer. 
        '<span class="boxInput" id="boxCorrect1"></span>' + 
        '</label>';
        document.getElementById("answercheck1").innerHTML = check1;
        var check2 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer25(); clearButton2();">' + //match displayAnswer value to new value. 
        '<input type="checkbox" class="checkBox" id="answer2"><strong class="answerText"> 1955 </strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong1"></span>' + 
        '</label>';
        document.getElementById("answercheck2").innerHTML = check2;
        var check3 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer25(); clearButton3();">' + //match displayAnswer value to new value.       LINE #4
        '<input type="checkbox" class="checkBox" id="answer3"><strong class="answerText"> 1958 </strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong2"></span>' + 
        '</label>';
        document.getElementById("answercheck3").innerHTML = check3;
        var button = '<button class="answerButton" onclick="trivia27()">Submit</button>'; //make new onclick function value.                                          LINE #5
        document.getElementById("trivbutton").innerHTML = button;
        var answer = '<p class="questionAnswer" id="triviaAnswer"></p>';
        document.getElementById("trivanswer").innerHTML = answer; 
    }




    function trivia27() { //match function value to line #5 above. 
        var answer1 = document.getElementById("answer1"); 
        var answer2 = document.getElementById("answer2"); 
        var answer3 = document.getElementById("answer3"); 
        var wrongAnswer = Number(document.getElementById("numberWrong").value);
        var nextButton = '<button class="buttonPush" onclick="changePage27();">Next Question</button>'; //change to new onclick Id value.                                 LINE #2
        var displayanswer = '<img class="checkMark" src="img/GreenCheck.png">' + //on last question change onclick above function to lastQuestion() and button (Next Question) to Finish. 
        '<strong class="correctAnswer">Correct!</strong> ' +
        ' <img class="checkMark" src="img/GreenCheck.png"><br>' + 
        nextButton;
        var displayanswerw = '<img class="redX" src="img/thumbsDown.png"> <strong class="wrongAnswer">Wrong</strong> <img class="redX" src="img/thumbsDown.png">' +
                             '<h3 class="tryAgain">Guess Again!</h3>';
    if (answer1.checked === false && answer2.checked === true && answer3.checked === false){ //correct answer here, match true and false values to correct and incorrect answer values above. 
        document.getElementById("triviaAnswer").innerHTML = displayanswer; 
        plays.correct(); 
        document.getElementById("boxWrong1").style.backgroundColor = "rgb(38, 255, 18)"; //answer1.true = boxCorrect1, answer2.true = boxWrong1, answer3.true = boxWrong2.
    }
    else if (answer1.checked === true && answer2.checked === false && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxCorrect1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    else if (answer1.checked === false && answer2.checked === false && answer3.checked === true){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong2").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    }
    function displayAnswer25() { //change function value to match line #4 above. 
        var answerDisplay1 = document.getElementById("answer1"); 
        var answerDisplay2 = document.getElementById("answer2"); 
        var answerDisplay3 = document.getElementById("answer3"); 
        var answer1 = ' <strong class="answerMimic" id="answerCopy"> 1961 </strong>'; //change answer to match answer1 from above. 
        var answer2 = ' <strong class="answerMimic" id="answerCopy"> 1955 </strong>'; //change to answer2 from above.
        var answer3 = ' <strong class="answerMimic" id="answerCopy"> 1958 </strong>'; //change to answer3 from above. 
        var answer4 = ' <strong class="answerMimic" id="answerCopy"></strong>'; //leave blank so answer can clear. 
        if (answerDisplay1.checked === true){
            document.getElementById("answerCopy").innerHTML = answer1;
        }
        else if (answerDisplay2.checked === true){
            document.getElementById("answerCopy").innerHTML = answer2;
        }
        else if (answerDisplay3.checked === true){
            document.getElementById("answerCopy").innerHTML = answer3;
        }
        else{
            document.getElementById("answerCopy").innerHTML = answer4;
        }
    }
    function changePage27() { //change to new onclick id value on line #2 above. 
        plays.submit();
        var questionNum = Number(document.getElementById("questionNumber").value);
        var nextNumber = questionNum + 1; 
        document.getElementById("questionNumber").value = nextNumber; 
        var question2 = '<strong class="question"> What temperature does water freeze? </strong><strong class="answerMimic" id="answerCopy"></strong>'; //make new question.
        document.getElementById("trivquestion").innerHTML = question2;
        var check1 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer26(); clearButton1();">' + //change displayAnswer value.
        '<input type="checkbox" class="checkBox" id="answer1"><strong class="answerText"> 32F </strong>'+ //change answer. 
        '<span class="boxInput" id="boxCorrect1"></span>' + 
        '</label>';
        document.getElementById("answercheck1").innerHTML = check1;
        var check2 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer26(); clearButton2();">' + //match displayAnswer value to new value. 
        '<input type="checkbox" class="checkBox" id="answer2"><strong class="answerText"> 41F </strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong1"></span>' + 
        '</label>';
        document.getElementById("answercheck2").innerHTML = check2;
        var check3 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer26(); clearButton3();">' + //match displayAnswer value to new value.       LINE #4
        '<input type="checkbox" class="checkBox" id="answer3"><strong class="answerText"> 31F </strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong2"></span>' + 
        '</label>';
        document.getElementById("answercheck3").innerHTML = check3;
        var button = '<button class="answerButton" onclick="trivia28()">Submit</button>'; //make new onclick function value.                                          LINE #5
        document.getElementById("trivbutton").innerHTML = button;
        var answer = '<p class="questionAnswer" id="triviaAnswer"></p>';
        document.getElementById("trivanswer").innerHTML = answer; 
    }




    function trivia28() { //match function value to line #5 above. 
        var answer1 = document.getElementById("answer1"); 
        var answer2 = document.getElementById("answer2"); 
        var answer3 = document.getElementById("answer3"); 
        var wrongAnswer = Number(document.getElementById("numberWrong").value);
        var nextButton = '<button class="buttonPush" onclick="changePage28();">Next Question</button>'; //change to new onclick Id value.                                 LINE #2
        var displayanswer = '<img class="checkMark" src="img/GreenCheck.png">' + //on last question change onclick above function to lastQuestion() and button (Next Question) to Finish. 
        '<strong class="correctAnswer">Correct!</strong> ' +
        ' <img class="checkMark" src="img/GreenCheck.png"><br>' + 
        nextButton;
        var displayanswerw = '<img class="redX" src="img/thumbsDown.png"> <strong class="wrongAnswer">Wrong</strong> <img class="redX" src="img/thumbsDown.png">' +
                             '<h3 class="tryAgain">Guess Again!</h3>';
    if (answer1.checked === true && answer2.checked === false && answer3.checked === false){ //correct answer here, match true and false values to correct and incorrect answer values above. 
        document.getElementById("triviaAnswer").innerHTML = displayanswer; 
        plays.correct(); 
        document.getElementById("boxCorrect1").style.backgroundColor = "rgb(38, 255, 18)"; //answer1.true = boxCorrect1, answer2.true = boxWrong1, answer3.true = boxWrong2.
    }
    else if (answer1.checked === false && answer2.checked === true && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    else if (answer1.checked === false && answer2.checked === false && answer3.checked === true){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong2").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    }
    function displayAnswer26() { //change function value to match line #4 above. 
        var answerDisplay1 = document.getElementById("answer1"); 
        var answerDisplay2 = document.getElementById("answer2"); 
        var answerDisplay3 = document.getElementById("answer3"); 
        var answer1 = ' <strong class="answerMimic" id="answerCopy"> 32F </strong>'; //change answer to match answer1 from above. 
        var answer2 = ' <strong class="answerMimic" id="answerCopy"> 41F </strong>'; //change to answer2 from above.
        var answer3 = ' <strong class="answerMimic" id="answerCopy"> 31F </strong>'; //change to answer3 from above. 
        var answer4 = ' <strong class="answerMimic" id="answerCopy"></strong>'; //leave blank so answer can clear. 
        if (answerDisplay1.checked === true){
            document.getElementById("answerCopy").innerHTML = answer1;
        }
        else if (answerDisplay2.checked === true){
            document.getElementById("answerCopy").innerHTML = answer2;
        }
        else if (answerDisplay3.checked === true){
            document.getElementById("answerCopy").innerHTML = answer3;
        }
        else{
            document.getElementById("answerCopy").innerHTML = answer4;
        }
    }
    function changePage28() { //change to new onclick id value on line #2 above.
        plays.submit(); 
        var questionNum = Number(document.getElementById("questionNumber").value);
        var nextNumber = questionNum + 1; 
        document.getElementById("questionNumber").value = nextNumber; 
        var question2 = '<strong class="question"> What temperature does water boil? </strong><strong class="answerMimic" id="answerCopy"></strong>'; //make new question.
        document.getElementById("trivquestion").innerHTML = question2;
        var check1 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer27(); clearButton1();">' + //change displayAnswer value.
        '<input type="checkbox" class="checkBox" id="answer1"><strong class="answerText"> 212F </strong>'+ //change answer. 
        '<span class="boxInput" id="boxCorrect1"></span>' + 
        '</label>';
        document.getElementById("answercheck1").innerHTML = check1;
        var check2 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer27(); clearButton2();">' + //match displayAnswer value to new value. 
        '<input type="checkbox" class="checkBox" id="answer2"><strong class="answerText"> 200F </strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong1"></span>' + 
        '</label>';
        document.getElementById("answercheck2").innerHTML = check2;
        var check3 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer27(); clearButton3();">' + //match displayAnswer value to new value.       LINE #4
        '<input type="checkbox" class="checkBox" id="answer3"><strong class="answerText"> 214F </strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong2"></span>' + 
        '</label>';
        document.getElementById("answercheck3").innerHTML = check3;
        var button = '<button class="answerButton" onclick="trivia29()">Submit</button>'; //make new onclick function value.                                          LINE #5
        document.getElementById("trivbutton").innerHTML = button;
        var answer = '<p class="questionAnswer" id="triviaAnswer"></p>';
        document.getElementById("trivanswer").innerHTML = answer; 
    }




    function trivia29() { //match function value to line #5 above. 
        var answer1 = document.getElementById("answer1"); 
        var answer2 = document.getElementById("answer2"); 
        var answer3 = document.getElementById("answer3"); 
        var wrongAnswer = Number(document.getElementById("numberWrong").value);
        var nextButton = '<button class="buttonPush" onclick="changePage29();">Next Question</button>'; //change to new onclick Id value.                                 LINE #2
        var displayanswer = '<img class="checkMark" src="img/GreenCheck.png">' + //on last question change onclick above function to lastQuestion() and button (Next Question) to Finish. 
        '<strong class="correctAnswer">Correct!</strong> ' +
        ' <img class="checkMark" src="img/GreenCheck.png"><br>' + 
        nextButton;
        var displayanswerw = '<img class="redX" src="img/thumbsDown.png"> <strong class="wrongAnswer">Wrong</strong> <img class="redX" src="img/thumbsDown.png">' +
                             '<h3 class="tryAgain">Guess Again!</h3>';
    if (answer1.checked === true && answer2.checked === false && answer3.checked === false){ //correct answer here, match true and false values to correct and incorrect answer values above. 
        document.getElementById("triviaAnswer").innerHTML = displayanswer; 
        plays.correct(); 
        document.getElementById("boxCorrect1").style.backgroundColor = "rgb(38, 255, 18)"; //answer1.true = boxCorrect1, answer2.true = boxWrong1, answer3.true = boxWrong2.
    }
    else if (answer1.checked === false && answer2.checked === true && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    else if (answer1.checked === false && answer2.checked === false && answer3.checked === true){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong2").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    }
    function displayAnswer26() { //change function value to match line #4 above. 
        var answerDisplay1 = document.getElementById("answer1"); 
        var answerDisplay2 = document.getElementById("answer2"); 
        var answerDisplay3 = document.getElementById("answer3"); 
        var answer1 = ' <strong class="answerMimic" id="answerCopy"> 212F </strong>'; //change answer to match answer1 from above. 
        var answer2 = ' <strong class="answerMimic" id="answerCopy"> 200F </strong>'; //change to answer2 from above.
        var answer3 = ' <strong class="answerMimic" id="answerCopy"> 214F </strong>'; //change to answer3 from above. 
        var answer4 = ' <strong class="answerMimic" id="answerCopy"></strong>'; //leave blank so answer can clear. 
        if (answerDisplay1.checked === true){
            document.getElementById("answerCopy").innerHTML = answer1;
        }
        else if (answerDisplay2.checked === true){
            document.getElementById("answerCopy").innerHTML = answer2;
        }
        else if (answerDisplay3.checked === true){
            document.getElementById("answerCopy").innerHTML = answer3;
        }
        else{
            document.getElementById("answerCopy").innerHTML = answer4;
        }
    }
    function changePage29() { //change to new onclick id value on line #2 above.
        plays.submit(); 
        var questionNum = Number(document.getElementById("questionNumber").value);
        var nextNumber = questionNum + 1; 
        document.getElementById("questionNumber").value = nextNumber; 
        var question2 = '<strong class="question"> When was the first color TV released? </strong><strong class="answerMimic" id="answerCopy"></strong>'; //make new question.
        document.getElementById("trivquestion").innerHTML = question2;
        var check1 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer28(); clearButton1();">' + //change displayAnswer value.
        '<input type="checkbox" class="checkBox" id="answer1"><strong class="answerText"> 1949 </strong>'+ //change answer. 
        '<span class="boxInput" id="boxCorrect1"></span>' + 
        '</label>';
        document.getElementById("answercheck1").innerHTML = check1;
        var check2 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer28(); clearButton2();">' + //match displayAnswer value to new value. 
        '<input type="checkbox" class="checkBox" id="answer2"><strong class="answerText"> 1961 </strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong1"></span>' + 
        '</label>';
        document.getElementById("answercheck2").innerHTML = check2;
        var check3 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer28(); clearButton3();">' + //match displayAnswer value to new value.       LINE #4
        '<input type="checkbox" class="checkBox" id="answer3"><strong class="answerText"> 1953 </strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong2"></span>' + 
        '</label>';
        document.getElementById("answercheck3").innerHTML = check3;
        var button = '<button class="answerButton" onclick="trivia30()">Submit</button>'; //make new onclick function value.                                          LINE #5
        document.getElementById("trivbutton").innerHTML = button;
        var answer = '<p class="questionAnswer" id="triviaAnswer"></p>';
        document.getElementById("trivanswer").innerHTML = answer; 
    }




    function trivia30() { //match function value to line #5 above. 
        var answer1 = document.getElementById("answer1"); 
        var answer2 = document.getElementById("answer2"); 
        var answer3 = document.getElementById("answer3"); 
        var wrongAnswer = Number(document.getElementById("numberWrong").value);
        var nextButton = '<button class="buttonPush" onclick="changePage30();">Next Question</button>'; //change to new onclick Id value.                                 LINE #2
        var displayanswer = '<img class="checkMark" src="img/GreenCheck.png">' + //on last question change onclick above function to lastQuestion() and button (Next Question) to Finish. 
        '<strong class="correctAnswer">Correct!</strong> ' +
        ' <img class="checkMark" src="img/GreenCheck.png"><br>' + 
        nextButton;
        var displayanswerw = '<img class="redX" src="img/thumbsDown.png"> <strong class="wrongAnswer">Wrong</strong> <img class="redX" src="img/thumbsDown.png">' +
                             '<h3 class="tryAgain">Guess Again!</h3>';
    if (answer1.checked === false && answer2.checked === false && answer3.checked === true){ //correct answer here, match true and false values to correct and incorrect answer values above. 
        document.getElementById("triviaAnswer").innerHTML = displayanswer; 
        plays.correct(); 
        document.getElementById("boxWrong2").style.backgroundColor = "rgb(38, 255, 18)"; //answer1.true = boxCorrect1, answer2.true = boxWrong1, answer3.true = boxWrong2.
    }
    else if (answer1.checked === false && answer2.checked === true && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    else if (answer1.checked === true && answer2.checked === false && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxCorrect1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    }
    function displayAnswer28() { //change function value to match line #4 above. 
        var answerDisplay1 = document.getElementById("answer1"); 
        var answerDisplay2 = document.getElementById("answer2"); 
        var answerDisplay3 = document.getElementById("answer3"); 
        var answer1 = ' <strong class="answerMimic" id="answerCopy"> 1949 </strong>'; //change answer to match answer1 from above. 
        var answer2 = ' <strong class="answerMimic" id="answerCopy"> 1961 </strong>'; //change to answer2 from above.
        var answer3 = ' <strong class="answerMimic" id="answerCopy"> 1953 </strong>'; //change to answer3 from above. 
        var answer4 = ' <strong class="answerMimic" id="answerCopy"></strong>'; //leave blank so answer can clear. 
        if (answerDisplay1.checked === true){
            document.getElementById("answerCopy").innerHTML = answer1;
        }
        else if (answerDisplay2.checked === true){
            document.getElementById("answerCopy").innerHTML = answer2;
        }
        else if (answerDisplay3.checked === true){
            document.getElementById("answerCopy").innerHTML = answer3;
        }
        else{
            document.getElementById("answerCopy").innerHTML = answer4;
        }
    }
    function changePage30() { //change to new onclick id value on line #2 above. 
        plays.submit();
        var questionNum = Number(document.getElementById("questionNumber").value);
        var nextNumber = questionNum + 1; 
        document.getElementById("questionNumber").value = nextNumber; 
        var question2 = '<strong class="question"> When did Bitcoin start? </strong><strong class="answerMimic" id="answerCopy"></strong>'; //make new question.
        document.getElementById("trivquestion").innerHTML = question2;
        var check1 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer29(); clearButton1();">' + //change displayAnswer value.
        '<input type="checkbox" class="checkBox" id="answer1"><strong class="answerText"> 2009 </strong>'+ //change answer. 
        '<span class="boxInput" id="boxCorrect1"></span>' + 
        '</label>';
        document.getElementById("answercheck1").innerHTML = check1;
        var check2 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer29(); clearButton2();">' + //match displayAnswer value to new value. 
        '<input type="checkbox" class="checkBox" id="answer2"><strong class="answerText"> 2010 </strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong1"></span>' + 
        '</label>';
        document.getElementById("answercheck2").innerHTML = check2;
        var check3 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer29(); clearButton3();">' + //match displayAnswer value to new value.       LINE #4
        '<input type="checkbox" class="checkBox" id="answer3"><strong class="answerText"> 2007 </strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong2"></span>' + 
        '</label>';
        document.getElementById("answercheck3").innerHTML = check3;
        var button = '<button class="answerButton" onclick="trivia31()">Submit</button>'; //make new onclick function value.                                          LINE #5
        document.getElementById("trivbutton").innerHTML = button;
        var answer = '<p class="questionAnswer" id="triviaAnswer"></p>';
        document.getElementById("trivanswer").innerHTML = answer; 
    }




    function trivia31() { //match function value to line #5 above. 
        var answer1 = document.getElementById("answer1"); 
        var answer2 = document.getElementById("answer2"); 
        var answer3 = document.getElementById("answer3"); 
        var wrongAnswer = Number(document.getElementById("numberWrong").value);
        var nextButton = '<button class="buttonPush" onclick="changePage31();">Next Question</button>'; //change to new onclick Id value.                                 LINE #2
        var displayanswer = '<img class="checkMark" src="img/GreenCheck.png">' + //on last question change onclick above function to lastQuestion() and button (Next Question) to Finish. 
        '<strong class="correctAnswer">Correct!</strong> ' +
        ' <img class="checkMark" src="img/GreenCheck.png"><br>' + 
        nextButton;
        var displayanswerw = '<img class="redX" src="img/thumbsDown.png"> <strong class="wrongAnswer">Wrong</strong> <img class="redX" src="img/thumbsDown.png">' +
                             '<h3 class="tryAgain">Guess Again!</h3>';
    if (answer1.checked === true && answer2.checked === false && answer3.checked === false){ //correct answer here, match true and false values to correct and incorrect answer values above. 
        document.getElementById("triviaAnswer").innerHTML = displayanswer;
        plays.correct();  
        document.getElementById("boxCorrect1").style.backgroundColor = "rgb(38, 255, 18)"; //answer1.true = boxCorrect1, answer2.true = boxWrong1, answer3.true = boxWrong2.
    }
    else if (answer1.checked === false && answer2.checked === true && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    else if (answer1.checked === false && answer2.checked === false && answer3.checked === true){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong2").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    }
    function displayAnswer29() { //change function value to match line #4 above. 
        var answerDisplay1 = document.getElementById("answer1"); 
        var answerDisplay2 = document.getElementById("answer2"); 
        var answerDisplay3 = document.getElementById("answer3"); 
        var answer1 = ' <strong class="answerMimic" id="answerCopy"> 2009 </strong>'; //change answer to match answer1 from above. 
        var answer2 = ' <strong class="answerMimic" id="answerCopy"> 2010 </strong>'; //change to answer2 from above.
        var answer3 = ' <strong class="answerMimic" id="answerCopy"> 2007 </strong>'; //change to answer3 from above. 
        var answer4 = ' <strong class="answerMimic" id="answerCopy"></strong>'; //leave blank so answer can clear. 
        if (answerDisplay1.checked === true){
            document.getElementById("answerCopy").innerHTML = answer1;
        }
        else if (answerDisplay2.checked === true){
            document.getElementById("answerCopy").innerHTML = answer2;
        }
        else if (answerDisplay3.checked === true){
            document.getElementById("answerCopy").innerHTML = answer3;
        }
        else{
            document.getElementById("answerCopy").innerHTML = answer4;
        }
    }
    function changePage31() { //change to new onclick id value on line #2 above.
        plays.submit(); 
        var questionNum = Number(document.getElementById("questionNumber").value);
        var nextNumber = questionNum + 1; 
        document.getElementById("questionNumber").value = nextNumber; 
        var question2 = '<strong class="question"> What weed treats poison ivy? </strong><strong class="answerMimic" id="answerCopy"></strong>'; //make new question.
        document.getElementById("trivquestion").innerHTML = question2;
        var check1 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer30(); clearButton1();">' + //change displayAnswer value.
        '<input type="checkbox" class="checkBox" id="answer1"><strong class="answerText"> Ragweed </strong>'+ //change answer. 
        '<span class="boxInput" id="boxCorrect1"></span>' + 
        '</label>';
        document.getElementById("answercheck1").innerHTML = check1;
        var check2 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer30(); clearButton2();">' + //match displayAnswer value to new value. 
        '<input type="checkbox" class="checkBox" id="answer2"><strong class="answerText"> Jewelweed </strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong1"></span>' + 
        '</label>';
        document.getElementById("answercheck2").innerHTML = check2;
        var check3 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer30(); clearButton3();">' + //match displayAnswer value to new value.       LINE #4
        '<input type="checkbox" class="checkBox" id="answer3"><strong class="answerText"> Dandelions </strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong2"></span>' + 
        '</label>';
        document.getElementById("answercheck3").innerHTML = check3;
        var button = '<button class="answerButton" onclick="trivia32()">Submit</button>'; //make new onclick function value.                                          LINE #5
        document.getElementById("trivbutton").innerHTML = button;
        var answer = '<p class="questionAnswer" id="triviaAnswer"></p>';
        document.getElementById("trivanswer").innerHTML = answer; 
    }




    function trivia32() { //match function value to line #5 above. 
        var answer1 = document.getElementById("answer1"); 
        var answer2 = document.getElementById("answer2"); 
        var answer3 = document.getElementById("answer3"); 
        var wrongAnswer = Number(document.getElementById("numberWrong").value);
        var nextButton = '<button class="buttonPush" onclick="changePage32();">Next Question</button>'; //change to new onclick Id value.                                 LINE #2
        var displayanswer = '<img class="checkMark" src="img/GreenCheck.png">' + //on last question change onclick above function to lastQuestion() and button (Next Question) to Finish. 
        '<strong class="correctAnswer">Correct!</strong> ' +
        ' <img class="checkMark" src="img/GreenCheck.png"><br>' + 
        nextButton;
        var displayanswerw = '<img class="redX" src="img/thumbsDown.png"> <strong class="wrongAnswer">Wrong</strong> <img class="redX" src="img/thumbsDown.png">' +
                             '<h3 class="tryAgain">Guess Again!</h3>';
    if (answer1.checked === false && answer2.checked === true && answer3.checked === false){ //correct answer here, match true and false values to correct and incorrect answer values above. 
        document.getElementById("triviaAnswer").innerHTML = displayanswer; 
        plays.correct(); 
        document.getElementById("boxWrong1").style.backgroundColor = "rgb(38, 255, 18)"; //answer1.true = boxCorrect1, answer2.true = boxWrong1, answer3.true = boxWrong2.
    }
    else if (answer1.checked === true && answer2.checked === false && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxCorrect1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    else if (answer1.checked === false && answer2.checked === false && answer3.checked === true){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong2").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    }
    function displayAnswer30() {                                                      //change function value to match line #4 above. 
        var answerDisplay1 = document.getElementById("answer1"); 
        var answerDisplay2 = document.getElementById("answer2"); 
        var answerDisplay3 = document.getElementById("answer3"); 
        var answer1 = ' <strong class="answerMimic" id="answerCopy"> Ragweed </strong>'; //change answer to match answer1 from above. 
        var answer2 = ' <strong class="answerMimic" id="answerCopy"> Jewelweed </strong>'; //change to answer2 from above.
        var answer3 = ' <strong class="answerMimic" id="answerCopy"> Dandelions </strong>'; //change to answer3 from above. 
        var answer4 = ' <strong class="answerMimic" id="answerCopy"></strong>'; //leave blank so answer can clear. 
        if (answerDisplay1.checked === true){
            document.getElementById("answerCopy").innerHTML = answer1;
        }
        else if (answerDisplay2.checked === true){
            document.getElementById("answerCopy").innerHTML = answer2;
        }
        else if (answerDisplay3.checked === true){
            document.getElementById("answerCopy").innerHTML = answer3;
        }
        else{
            document.getElementById("answerCopy").innerHTML = answer4;
        }
    }
    function changePage32() {           
        plays.submit();                                                       //change to new onclick id value on line #2 above. 
        var questionNum = Number(document.getElementById("questionNumber").value);
        var nextNumber = questionNum + 1; 
        document.getElementById("questionNumber").value = nextNumber; 
        var question2 = '<strong class="question"> What country gifted the USA the Statue of Liberty? </strong><strong class="answerMimic" id="answerCopy"></strong>'; //make new question.
        document.getElementById("trivquestion").innerHTML = question2;
        var check1 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer31(); clearButton1();">' + //change displayAnswer value.
        '<input type="checkbox" class="checkBox" id="answer1"><strong class="answerText"> Russia </strong>'+ //change answer. 
        '<span class="boxInput" id="boxCorrect1"></span>' + 
        '</label>';
        document.getElementById("answercheck1").innerHTML = check1;
        var check2 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer31(); clearButton2();">' + //match displayAnswer value to new value. 
        '<input type="checkbox" class="checkBox" id="answer2"><strong class="answerText"> Africa </strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong1"></span>' + 
        '</label>';
        document.getElementById("answercheck2").innerHTML = check2;
        var check3 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer31(); clearButton3();">' + //match displayAnswer value to new value.       LINE #4
        '<input type="checkbox" class="checkBox" id="answer3"><strong class="answerText"> France </strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong2"></span>' + 
        '</label>';
        document.getElementById("answercheck3").innerHTML = check3;
        var button = '<button class="answerButton" onclick="trivia33()">Submit</button>'; //make new onclick function value.                                          LINE #5
        document.getElementById("trivbutton").innerHTML = button;
        var answer = '<p class="questionAnswer" id="triviaAnswer"></p>';
        document.getElementById("trivanswer").innerHTML = answer; 
    }




    function trivia33() { //match function value to line #5 above. 
        var answer1 = document.getElementById("answer1"); 
        var answer2 = document.getElementById("answer2"); 
        var answer3 = document.getElementById("answer3"); 
        var wrongAnswer = Number(document.getElementById("numberWrong").value);
        var nextButton = '<button class="buttonPush" onclick="changePage33();">Next Question</button>'; //change to new onclick Id value.                                 LINE #2
        var displayanswer = '<img class="checkMark" src="img/GreenCheck.png">' + //on last question change onclick above function to lastQuestion() and button (Next Question) to Finish. 
        '<strong class="correctAnswer">Correct!</strong> ' +
        ' <img class="checkMark" src="img/GreenCheck.png"><br>' + 
        nextButton;
        var displayanswerw = '<img class="redX" src="img/thumbsDown.png"> <strong class="wrongAnswer">Wrong</strong> <img class="redX" src="img/thumbsDown.png">' +
                             '<h3 class="tryAgain">Guess Again!</h3>';
    if (answer1.checked === false && answer2.checked === false && answer3.checked === true){ //correct answer here, match true and false values to correct and incorrect answer values above. 
        document.getElementById("triviaAnswer").innerHTML = displayanswer; 
        plays.correct(); 
        document.getElementById("boxWrong2").style.backgroundColor = "rgb(38, 255, 18)"; //answer1.true = boxCorrect1, answer2.true = boxWrong1, answer3.true = boxWrong2.
    }
    else if (answer1.checked === true && answer2.checked === false && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxCorrect1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    else if (answer1.checked === false && answer2.checked === true && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    }
    function displayAnswer31() {                                                      //change function value to match line #4 above. 
        var answerDisplay1 = document.getElementById("answer1"); 
        var answerDisplay2 = document.getElementById("answer2"); 
        var answerDisplay3 = document.getElementById("answer3"); 
        var answer1 = ' <strong class="answerMimic" id="answerCopy"> Russia </strong>'; //change answer to match answer1 from above. 
        var answer2 = ' <strong class="answerMimic" id="answerCopy"> Africa </strong>'; //change to answer2 from above.
        var answer3 = ' <strong class="answerMimic" id="answerCopy"> France </strong>'; //change to answer3 from above. 
        var answer4 = ' <strong class="answerMimic" id="answerCopy"></strong>'; //leave blank so answer can clear. 
        if (answerDisplay1.checked === true){
            document.getElementById("answerCopy").innerHTML = answer1;
        }
        else if (answerDisplay2.checked === true){
            document.getElementById("answerCopy").innerHTML = answer2;
        }
        else if (answerDisplay3.checked === true){
            document.getElementById("answerCopy").innerHTML = answer3;
        }
        else{
            document.getElementById("answerCopy").innerHTML = answer4;
        }
    }
    function changePage33() {     
        plays.submit();                                                             //change to new onclick id value on line #2 above. 
        var questionNum = Number(document.getElementById("questionNumber").value);
        var nextNumber = questionNum + 1; 
        document.getElementById("questionNumber").value = nextNumber; 
        var question2 = '<strong class="question"> What year was Apple founded? </strong><strong class="answerMimic" id="answerCopy"></strong>'; //make new question.
        document.getElementById("trivquestion").innerHTML = question2;
        var check1 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer32(); clearButton1();">' + //change displayAnswer value.
        '<input type="checkbox" class="checkBox" id="answer1"><strong class="answerText"> 1976 </strong>'+ //change answer. 
        '<span class="boxInput" id="boxCorrect1"></span>' + 
        '</label>';
        document.getElementById("answercheck1").innerHTML = check1;
        var check2 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer32(); clearButton2();">' + //match displayAnswer value to new value. 
        '<input type="checkbox" class="checkBox" id="answer2"><strong class="answerText"> 1968 </strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong1"></span>' + 
        '</label>';
        document.getElementById("answercheck2").innerHTML = check2;
        var check3 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer32(); clearButton3();">' + //match displayAnswer value to new value.       LINE #4
        '<input type="checkbox" class="checkBox" id="answer3"><strong class="answerText"> 1983 </strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong2"></span>' + 
        '</label>';
        document.getElementById("answercheck3").innerHTML = check3;
        var button = '<button class="answerButton" onclick="trivia34()">Submit</button>'; //make new onclick function value.                                          LINE #5
        document.getElementById("trivbutton").innerHTML = button;
        var answer = '<p class="questionAnswer" id="triviaAnswer"></p>';
        document.getElementById("trivanswer").innerHTML = answer; 
    }




    function trivia34() { //match function value to line #5 above. 
        var answer1 = document.getElementById("answer1"); 
        var answer2 = document.getElementById("answer2"); 
        var answer3 = document.getElementById("answer3"); 
        var wrongAnswer = Number(document.getElementById("numberWrong").value);
        var nextButton = '<button class="buttonPush" onclick="changePage34();">Next Question</button>'; //change to new onclick Id value.                                 LINE #2
        var displayanswer = '<img class="checkMark" src="img/GreenCheck.png">' + //on last question change onclick above function to lastQuestion() and button (Next Question) to Finish. 
        '<strong class="correctAnswer">Correct!</strong> ' +
        ' <img class="checkMark" src="img/GreenCheck.png"><br>' + 
        nextButton;
        var displayanswerw = '<img class="redX" src="img/thumbsDown.png"> <strong class="wrongAnswer">Wrong</strong> <img class="redX" src="img/thumbsDown.png">' +
                             '<h3 class="tryAgain">Guess Again!</h3>';
    if (answer1.checked === true && answer2.checked === false && answer3.checked === false){ //correct answer here, match true and false values to correct and incorrect answer values above. 
        document.getElementById("triviaAnswer").innerHTML = displayanswer; 
        plays.correct(); 
        document.getElementById("boxCorrect1").style.backgroundColor = "rgb(38, 255, 18)"; //answer1.true = boxCorrect1, answer2.true = boxWrong1, answer3.true = boxWrong2.
    }
    else if (answer1.checked === false && answer2.checked === true && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    else if (answer1.checked === false && answer2.checked === false && answer3.checked === true){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong2").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    }
    function displayAnswer32() {                                                      //change function value to match line #4 above. 
        var answerDisplay1 = document.getElementById("answer1"); 
        var answerDisplay2 = document.getElementById("answer2"); 
        var answerDisplay3 = document.getElementById("answer3"); 
        var answer1 = ' <strong class="answerMimic" id="answerCopy"> 1976 </strong>'; //change answer to match answer1 from above. 
        var answer2 = ' <strong class="answerMimic" id="answerCopy"> 1968 </strong>'; //change to answer2 from above.
        var answer3 = ' <strong class="answerMimic" id="answerCopy"> 1983 </strong>'; //change to answer3 from above. 
        var answer4 = ' <strong class="answerMimic" id="answerCopy"></strong>'; //leave blank so answer can clear. 
        if (answerDisplay1.checked === true){
            document.getElementById("answerCopy").innerHTML = answer1;
        }
        else if (answerDisplay2.checked === true){
            document.getElementById("answerCopy").innerHTML = answer2;
        }
        else if (answerDisplay3.checked === true){
            document.getElementById("answerCopy").innerHTML = answer3;
        }
        else{
            document.getElementById("answerCopy").innerHTML = answer4;
        }
    }
    function changePage34() {         
        plays.submit();                                                         //change to new onclick id value on line #2 above. 
        var questionNum = Number(document.getElementById("questionNumber").value);
        var nextNumber = questionNum + 1; 
        document.getElementById("questionNumber").value = nextNumber; 
        var question2 = '<strong class="question"> When was Nintendo founded? </strong><strong class="answerMimic" id="answerCopy"></strong>'; //make new question.
        document.getElementById("trivquestion").innerHTML = question2;
        var check1 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer33(); clearButton1();">' + //change displayAnswer value.
        '<input type="checkbox" class="checkBox" id="answer1"><strong class="answerText"> 1889 </strong>'+ //change answer. 
        '<span class="boxInput" id="boxCorrect1"></span>' + 
        '</label>';
        document.getElementById("answercheck1").innerHTML = check1;
        var check2 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer33(); clearButton2();">' + //match displayAnswer value to new value. 
        '<input type="checkbox" class="checkBox" id="answer2"><strong class="answerText"> 1958 </strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong1"></span>' + 
        '</label>';
        document.getElementById("answercheck2").innerHTML = check2;
        var check3 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer33(); clearButton3();">' + //match displayAnswer value to new value.       LINE #4
        '<input type="checkbox" class="checkBox" id="answer3"><strong class="answerText"> 1973 </strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong2"></span>' + 
        '</label>';
        document.getElementById("answercheck3").innerHTML = check3;
        var button = '<button class="answerButton" onclick="trivia35()">Submit</button>'; //make new onclick function value.                                          LINE #5
        document.getElementById("trivbutton").innerHTML = button;
        var answer = '<p class="questionAnswer" id="triviaAnswer"></p>';
        document.getElementById("trivanswer").innerHTML = answer; 
    }




    function trivia35() { //match function value to line #5 above. 
        var answer1 = document.getElementById("answer1"); 
        var answer2 = document.getElementById("answer2"); 
        var answer3 = document.getElementById("answer3"); 
        var wrongAnswer = Number(document.getElementById("numberWrong").value);
        var nextButton = '<button class="buttonPush" onclick="changePage35();">Next Question</button>'; //change to new onclick Id value.                                 LINE #2
        var displayanswer = '<img class="checkMark" src="img/GreenCheck.png">' + //on last question change onclick above function to lastQuestion() and button (Next Question) to Finish. 
        '<strong class="correctAnswer">Correct!</strong> ' +
        ' <img class="checkMark" src="img/GreenCheck.png"><br>' + 
        nextButton;
        var displayanswerw = '<img class="redX" src="img/thumbsDown.png"> <strong class="wrongAnswer">Wrong</strong> <img class="redX" src="img/thumbsDown.png">' +
                             '<h3 class="tryAgain">Guess Again!</h3>';
    if (answer1.checked === true && answer2.checked === false && answer3.checked === false){ //correct answer here, match true and false values to correct and incorrect answer values above. 
        document.getElementById("triviaAnswer").innerHTML = displayanswer;  
        plays.correct();
        document.getElementById("boxCorrect1").style.backgroundColor = "rgb(38, 255, 18)"; //answer1.true = boxCorrect1, answer2.true = boxWrong1, answer3.true = boxWrong2.
    }
    else if (answer1.checked === false && answer2.checked === true && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    else if (answer1.checked === false && answer2.checked === false && answer3.checked === true){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong2").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    }
    function displayAnswer33() {                                                      //change function value to match line #4 above. 
        var answerDisplay1 = document.getElementById("answer1"); 
        var answerDisplay2 = document.getElementById("answer2"); 
        var answerDisplay3 = document.getElementById("answer3"); 
        var answer1 = ' <strong class="answerMimic" id="answerCopy"> 1889 </strong>'; //change answer to match answer1 from above. 
        var answer2 = ' <strong class="answerMimic" id="answerCopy"> 1958 </strong>'; //change to answer2 from above.
        var answer3 = ' <strong class="answerMimic" id="answerCopy"> 1973 </strong>'; //change to answer3 from above. 
        var answer4 = ' <strong class="answerMimic" id="answerCopy"></strong>'; //leave blank so answer can clear. 
        if (answerDisplay1.checked === true){
            document.getElementById("answerCopy").innerHTML = answer1;
        }
        else if (answerDisplay2.checked === true){
            document.getElementById("answerCopy").innerHTML = answer2;
        }
        else if (answerDisplay3.checked === true){
            document.getElementById("answerCopy").innerHTML = answer3;
        }
        else{
            document.getElementById("answerCopy").innerHTML = answer4;
        }
    }
    function changePage35() {   
        plays.submit();                                                               //change to new onclick id value on line #2 above. 
        var questionNum = Number(document.getElementById("questionNumber").value);
        var nextNumber = questionNum + 1; 
        document.getElementById("questionNumber").value = nextNumber; 
        var question2 = '<strong class="question"> When was Nikola Tesla born? </strong><strong class="answerMimic" id="answerCopy"></strong>'; //make new question.
        document.getElementById("trivquestion").innerHTML = question2;
        var check1 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer34(); clearButton1();">' + //change displayAnswer value.
        '<input type="checkbox" class="checkBox" id="answer1"><strong class="answerText"> 1863 </strong>'+ //change answer. 
        '<span class="boxInput" id="boxCorrect1"></span>' + 
        '</label>';
        document.getElementById("answercheck1").innerHTML = check1;
        var check2 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer34(); clearButton2();">' + //match displayAnswer value to new value. 
        '<input type="checkbox" class="checkBox" id="answer2"><strong class="answerText"> 1856 </strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong1"></span>' + 
        '</label>';
        document.getElementById("answercheck2").innerHTML = check2;
        var check3 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer34(); clearButton3();">' + //match displayAnswer value to new value.       LINE #4
        '<input type="checkbox" class="checkBox" id="answer3"><strong class="answerText"> 1910 </strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong2"></span>' + 
        '</label>';
        document.getElementById("answercheck3").innerHTML = check3;
        var button = '<button class="answerButton" onclick="trivia36()">Submit</button>'; //make new onclick function value.                                          LINE #5
        document.getElementById("trivbutton").innerHTML = button;
        var answer = '<p class="questionAnswer" id="triviaAnswer"></p>';
        document.getElementById("trivanswer").innerHTML = answer; 
    }




    function trivia36() { //match function value to line #5 above. 
        var answer1 = document.getElementById("answer1"); 
        var answer2 = document.getElementById("answer2"); 
        var answer3 = document.getElementById("answer3"); 
        var wrongAnswer = Number(document.getElementById("numberWrong").value);
        var nextButton = '<button class="buttonPush" onclick="changePage36();">Next Question</button>'; //change to new onclick Id value.                                 LINE #2
        var displayanswer = '<img class="checkMark" src="img/GreenCheck.png">' + //on last question change onclick above function to lastQuestion() and button (Next Question) to Finish. 
        '<strong class="correctAnswer">Correct!</strong> ' +
        ' <img class="checkMark" src="img/GreenCheck.png"><br>' + 
        nextButton;
        var displayanswerw = '<img class="redX" src="img/thumbsDown.png"> <strong class="wrongAnswer">Wrong</strong> <img class="redX" src="img/thumbsDown.png">' +
                             '<h3 class="tryAgain">Guess Again!</h3>';
    if (answer1.checked === false && answer2.checked === true && answer3.checked === false){ //correct answer here, match true and false values to correct and incorrect answer values above. 
        document.getElementById("triviaAnswer").innerHTML = displayanswer;  
        plays.correct();
        document.getElementById("boxWrong1").style.backgroundColor = "rgb(38, 255, 18)"; //answer1.true = boxCorrect1, answer2.true = boxWrong1, answer3.true = boxWrong2.
    }
    else if (answer1.checked === true && answer2.checked === false && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxCorrect1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    else if (answer1.checked === false && answer2.checked === false && answer3.checked === true){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong2").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    }
    function displayAnswer34() {                                                      //change function value to match line #4 above. 
        var answerDisplay1 = document.getElementById("answer1"); 
        var answerDisplay2 = document.getElementById("answer2"); 
        var answerDisplay3 = document.getElementById("answer3"); 
        var answer1 = ' <strong class="answerMimic" id="answerCopy"> 1863 </strong>'; //change answer to match answer1 from above. 
        var answer2 = ' <strong class="answerMimic" id="answerCopy"> 1856 </strong>'; //change to answer2 from above.
        var answer3 = ' <strong class="answerMimic" id="answerCopy"> 1910 </strong>'; //change to answer3 from above. 
        var answer4 = ' <strong class="answerMimic" id="answerCopy"></strong>'; //leave blank so answer can clear. 
        if (answerDisplay1.checked === true){
            document.getElementById("answerCopy").innerHTML = answer1;
        }
        else if (answerDisplay2.checked === true){
            document.getElementById("answerCopy").innerHTML = answer2;
        }
        else if (answerDisplay3.checked === true){
            document.getElementById("answerCopy").innerHTML = answer3;
        }
        else{
            document.getElementById("answerCopy").innerHTML = answer4;
        }
    }
    function changePage36() {
        plays.submit();                                                                  //change to new onclick id value on line #2 above. 
        var questionNum = Number(document.getElementById("questionNumber").value);
        var nextNumber = questionNum + 1; 
        document.getElementById("questionNumber").value = nextNumber; 
        var question2 = '<strong class="question"> How big does the Muhlenberg turtle grow? </strong><strong class="answerMimic" id="answerCopy"></strong>'; //make new question.
        document.getElementById("trivquestion").innerHTML = question2;
        var check1 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer35(); clearButton1();">' + //change displayAnswer value.
        '<input type="checkbox" class="checkBox" id="answer1"><strong class="answerText"> 2-3 feet </strong>'+ //change answer. 
        '<span class="boxInput" id="boxCorrect1"></span>' + 
        '</label>';
        document.getElementById("answercheck1").innerHTML = check1;
        var check2 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer35(); clearButton2();">' + //match displayAnswer value to new value. 
        '<input type="checkbox" class="checkBox" id="answer2"><strong class="answerText"> 3-4 inch </strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong1"></span>' + 
        '</label>';
        document.getElementById("answercheck2").innerHTML = check2;
        var check3 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer35(); clearButton3();">' + //match displayAnswer value to new value.       LINE #4
        '<input type="checkbox" class="checkBox" id="answer3"><strong class="answerText"> 6-8 inch </strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong2"></span>' + 
        '</label>';
        document.getElementById("answercheck3").innerHTML = check3;
        var button = '<button class="answerButton" onclick="trivia37()">Submit</button>'; //make new onclick function value.                                          LINE #5
        document.getElementById("trivbutton").innerHTML = button;
        var answer = '<p class="questionAnswer" id="triviaAnswer"></p>';
        document.getElementById("trivanswer").innerHTML = answer; 
    }



    function trivia37() { //match function value to line #5 above. 
        var answer1 = document.getElementById("answer1"); 
        var answer2 = document.getElementById("answer2"); 
        var answer3 = document.getElementById("answer3"); 
        var wrongAnswer = Number(document.getElementById("numberWrong").value);
        var nextButton = '<button class="buttonPush" onclick="changePage37();">Next Question</button>'; //change to new onclick Id value.                                 LINE #2
        var displayanswer = '<img class="checkMark" src="img/GreenCheck.png">' + //on last question change onclick above function to lastQuestion() and button (Next Question) to Finish. 
        '<strong class="correctAnswer">Correct!</strong> ' +
        ' <img class="checkMark" src="img/GreenCheck.png"><br>' + 
        nextButton;
        var displayanswerw = '<img class="redX" src="img/thumbsDown.png"> <strong class="wrongAnswer">Wrong</strong> <img class="redX" src="img/thumbsDown.png">' +
                             '<h3 class="tryAgain">Guess Again!</h3>';
    if (answer1.checked === false && answer2.checked === true && answer3.checked === false){ //correct answer here, match true and false values to correct and incorrect answer values above. 
        document.getElementById("triviaAnswer").innerHTML = displayanswer;  
        plays.correct();
        document.getElementById("boxWrong1").style.backgroundColor = "rgb(38, 255, 18)"; //answer1.true = boxCorrect1, answer2.true = boxWrong1, answer3.true = boxWrong2.
    }
    else if (answer1.checked === true && answer2.checked === false && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxCorrect1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    else if (answer1.checked === false && answer2.checked === false && answer3.checked === true){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong2").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    }
    function displayAnswer35() {                                                      //change function value to match line #4 above. 
        var answerDisplay1 = document.getElementById("answer1"); 
        var answerDisplay2 = document.getElementById("answer2"); 
        var answerDisplay3 = document.getElementById("answer3"); 
        var answer1 = ' <strong class="answerMimic" id="answerCopy"> 2-3 feet </strong>'; //change answer to match answer1 from above. 
        var answer2 = ' <strong class="answerMimic" id="answerCopy"> 3-4 inch </strong>'; //change to answer2 from above.
        var answer3 = ' <strong class="answerMimic" id="answerCopy"> 6-8 inch </strong>'; //change to answer3 from above. 
        var answer4 = ' <strong class="answerMimic" id="answerCopy"></strong>'; //leave blank so answer can clear. 
        if (answerDisplay1.checked === true){
            document.getElementById("answerCopy").innerHTML = answer1;
        }
        else if (answerDisplay2.checked === true){
            document.getElementById("answerCopy").innerHTML = answer2;
        }
        else if (answerDisplay3.checked === true){
            document.getElementById("answerCopy").innerHTML = answer3;
        }
        else{
            document.getElementById("answerCopy").innerHTML = answer4;
        }
    }
    function changePage37() {   
        plays.submit();                                                               //change to new onclick id value on line #2 above. 
        var questionNum = Number(document.getElementById("questionNumber").value);
        var nextNumber = questionNum + 1; 
        document.getElementById("questionNumber").value = nextNumber; 
        var question2 = '<strong class="question"> When was the Kuiper belt discovered? </strong><strong class="answerMimic" id="answerCopy"></strong>'; //make new question.
        document.getElementById("trivquestion").innerHTML = question2;
        var check1 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer36(); clearButton1();">' + //change displayAnswer value.
        '<input type="checkbox" class="checkBox" id="answer1"><strong class="answerText"> 1992 </strong>'+ //change answer. 
        '<span class="boxInput" id="boxCorrect1"></span>' + 
        '</label>';
        document.getElementById("answercheck1").innerHTML = check1;
        var check2 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer36(); clearButton2();">' + //match displayAnswer value to new value. 
        '<input type="checkbox" class="checkBox" id="answer2"><strong class="answerText"> 2000 </strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong1"></span>' + 
        '</label>';
        document.getElementById("answercheck2").innerHTML = check2;
        var check3 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer36(); clearButton3();">' + //match displayAnswer value to new value.       LINE #4
        '<input type="checkbox" class="checkBox" id="answer3"><strong class="answerText"> 1987 </strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong2"></span>' + 
        '</label>';
        document.getElementById("answercheck3").innerHTML = check3;
        var button = '<button class="answerButton" onclick="trivia38()">Submit</button>'; //make new onclick function value.                                          LINE #5
        document.getElementById("trivbutton").innerHTML = button;
        var answer = '<p class="questionAnswer" id="triviaAnswer"></p>';
        document.getElementById("trivanswer").innerHTML = answer; 
    }




    function trivia38() { //match function value to line #5 above. 
        var answer1 = document.getElementById("answer1"); 
        var answer2 = document.getElementById("answer2"); 
        var answer3 = document.getElementById("answer3"); 
        var wrongAnswer = Number(document.getElementById("numberWrong").value);
        var nextButton = '<button class="buttonPush" onclick="changePage38();">Next Question</button>'; //change to new onclick Id value.                                 LINE #2
        var displayanswer = '<img class="checkMark" src="img/GreenCheck.png">' + //on last question change onclick above function to lastQuestion() and button (Next Question) to Finish. 
        '<strong class="correctAnswer">Correct!</strong> ' +
        ' <img class="checkMark" src="img/GreenCheck.png"><br>' + 
        nextButton;
        var displayanswerw = '<img class="redX" src="img/thumbsDown.png"> <strong class="wrongAnswer">Wrong</strong> <img class="redX" src="img/thumbsDown.png">' +
                             '<h3 class="tryAgain">Guess Again!</h3>';
    if (answer1.checked === true && answer2.checked === false && answer3.checked === false){ //correct answer here, match true and false values to correct and incorrect answer values above. 
        document.getElementById("triviaAnswer").innerHTML = displayanswer;  
        plays.correct();
        document.getElementById("boxCorrect1").style.backgroundColor = "rgb(38, 255, 18)"; //answer1.true = boxCorrect1, answer2.true = boxWrong1, answer3.true = boxWrong2.
    }
    else if (answer1.checked === false && answer2.checked === true && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    else if (answer1.checked === false && answer2.checked === false && answer3.checked === true){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong2").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    } 
    }
    function displayAnswer36() {                                                      //change function value to match line #4 above. 
        var answerDisplay1 = document.getElementById("answer1"); 
        var answerDisplay2 = document.getElementById("answer2"); 
        var answerDisplay3 = document.getElementById("answer3"); 
        var answer1 = ' <strong class="answerMimic" id="answerCopy"> 1992 </strong>'; //change answer to match answer1 from above. 
        var answer2 = ' <strong class="answerMimic" id="answerCopy"> 2000 </strong>'; //change to answer2 from above.
        var answer3 = ' <strong class="answerMimic" id="answerCopy"> 1987 </strong>'; //change to answer3 from above. 
        var answer4 = ' <strong class="answerMimic" id="answerCopy"></strong>'; //leave blank so answer can clear. 
        if (answerDisplay1.checked === true){
            document.getElementById("answerCopy").innerHTML = answer1;
        }
        else if (answerDisplay2.checked === true){
            document.getElementById("answerCopy").innerHTML = answer2;
        }
        else if (answerDisplay3.checked === true){
            document.getElementById("answerCopy").innerHTML = answer3;
        }
        else{
            document.getElementById("answerCopy").innerHTML = answer4;
        }
    }
    function changePage38() {  
        plays.submit();                                                                //change to new onclick id value on line #2 above. 
        var questionNum = Number(document.getElementById("questionNumber").value);
        var nextNumber = questionNum + 1; 
        document.getElementById("questionNumber").value = nextNumber; 
        var question2 = '<strong class="question"> What salamander turns into a Red Eft? </strong><strong class="answerMimic" id="answerCopy"></strong>'; //make new question.
        document.getElementById("trivquestion").innerHTML = question2;
        var check1 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer37(); clearButton1();">' + //change displayAnswer value.
        '<input type="checkbox" class="checkBox" id="answer1"><strong class="answerText"> Sirens </strong>'+ //change answer. 
        '<span class="boxInput" id="boxCorrect1"></span>' + 
        '</label>';
        document.getElementById("answercheck1").innerHTML = check1;
        var check2 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer37(); clearButton2();">' + //match displayAnswer value to new value. 
        '<input type="checkbox" class="checkBox" id="answer2"><strong class="answerText"> Red-Backed </strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong1"></span>' + 
        '</label>';
        document.getElementById("answercheck2").innerHTML = check2;
        var check3 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer37(); clearButton3();">' + //match displayAnswer value to new value.       LINE #4
        '<input type="checkbox" class="checkBox" id="answer3"><strong class="answerText"> Newts </strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong2"></span>' + 
        '</label>';
        document.getElementById("answercheck3").innerHTML = check3;
        var button = '<button class="answerButton" onclick="trivia39()">Submit</button>'; //make new onclick function value.                                          LINE #5
        document.getElementById("trivbutton").innerHTML = button;
        var answer = '<p class="questionAnswer" id="triviaAnswer"></p>';
        document.getElementById("trivanswer").innerHTML = answer; 
    }




    function trivia39() { //match function value to line #5 above. 
        var answer1 = document.getElementById("answer1"); 
        var answer2 = document.getElementById("answer2"); 
        var answer3 = document.getElementById("answer3"); 
        var wrongAnswer = Number(document.getElementById("numberWrong").value);
        var nextButton = '<button class="buttonPush" onclick="changePage39();">Next Question</button>'; //change to new onclick Id value.                                 LINE #2
        var displayanswer = '<img class="checkMark" src="img/GreenCheck.png">' + //on last question change onclick above function to lastQuestion() and button (Next Question) to Finish. 
        '<strong class="correctAnswer">Correct!</strong> ' +
        ' <img class="checkMark" src="img/GreenCheck.png"><br>' + 
        nextButton;
        var displayanswerw = '<img class="redX" src="img/thumbsDown.png"> <strong class="wrongAnswer">Wrong</strong> <img class="redX" src="img/thumbsDown.png">' +
                             '<h3 class="tryAgain">Guess Again!</h3>';
    if (answer1.checked === false && answer2.checked === false && answer3.checked === true){ //correct answer here, match true and false values to correct and incorrect answer values above. 
        document.getElementById("triviaAnswer").innerHTML = displayanswer; 
        plays.correct(); 
        document.getElementById("boxWrong2").style.backgroundColor = "rgb(38, 255, 18)"; //answer1.true = boxCorrect1, answer2.true = boxWrong1, answer3.true = boxWrong2.
    }
    else if (answer1.checked === true && answer2.checked === false && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxCorrect1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    else if (answer1.checked === false && answer2.checked === true && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    } 
    }
    function displayAnswer37() {                                                      //change function value to match line #4 above. 
        var answerDisplay1 = document.getElementById("answer1"); 
        var answerDisplay2 = document.getElementById("answer2"); 
        var answerDisplay3 = document.getElementById("answer3"); 
        var answer1 = ' <strong class="answerMimic" id="answerCopy"> Sirens </strong>'; //change answer to match answer1 from above. 
        var answer2 = ' <strong class="answerMimic" id="answerCopy"> Red-Backed </strong>'; //change to answer2 from above.
        var answer3 = ' <strong class="answerMimic" id="answerCopy"> Newts </strong>'; //change to answer3 from above. 
        var answer4 = ' <strong class="answerMimic" id="answerCopy"></strong>'; //leave blank so answer can clear. 
        if (answerDisplay1.checked === true){
            document.getElementById("answerCopy").innerHTML = answer1;
        }
        else if (answerDisplay2.checked === true){
            document.getElementById("answerCopy").innerHTML = answer2;
        }
        else if (answerDisplay3.checked === true){
            document.getElementById("answerCopy").innerHTML = answer3;
        }
        else{
            document.getElementById("answerCopy").innerHTML = answer4;
        }
    }
    function changePage39() {  
        plays.submit();                                                                //change to new onclick id value on line #2 above. 
        var questionNum = Number(document.getElementById("questionNumber").value);
        var nextNumber = questionNum + 1; 
        document.getElementById("questionNumber").value = nextNumber; 
        var question2 = '<strong class="question"> How much ram does the iPhone 12 have? </strong><strong class="answerMimic" id="answerCopy"></strong>'; //make new question.
        document.getElementById("trivquestion").innerHTML = question2;
        var check1 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer38(); clearButton1();">' + //change displayAnswer value.
        '<input type="checkbox" class="checkBox" id="answer1"><strong class="answerText"> 4GB </strong>'+ //change answer. 
        '<span class="boxInput" id="boxCorrect1"></span>' + 
        '</label>';
        document.getElementById("answercheck1").innerHTML = check1;
        var check2 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer38(); clearButton2();">' + //match displayAnswer value to new value. 
        '<input type="checkbox" class="checkBox" id="answer2"><strong class="answerText"> 6GB </strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong1"></span>' + 
        '</label>';
        document.getElementById("answercheck2").innerHTML = check2;
        var check3 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer38(); clearButton3();">' + //match displayAnswer value to new value.       LINE #4
        '<input type="checkbox" class="checkBox" id="answer3"><strong class="answerText"> 2GB </strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong2"></span>' + 
        '</label>';
        document.getElementById("answercheck3").innerHTML = check3;
        var button = '<button class="answerButton" onclick="trivia40()">Submit</button>'; //make new onclick function value.                                          LINE #5
        document.getElementById("trivbutton").innerHTML = button;
        var answer = '<p class="questionAnswer" id="triviaAnswer"></p>';
        document.getElementById("trivanswer").innerHTML = answer; 
    }




    function trivia40() { //match function value to line #5 above. 
        var answer1 = document.getElementById("answer1"); 
        var answer2 = document.getElementById("answer2"); 
        var answer3 = document.getElementById("answer3"); 
        var wrongAnswer = Number(document.getElementById("numberWrong").value);
        var nextButton = '<button class="buttonPush" onclick="changePage40();">Next Question</button>'; //change to new onclick Id value.                                 LINE #2
        var displayanswer = '<img class="checkMark" src="img/GreenCheck.png">' + //on last question change onclick above function to lastQuestion() and button (Next Question) to Finish. 
        '<strong class="correctAnswer">Correct!</strong> ' +
        ' <img class="checkMark" src="img/GreenCheck.png"><br>' + 
        nextButton;
        var displayanswerw = '<img class="redX" src="img/thumbsDown.png"> <strong class="wrongAnswer">Wrong</strong> <img class="redX" src="img/thumbsDown.png">' +
                             '<h3 class="tryAgain">Guess Again!</h3>';
    if (answer1.checked === true && answer2.checked === false && answer3.checked === false){ //correct answer here, match true and false values to correct and incorrect answer values above. 
        document.getElementById("triviaAnswer").innerHTML = displayanswer; 
        plays.correct(); 
        document.getElementById("boxCorrect1").style.backgroundColor = "rgb(38, 255, 18)"; //answer1.true = boxCorrect1, answer2.true = boxWrong1, answer3.true = boxWrong2.
    }
    else if (answer1.checked === false && answer2.checked === true && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    else if (answer1.checked === false && answer2.checked === false && answer3.checked === true){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong2").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    } 
    }
    function displayAnswer38() {                                                      //change function value to match line #4 above. 
        var answerDisplay1 = document.getElementById("answer1"); 
        var answerDisplay2 = document.getElementById("answer2"); 
        var answerDisplay3 = document.getElementById("answer3"); 
        var answer1 = ' <strong class="answerMimic" id="answerCopy"> 4GB </strong>'; //change answer to match answer1 from above. 
        var answer2 = ' <strong class="answerMimic" id="answerCopy"> 6GB </strong>'; //change to answer2 from above.
        var answer3 = ' <strong class="answerMimic" id="answerCopy"> 2GB </strong>'; //change to answer3 from above. 
        var answer4 = ' <strong class="answerMimic" id="answerCopy"></strong>'; //leave blank so answer can clear. 
        if (answerDisplay1.checked === true){
            document.getElementById("answerCopy").innerHTML = answer1;
        }
        else if (answerDisplay2.checked === true){
            document.getElementById("answerCopy").innerHTML = answer2;
        }
        else if (answerDisplay3.checked === true){
            document.getElementById("answerCopy").innerHTML = answer3;
        }
        else{
            document.getElementById("answerCopy").innerHTML = answer4;
        }
    }
    function changePage40() { 
        plays.submit();                                                                 //change to new onclick id value on line #2 above. 
        var questionNum = Number(document.getElementById("questionNumber").value);
        var nextNumber = questionNum + 1; 
        document.getElementById("questionNumber").value = nextNumber; 
        var question2 = '<strong class="question"> Light travels from the Sun to Earth in... </strong><strong class="answerMimic" id="answerCopy"></strong>'; //make new question.
        document.getElementById("trivquestion").innerHTML = question2;
        var check1 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer39(); clearButton1();">' + //change displayAnswer value.
        '<input type="checkbox" class="checkBox" id="answer1"><strong class="answerText"> 548sec </strong>'+ //change answer. 
        '<span class="boxInput" id="boxCorrect1"></span>' + 
        '</label>';
        document.getElementById("answercheck1").innerHTML = check1;
        var check2 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer39(); clearButton2();">' + //match displayAnswer value to new value. 
        '<input type="checkbox" class="checkBox" id="answer2"><strong class="answerText"> 499sec </strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong1"></span>' + 
        '</label>';
        document.getElementById("answercheck2").innerHTML = check2;
        var check3 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer39(); clearButton3();">' + //match displayAnswer value to new value.       LINE #4
        '<input type="checkbox" class="checkBox" id="answer3"><strong class="answerText"> 883sec </strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong2"></span>' + 
        '</label>';
        document.getElementById("answercheck3").innerHTML = check3;
        var button = '<button class="answerButton" onclick="trivia41()">Submit</button>'; //make new onclick function value.                                          LINE #5
        document.getElementById("trivbutton").innerHTML = button;
        var answer = '<p class="questionAnswer" id="triviaAnswer"></p>';
        document.getElementById("trivanswer").innerHTML = answer; 
    }



    function trivia41() { //match function value to line #5 above. 
        var answer1 = document.getElementById("answer1"); 
        var answer2 = document.getElementById("answer2"); 
        var answer3 = document.getElementById("answer3"); 
        var wrongAnswer = Number(document.getElementById("numberWrong").value);
        var nextButton = '<button class="buttonPush" onclick="changePage41();">Next Question</button>'; //change to new onclick Id value.                                 LINE #2
        var displayanswer = '<img class="checkMark" src="img/GreenCheck.png">' + //on last question change onclick above function to lastQuestion() and button (Next Question) to Finish. 
        '<strong class="correctAnswer">Correct!</strong> ' +
        ' <img class="checkMark" src="img/GreenCheck.png"><br>' + 
        nextButton;
        var displayanswerw = '<img class="redX" src="img/thumbsDown.png"> <strong class="wrongAnswer">Wrong</strong> <img class="redX" src="img/thumbsDown.png">' +
                             '<h3 class="tryAgain">Guess Again!</h3>';
    if (answer1.checked === false && answer2.checked === true && answer3.checked === false){ //correct answer here, match true and false values to correct and incorrect answer values above. 
        document.getElementById("triviaAnswer").innerHTML = displayanswer; 
        plays.correct(); 
        document.getElementById("boxWrong1").style.backgroundColor = "rgb(38, 255, 18)"; //answer1.true = boxCorrect1, answer2.true = boxWrong1, answer3.true = boxWrong2.
    }
    else if (answer1.checked === true && answer2.checked === false && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxCorrect1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    else if (answer1.checked === false && answer2.checked === false && answer3.checked === true){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong2").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    }
    function displayAnswer39() {                                                      //change function value to match line #4 above. 
        var answerDisplay1 = document.getElementById("answer1"); 
        var answerDisplay2 = document.getElementById("answer2"); 
        var answerDisplay3 = document.getElementById("answer3"); 
        var answer1 = ' <strong class="answerMimic" id="answerCopy"> 548sec </strong>'; //change answer to match answer1 from above. 
        var answer2 = ' <strong class="answerMimic" id="answerCopy"> 499sec </strong>'; //change to answer2 from above.
        var answer3 = ' <strong class="answerMimic" id="answerCopy"> 883sec </strong>'; //change to answer3 from above. 
        var answer4 = ' <strong class="answerMimic" id="answerCopy"></strong>'; //leave blank so answer can clear. 
        if (answerDisplay1.checked === true){
            document.getElementById("answerCopy").innerHTML = answer1;
        }
        else if (answerDisplay2.checked === true){
            document.getElementById("answerCopy").innerHTML = answer2;
        }
        else if (answerDisplay3.checked === true){
            document.getElementById("answerCopy").innerHTML = answer3;
        }
        else{
            document.getElementById("answerCopy").innerHTML = answer4;
        }
    }
    function changePage41() { 
        plays.submit();                                                                 //change to new onclick id value on line #2 above. 
        var questionNum = Number(document.getElementById("questionNumber").value);
        var nextNumber = questionNum + 1; 
        document.getElementById("questionNumber").value = nextNumber; 
        var question2 = '<strong class="question"> How high can you fly a drone as a recreational pilot? </strong><strong class="answerMimic" id="answerCopy"></strong>'; //make new question.
        document.getElementById("trivquestion").innerHTML = question2;
        var check1 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer40(); clearButton1();">' + //change displayAnswer value.
        '<input type="checkbox" class="checkBox" id="answer1"><strong class="answerText"> 1000ft </strong>'+ //change answer. 
        '<span class="boxInput" id="boxCorrect1"></span>' + 
        '</label>';
        document.getElementById("answercheck1").innerHTML = check1;
        var check2 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer40(); clearButton2();">' + //match displayAnswer value to new value. 
        '<input type="checkbox" class="checkBox" id="answer2"><strong class="answerText"> 200ft </strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong1"></span>' + 
        '</label>';
        document.getElementById("answercheck2").innerHTML = check2;
        var check3 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer40(); clearButton3();">' + //match displayAnswer value to new value.       LINE #4
        '<input type="checkbox" class="checkBox" id="answer3"><strong class="answerText"> 400ft </strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong2"></span>' + 
        '</label>';
        document.getElementById("answercheck3").innerHTML = check3;
        var button = '<button class="answerButton" onclick="trivia42()">Submit</button>'; //make new onclick function value.                                          LINE #5
        document.getElementById("trivbutton").innerHTML = button;
        var answer = '<p class="questionAnswer" id="triviaAnswer"></p>';
        document.getElementById("trivanswer").innerHTML = answer; 
    }




    function trivia42() { //match function value to line #5 above. 
        var answer1 = document.getElementById("answer1"); 
        var answer2 = document.getElementById("answer2"); 
        var answer3 = document.getElementById("answer3"); 
        var wrongAnswer = Number(document.getElementById("numberWrong").value);
        var nextButton = '<button class="buttonPush" onclick="changePage42();">Next Question</button>'; //change to new onclick Id value.                                 LINE #2
        var displayanswer = '<img class="checkMark" src="img/GreenCheck.png">' + //on last question change onclick above function to lastQuestion() and button (Next Question) to Finish. 
        '<strong class="correctAnswer">Correct!</strong> ' +
        ' <img class="checkMark" src="img/GreenCheck.png"><br>' + 
        nextButton;
        var displayanswerw = '<img class="redX" src="img/thumbsDown.png"> <strong class="wrongAnswer">Wrong</strong> <img class="redX" src="img/thumbsDown.png">' +
                             '<h3 class="tryAgain">Guess Again!</h3>';
    if (answer1.checked === false && answer2.checked === false && answer3.checked === true){ //correct answer here, match true and false values to correct and incorrect answer values above. 
        document.getElementById("triviaAnswer").innerHTML = displayanswer; 
        plays.correct(); 
        document.getElementById("boxWrong2").style.backgroundColor = "rgb(38, 255, 18)"; //answer1.true = boxCorrect1, answer2.true = boxWrong1, answer3.true = boxWrong2.
    }
    else if (answer1.checked === true && answer2.checked === false && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxCorrect1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    else if (answer1.checked === false && answer2.checked === true && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    }
    function displayAnswer40() {                                                      //change function value to match line #4 above. 
        var answerDisplay1 = document.getElementById("answer1"); 
        var answerDisplay2 = document.getElementById("answer2"); 
        var answerDisplay3 = document.getElementById("answer3"); 
        var answer1 = ' <strong class="answerMimic" id="answerCopy"> 1000ft </strong>'; //change answer to match answer1 from above. 
        var answer2 = ' <strong class="answerMimic" id="answerCopy"> 200ft </strong>'; //change to answer2 from above.
        var answer3 = ' <strong class="answerMimic" id="answerCopy"> 400ft </strong>'; //change to answer3 from above. 
        var answer4 = ' <strong class="answerMimic" id="answerCopy"></strong>'; //leave blank so answer can clear. 
        if (answerDisplay1.checked === true){
            document.getElementById("answerCopy").innerHTML = answer1;
        }
        else if (answerDisplay2.checked === true){
            document.getElementById("answerCopy").innerHTML = answer2;
        }
        else if (answerDisplay3.checked === true){
            document.getElementById("answerCopy").innerHTML = answer3;
        }
        else{
            document.getElementById("answerCopy").innerHTML = answer4;
        }
    }
    function changePage42() {   
        plays.submit();                                                               //change to new onclick id value on line #2 above. 
        var questionNum = Number(document.getElementById("questionNumber").value);
        var nextNumber = questionNum + 1; 
        document.getElementById("questionNumber").value = nextNumber; 
        var question2 = '<strong class="question"> What temperature should you bake chicken to internally? </strong><strong class="answerMimic" id="answerCopy"></strong>'; //make new question.
        document.getElementById("trivquestion").innerHTML = question2;
        var check1 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer41(); clearButton1();">' + //change displayAnswer value.
        '<input type="checkbox" class="checkBox" id="answer1"><strong class="answerText"> 140deg </strong>'+ //change answer. 
        '<span class="boxInput" id="boxCorrect1"></span>' + 
        '</label>';
        document.getElementById("answercheck1").innerHTML = check1;
        var check2 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer41(); clearButton2();">' + //match displayAnswer value to new value. 
        '<input type="checkbox" class="checkBox" id="answer2"><strong class="answerText"> 165deg </strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong1"></span>' + 
        '</label>';
        document.getElementById("answercheck2").innerHTML = check2;
        var check3 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer41(); clearButton3();">' + //match displayAnswer value to new value.       LINE #4
        '<input type="checkbox" class="checkBox" id="answer3"><strong class="answerText"> 185deg </strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong2"></span>' + 
        '</label>';
        document.getElementById("answercheck3").innerHTML = check3;
        var button = '<button class="answerButton" onclick="trivia43()">Submit</button>'; //make new onclick function value.                                          LINE #5
        document.getElementById("trivbutton").innerHTML = button;
        var answer = '<p class="questionAnswer" id="triviaAnswer"></p>';
        document.getElementById("trivanswer").innerHTML = answer; 
    }




    function trivia43() { //match function value to line #5 above. 
        var answer1 = document.getElementById("answer1"); 
        var answer2 = document.getElementById("answer2"); 
        var answer3 = document.getElementById("answer3"); 
        var wrongAnswer = Number(document.getElementById("numberWrong").value);
        var nextButton = '<button class="buttonPush" onclick="changePage43();">Next Question</button>'; //change to new onclick Id value.                                 LINE #2
        var displayanswer = '<img class="checkMark" src="img/GreenCheck.png">' + //on last question change onclick above function to lastQuestion() and button (Next Question) to Finish. 
        '<strong class="correctAnswer">Correct!</strong> ' +
        ' <img class="checkMark" src="img/GreenCheck.png"><br>' + 
        nextButton;
        var displayanswerw = '<img class="redX" src="img/thumbsDown.png"> <strong class="wrongAnswer">Wrong</strong> <img class="redX" src="img/thumbsDown.png">' +
                             '<h3 class="tryAgain">Guess Again!</h3>';
    if (answer1.checked === false && answer2.checked === true && answer3.checked === false){ //correct answer here, match true and false values to correct and incorrect answer values above. 
        document.getElementById("triviaAnswer").innerHTML = displayanswer;  
        plays.correct();
        document.getElementById("boxWrong1").style.backgroundColor = "rgb(38, 255, 18)"; //answer1.true = boxCorrect1, answer2.true = boxWrong1, answer3.true = boxWrong2.
    }
    else if (answer1.checked === true && answer2.checked === false && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxCorrect1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    else if (answer1.checked === false && answer2.checked === false && answer3.checked === true){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong2").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    } 
    }
    function displayAnswer41() {                                                      //change function value to match line #4 above. 
        var answerDisplay1 = document.getElementById("answer1"); 
        var answerDisplay2 = document.getElementById("answer2"); 
        var answerDisplay3 = document.getElementById("answer3"); 
        var answer1 = ' <strong class="answerMimic" id="answerCopy"> 140deg </strong>'; //change answer to match answer1 from above. 
        var answer2 = ' <strong class="answerMimic" id="answerCopy"> 165deg </strong>'; //change to answer2 from above.
        var answer3 = ' <strong class="answerMimic" id="answerCopy"> 185deg </strong>'; //change to answer3 from above. 
        var answer4 = ' <strong class="answerMimic" id="answerCopy"></strong>'; //leave blank so answer can clear. 
        if (answerDisplay1.checked === true){
            document.getElementById("answerCopy").innerHTML = answer1;
        }
        else if (answerDisplay2.checked === true){
            document.getElementById("answerCopy").innerHTML = answer2;
        }
        else if (answerDisplay3.checked === true){
            document.getElementById("answerCopy").innerHTML = answer3;
        }
        else{
            document.getElementById("answerCopy").innerHTML = answer4;
        }
    }
    function changePage43() { 
        plays.submit();                                                                 //change to new onclick id value on line #2 above. 
        var questionNum = Number(document.getElementById("questionNumber").value);
        var nextNumber = questionNum + 1; 
        document.getElementById("questionNumber").value = nextNumber; 
        var question2 = '<strong class="question"> What planet has the hottest surface? </strong><strong class="answerMimic" id="answerCopy"></strong>'; //make new question.
        document.getElementById("trivquestion").innerHTML = question2;
        var check1 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer42(); clearButton1();">' + //change displayAnswer value.
        '<input type="checkbox" class="checkBox" id="answer1"><strong class="answerText"> Mars </strong>'+ //change answer. 
        '<span class="boxInput" id="boxCorrect1"></span>' + 
        '</label>';
        document.getElementById("answercheck1").innerHTML = check1;
        var check2 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer42(); clearButton2();">' + //match displayAnswer value to new value. 
        '<input type="checkbox" class="checkBox" id="answer2"><strong class="answerText"> Mercury </strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong1"></span>' + 
        '</label>';
        document.getElementById("answercheck2").innerHTML = check2;
        var check3 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer42(); clearButton3();">' + //match displayAnswer value to new value.       LINE #4
        '<input type="checkbox" class="checkBox" id="answer3"><strong class="answerText"> Venus </strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong2"></span>' + 
        '</label>';
        document.getElementById("answercheck3").innerHTML = check3;
        var button = '<button class="answerButton" onclick="trivia44()">Submit</button>'; //make new onclick function value.                                          LINE #5
        document.getElementById("trivbutton").innerHTML = button;
        var answer = '<p class="questionAnswer" id="triviaAnswer"></p>';
        document.getElementById("trivanswer").innerHTML = answer; 
    }




    function trivia44() { //match function value to line #5 above. 
        var answer1 = document.getElementById("answer1"); 
        var answer2 = document.getElementById("answer2"); 
        var answer3 = document.getElementById("answer3"); 
        var wrongAnswer = Number(document.getElementById("numberWrong").value);
        var nextButton = '<button class="buttonPush" onclick="changePage44();">Next Question</button>'; //change to new onclick Id value.                                 LINE #2
        var displayanswer = '<img class="checkMark" src="img/GreenCheck.png">' + //on last question change onclick above function to lastQuestion() and button (Next Question) to Finish. 
        '<strong class="correctAnswer">Correct!</strong> ' +
        ' <img class="checkMark" src="img/GreenCheck.png"><br>' + 
        nextButton;
        var displayanswerw = '<img class="redX" src="img/thumbsDown.png"> <strong class="wrongAnswer">Wrong</strong> <img class="redX" src="img/thumbsDown.png">' +
                             '<h3 class="tryAgain">Guess Again!</h3>';
    if (answer1.checked === false && answer2.checked === false && answer3.checked === true){ //correct answer here, match true and false values to correct and incorrect answer values above. 
        document.getElementById("triviaAnswer").innerHTML = displayanswer;  
        plays.correct();
        document.getElementById("boxWrong2").style.backgroundColor = "rgb(38, 255, 18)"; //answer1.true = boxCorrect1, answer2.true = boxWrong1, answer3.true = boxWrong2.
    }
    else if (answer1.checked === true && answer2.checked === false && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxCorrect1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    else if (answer1.checked === false && answer2.checked === true && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    } 
    }
    function displayAnswer42() {                                                      //change function value to match line #4 above. 
        var answerDisplay1 = document.getElementById("answer1"); 
        var answerDisplay2 = document.getElementById("answer2"); 
        var answerDisplay3 = document.getElementById("answer3"); 
        var answer1 = ' <strong class="answerMimic" id="answerCopy"> Mars </strong>'; //change answer to match answer1 from above. 
        var answer2 = ' <strong class="answerMimic" id="answerCopy"> Mercury </strong>'; //change to answer2 from above.
        var answer3 = ' <strong class="answerMimic" id="answerCopy"> Venus </strong>'; //change to answer3 from above. 
        var answer4 = ' <strong class="answerMimic" id="answerCopy"></strong>'; //leave blank so answer can clear. 
        if (answerDisplay1.checked === true){
            document.getElementById("answerCopy").innerHTML = answer1;
        }
        else if (answerDisplay2.checked === true){
            document.getElementById("answerCopy").innerHTML = answer2;
        }
        else if (answerDisplay3.checked === true){
            document.getElementById("answerCopy").innerHTML = answer3;
        }
        else{
            document.getElementById("answerCopy").innerHTML = answer4;
        }
    }
    function changePage44() {  
        plays.submit();                                                                //change to new onclick id value on line #2 above. 
        var questionNum = Number(document.getElementById("questionNumber").value);
        var nextNumber = questionNum + 1; 
        document.getElementById("questionNumber").value = nextNumber; 
        var question2 = '<strong class="question"> When was the book The Hobbit published? </strong><strong class="answerMimic" id="answerCopy"></strong>'; //make new question.
        document.getElementById("trivquestion").innerHTML = question2;
        var check1 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer43(); clearButton1();">' + //change displayAnswer value.
        '<input type="checkbox" class="checkBox" id="answer1"><strong class="answerText"> 1937 </strong>'+ //change answer. 
        '<span class="boxInput" id="boxCorrect1"></span>' + 
        '</label>';
        document.getElementById("answercheck1").innerHTML = check1;
        var check2 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer43(); clearButton2();">' + //match displayAnswer value to new value. 
        '<input type="checkbox" class="checkBox" id="answer2"><strong class="answerText"> 1958 </strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong1"></span>' + 
        '</label>';
        document.getElementById("answercheck2").innerHTML = check2;
        var check3 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer43(); clearButton3();">' + //match displayAnswer value to new value.       LINE #4
        '<input type="checkbox" class="checkBox" id="answer3"><strong class="answerText"> 1941 </strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong2"></span>' + 
        '</label>';
        document.getElementById("answercheck3").innerHTML = check3;
        var button = '<button class="answerButton" onclick="trivia45()">Submit</button>'; //make new onclick function value.                                          LINE #5
        document.getElementById("trivbutton").innerHTML = button;
        var answer = '<p class="questionAnswer" id="triviaAnswer"></p>';
        document.getElementById("trivanswer").innerHTML = answer; 
    }




    function trivia45() { //match function value to line #5 above. 
        var answer1 = document.getElementById("answer1"); 
        var answer2 = document.getElementById("answer2"); 
        var answer3 = document.getElementById("answer3"); 
        var wrongAnswer = Number(document.getElementById("numberWrong").value);
        var nextButton = '<button class="buttonPush" onclick="changePage45();">Next Question</button>'; //change to new onclick Id value.                                 LINE #2
        var displayanswer = '<img class="checkMark" src="img/GreenCheck.png">' + //on last question change onclick above function to lastQuestion() and button (Next Question) to Finish. 
        '<strong class="correctAnswer">Correct!</strong> ' +
        ' <img class="checkMark" src="img/GreenCheck.png"><br>' + 
        nextButton;
        var displayanswerw = '<img class="redX" src="img/thumbsDown.png"> <strong class="wrongAnswer">Wrong</strong> <img class="redX" src="img/thumbsDown.png">' +
                             '<h3 class="tryAgain">Guess Again!</h3>';
    if (answer1.checked === true && answer2.checked === false && answer3.checked === false){ //correct answer here, match true and false values to correct and incorrect answer values above. 
        document.getElementById("triviaAnswer").innerHTML = displayanswer;  
        plays.correct();
        document.getElementById("boxCorrect1").style.backgroundColor = "rgb(38, 255, 18)"; //answer1.true = boxCorrect1, answer2.true = boxWrong1, answer3.true = boxWrong2.
    }
    else if (answer1.checked === false && answer2.checked === true && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    else if (answer1.checked === false && answer2.checked === false && answer3.checked === true){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong2").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    } 
    }
    function displayAnswer43() {                                                      //change function value to match line #4 above. 
        var answerDisplay1 = document.getElementById("answer1"); 
        var answerDisplay2 = document.getElementById("answer2"); 
        var answerDisplay3 = document.getElementById("answer3"); 
        var answer1 = ' <strong class="answerMimic" id="answerCopy"> 1937 </strong>'; //change answer to match answer1 from above. 
        var answer2 = ' <strong class="answerMimic" id="answerCopy"> 1958 </strong>'; //change to answer2 from above.
        var answer3 = ' <strong class="answerMimic" id="answerCopy"> 1941 </strong>'; //change to answer3 from above. 
        var answer4 = ' <strong class="answerMimic" id="answerCopy"></strong>'; //leave blank so answer can clear. 
        if (answerDisplay1.checked === true){
            document.getElementById("answerCopy").innerHTML = answer1;
        }
        else if (answerDisplay2.checked === true){
            document.getElementById("answerCopy").innerHTML = answer2;
        }
        else if (answerDisplay3.checked === true){
            document.getElementById("answerCopy").innerHTML = answer3;
        }
        else{
            document.getElementById("answerCopy").innerHTML = answer4;
        }
    }
    function changePage45() {  
        plays.submit();                                                                //change to new onclick id value on line #2 above. 
        var questionNum = Number(document.getElementById("questionNumber").value);
        var nextNumber = questionNum + 1; 
        document.getElementById("questionNumber").value = nextNumber; 
        var question2 = '<strong class="question"> What temperature does chocolate melt? </strong><strong class="answerMimic" id="answerCopy"></strong>'; //make new question.
        document.getElementById("trivquestion").innerHTML = question2;
        var check1 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer44(); clearButton1();">' + //change displayAnswer value.
        '<input type="checkbox" class="checkBox" id="answer1"><strong class="answerText"> 97F </strong>'+ //change answer. 
        '<span class="boxInput" id="boxCorrect1"></span>' + 
        '</label>';
        document.getElementById("answercheck1").innerHTML = check1;
        var check2 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer44(); clearButton2();">' + //match displayAnswer value to new value. 
        '<input type="checkbox" class="checkBox" id="answer2"><strong class="answerText"> 103F </strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong1"></span>' + 
        '</label>';
        document.getElementById("answercheck2").innerHTML = check2;
        var check3 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer44(); clearButton3();">' + //match displayAnswer value to new value.       LINE #4
        '<input type="checkbox" class="checkBox" id="answer3"><strong class="answerText"> 86F </strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong2"></span>' + 
        '</label>';
        document.getElementById("answercheck3").innerHTML = check3;
        var button = '<button class="answerButton" onclick="trivia46()">Submit</button>'; //make new onclick function value.                                          LINE #5
        document.getElementById("trivbutton").innerHTML = button;
        var answer = '<p class="questionAnswer" id="triviaAnswer"></p>';
        document.getElementById("trivanswer").innerHTML = answer; 
    }




    function trivia46() { //match function value to line #5 above. 
        var answer1 = document.getElementById("answer1"); 
        var answer2 = document.getElementById("answer2"); 
        var answer3 = document.getElementById("answer3"); 
        var wrongAnswer = Number(document.getElementById("numberWrong").value);
        var nextButton = '<button class="buttonPush" onclick="changePage46();">Next Question</button>'; //change to new onclick Id value.                                 LINE #2
        var displayanswer = '<img class="checkMark" src="img/GreenCheck.png">' + //on last question change onclick above function to lastQuestion() and button (Next Question) to Finish. 
        '<strong class="correctAnswer">Correct!</strong> ' +
        ' <img class="checkMark" src="img/GreenCheck.png"><br>' + 
        nextButton;
        var displayanswerw = '<img class="redX" src="img/thumbsDown.png"> <strong class="wrongAnswer">Wrong</strong> <img class="redX" src="img/thumbsDown.png">' +
                             '<h3 class="tryAgain">Guess Again!</h3>';
    if (answer1.checked === false && answer2.checked === false && answer3.checked === true){ //correct answer here, match true and false values to correct and incorrect answer values above. 
        document.getElementById("triviaAnswer").innerHTML = displayanswer; 
        plays.correct(); 
        document.getElementById("boxWrong2").style.backgroundColor = "rgb(38, 255, 18)"; //answer1.true = boxCorrect1, answer2.true = boxWrong1, answer3.true = boxWrong2.
    }
    else if (answer1.checked === true && answer2.checked === false && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxCorrect1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    else if (answer1.checked === false && answer2.checked === true && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    }
    function displayAnswer44() {                                                      //change function value to match line #4 above. 
        var answerDisplay1 = document.getElementById("answer1"); 
        var answerDisplay2 = document.getElementById("answer2"); 
        var answerDisplay3 = document.getElementById("answer3"); 
        var answer1 = ' <strong class="answerMimic" id="answerCopy"> 97F </strong>'; //change answer to match answer1 from above. 
        var answer2 = ' <strong class="answerMimic" id="answerCopy"> 103F </strong>'; //change to answer2 from above.
        var answer3 = ' <strong class="answerMimic" id="answerCopy"> 86F </strong>'; //change to answer3 from above. 
        var answer4 = ' <strong class="answerMimic" id="answerCopy"></strong>'; //leave blank so answer can clear. 
        if (answerDisplay1.checked === true){
            document.getElementById("answerCopy").innerHTML = answer1;
        }
        else if (answerDisplay2.checked === true){
            document.getElementById("answerCopy").innerHTML = answer2;
        }
        else if (answerDisplay3.checked === true){
            document.getElementById("answerCopy").innerHTML = answer3;
        }
        else{
            document.getElementById("answerCopy").innerHTML = answer4;
        }
    }
    function changePage46() { 
        plays.submit();                                                                 //change to new onclick id value on line #2 above. 
        var questionNum = Number(document.getElementById("questionNumber").value);
        var nextNumber = questionNum + 1; 
        document.getElementById("questionNumber").value = nextNumber; 
        var question2 = '<strong class="question"> How many Earths would fit in Jupiter? </strong><strong class="answerMimic" id="answerCopy"></strong>'; //make new question.
        document.getElementById("trivquestion").innerHTML = question2;
        var check1 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer45(); clearButton1();">' + //change displayAnswer value.
        '<input type="checkbox" class="checkBox" id="answer1"><strong class="answerText"> 7 </strong>'+ //change answer. 
        '<span class="boxInput" id="boxCorrect1"></span>' + 
        '</label>';
        document.getElementById("answercheck1").innerHTML = check1;
        var check2 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer45(); clearButton2();">' + //match displayAnswer value to new value. 
        '<input type="checkbox" class="checkBox" id="answer2"><strong class="answerText"> 4000 </strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong1"></span>' + 
        '</label>';
        document.getElementById("answercheck2").innerHTML = check2;
        var check3 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer45(); clearButton3();">' + //match displayAnswer value to new value.       LINE #4
        '<input type="checkbox" class="checkBox" id="answer3"><strong class="answerText"> 1300 </strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong2"></span>' + 
        '</label>';
        document.getElementById("answercheck3").innerHTML = check3;
        var button = '<button class="answerButton" onclick="trivia47()">Submit</button>'; //make new onclick function value.                                          LINE #5
        document.getElementById("trivbutton").innerHTML = button;
        var answer = '<p class="questionAnswer" id="triviaAnswer"></p>';
        document.getElementById("trivanswer").innerHTML = answer; 
    }




    function trivia47() { //match function value to line #5 above. 
        var answer1 = document.getElementById("answer1"); 
        var answer2 = document.getElementById("answer2"); 
        var answer3 = document.getElementById("answer3"); 
        var wrongAnswer = Number(document.getElementById("numberWrong").value);
        var nextButton = '<button class="buttonPush" onclick="changePage47();">Next Question</button>'; //change to new onclick Id value.                                 LINE #2
        var displayanswer = '<img class="checkMark" src="img/GreenCheck.png">' + //on last question change onclick above function to lastQuestion() and button (Next Question) to Finish. 
        '<strong class="correctAnswer">Correct!</strong> ' +
        ' <img class="checkMark" src="img/GreenCheck.png"><br>' + 
        nextButton;
        var displayanswerw = '<img class="redX" src="img/thumbsDown.png"> <strong class="wrongAnswer">Wrong</strong> <img class="redX" src="img/thumbsDown.png">' +
                             '<h3 class="tryAgain">Guess Again!</h3>';
    if (answer1.checked === false && answer2.checked === false && answer3.checked === true){ //correct answer here, match true and false values to correct and incorrect answer values above. 
        document.getElementById("triviaAnswer").innerHTML = displayanswer;  
        plays.correct();
        document.getElementById("boxWrong2").style.backgroundColor = "rgb(38, 255, 18)"; //answer1.true = boxCorrect1, answer2.true = boxWrong1, answer3.true = boxWrong2.
    }
    else if (answer1.checked === true && answer2.checked === false && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxCorrect1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    else if (answer1.checked === false && answer2.checked === true && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    }
    function displayAnswer45() {                                                      //change function value to match line #4 above. 
        var answerDisplay1 = document.getElementById("answer1"); 
        var answerDisplay2 = document.getElementById("answer2"); 
        var answerDisplay3 = document.getElementById("answer3"); 
        var answer1 = ' <strong class="answerMimic" id="answerCopy"> 7 </strong>'; //change answer to match answer1 from above. 
        var answer2 = ' <strong class="answerMimic" id="answerCopy"> 4000 </strong>'; //change to answer2 from above.
        var answer3 = ' <strong class="answerMimic" id="answerCopy"> 1300 </strong>'; //change to answer3 from above. 
        var answer4 = ' <strong class="answerMimic" id="answerCopy"></strong>'; //leave blank so answer can clear. 
        if (answerDisplay1.checked === true){
            document.getElementById("answerCopy").innerHTML = answer1;
        }
        else if (answerDisplay2.checked === true){
            document.getElementById("answerCopy").innerHTML = answer2;
        }
        else if (answerDisplay3.checked === true){
            document.getElementById("answerCopy").innerHTML = answer3;
        }
        else{
            document.getElementById("answerCopy").innerHTML = answer4;
        }
    }
    function changePage47() {
        plays.submit();                                                                  //change to new onclick id value on line #2 above. 
        var questionNum = Number(document.getElementById("questionNumber").value);
        var nextNumber = questionNum + 1; 
        document.getElementById("questionNumber").value = nextNumber; 
        var question2 = '<strong class="question"> How heavy is a gallon of water? </strong><strong class="answerMimic" id="answerCopy"></strong>'; //make new question.
        document.getElementById("trivquestion").innerHTML = question2;
        var check1 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer46(); clearButton1();">' + //change displayAnswer value.
        '<input type="checkbox" class="checkBox" id="answer1"><strong class="answerText"> 9lbs </strong>'+ //change answer. 
        '<span class="boxInput" id="boxCorrect1"></span>' + 
        '</label>';
        document.getElementById("answercheck1").innerHTML = check1;
        var check2 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer46(); clearButton2();">' + //match displayAnswer value to new value. 
        '<input type="checkbox" class="checkBox" id="answer2"><strong class="answerText"> 8lbs </strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong1"></span>' + 
        '</label>';
        document.getElementById("answercheck2").innerHTML = check2;
        var check3 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer46(); clearButton3();">' + //match displayAnswer value to new value.       LINE #4
        '<input type="checkbox" class="checkBox" id="answer3"><strong class="answerText"> 10lbs </strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong2"></span>' + 
        '</label>';
        document.getElementById("answercheck3").innerHTML = check3;
        var button = '<button class="answerButton" onclick="trivia48()">Submit</button>'; //make new onclick function value.                                          LINE #5
        document.getElementById("trivbutton").innerHTML = button;
        var answer = '<p class="questionAnswer" id="triviaAnswer"></p>';
        document.getElementById("trivanswer").innerHTML = answer; 
    }




    function trivia48() { //match function value to line #5 above. 
        var answer1 = document.getElementById("answer1"); 
        var answer2 = document.getElementById("answer2"); 
        var answer3 = document.getElementById("answer3"); 
        var wrongAnswer = Number(document.getElementById("numberWrong").value);
        var nextButton = '<button class="buttonPush" onclick="changePage48();">Next Question</button>'; //change to new onclick Id value.                                 LINE #2
        var displayanswer = '<img class="checkMark" src="img/GreenCheck.png">' + //on last question change onclick above function to lastQuestion() and button (Next Question) to Finish. 
        '<strong class="correctAnswer">Correct!</strong> ' +
        ' <img class="checkMark" src="img/GreenCheck.png"><br>' + 
        nextButton;
        var displayanswerw = '<img class="redX" src="img/thumbsDown.png"> <strong class="wrongAnswer">Wrong</strong> <img class="redX" src="img/thumbsDown.png">' +
                             '<h3 class="tryAgain">Guess Again!</h3>';
    if (answer1.checked === false && answer2.checked === true && answer3.checked === false){ //correct answer here, match true and false values to correct and incorrect answer values above. 
        document.getElementById("triviaAnswer").innerHTML = displayanswer;  
        plays.correct();
        document.getElementById("boxWrong1").style.backgroundColor = "rgb(38, 255, 18)"; //answer1.true = boxCorrect1, answer2.true = boxWrong1, answer3.true = boxWrong2.
    }
    else if (answer1.checked === true && answer2.checked === false && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxCorrect1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    else if (answer1.checked === false && answer2.checked === false && answer3.checked === true){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong2").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    }
    function displayAnswer46() {                                                      //change function value to match line #4 above. 
        var answerDisplay1 = document.getElementById("answer1"); 
        var answerDisplay2 = document.getElementById("answer2"); 
        var answerDisplay3 = document.getElementById("answer3"); 
        var answer1 = ' <strong class="answerMimic" id="answerCopy"> 9lb </strong>'; //change answer to match answer1 from above. 
        var answer2 = ' <strong class="answerMimic" id="answerCopy"> 8lb </strong>'; //change to answer2 from above.
        var answer3 = ' <strong class="answerMimic" id="answerCopy"> 10lb </strong>'; //change to answer3 from above. 
        var answer4 = ' <strong class="answerMimic" id="answerCopy"></strong>'; //leave blank so answer can clear. 
        if (answerDisplay1.checked === true){
            document.getElementById("answerCopy").innerHTML = answer1;
        }
        else if (answerDisplay2.checked === true){
            document.getElementById("answerCopy").innerHTML = answer2;
        }
        else if (answerDisplay3.checked === true){
            document.getElementById("answerCopy").innerHTML = answer3;
        }
        else{
            document.getElementById("answerCopy").innerHTML = answer4;
        }
    }
    function changePage48() { 
        plays.submit();                                                                 //change to new onclick id value on line #2 above. 
        var questionNum = Number(document.getElementById("questionNumber").value);
        var nextNumber = questionNum + 1; 
        document.getElementById("questionNumber").value = nextNumber; 
        var question2 = '<strong class="question"> Whats the equation to find circumference? </strong><strong class="answerMimic" id="answerCopy"></strong>'; //make new question.
        document.getElementById("trivquestion").innerHTML = question2;
        var check1 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer47(); clearButton1();">' + //change displayAnswer value.
        '<input type="checkbox" class="checkBox" id="answer1"><strong class="answerText"> pie=r squared </strong>'+ //change answer. 
        '<span class="boxInput" id="boxCorrect1"></span>' + 
        '</label>';
        document.getElementById("answercheck1").innerHTML = check1;
        var check2 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer47(); clearButton2();">' + //match displayAnswer value to new value. 
        '<input type="checkbox" class="checkBox" id="answer2"><strong class="answerText"> e=mc squared </strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong1"></span>' + 
        '</label>';
        document.getElementById("answercheck2").innerHTML = check2;
        var check3 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer47(); clearButton3();">' + //match displayAnswer value to new value.       LINE #4
        '<input type="checkbox" class="checkBox" id="answer3"><strong class="answerText"> a+b=c </strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong2"></span>' + 
        '</label>';
        document.getElementById("answercheck3").innerHTML = check3;
        var button = '<button class="answerButton" onclick="trivia49()">Submit</button>'; //make new onclick function value.                                          LINE #5
        document.getElementById("trivbutton").innerHTML = button;
        var answer = '<p class="questionAnswer" id="triviaAnswer"></p>';
        document.getElementById("trivanswer").innerHTML = answer; 
    }




    function trivia49() { //match function value to line #5 above. 
        var answer1 = document.getElementById("answer1"); 
        var answer2 = document.getElementById("answer2"); 
        var answer3 = document.getElementById("answer3"); 
        var wrongAnswer = Number(document.getElementById("numberWrong").value);
        var nextButton = '<button class="buttonPush" onclick="changePage49();">Next Question</button>'; //change to new onclick Id value.                                 LINE #2
        var displayanswer = '<img class="checkMark" src="img/GreenCheck.png">' + //on last question change onclick above function to lastQuestion() and button (Next Question) to Finish. 
        '<strong class="correctAnswer">Correct!</strong> ' +
        ' <img class="checkMark" src="img/GreenCheck.png"><br>' + 
        nextButton;
        var displayanswerw = '<img class="redX" src="img/thumbsDown.png"> <strong class="wrongAnswer">Wrong</strong> <img class="redX" src="img/thumbsDown.png">' +
                             '<h3 class="tryAgain">Guess Again!</h3>';
    if (answer1.checked === true && answer2.checked === false && answer3.checked === false){ //correct answer here, match true and false values to correct and incorrect answer values above. 
        document.getElementById("triviaAnswer").innerHTML = displayanswer;
        plays.correct();  
        document.getElementById("boxCorrect1").style.backgroundColor = "rgb(38, 255, 18)"; //answer1.true = boxCorrect1, answer2.true = boxWrong1, answer3.true = boxWrong2.
    }
    else if (answer1.checked === false && answer2.checked === true && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    else if (answer1.checked === false && answer2.checked === false && answer3.checked === true){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong2").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    }
    function displayAnswer47() {                                                      //change function value to match line #4 above. 
        var answerDisplay1 = document.getElementById("answer1"); 
        var answerDisplay2 = document.getElementById("answer2"); 
        var answerDisplay3 = document.getElementById("answer3"); 
        var answer1 = ' <strong class="answerMimic" id="answerCopy"> pie=r squared </strong>'; //change answer to match answer1 from above. 
        var answer2 = ' <strong class="answerMimic" id="answerCopy"> e=mc squared </strong>'; //change to answer2 from above.
        var answer3 = ' <strong class="answerMimic" id="answerCopy"> a+b=c </strong>'; //change to answer3 from above. 
        var answer4 = ' <strong class="answerMimic" id="answerCopy"></strong>'; //leave blank so answer can clear. 
        if (answerDisplay1.checked === true){
            document.getElementById("answerCopy").innerHTML = answer1;
        }
        else if (answerDisplay2.checked === true){
            document.getElementById("answerCopy").innerHTML = answer2;
        }
        else if (answerDisplay3.checked === true){
            document.getElementById("answerCopy").innerHTML = answer3;
        }
        else{
            document.getElementById("answerCopy").innerHTML = answer4;
        }
    }
    function changePage49() {   
        plays.submit();                                                               //change to new onclick id value on line #2 above. 
        var questionNum = Number(document.getElementById("questionNumber").value);
        var nextNumber = questionNum + 1; 
        document.getElementById("questionNumber").value = nextNumber; 
        var question2 = '<strong class="question"> How fast is the speed of sound? </strong><strong class="answerMimic" id="answerCopy"></strong>'; //make new question.
        document.getElementById("trivquestion").innerHTML = question2;
        var check1 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer48(); clearButton1();">' + //change displayAnswer value.
        '<input type="checkbox" class="checkBox" id="answer1"><strong class="answerText"> 631.4mph </strong>'+ //change answer. 
        '<span class="boxInput" id="boxCorrect1"></span>' + 
        '</label>';
        document.getElementById("answercheck1").innerHTML = check1;
        var check2 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer48(); clearButton2();">' + //match displayAnswer value to new value. 
        '<input type="checkbox" class="checkBox" id="answer2"><strong class="answerText"> 812.3mph </strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong1"></span>' + 
        '</label>';
        document.getElementById("answercheck2").innerHTML = check2;
        var check3 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer48(); clearButton3();">' + //match displayAnswer value to new value.       LINE #4
        '<input type="checkbox" class="checkBox" id="answer3"><strong class="answerText"> 761.2mph </strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong2"></span>' + 
        '</label>';
        document.getElementById("answercheck3").innerHTML = check3;
        var button = '<button class="answerButton" onclick="trivia50()">Submit</button>'; //make new onclick function value.                                          LINE #5
        document.getElementById("trivbutton").innerHTML = button;
        var answer = '<p class="questionAnswer" id="triviaAnswer"></p>';
        document.getElementById("trivanswer").innerHTML = answer; 
    }




    function trivia50() { //match function value to line #5 above. 
        var answer1 = document.getElementById("answer1"); 
        var answer2 = document.getElementById("answer2"); 
        var answer3 = document.getElementById("answer3"); 
        var wrongAnswer = Number(document.getElementById("numberWrong").value);
        var nextButton = '<button class="buttonPush" onclick="changePage50();">Next Question</button>'; //change to new onclick Id value.                                 LINE #2
        var displayanswer = '<img class="checkMark" src="img/GreenCheck.png">' + //on last question change onclick above function to lastQuestion() and button (Next Question) to Finish. 
        '<strong class="correctAnswer">Correct!</strong> ' +
        ' <img class="checkMark" src="img/GreenCheck.png"><br>' + 
        nextButton;
        var displayanswerw = '<img class="redX" src="img/thumbsDown.png"> <strong class="wrongAnswer">Wrong</strong> <img class="redX" src="img/thumbsDown.png">' +
                             '<h3 class="tryAgain">Guess Again!</h3>';
    if (answer1.checked === false && answer2.checked === false && answer3.checked === true){ //correct answer here, match true and false values to correct and incorrect answer values above. 
        document.getElementById("triviaAnswer").innerHTML = displayanswer;
        plays.correct();  
        document.getElementById("boxWrong2").style.backgroundColor = "rgb(38, 255, 18)"; //answer1.true = boxCorrect1, answer2.true = boxWrong1, answer3.true = boxWrong2.
    }
    else if (answer1.checked === true && answer2.checked === false && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxCorrect1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    else if (answer1.checked === false && answer2.checked === true && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    }
    function displayAnswer48() {                                                      //change function value to match line #4 above. 
        var answerDisplay1 = document.getElementById("answer1"); 
        var answerDisplay2 = document.getElementById("answer2"); 
        var answerDisplay3 = document.getElementById("answer3"); 
        var answer1 = ' <strong class="answerMimic" id="answerCopy"> 631.4mph </strong>'; //change answer to match answer1 from above. 
        var answer2 = ' <strong class="answerMimic" id="answerCopy"> 812.3mph </strong>'; //change to answer2 from above.
        var answer3 = ' <strong class="answerMimic" id="answerCopy"> 761.2mph </strong>'; //change to answer3 from above. 
        var answer4 = ' <strong class="answerMimic" id="answerCopy"></strong>'; //leave blank so answer can clear. 
        if (answerDisplay1.checked === true){
            document.getElementById("answerCopy").innerHTML = answer1;
        }
        else if (answerDisplay2.checked === true){
            document.getElementById("answerCopy").innerHTML = answer2;
        }
        else if (answerDisplay3.checked === true){
            document.getElementById("answerCopy").innerHTML = answer3;
        }
        else{
            document.getElementById("answerCopy").innerHTML = answer4;
        }
    }
    function changePage50() { 
        plays.submit();                                                                 //change to new onclick id value on line #2 above. 
        var questionNum = Number(document.getElementById("questionNumber").value);
        var nextNumber = questionNum + 1; 
        document.getElementById("questionNumber").value = nextNumber; 
        var question2 = '<strong class="question"> Which moon of Saturn has an atmosphere? </strong><strong class="answerMimic" id="answerCopy"></strong>'; //make new question.
        document.getElementById("trivquestion").innerHTML = question2;
        var check1 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer49(); clearButton1();">' + //change displayAnswer value.
        '<input type="checkbox" class="checkBox" id="answer1"><strong class="answerText"> Enceladus </strong>'+ //change answer. 
        '<span class="boxInput" id="boxCorrect1"></span>' + 
        '</label>';
        document.getElementById("answercheck1").innerHTML = check1;
        var check2 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer49(); clearButton2();">' + //match displayAnswer value to new value. 
        '<input type="checkbox" class="checkBox" id="answer2"><strong class="answerText"> Titan </strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong1"></span>' + 
        '</label>';
        document.getElementById("answercheck2").innerHTML = check2;
        var check3 = 
        '<label class="box" style="color:black;" onclick="clearButtonColor(); displayAnswer49(); clearButton3();">' + //match displayAnswer value to new value.       LINE #4
        '<input type="checkbox" class="checkBox" id="answer3"><strong class="answerText"> Rhea </strong>' + //change answer. 
        '<span class="boxInput" id="boxWrong2"></span>' + 
        '</label>';
        document.getElementById("answercheck3").innerHTML = check3;
        var button = '<button class="answerButton" onclick="trivia51()">Submit</button>'; //make new onclick function value.                                          LINE #5
        document.getElementById("trivbutton").innerHTML = button;
        var answer = '<p class="questionAnswer" id="triviaAnswer"></p>';
        document.getElementById("trivanswer").innerHTML = answer; 
    }




    function trivia51() { //match function value to line #5 above. 
        var answer1 = document.getElementById("answer1"); 
        var answer2 = document.getElementById("answer2"); 
        var answer3 = document.getElementById("answer3"); 
        var wrongAnswer = Number(document.getElementById("numberWrong").value);
        var nextButton = '<button class="buttonPush" onclick="lastQuestion(); plays.ending();">Finish</button>'; //change to new onclick Id value.                                 LINE #2
        var displayanswer = '<img class="checkMark" src="img/GreenCheck.png">' + //on last question change onclick above function to lastQuestion() and button (Next Question) to Finish. 
        '<strong class="correctAnswer">Correct!</strong> ' +
        ' <img class="checkMark" src="img/GreenCheck.png"><br>' + 
        nextButton;
        var displayanswerw = '<img class="redX" src="img/thumbsDown.png"> <strong class="wrongAnswer">Wrong</strong> <img class="redX" src="img/thumbsDown.png">' +
                             '<h3 class="tryAgain">Guess Again!</h3>';
    if (answer1.checked === false && answer2.checked === true && answer3.checked === false){ //correct answer here, match true and false values to correct and incorrect answer values above. 
        document.getElementById("triviaAnswer").innerHTML = displayanswer; 
        plays.correct(); 
        document.getElementById("boxWrong1").style.backgroundColor = "rgb(38, 255, 18)"; //answer1.true = boxCorrect1, answer2.true = boxWrong1, answer3.true = boxWrong2.
    }
    else if (answer1.checked === true && answer2.checked === false && answer3.checked === false){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxCorrect1").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    }
    else if (answer1.checked === false && answer2.checked === false && answer3.checked === true){ //
        document.getElementById("triviaAnswer").innerHTML = displayanswerw; 
        var wrongAnswerValue = wrongAnswer + 1; 
        document.getElementById("numberWrong").value = wrongAnswerValue;
        document.getElementById("boxWrong2").style.backgroundColor = "rgb(251, 21, 21)";
        plays.wrong();
    } 
    }
    function displayAnswer49() {                                                      //change function value to match line #4 above. 
        var answerDisplay1 = document.getElementById("answer1"); 
        var answerDisplay2 = document.getElementById("answer2"); 
        var answerDisplay3 = document.getElementById("answer3"); 
        var answer1 = ' <strong class="answerMimic" id="answerCopy"> Ericeladus </strong>'; //change answer to match answer1 from above. 
        var answer2 = ' <strong class="answerMimic" id="answerCopy"> Titan </strong>'; //change to answer2 from above.
        var answer3 = ' <strong class="answerMimic" id="answerCopy"> Rhea </strong>'; //change to answer3 from above. 
        var answer4 = ' <strong class="answerMimic" id="answerCopy"></strong>'; //leave blank so answer can clear. 
        if (answerDisplay1.checked === true){
            document.getElementById("answerCopy").innerHTML = answer1;
        }
        else if (answerDisplay2.checked === true){
            document.getElementById("answerCopy").innerHTML = answer2;
        }
        else if (answerDisplay3.checked === true){
            document.getElementById("answerCopy").innerHTML = answer3;
        }
        else{
            document.getElementById("answerCopy").innerHTML = answer4;
        }
    }