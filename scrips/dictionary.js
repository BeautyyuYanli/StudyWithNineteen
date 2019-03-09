var dict = [
    {word: "faqqqq", trans: "发财"},
    {word: "qaqqqq", trans: "发财2"},
    {word: "qAqqqq", trans: "发财3"},
    {word: "dkfjh", trans: "发财4"},
    {word: "134234", trans: "发财5"},
    {word: "5i34y", trans: "发财6"},
    {word: "5fdusadgjshdfgsji34y", trans: "发财6"},
];
function randWord(){
    let al = Math.floor(Math.random() * 1000000);
    al %= dict.length;
    return dict[al];
}