var historyScore = 0, lastScore = 0, exValue = 0;
var historyScoreElement = document.getElementById("showHistoryScore"), lastScoreElement = document.getElementById("showLastScore"), 
    exElement, mainBoard = document.getElementById("mainBoard");
function playButton(){
    mainBoardDelete();
    gameBoardCreate(5, 10);
}
function mainBoardCreate(_num = lastScore){
    lastScore = _num;
    historyScore = Math.max(historyScore, lastScore);
    historyScoreElement.innerHTML = "the max score in history: " + historyScore;
    lastScoreElement.innerHTML = "the score last game: " + lastScore;
    mainBoard.hidden = false;
    changeBody(clothesId, "01");
    changeFace("01", "01");
}
function mainBoardDelete(){
    mainBoard.hidden = true;
}