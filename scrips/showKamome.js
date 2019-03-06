var faceId, actionId, clothesId = "01", said, sentence;
var faceElement = $("#showFace"), bodyElement = $("#showBody"), saidElement = $("#showSaid"), sentenceElement;
function changeBody(_clothes, _action){
    bodyElement.attr("src", "./pics/body/bs1_km" + (clothesId = _clothes) + (actionId = _action) + "01.png");
}
function changeFace(_action, _face){
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