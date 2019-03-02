var score, alarm, gameTimer, wordCreator;
var wordElements = [], gameArea = document.getElementById("gameArea");
var words = [];

for (let i = 0; i < 15; ++ i){
    wordElements[i] = document.createElement("div");
    wordElements[i].setAttribute("class", "words");
    wordElements[i].setAttribute("hidden", "true");
    gameArea.appendChild(wordElements[i]);
    words[i] = {
        x: 0, y: 0, alpha: 0, index: i, ifLive: false, wordElement: wordElements[i], wordContent: 0,
        liveTimer: 0,
        delete: function (){
            this.ifLive = false;
            clearInterval(this.liveTimer);
            this.wordElement.hidden = true;
        },
        create: function (dieTime){
            // give the word life
            this.ifLive = true;
            this.liveTimer = setInterval(() => {
                this.delete();
            },dieTime * 1000);
            // set attrubutes
            this.wordContent = randWord();
            this.wordElement.innerHTML = this.wordContent.word;
            this.wordElement.style.top = (this.x = Math.floor(Math.random() * 1000) % 425) + "px";
            this.wordElement.style.left = (this.y = Math.floor(Math.random() * 1000) % 550) + "px";
            this.wordElement.style.opacity = (this.alpha = 1);
            // show the element
            this.wordElement.hidden = false;
        },
    };
}
function submitWord(_word){
    let matchWord = 0;
    for (let i in words){
        if (!words[i].ifLive) continue;
        if (words[i].wordContent.word == _word){
            if (matchWord === 0 || matchWord.alpha > words[i].alpha)
                matchWord = words[i];
        }
    }
    if (matchWord === 0)
        showTrans("拼错啦!");
    else{
        showTrans(matchWord.wordContent.trans);
        let scoreSingle;
        score += scoreSingle = Math.floor(matchWord.alpha * 100);
        showScore(scoreSingle);
        matchWord.delete();
    }
}
function gameStart(maxWords, dieTime){
    //initialization
    alarm = 30000;score = 0;
    gameTimer = setInterval(() => {
        for (let i in words){
            if (words[i].ifLive){
                words[i].alpha -= 1 / (dieTime * 25);
                words[i].wordElement.style.opacity = words[i].alpha;
            }
        }
        alarm -= 40;
        if (alarm % 1000 == 0){
            showAlarm(Math.floor(alarm / 1000));
        }
        if (alarm <= 0){
            gameOver();
        }
    }, 40);
    wordCreator = setInterval(() => {
        for (let i in words){
            if (!words[i].ifLive){
                words[i].create(dieTime);
                break;
            }
        }
    }, dieTime / maxWords * 1000);
    // create the first word
    for (let i in words) {
        if (!words[i].ifLive) {
            words[i].create(dieTime);
            break;
        }
    }
}
function gameOver(){
    clearInterval(gameTimer);
    clearInterval(wordCreator);
    for (let i in words){
        words[i].delete();
    }
    showGameOver();
}