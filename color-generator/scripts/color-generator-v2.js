function sayColor(color) {
    let utterance = new SpeechSynthesisUtterance(color);
    speechSynthesis.speak(utterance);
    document.getElementById("wrapper").style.backgroundColor = color;
    if(color === 'red') {
        document.getElementById("displayText").innerHTML = "Apple is red";
        document.getElementById("redButton").style.backgroundColor = "yellow";
        document.getElementById("blueButton").style.backgroundColor = "white";
        document.getElementById("greenButton").style.backgroundColor = "white";
        document.getElementById("pinkButton").style.backgroundColor = "white";
    }else if (color === 'blue') {
        document.getElementById("displayText").innerHTML = "Sky is blue";
        document.getElementById("blueButton").style.backgroundColor = "yellow";
        document.getElementById("redButton").style.backgroundColor = "white";
        document.getElementById("greenButton").style.backgroundColor = "white";
        document.getElementById("pinkButton").style.backgroundColor = "white";
    }  else if (color === 'green') {
        document.getElementById("displayText").innerHTML = "Grass is green";
        document.getElementById("greenButton").style.backgroundColor = "yellow";
        document.getElementById("blueButton").style.backgroundColor = "white";
        document.getElementById("redButton").style.backgroundColor = "white";
        document.getElementById("pinkButton").style.backgroundColor = "white";
    } else if (color === 'pink') {
        document.getElementById("displayText").innerHTML = "Barbie is pink";
        document.getElementById("pinkButton").style.backgroundColor = "yellow";
        document.getElementById("blueButton").style.backgroundColor = "white";
        document.getElementById("redButton").style.backgroundColor = "white";
        document.getElementById("greenButton").style.backgroundColor = "white";
    }
}