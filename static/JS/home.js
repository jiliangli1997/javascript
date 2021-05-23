function ageInDays() {
    var age = prompt('how old are you?');
    let day = age * 365;
    let h1 = document.createElement('h3');
    var textAnswer = document.createTextNode('you are ' + day + ' days old.');
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

var allButton = document.getElementsByTagName('button');  

var copy = [];
for (let i = 0; i < allButton.length; i++) {
    copy.push(allButton[i].classList[1]);
}

function colorChange(buttonInfo) {
    if (buttonInfo.value === 'red') {
        buttonRed();
    } else if (buttonInfo.value === 'green') {
        buttonGreen();
    } else if (buttonInfo.value === 'random') {
        buttonRandom();
    } else if (buttonInfo.value === 'reset') {
        buttonReset();
    }
}
 
function buttonRed() {
    for (let i = 0; i < allButton.length; i++) {
        allButton[i].classList.remove(allButton[i].classList[1]);
        allButton[i].classList.add('btn-danger');
    }
}

function buttonGreen() {
    for (let i = 0; i < allButton.length; i++) {
        allButton[i].classList.remove(allButton[i].classList[1]);
        allButton[i].classList.add('btn-success');
    }
}

function buttonReset() {
    for (let i = 0; i < allButton.length; i++) {
        allButton[i].classList.remove(allButton[i].classList[1]);
        allButton[i].classList.add(copy[i]);
    }
}

function buttonRandom() {
    for (let i = 0; i < allButton.length; i++) {
        allButton[i].classList.remove(allButton[i].classList[1]);
        allButton[i].classList.add(randomSelect());
    }
}

function randomSelect() {
    var color = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning'];
    return color[Math.floor(Math.random() * 4)];
}

let blackjackGame = {
    'you' : {'scoreSpan' : '#your-blackjack-result', 'div' : '#your-box', 'score' : 0},
    'dealer' : {'scoreSpan' : '#dealer-blackjack-result', 'div' : '#dealer-box', 'score' : 0},
    'cards' : ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
    'cardsMap' : {'2' : 2, '3' : 3, '4' : 4, '5' : 5, '6' : 6, '7' : 7, '8' : 8, '9' : 9, '10' : 10, 'J' : 10, 'Q' : 10, 'K' :10, A : [1, 11]},
    'wins' : 0,
    'losses' : 0,
    'isStand' : false,
    'draws' : 0,
    'turnsOver' : false
};

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);
document.querySelector('#blackjack-stand-button').addEventListener('click', dealerLogic);
document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);

function blackjackHit() {
    if (blackjackGame['isStand'] == false) {
        let card = showCard(YOU);
        updateScore(card, YOU);
        showScore(YOU);
    }

}

function showCard(activePlayer) {
   
    let cardImage = document.createElement('img');
    let cardsbox = [
        'https://cdn2.bigcommerce.com/n-d57o0b/1kujmu/products/297/images/924/2D__57497.1440113502.1280.1280.png?c=2',
        'https://cdn2.bigcommerce.com/n-d57o0b/1kujmu/products/297/images/925/3C__99122.1440113509.1280.1280.png?c=2',
        'https://cdn2.bigcommerce.com/n-d57o0b/1kujmu/products/297/images/926/4H__83243.1440113515.1280.1280.png?c=2',
        'https://cdn2.bigcommerce.com/n-d57o0b/1kujmu/products/297/images/927/5S__90574.1440113521.1280.1280.png?c=2',
        'https://cdn2.bigcommerce.com/n-d57o0b/1kujmu/products/297/images/928/6D__92916.1440113530.1280.1280.png?c=2',
        'https://cdn2.bigcommerce.com/n-d57o0b/1kujmu/products/297/images/929/7C__93490.1440113539.1280.1280.png?c=2',
        'https://cdn2.bigcommerce.com/n-d57o0b/1kujmu/products/297/images/930/8S__27839.1440113555.1280.1280.png?c=2',
        'https://cdn2.bigcommerce.com/n-d57o0b/1kujmu/products/297/images/931/9D__67286.1440113561.1280.1280.png?c=2',
        'https://cdn2.bigcommerce.com/n-d57o0b/1kujmu/products/297/images/932/10H__11470.1440113568.1280.1280.png?c=2',
        'https://cdn2.bigcommerce.com/n-d57o0b/1kujmu/products/297/images/923/JC__86231.1440113428.1280.1280.png?c=2',
        'https://cdn2.bigcommerce.com/n-d57o0b/1kujmu/products/297/images/934/QD__14920.1440113588.1280.1280.png?c=2',
        'https://cdn2.bigcommerce.com/n-d57o0b/1kujmu/products/297/images/933/KH__01216.1440113580.1280.1280.png?c=2',
        'https://cdn2.bigcommerce.com/n-d57o0b/1kujmu/products/297/images/935/AS__68652.1440113599.1280.1280.png?c=2',
    ]
    let index = Math.floor(Math.random() * cardsbox.length);
    cardImage.src = cardsbox[index];
    cardImage.style.width = '80px';  
    if (activePlayer['score'] <= 21) {
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        
    }
    return blackjackGame['cards'][index];
}

function blackjackDeal() {
    if (blackjackGame['turnsOver'] === true) {
        blackjackGame['isStand'] = false;
        let yourImages = document.querySelector('#your-box').querySelectorAll('img');
        let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');

        for (i = 0; i < yourImages.length; i++) {
            yourImages[i].remove();
        }
        for (i = 0; i < dealerImages.length; i++) {
            dealerImages[i].remove();
        }
        YOU['score'] = 0;
        DEALER['score'] = 0;
        document.querySelector('#your-blackjack-result').textContent = 0;
        document.querySelector('#dealer-blackjack-result').textContent = 0;

        document.querySelector('#blackjack-result').textContent = "Let's Play!";
        document.querySelector('#blackjack-result').style.color = 'black';
        blackjackGame['turnsOver'] = false;
    }
}

function updateScore(card, activePlayer) {
    if (card === 'A') {
        if (activePlayer['score'] + blackjackGame['cardsMap'][card][1] <= 21) {
            activePlayer['score'] += blackjackGame['cardsMap'][card][1];
        } else {
            activePlayer['score'] += blackjackGame['cardsMap'][card][0];
        }
    } else {
        activePlayer['score'] += blackjackGame['cardsMap'][card];
    }
    
}

function showScore(activePlayer) {
    if (activePlayer['score'] > 21) {
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST';

    } else {
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }           
}

function dealerLogic() {
    blackjackGame['isStand'] = true;
    while (DEALER['score'] < 16 && blackjackGame['isStand'] === true) {
        let card = showCard(DEALER);
        updateScore(card, DEALER);
        showScore(DEALER);
    }

    blackjackGame['turnsOver'] = true;
    let win = computeWinner();
    showResult(win);
   
}

function computeWinner() {
    let winner;

    if (YOU['score'] <= 21) {
        if (YOU['score'] > DEALER['score'] || (DEALER['score'] > 21)) {
            winner = YOU;
            //alert('You Won!');
            blackjackGame['wins']++;
        } else if (YOU['score'] < DEALER['score']) {
            winner = DEALER;
            //alert('You Lost!');
            blackjackGame['losses']++;
        } else if (YOU['score' === DEALER['score']]) {
            //alert('Draw!');
            blackjackGame['draws']++;
        }
    } else if (YOU['score'] > 21 && DEALER['score'] <= 21) {
        winner = DEALER;
        blackjackGame['losses']++;
        //alert('You Lost!');
    } else if (YOU['score'] > 21 && DEALER['score'] > 21) {
        //alert('Draw!');
        blackjackGame['draws']++;
    }
    return winner; 
}

function showResult(winner) {
    let message, messageColor;
    if (blackjackGame['turnsOver'] === true) {
        if (winner === YOU) {
            document.querySelector('#WINS').textContent = blackjackGame['wins'];
            message = 'You Won!';
            messageColor = 'green';
        } else if (winner === DEALER) {
            document.querySelector('#LOSSES').textContent = blackjackGame['losses'];
            message = 'You Lost!';
            messageColor = 'red';
        } else {
            document.querySelector('#DRAWS').textContent = blackjackGame['draws'];
            message = 'You Draw!';
            messageColor = 'black';
        }
        document.querySelector('#blackjack-result').textContent = message;
        document.querySelector('#blackjack-result').style.color = messageColor;
    }

}

