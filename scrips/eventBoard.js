var sentenceCnt, eventIndex, eventElement = $("#showEvent"), speakerWordElement = $("#speakWords"), speakerElement = $("#speaker");
function eventBoardCreate(_num){
    $("#backgroundBoard").css("background-image",'url("../pics/backgrounds/" + _num + ".png")');
    mainBoardDelete();
    if (_num > events.length){
        mainBoardCreate();
        return ;
    }
    eventIndex = _num - 1;
    sentenceCnt = 0;
    speakerElement.html("");
    speakerWordElement.html("");
    eventElement.fadeIn(200);
    $("#showSaid").fadeOut(200);
    sentenceCnt = -1;
    nextSentence();
}
function eventBoardDelete(){
    $("#showSaid").fadeIn(200);
    eventElement.fadeOut(200);
    mainBoardCreate();
}
function nextSentence(){
    if (++ sentenceCnt >= events[eventIndex].length){
        eventBoardDelete();
        return ;
    }
    speakerWordElement.html(events[eventIndex][sentenceCnt].sentence);
    if(events[eventIndex][sentenceCnt].speaker == 0)
        speakerElement.html("Kamome:");
    else
        speakerElement.html("我:");
    if (events[eventIndex][sentenceCnt].speaker == 0){
        changeKamome(events[eventIndex][sentenceCnt].clothes, events[eventIndex][sentenceCnt].action, events[eventIndex][sentenceCnt].face);
    }
    else{
        $("#showKamome").fadeTo(200, 0.5);
    }
}
var events = [
    [
        {sentence: "faqqqq!", speaker: 0, face: "01", clothes: "02", action: "01"},
        {sentence: "faqqqq!", speaker: 1, face: 0, clothes: 0, action: 0},
        {sentence: "qaqqqq!", speaker: 0, face: "02", clothes: "02", action: "02"},
        {sentence: "qwqqqq!", speaker: 1, face: 0, clothes: 0, action: 0},
        {sentence: "qaqsdfjgsjkfgsdjgssjdfgsjdfgsjdfgsjfgjsfgsjdfgsdjfgsdjhfgsjfgsjhfdgsjdhfgjfgsdjfgsdfjgqqq!", speaker: 0, face: "02", clothes: "02", action: "02"},
    ],
    [
        {sentence: "fksdbfsmdf", speaker: 0, face: "01", clothes: "02", action: "01"},
        {sentence: "faqqqq!", speaker: 1, face: 0, clothes: 0, action: 0},
        {sentence: "sdkfhs", speaker: 0, face: "02", clothes: "02", action: "12"},
        {sentence: "qwqqqq!", speaker: 1, face: 0, clothes: 0, action: 0},
    ],
];