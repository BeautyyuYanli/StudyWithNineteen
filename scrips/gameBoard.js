var gameBoard = document.getElementById("coreGame"), inputElement = document.getElementById("inputWord"), alarmElement, scoreElement, 
    transElement = document.getElementById("showTrans"), overElement = document.getElementById("gameOver"), totleScoreElement = document.getElementById("showScore");
var onceScore, cntAlarm, evaluation;
function submitEvent(e){
    let keynum;
    if (window.event) // IE
        keynum = e.keyCode
    else if (e.which) // Netscape/Firefox/Opera
        keynum = e.which
    if (keynum == 13){
        submitWord(inputElement.value);
        inputElement.value = "";
    }
}
function showTrans(_word){
    console.log(_word);
    transElement.innerHTML = _word;
}
function showGameOver(){
    console.log("game over" + score);
    overElement.hidden = false;
    totleScoreElement.innerHTML = "your score this time: " + score;
}
function showScore(_num){
    onceScore = _num;
    if (onceScore >= 60)
        evaluation = "很好呦!";
    else if (onceScore >= 30)
        evaluation = "不错嘛!";
    else
        evaluation = "还行...";
    changeSaid("倒计时 -" + cntAlarm + "s<br>总分: " + (score - onceScore) + " +" + onceScore + "<br>" + evaluation);
}
function showAlarm(_num){
    cntAlarm = _num;
    changeSaid("倒计时 -" + cntAlarm + "s<br>总分: " + (score - onceScore) + " +" + onceScore + "<br>" + evaluation);
}
function gameBoardCreate(maxWords, dieTime){
    inputElement.value = "";
    transElement.innerHTML = "";
    overElement.hidden = true;
    gameBoard.hidden = false;
    changeSaid("倒计时 -" + (cntAlarm = 30) + "s<br>总分: " + ((score = 0) - (onceScore = 0)) + " +" + onceScore + "<br>" + (evaluation = ""));
    inputElement.focus();
    let al = setInterval(() => {gameStart(maxWords, dieTime);clearInterval(al)}, 1000);
}
function gameBoardDelete(){
    gameBoard.hidden = true;
    exValue += score;
}
function returnButton(){
    // if...
    gameBoardDelete();
    if (Math.floor((exValue - score) / 1000) - Math.floor((exValue) / 1000) < 0){
        eventBoardCreate(Math.floor((exValue) / 1000) + 1);
    }
    else
        mainBoardCreate(score);
}