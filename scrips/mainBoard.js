var historyScore = 0, lastScore = 0, exValue = 0, level, inMainBoard;
function Base64Encode(str, encoding = 'utf-8') {
    var bytes = new (TextEncoder || TextEncoderLite)(encoding).encode(str);        
    return base64js.fromByteArray(bytes);
}
function Base64Decode(str, encoding = 'utf-8') {
    var bytes = base64js.toByteArray(str);
    return new (TextDecoder || TextDecoderLite)(encoding).decode(bytes);
}
function playButton(hardMode = 0){
    mainBoardDelete();
    gameBoardCreate(5, 10 - level, hardMode);
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
    changeSaid("您当前的存档代码是:" + exportCode + "<br>请输入您曾保存的存档代码:<br><input id='importCode'><button onclick='_import()'>恢复存档</button>");
}
function showHelp(){
    window.open("./help.html");
}
function mainBoardCreate(_num = lastScore){
    // update level
    exValue = Math.max(exValue, 0);
    level = Math.floor(exValue / 1000) + 1;
    level = Math.min(level, 6);
    $("#showLevel .primaryWord").html(level);
    $("#showTotleEx .primaryWord").html(exValue + '/' + level * 1000);
    $("#eventIcons").empty();
    for (let i = 1;i <= level; ++ i){
        $("#eventIcons").append("<div class='eventsIcon' onclick='eventBoardCreate(" + i + ")'>" + i + "</div>");
    }
    // update last score
    lastScore = _num;
    historyScore = Math.max(historyScore, lastScore);
    $("#showHistoryScore .primaryWord").html(historyScore);
    $("#showLastScore .primaryWord").html(lastScore);
    // show Kamemo
    changeKamome(clothesId, "01", "01");
    changeSaid("");
    //  show main board
    $("#mainBoard").fadeIn(200);
    inMainBoard = true;
}
function mainBoardDelete(){
    $("#mainBoard").fadeOut(200);
    inMainBoard = false;
}