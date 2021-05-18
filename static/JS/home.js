function ageInDays() {
    var age = prompt('how old are you?');
    let day = age * 365;
    let h1 = document.createElement('h3');
    var textAnswer = document.createTextNode('you are ' + day + ' years old.');
    h1.setAttribute('id', 'days');
    h1.appendChild(textAnswer);
    document.getElementById('result').appendChild(h1);
}

function reset() {
    document.getElementById('days').remove();
}
//let day = age * 365;
//console.log('age\n' + age);
//console.log('day\n' + day);

function generateDog() {
    var image = document.createElement('img');
    image.src = 'https://raw.githubusercontent.com/jiliangli1997/picture/main/bichon-pic.png';
    document.getElementById('flex-dog-gen').appendChild(image);
}

function rps(yourChoice) {
    console.log('link' + yourChoice.id);
    var hc = yourChoice.id;
    var v = ['r', 's', 'p'];
    var bc = randomChoice(v);
    //console.log(hc + " " + bc);
    var score = getScore(v, hc, bc);
    var message = getMessage(score);
    //console.log(message.message  + " " + message.color);
    frontEnd(v, hc, bc, message);
}

function randomChoice(v) {
    var index = Math.floor(Math.random() * 3);
    return v[index];
}

function getScore(v, hc, bc) {
    var o = {
        'r' : {'r' : 0.5, 'p' : 0, 's' : 1},
        'p' : {'r' : 1, 'p' : 0.5, 's' : 0},
        's' : {'r' : 0, 'p' : 1, 's' : 0.5},
    };
    return o[hc][bc];
}

function getMessage(score) {
    if (score === 1) {
        return {message : 'YOU WIN', color : 'green'};
    }
    if (score === 0) {
        return {message : 'YOU LOST', color : 'red'};
    }
    if (score === 0.5) {
        return {message : 'TIE', color : 'blue'};
    }
}

function frontEnd(v, hc, bc, message) {
    var o = {
        'r' : document.getElementById('r').src,
        'p' : document.getElementById('p').src,
        's' : document.getElementById('s').src
    };
    document.getElementById('r').remove();
    document.getElementById('p').remove();
    document.getElementById('s').remove();

    var messageDiv = document.createElement('div');
    var hDiv = document.createElement('div');
    var bDiv = document.createElement('div');
    hDiv.innerHTML = "<img src=' "+ o[hc] + " 'height=150 width=150 style = 'box-shadow: 0px 10px 50px rgb(35, 35, 168)';>";
    messageDiv.innerHTML = "<h2 style='color: " +  message.color + "'>" + message.message + "</h2>";
    bDiv.innerHTML = "<img src=' "+ o[bc] + " 'height=150 width=150 style = 'box-shadow: 0px 10px 50px rgb(112, 206, 112)';>";
    
    document.getElementById('flex-box-rps-div').appendChild(hDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(bDiv);
}

