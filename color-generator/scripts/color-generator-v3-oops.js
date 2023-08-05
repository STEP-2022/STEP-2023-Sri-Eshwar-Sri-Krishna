const COLORS = {
    red : { message : "Apple is red" },
    green : { message : "Grass is green" },
    blue : { message : "Sky is blue" },
    pink : { message : "Barbie is pink" },
}
/** ------------------------------------------
 * Method : sayColor
 * Description : Function to read out color using Speech synthesis
 * @param {*} color 
 * @author Nijin
 */
function sayColor(color) {
    let utterance = new SpeechSynthesisUtterance(color);
    speechSynthesis.speak(utterance);
    highlightColor(color);
}
/** ------------------------------------------
 * Method : highlightColor
 * Description : Function to highlight color in DOM
 * @param {*} color 
 * @author Nijin
 */
function highlightColor(color) {
    document.getElementById("wrapper").style.backgroundColor = color;
    document.getElementById("displayText").innerHTML = COLORS[color].message;
    const buttons = document.getElementsByTagName("button");
    for(let button of buttons) {
        button.style.backgroundColor = "white";
    }
    document.getElementById(color + "Button").style.backgroundColor = "yellow"
}