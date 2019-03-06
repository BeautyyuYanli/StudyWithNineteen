var historyScore = 0, lastScore = 0, exValue = 0;
var historyScoreElement = document.getElementById("showHistoryScore"), lastScoreElement = document.getElementById("showLastScore"), 
    exElement, mainBoard = document.getElementById("mainBoard");
function Base64Encode(str, encoding = 'utf-8') {
    var bytes = new (TextEncoder || TextEncoderLite)(encoding).encode(str);        
    return base64js.fromByteArray(bytes);
}
function Base64Decode(str, encoding = 'utf-8') {
    var bytes = base64js.toByteArray(str);
    return new (TextDecoder || TextDecoderLite)(encoding).decode(bytes);
}
function playButton(){
    mainBoardDelete();
    gameBoardCreate(5, 10);
}
function _import(){
    let code = document.getElementById("importCode").value;
    code = Base64Decode(code);
    code = code.split(" ");
    historyScore = parseInt(code[0]);
    lastScore = parseInt(code[1]);
    exValue = parseInt(code[2]);
    mainBoardDelete();
    mainBoardCreate();
}
function showImport(){
    let exportCode = historyScore + " " + lastScore + " " + exValue;
    exportCode = Base64Encode(exportCode);
    changeSaid("您当前的游戏存档代码是:" + exportCode + "<br>请输入您曾保存的存档代码:<br><input id='importCode'><button onclick='_import()'>恢复存档</button>");
}
function showHelp(){
    window.open("./help.html");
}
function mainBoardCreate(_num = lastScore){
    // update level
    let level = Math.floor(exValue / 1000) + 1;
    $("#showLevel").html("等级Level: " + level + "级");
    $("#showTotleEx").html("熟练度Ex: " + exValue + "/" + (level * 1000));
    $("#showUnlockedEvents").empty();
    $("#showUnlockedEvents").append("<p>已解锁的事件</p>");
    for (let i = 1;i <= level; ++ i){
        $("#showUnlockedEvents").append("<div class='eventsIcon' onclick='eventBoardCreate(" + i + ")'>" + i + "</div>");
    }
    // update last score
    lastScore = _num;
    historyScore = Math.max(historyScore, lastScore);
    historyScoreElement.innerHTML = "the max score in history: " + historyScore;
    lastScoreElement.innerHTML = "the score last game: " + lastScore;
    // show Kamemo
    changeBody(clothesId, "01");
    changeFace("01", "01");
    changeSaid("");
    //  show main board
    mainBoard.hidden = false;
}
function mainBoardDelete(){
    mainBoard.hidden = true;
}