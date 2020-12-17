function htp() {
    $('#splash-screen').hide();
    $('#how-to-play').show();
    document.title = "How to Play";
}

function startGame() {
    $('#splash-screen').hide();
    $('#game').show();
    document.title = "Level One"
}

function mainMenu() {
    $('#game').hide();
    $('#splash-screen').show();
    document.title = "Intrinsic vs. Extrinsic";
}

function lvlOneCorrectAnswer() {
    $('#lvl-one').hide();
    $('#lvl-two').show();
    document.title = "Level Two";
}

function lvlTwoCorrectAnswer() {
    $('#lvl-two').hide();
    $('#lvl-three').show();
    document.title = "Level Three";
}

function lvlThreeCorrectAnswer() {
    $('#lvl-three').hide();
    $('#lvl-four').show();
    document.title = "Level Four";
}

function lvlFourCorrectAnswer() {
    $('#lvl-four').hide();
    $('#lvl-five').show();
    document.title = "Level Five";
}

function lvlFiveCorrectAnswer() {
    $('#lvl-five').hide();
    $('#end-page').show();
    document.title = "End";
}

function lvlOneWrongAnswer() {
    $('#lvl-one-hint-text').show();
}

function lvlTwoWrongAnswer() {
    $('#lvl-two-hint-text').show();
}

function lvlThreeWrongAnswer() {
    $('#lvl-three-hint-text').show();
}

function lvlFourWrongAnswer() {
    $('#lvl-four-hint-text').show();
}

function lvlFiveWrongAnswer() {
    $('#lvl-five-hint-text').show();
}