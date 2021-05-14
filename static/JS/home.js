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