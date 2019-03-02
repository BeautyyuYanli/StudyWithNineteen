var inputElement = document.getElementById("inputWord"), alarmElement, scoreElement, transElement = document.getElementById("showTrans");
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

}
function showScore(_num){
    console.log("score" + _num);

}
function showAlarm(){

}
function gameBoardCreate(){

}
function gameBoardDelete(){

}