var sentenceCnt, eventIndex, eventElement = $("#showEvent");
function eventBoardCreate(_num){
    $("#backgroundBoard").css("background-image",'url("../pics/backgrounds/" + _num + ".png")');
    mainBoardDelete();
    if (_num > events.length){
        mainBoardCreate();
        return ;
    }
    eventIndex = _num - 1;
    sentenceCnt = 0;
    saidElement.fadeOut(300);
    eventElement.fadeIn(300);
    eventElement.empty();
    sentenceCnt = -1;
    nextSentence();
}
function eventBoardDelete(){
    saidElement.fadeIn(300);
    eventElement.fadeOut(300);
    $("#showKamome").css("opacity", 1);
    mainBoardCreate();
}
function nextSentence(){
    if (++ sentenceCnt >= events[eventIndex].length){
        eventBoardDelete();
        return ;
    }
    eventElement.html(events[eventIndex][sentenceCnt].sentence);
    if (events[eventIndex][sentenceCnt].speaker == 0){
        $("#showKamome").css("opacity", 1);
        changeBody(events[eventIndex][sentenceCnt].clothes, events[eventIndex][sentenceCnt].action);
        changeFace(events[eventIndex][sentenceCnt].action, events[eventIndex][sentenceCnt].face);
    }
    else{
        $("#showKamome").css("opacity", 0.5);
    }
}
var events = [
    [
        {sentence: "faqqqq!", speaker: 0, face: "01", clothes: "02", action: "01"},
        {sentence: "faqqqq!", speaker: 1, face: 0, clothes: 0, action: 0},
        {sentence: "qaqqqq!", speaker: 0, face: "02", clothes: "02", action: "02"},
        {sentence: "qwqqqq!", speaker: 1, face: 0, clothes: 0, action: 0},
    ],
    [
        {sentence: "fksdbfsmdf", speaker: 0, face: "01", clothes: "02", action: "01"},
        {sentence: "faqqqq!", speaker: 1, face: 0, clothes: 0, action: 0},
        {sentence: "sdkfhs", speaker: 0, face: "02", clothes: "02", action: "12"},
        {sentence: "qwqqqq!", speaker: 1, face: 0, clothes: 0, action: 0},
    ],
];