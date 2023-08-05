function sayRed() {
    let utterance = new SpeechSynthesisUtterance("red");
    speechSynthesis.speak(utterance);
    document.getElementById("wrapper").style.backgroundColor = "red";
    document.getElementById("displayText").innerHTML = "Apple is red";
    document.getElementById("redButton").style.backgroundColor="yellow";
    document.getElementById("greenButton").style.backgroundColor="white";
    document.getElementById("blueButton").style.backgroundColor="white";
    document.getElementById("pinkButton").style.backgroundColor="white";
}
function sayGreen() {
    let utterance = new SpeechSynthesisUtterance("green");
    speechSynthesis.speak(utterance);
    document.getElementById("wrapper").style.backgroundColor = "green";
    document.getElementById("displayText").innerHTML = "Grass is green";
    document.getElementById("greenButton").style.backgroundColor="yellow";
    document.getElementById("redButton").style.backgroundColor="white";
    document.getElementById("blueButton").style.backgroundColor="white";
    document.getElementById("pinkButton").style.backgroundColor="white";
}
function sayBlue() {
    let utterance = new SpeechSynthesisUtterance("blue");
    speechSynthesis.speak(utterance);
    document.getElementById("wrapper").style.backgroundColor = "blue";
    document.getElementById("displayText").innerHTML = "Sky is blue";
    document.getElementById("blueButton").style.backgroundColor="yellow";
    document.getElementById("redButton").style.backgroundColor="white";
    document.getElementById("greenButton").style.backgroundColor="white";
    document.getElementById("pinkButton").style.backgroundColor="white";
}
function sayPink() {
    let utterance = new SpeechSynthesisUtterance("pink");
    speechSynthesis.speak(utterance);
    document.getElementById("wrapper").style.backgroundColor = "pink";
    document.getElementById("displayText").innerHTML = "Barbie is pink";
    document.getElementById("pinkButton").style.backgroundColor="yellow";
    document.getElementById("redButton").style.backgroundColor="white";
    document.getElementById("greenButton").style.backgroundColor="white";
    document.getElementById("blueButton").style.backgroundColor="white";
}
