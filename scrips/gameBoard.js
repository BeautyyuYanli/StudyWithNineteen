var gameBoard = $("#coreGame"), inputElement = document.getElementById("inputWord"), alarmElement, scoreElement, 
    transElement = document.getElementById("showTrans"), overElement = $("#gameOver"), totleScoreElement = document.getElementById("showScore");
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
    transElement.innerHTML = _word;
}
function showGameOver(){
    overElement.fadeIn(200);
    totleScoreElement.innerHTML = "本次成绩: " + score;
}
function showScore(_num){
    onceScore = _num;
    if (onceScore >= 70){
        evaluation = "很好呦!";
        changeKamome(clothesId, "03", "02");
    }
    else if (onceScore >= 40){
        evaluation = "不错嘛!";
        changeKamome(clothesId, "03", "04");
    }
    else if (onceScore >= 0){
        evaluation = "还行...";
        changeKamome(clothesId, "01", "13");
    }
    else{
        evaluation = "啊!错过了!";
        changeKamome(clothesId, "01", "12");
    }
    changeSaid("倒计时 -" + cntAlarm + "s<br>总分: " + (score - onceScore) + " and " + onceScore + "<br>" + evaluation);
}
function showAlarm(_num){
    cntAlarm = _num;
    changeSaid("倒计时 -" + cntAlarm + "s<br>总分: " + (score - onceScore) + " and " + onceScore + "<br>" + evaluation);
}
function gameBoardCreate(maxWords, dieTime, hardMode){
    inputElement.value = "";
    transElement.innerHTML = "";
    overElement.fadeOut(200);
    gameBoard.fadeIn(200);
    changeSaid("倒计时 -" + (cntAlarm = 30) + "s<br>总分: " + ((score = 0) - (onceScore = 0)) + " and " + onceScore + "<br>" + (evaluation = ""));
    inputElement.focus();
    let al = setInterval(() => {gameStart(maxWords, dieTime, hardMode);clearInterval(al)}, 1000);
}
function gameBoardDelete(){
    gameBoard.fadeOut(200);
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
function exitGame(){
    score = 0;
    gameOver();
}