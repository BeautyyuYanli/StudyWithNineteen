var gameBoard = document.getElementById("coreGame"), inputElement = document.getElementById("inputWord"), alarmElement, scoreElement, 
    transElement = document.getElementById("showTrans"), overElement = document.getElementById("gameOver"), totleScoreElement = document.getElementById("showScore");
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
    console.log("score" + _num);
}
function showAlarm(){

}
function gameBoardCreate(maxWords, dieTime){
    inputElement.value = "";
    transElement.innerHTML = "";
    overElement.hidden = true;
    gameBoard.hidden = false;
    inputElement.focus();
    let al = setInterval(() => {gameStart(maxWords, dieTime);clearInterval(al)}, 1000);
}
function gameBoardDelete(){
    gameBoard.hidden = true;
}
function returnButton(){
    // if...
    gameBoardDelete();
    mainBoardCreate(score);
}