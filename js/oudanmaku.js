function create(){
    var oudanmaku;
    var max_length = 0;
    var message = document.getElementById('message').value;
    messages = message.split("\n");
    for (i=0; i<messages.length; i++) {
        if (messages[i].length > max_length) {
            max_length = messages[i].length;
        }
    }
    // 上辺
    oudanmaku = "┏";
    for (i=0; i<max_length; i++) {
        oudanmaku += "━";
    }
    oudanmaku += "┓\n";
    // メッセージ
    for (i=0; i<messages.length; i++) {
        oudanmaku += "┃"
        oudanmaku += messages[i];
        for (ii=0; ii<(max_length-messages[i].length); ii++) {
            oudanmaku += "　";
        }
        oudanmaku += "┃\n";
    }
    // 下辺
    oudanmaku += "┗";
    for (i=0; i<max_length; i++) {
        oudanmaku += "━";
    }
    oudanmaku += "┛\n";
    // クレジット
    oudanmaku += "横断幕メーカー\n";
    oudanmaku += "http://goo.gl/mp1mBH\n";
    document.getElementById('oudanmaku').innerHTML = oudanmaku;
}

function tweet(){
    var tweet = document.getElementById('oudanmaku').innerHTML;
    var url = 'https://twitter.com/intent/tweet?text=' + encodeURI(tweet) + '&source=webclient'
    document.location = url;
}

function create2tweet(){
    create();
    tweet();
}
