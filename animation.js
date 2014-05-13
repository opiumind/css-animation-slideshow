var interval = 52;
var multiplier = 0.02;
var moveInterval = 40;
var colorChangeInterval = 1500;
var rootElem = $('#center');
for (var i = 0; i < 6; i++) {
    rootElem.append('<div id="circle-' + i + '" class="circle"></div>');
}

var a = 0;

function decimalToHex(d) {
    var hex = Number(d).toString(16);
    hex = "000000".substr(0, 6 - hex.length) + hex;
    return hex;
}

function changeCircle(counter, elem) {
    ++counter;
    elem.css({
        'left': Math.sin(counter * multiplier) * 150,
        'top': Math.cos(counter * multiplier) * 150
    });
    if (counter % (colorChangeInterval / moveInterval) == 0) {
        elem.animate({
            backgroundColor: '#' + decimalToHex((counter * 173) % 16777216)
        }, colorChangeInterval);
    }
    return counter;
}

var elem0 = rootElem.find('#circle-' + a);
var counter0 = a * interval;
setInterval(function () {
    counter0 = changeCircle(counter0, elem0);
}, moveInterval);

a = 1;
var elem1 = rootElem.find('#circle-' + a);

var counter1 = a * interval;
setInterval(function () {
    counter1 = changeCircle(counter1, elem1);
}, moveInterval);

a = 2;
var elem2 = rootElem.find('#circle-' + a);

var counter2 = a * interval;
setInterval(function () {
    counter2 = changeCircle(counter2, elem2);
}, moveInterval);

a = 3;
var elem3 = rootElem.find('#circle-' + a);

var counter3 = a * interval;
setInterval(function () {
    counter3 = changeCircle(counter3, elem3);
}, moveInterval);

a = 4;
var elem4 = rootElem.find('#circle-' + a);

var counter4 = a * interval;
setInterval(function () {
    counter4 = changeCircle(counter4, elem4);
}, moveInterval);

a = 5;
var elem5 = rootElem.find('#circle-' + a);

var counter5 = a * interval;
setInterval(function () {
    counter5 = changeCircle(counter5, elem5);
}, moveInterval);

