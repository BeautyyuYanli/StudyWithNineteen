var sentenceCnt, eventIndex, eventElement = $("#showEvent"), speakerWordElement = $("#speakWords"), speakerElement = $("#speaker");
function eventBoardCreate(_num){
    if (_num > events.length){
        return ;
    }
    mainBoardDelete();
    $("#backgroundBoard").css("background-image", "url('./pics/backgrounds/" + _num + ".jpg')");
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
    //show speaker
    if(events[eventIndex][sentenceCnt].speaker == 0)
        speakerElement.html("时九:");
    else if (events[eventIndex][sentenceCnt].speaker == 1)
        speakerElement.html("我:");
    else
        speakerElement.html("");
    //show Nineteen
    if (events[eventIndex][sentenceCnt].speaker == 0){
        changeNineteen(events[eventIndex][sentenceCnt].clothes, events[eventIndex][sentenceCnt].action, events[eventIndex][sentenceCnt].face);
    }
    else{
        $("#showNineteen").fadeTo(200, 0.5);
    }
}
var events = [
    [
        {sentence: "(尽管是早上, 不过天色却稍显昏暗, 毕竟是阴雨天气, 霏霏霪雨已经连续下了一周了)\
            ", speaker: -1, clothes: "02", action: "01", face: "01"},
        {sentence: "真不愧是南方的春天啊\
            ", speaker: 1, clothes: "02", action: "01", face: "01"},
        {sentence: "(这种天气里, 在图书馆走动着实十分舒服, 至少我是这么认为的. 淡淡的天光挥洒在一排排书架中间, 慵懒的光线稍稍明亮了纸面, 让人一旦走到这中间就不想再动弹. 但事实上人们更喜欢雨天待在家里)\
            ", speaker: -1, clothes: "02", action: "01", face: "01"},
        {sentence: "到英语文学那边看看吧\
            ", speaker: 1, clothes: "02", action: "01", face: "01"},
        {sentence: "(我走向了墙边的拐角, 谁知迎面撞上一位少女. 她怀里的书简直要堆成山了, 勉强靠着下巴才固定住. 尽管如此, 那一堆书依然是摇摇欲坠随时会掉下来的样子)\
            ", speaker: -1, clothes: "02", action: "01", face: "01"},
        {sentence: "唔哇啊啊啊...\
            ", speaker: 0, clothes: "02", action: "11", face: "10"},
        {sentence: "(那座山劈头盖脸地朝我倒下)\
            ", speaker: -1, clothes: "02", action: "11", face: "10"},
        {sentence: "啊!...抱歉...\
            ", speaker: 0, clothes: "02", action: "03", face: "07"},
        {sentence: "没...没关系的(小声)原来真的会掉下来啊...\
            ", speaker: 1, clothes: "02", action: "03", face: "10"},
        {sentence: "因为撞到了嘛...我以为这种天气只有我会来图书馆, 所以才完全没有防备啊.\
            ", speaker: 0, clothes: "02", action: "03", face: "09"},
        {sentence: "(我也以为这种天气只有我会来图书馆...这样一边想着一边蹲下帮忙捡书.因为事发突然, 这时候才认真打量起这个少女. 她一身白色校服, 上边的纹样和我的一样, 也就是校友的意思)\
            ", speaker: -1, clothes: "02", action: "03", face: "10"},
        {sentence: "<哈姆雷特>, <歌与十四行诗>, <弗兰肯斯坦>, <爱丽丝梦游仙境>...你很喜欢英语文学吗?\
            ", speaker: 1, clothes: "02", action: "01", face: "10"},
        {sentence: "嘛...其实也称不上喜欢, 只是近来有些兴趣罢了. 正好准备考试的时候背了不少单词, 权当辅助记忆也好.\
            ", speaker: 0, clothes: "02", action: "01", face: "02"},
        {sentence: "这样啊...不过<哈姆雷特>这种年代的书也许没什么帮助, 毕竟是用古英语写成的...\
            ", speaker: 1, clothes: "02", action: "03", face: "10"},
        {sentence: "啊哈哈...我会注意的\
            ", speaker: 0, clothes: "02", action: "01", face: "02"},
        {sentence: "(地上的书终于全部捡起来了, 再次堆成了那座和她一样高的小山, 让人担心它会不会再掉下来)\
            ", speaker: -1, clothes: "02", action: "03", face: "10"},
        {sentence: "谢谢你啦...有机会再见咯QWQ\
            ", speaker: 0, clothes: "02", action: "11", face: "15"},
        {sentence: "(我微微一笑. 既然是校友的话总会再见的)\
            ", speaker: -1, clothes: "02", action: "03", face: "10"},
        {sentence: "啊!!!\
            ", speaker: 0, clothes: "02", action: "11", face: "10"},
        {sentence: "(不出所料, 那座小山又一次崩塌了...)\
            ", speaker: -1, clothes: "02", action: "03", face: "10"},
    ],
    [
        {sentence: "(傍晚, 操场. 昨天下过的雨将空气洗刷一新, 草坪上略湿的叶片散发出春日的暖香)\
            ", speaker: -1, clothes: "01", action: "03", face: "10"},
        {sentence: "(晚饭后, 我和往常一样在操场散步. 其实还抱着一点私心, 想着说不定还会再遇到昨天那个少女)\
            ", speaker: 1, clothes: "01", action: "11", face: "02"},
        {sentence: "晚上好呀!\
            ", speaker: 0, clothes: "01", action: "11", face: "02"},
        {sentence: "(忽然, 耳侧传来熟悉的声音. 我转头一看, 那少女正凑到我身边, 笑盈盈地望着我. 那头瀑布般的长发几乎触到我的肩了.)\
            ", speaker: -1, clothes: "01", action: "03", face: "10"},
        {sentence: "晚上好...话说, 你一点也不感到惊讶吗?\
            ", speaker: 1, clothes: "01", action: "03", face: "10"},
        {sentence: "惊讶?\
            ", speaker: 0, clothes: "01", action: "03", face: "02"},
        {sentence: "关于会在学校里遇见我这件事\
            ", speaker: 1, clothes: "01", action: "03", face: "10"},
        {sentence: "嗯哼哼~\
            ", speaker: 0, clothes: "01", action: "02", face: "04"},
        {sentence: "(少女收回身子, 狡黠一笑)\
            ", speaker: -1, clothes: "01", action: "03", face: "10"},
        {sentence: "昨天向你道别的时候, 看你那意味深长的笑容, 我就猜到了哦.\
            ", speaker: 0, clothes: "01", action: "02", face: "04"},
        {sentence: "这样啊...\
            ", speaker: 1, clothes: "01", action: "03", face: "10"},
        {sentence: "(我稍稍有些失望, 原以为她会很惊讶呢.)\
            ", speaker: -1, clothes: "01", action: "03", face: "10"},
        {sentence: "昨天还没有自我介绍过呢. 我是高二(20)班的时九, 你呢?\
            ", speaker: 0, clothes: "01", action: "01", face: "03"},
        {sentence: "(我同样以自我介绍回应)\
            ", speaker: -1, clothes: "01", action: "03", face: "10"},
        {sentence: "嗯...记住了呦. 话说, 你原来有散步的习惯嘛.\
            ", speaker: 0, clothes: "01", action: "01", face: "01"},
        {sentence: "是啊. 晚饭后散步可以促进消化. 而且相比于其它运动, 散步的时候借着夕阳还能背些单词\
            ", speaker: 1, clothes: "01", action: "03", face: "10"},
        {sentence: "真是好学呀.\
            ", speaker: 0, clothes: "01", action: "12", face: "16"},
        {sentence: "(谈笑间, 广播里传来了三声钟鸣. 这是晚自习开始的铃声了)\
            ", speaker: -1, clothes: "01", action: "03", face: "10"},
        {sentence: "对了, 下周末Osica剧院里要上映Starlight哦. 有兴趣的话一起来吧.\
            ", speaker: 0, clothes: "01", action: "12", face: "03"},
        {sentence: "好啊.\
            ", speaker: 1, clothes: "01", action: "03", face: "10"},
        {sentence: "(正式铃又一次响了起来. 我们便返回教室了)\
            ", speaker: -1, clothes: "01", action: "03", face: "10"},
    ],
    [   
        {sentence: "(我们置身于四周漆黑的环境中. 这是正要上演歌剧Starlight的剧院里. 忽然, 两束强光点亮了舞台, 集中在中央的两人身上)\
            ", speaker: -1, clothes: "04", action: "03", face: "10"},
        {sentence: "啊! 开始了!\
            ", speaker: 0, clothes: "04", action: "11", face: "15"},
        {sentence: "Starlight, 也就是星光吧.\
            ", speaker: 1, clothes: "04", action: "03", face: "10"},
        {sentence: "是哦. 我曾在图书馆里读过原著, 是个十足的悲剧啊...\
            ", speaker: 0, clothes: "04", action: "01", face: "17"},
        {sentence: "(\"克莱尔, 我来了, 顺从约定来了, 在一年一度的星之祭典来了\")\
            ", speaker: -1, clothes: "04", action: "03", face: "10"},
        {sentence: "('你知道我的名字, 你是谁?')\
            ", speaker: -1, clothes: "04", action: "03", face: "10"},
        {sentence: "(\"怎么, 你不记得我了吗? 我是弗洛拉, 你的挚友, 你的约定啊!\")\
            ", speaker: -1, clothes: "04", action: "03", face: "10"},
        {sentence: "我一直很好奇来着, 为什么克莱尔会失去记忆呢?\
            ", speaker: 0, clothes: "04", action: "13", face: "10"},
        {sentence: "可能是受了诅咒吧, 也许是有哪个女神在嫉妒她.\
            ", speaker: 1, clothes: "04", action: "03", face: "10"},
        {sentence: "真是认真的理由啊...也许只是剧情需要也说不定啊哈哈.\
            ", speaker: 0, clothes: "04", action: "03", face: "17"},
        {sentence: "如你所说, 不仅是个悲剧, 而且是希腊式的嘛.\
            ", speaker: 1, clothes: "04", action: "03", face: "10"},
        {sentence: "('你是我重要的人, 可我不知道你是谁')\
            ", speaker: -1, clothes: "04", action: "03", face: "10"},
        {sentence: "(\"那么, 我们去找回你的记忆吧, 在星之祭典的夜晚!\")\
            ", speaker: -1, clothes: "04", action: "03", face: "10"},
        {sentence: "'摘得小的星星, 你将获得小的幸福；摘得大的星星, 你将获得大的幸福.'\
            ", speaker: 0, clothes: "04", action: "01", face: "14"},
        {sentence: "什么?\
            ", speaker: 1, clothes: "04", action: "03", face: "10"},
        {sentence: "是歌剧的台词啦.\
            ", speaker: 0, clothes: "04", action: "03", face: "02"},
        {sentence: "(在星之祭典的夜晚, 摘得小的星星, 就能获得小的幸福；摘得大的星星, 就能获得大的幸福. 这是星之祭典的古老神话)\
            ", speaker: -1, clothes: "04", action: "03", face: "10"},
        {sentence: "(\"看到那两颗星星了吗, 克莱尔?\")\
            ", speaker: -1, clothes: "04", action: "03", face: "10"},
        {sentence: "('看见了, 弗洛拉.')\
            ", speaker: -1, clothes: "04", action: "03", face: "10"},
        {sentence: "(\"我们去摘下那颗大的星星吧! 我们一起拿到大的幸福吧!\")\
            ", speaker: -1, clothes: "04", action: "03", face: "10"},
        {sentence: "遥不可及的星星象征这幸福吗? 看来悲剧的种子在这里已经种下了.\
            ", speaker: 1, clothes: "04", action: "03", face: "10"},
        {sentence: "是呢.\
            ", speaker: 0, clothes: "04", action: "01", face: "14"},
        {sentence: "(克莱尔和弗洛拉在高塔上攀登, 在盘旋的楼道上攀行)\
            ", speaker: -1, clothes: "04", action: "03", face: "10"},
        {sentence: "(二人到达塔顶, 弗洛拉开心地对克莱尔说:)\
            ", speaker: -1, clothes: "04", action: "03", face: "10"},
        {sentence: "(\"看到了吗, 那两颗星星, 只要伸手就能触及!\")\
            ", speaker: -1, clothes: "04", action: "03", face: "10"},
        {sentence: "(突然, 那颗大的星星闪现出耀眼的光芒, 旋即迅速坠落)\
            ", speaker: -1, clothes: "04", action: "03", face: "10"},
        {sentence: "(高塔开始剧烈摇晃, 弗洛拉从窗口跌下, 和星星一同坠落. 高塔重重紧锁, 克莱尔被囚禁在塔中. 星星再次升起, 回到原先的地方, 可望而不可即)\
            ", speaker: -1, clothes: "04", action: "03", face: "10"},
        {sentence: "啊! 弗洛拉摔下来了!\
            ", speaker: 0, clothes: "04", action: "03", face: "10"},
        {sentence: "(弗洛拉重新站了起来, 再次向高塔攀登. 一样的场景再次显现, 二人始终无法相遇. 帷幕在弗洛拉一次次的攀登中落下)\
            ", speaker: -1, clothes: "04", action: "03", face: "10"},
        {sentence: "这是坚强, 尽管明知无能为力却始终不肯放弃的故事. 和西西弗斯相同的故事.\
            ", speaker: 1, clothes: "04", action: "03", face: "10"},
        {sentence: "克莱尔也是啊, 尽管失去了记忆, 还依然坚持和友人的约定啊.\
            ", speaker: 0, clothes: "04", action: "12", face: "07"},
        {sentence: "好啦, 时间看起来还早, 不如一起去喝点什么吧?\
            ", speaker: 1, clothes: "04", action: "03", face: "10"},
        {sentence: "哼哼...那就要让你见识见识我的秘密基地啦!\
            ", speaker: 0, clothes: "04", action: "13", face: "03"},
    ],
    [
        {sentence: "(我们绕过一个转角, 转进一条不宽也不太窄的巷子里. 可以看到只有两三个人在走动, 都是学生装扮. 午后的阳光下显得十分安静.)\
            ", speaker: -1, clothes: "03", action: "03", face: "10"},
        {sentence: "登登登...登! 就是这里啦!\
            ", speaker: 0, clothes: "03", action: "12", face: "16"},
        {sentence: "(一块木质的牌匾显现在我眼前. 上边用黑笔写着手写体的店名, 下边则是其它颜色勾勒出的诸如\"摩卡咖啡\", \"卡布奇诺\", \"锡兰奶茶\"之类的字样. 这是看起来是家普通的奶茶店)\
            ", speaker: -1, clothes: "03", action: "03", face: "10"},
        {sentence: "装修还算挺讲究嘛. 木质结构的天花板搭配彩漆壁饰, 加上和风式的小部件, 有一种混搭的美感.\
            ", speaker: 1, clothes: "03", action: "03", face: "10"},
        {sentence: "哼哼...怎么样, 我可是不会轻易和人分享这家店呢.\
            ", speaker: 0, clothes: "03", action: "13", face: "16"},
        {sentence: "那真是感谢(平淡)\
            ", speaker: 1, clothes: "03", action: "03", face: "10"},
        {sentence: "真是一点诚意也没有!\
            ", speaker: 0, clothes: "03", action: "01", face: "13"},
        {sentence: "(服务员走了过来, 端上了两杯饮料)\
            ", speaker: -1, clothes: "03", action: "03", face: "10"},
        {sentence: "唔...真好喝啊...\
            ", speaker: 0, clothes: "03", action: "01", face: "02"},
        {sentence: "淡淡的苦味和香气混在一起, 口感十分醇厚, 几乎感受不到酸味. 真是很纯正的蓝山咖啡啊. 说起来你那杯是??\
            ", speaker: 1, clothes: "03", action: "03", face: "10"},
        {sentence: "卡布奇诺哦! 与其说是咖啡反而更像是奶茶呢. 浓重的奶香和咖啡味混在一起, 又有些像热可可.\
            ", speaker: 0, clothes: "03", action: "01", face: "02"},
        {sentence: "说起来, 再过三周就要期末考了呢.\
            ", speaker: 1, clothes: "03", action: "03", face: "10"},
        {sentence: "啊...期末考什么的真是麻烦啊...虽然也不会感到为难但总觉得有些压力呢...\
            ", speaker: 0, clothes: "03", action: "03", face: "07"},
        {sentence: "不会感到为难吗? 也是, 看起来你就不像是会担心考试的类型...\
            ", speaker: 1, clothes: "03", action: "03", face: "10"},
        {sentence: "嘛, 不过这之后就是寒假了. 那时候一定要玩个痛快!\
            ", speaker: 0, clothes: "03", action: "13", face: "03"},
    ],
    [
        {sentence: "(下午, 天台. 午后扬起的大风卷起了尘埃, 不知做何用处的亭子顶上开着大号的圆形天窗, 中间投下了明媚的阳光)\
            ", speaker: -1, clothes: "02", action: "03", face: "10"},
        {sentence: "天台风好大, 我好冷.\
            ", speaker: 0, clothes: "02", action: "12", face: "08"},
        {sentence: "这话说的仿佛你打算从这里跳下去一样...\
            ", speaker: 1, clothes: "02", action: "03", face: "10"},
        {sentence: "我又没有赌球什么的...再说了, 这么高的围栏怎么可能翻得过去嘛!\
            ", speaker: 0, clothes: "02", action: "03", face: "09"},
        {sentence: "啊哈哈...所谓风从龙, 云从虎. 这大概是什么龙在散步吧.\
            ", speaker: 1, clothes: "02", action: "03", face: "10"},
        {sentence: "我听说动物如果要飞起来的话, 翅膀起码得是躯干的30倍左右...所以说依照文艺作品里描述的那种身躯肥大的龙, 完全飞不起来才对.\
            ", speaker: 0, clothes: "02", action: "02", face: "17"},
        {sentence: "那是西方龙吧. 按照中国神话描述的那种四不像生物, 应该可以像水蛇那样的动作飞起来.\
            ", speaker: 1, clothes: "02", action: "03", face: "10"},
        {sentence: "这样描述的话龙还真是没面子啊...但这就不算'风从龙', 而是龙借着风飞起来的啊!\
            ", speaker: 0, clothes: "02", action: "03", face: "08"},
        {sentence: "借着风飞起来...'绝云气，负青天，然后图南', 那是庄子说的鲲鹏了.\
            ", speaker: 1, clothes: "02", action: "03", face: "10"},
        {sentence: "'鹏之背，不知其几千里也。怒而飞，其翼若垂天之云', 要是这样说的话反而不是鲲鹏借风, 它的翅膀本来就可以飞起来吧.\
            ", speaker: 0, clothes: "02", action: "01", face: "15"},
        {sentence: "(忽然间, 又一股妖风袭来, 扬得尘埃漫天飞扬, 直朝我们脸上扑来)\
            ", speaker: -1, clothes: "02", action: "03", face: "10"},
        {sentence: "哇啊啊啊啊!\
            ", speaker: 0, clothes: "02", action: "11", face: "13"},
        {sentence: "哇啊啊啊啊.(模仿)\
            ", speaker: 1, clothes: "02", action: "03", face: "10"},
        {sentence: "不要笑话我啊喂! 真的很冷啊现在.\
            ", speaker: 0, clothes: "02", action: "01", face: "10"},
        {sentence: "好啦好啦. 我们还是回去吧.\
            ", speaker: 1, clothes: "02", action: "03", face: "10"},
        {sentence: "嗯.\
            ", speaker: 0, clothes: "02", action: "01", face: "07"},
    ],
    [
        {sentence: "(这是个风和日丽的好天气. 可惜这并不能让人的心情好起来, 就如同它不能让成绩凭空多出30分一样. 我在前往学校的路上胡思乱想着)\
            ", speaker: -1, clothes: "01", action: "03", face: "10"},
        {sentence: "(忽然, 一阵风划到我的脸上, 让人感到有些痒)\
            ", speaker: -1, clothes: "01", action: "03", face: "10"},
        {sentence: "嘿! 想什么呢\
            ", speaker: 0, clothes: "01", action: "12", face: "02"},
        {sentence: "(校服装束的时九突然出现的我的身边. 总怀疑她是不是会什么空间移动的魔法.)\
            ", speaker: -1, clothes: "01", action: "03", face: "10"},
        {sentence: "当然是为了期末考感到悲伤且产生了求死不能的伤感...真羡慕你这样成绩优异的学子啊...\
            ", speaker: 1, clothes: "01", action: "03", face: "10"},
        {sentence: "嘛哈哈...想开点嘛, 后天就要放寒假了啊!\
            ", speaker: 0, clothes: "01", action: "12", face: "09"},
        {sentence: "寒假...在过春节之前还有一小会儿的时间, 你有什么计划吗?\
            ", speaker: 1, clothes: "01", action: "03", face: "10"},
        {sentence: "计划...并没有.\
            ", speaker: 0, clothes: "01", action: "03", face: "08"},
        {sentence: "那...有没有很想玩的些什么?\
            ", speaker: 1, clothes: "01", action: "03", face: "10"},
        {sentence: "想玩的...应该说每种活动都各有千秋吧...不对, 最想玩的还得是Vandark广场的夹娃娃机!\
            ", speaker: 0, clothes: "01", action: "02", face: "09"},
        {sentence: "夹娃娃机??\
            ", speaker: 1, clothes: "01", action: "03", face: "10"},
        {sentence: "对! 要把娃娃夹起来可是很考验水平的! 不过再去剧院似乎也很不错, 而且爆米花很好吃...但是, 但是最好吃的应该是GoldGate的冰淇凌...\
            ", speaker: 0, clothes: "01", action: "01", face: "13"},
        {sentence: "我说, 你这分明什么都想玩吧...\
            ", speaker: 1, clothes: "01", action: "03", face: "10"},
        {sentence: "所以才说各有千秋啦! 对了, 还有图书馆也很不错, 不过担心假期的图书馆会有很多小孩子很吵闹呢...\
            ", speaker: 0, clothes: "01", action: "13", face: "09"},
        {sentence: "(我又想起了第一次碰见她的情形. 现在想想难道那时候的一堆书她全都读完了??)\
            ", speaker: -1, clothes: "01", action: "03", face: "10"},
        {sentence: "喂! 喂! 又在想什么呢!\
            ", speaker: 0, clothes: "01", action: "03", face: "19"},
        {sentence: "嗯...啊?\
            ", speaker: 1, clothes: "01", action: "03", face: "10"},
        {sentence: "不认真听人说话可是很失礼的! 我说你寒假要一起去图书馆吗?\
            ", speaker: 0, clothes: "01", action: "01", face: "05"},
        {sentence: "啊, 当然可以了.\
            ", speaker: 1, clothes: "01", action: "03", face: "10"},
        {sentence: "(校门口的行人渐渐多了起来, 快到上课的时间了)\
            ", speaker: -1, clothes: "01", action: "03", face: "10"},
        {sentence: "那么, 后天见咯!\
            ", speaker: 0, clothes: "01", action: "01", face: "03"},
        {sentence: "后天见.\
            ", speaker: 1, clothes: "01", action: "03", face: "10"},
    ],
];
