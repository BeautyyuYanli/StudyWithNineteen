var faceId, actionId, clothesId = "01", said, sentence;
var saidElement = $("#showSaid>div"), sentenceElement;
function changeKamome(al = clothesId, be = "01", ge = "01"){//clothes action face
    changeBody($("#showBodyBack"), al, be);
    changeFace($("#showFaceBack"), be, ge);
    $("#showKamome").fadeOut(300);
    $("#showKamomeBack").fadeTo(300, 1);
    setTimeout(()=>{
    changeBody($("#showBody"), al, be);
    changeFace($("#showFace"), be, ge);
        $("#showKamome").fadeTo(0, 1);
        $("#showKamomeBack").fadeOut(0);
    }, 350);
}
function changeBody(bodyElement, _clothes, _action){
    bodyElement.attr("src", "./pics/body/bs1_km" + (clothesId = _clothes) + (actionId = _action) + "01.png");
}
function changeFace(faceElement, _action, _face){
    if (_action == "12" || _action == "13")
        _action = "11";
    if (_action == "11"){
        faceElement.css("left", "109px");
        faceElement.css("top", "165px");
        faceElement.css("height", "92px");
    }
    else{
        faceElement.css("left", "160.5px");
        faceElement.css("top", "161px");
        faceElement.css("height", "94.5px");
    }
    faceElement.attr("src", "./pics/face/bs1_km_f" + _action + "_" + (faceId = _face) + ".png");
}
function changeSaid(_str){
    saidElement.html(said = _str);
}
//reading machine
var resetAction;
function touched(alpha){
    if (!inMainBoard)
        return ;
    clearTimeout(resetAction);
    let randAction;
    if(alpha == 1){
        randAction = Math.floor(Math.random() * 100) % touchedFaceAction.length;
        changeSaid(touchedFaceAction[randAction].said);
        changeKamome(clothesId, touchedFaceAction[randAction].action, touchedFaceAction[randAction].face);
    }
    else{
        randAction = Math.floor(Math.random() * 100) % touchedBodyAction.length;
        changeSaid(touchedBodyAction[randAction].said);
        changeKamome(clothesId, touchedBodyAction[randAction].action, touchedBodyAction[randAction].face);
    }
    resetAction = setTimeout(()=>{
        changeSaid("");
        changeKamome(clothesId, "01", "01");
    }, 2000);
}
var touchedFaceAction = [
    {said: "请不要摸头..会长不高的..", action: "03", face: "08"},
    {said: "再摸头就要生气了!", action: "01", face: "19"},
    {said: "都说不要再摸头了..", action: "11", face: "07"},
    {said: "哇啊啊啊啊不要再摸头啦!!", action: "03", face: "12"},
];
var touchedBodyAction = [
    {said: "背单词的时候请认真些.", action: "02", face: "04"},
    {said: "嗯?有什么事吗?", action: "01", face: "03"},
    {said: "没有不高兴..只是有些饿了..", action: "03", face: "09"},
    {said: "这周末也一起去图书馆吧?", action: "11", face: "08"},
    {said: "呜..下周又该考试了..", action: "12", face: "07"},
    {said: "哼哼..这种难度的试卷实在是容易啊.", action: "13", face: "05"},
];