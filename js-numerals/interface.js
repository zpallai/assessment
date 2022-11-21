// User Interface Scripts
import { final_words, calculate_thousands } from "/js-numerals/convert.js";

const everest = 8849;
const flashlight = 100000;
const pepper = 2200000;
const falcon = 320000000;

window.onload = () => {
    document.getElementById("number-input").addEventListener("input", function() {
        let number_input = $('#number-input').text().trim();
        if (isNaN(number_input)) {
            $('#text-output').text("not a number!");
            return false;
        }
        if (number_input.length > 15) {
            $('#text-output').text("that looks like a googolplex to me...");
            $('#number-input').attr('contenteditable','false');
            return false;
        }
        let number_input_int = parseInt(number_input);
        setTimeout(() => {
            let numeral = final_words(number_input_int);
            $('#text-output').text(numeral);
            $('#digits').text("Digits:  " + number_input.toString().length);
            $('#thousands').text("Thousands:  " + calculate_thousands(number_input.length));
        }, 200); 

        if (number_input > everest) {
            $('#info').text("That's taller (in meters) than Mt. Everest!");
        }
        if (number_input > flashlight) {
            $('#info').text("That's brighter (in lumens) than the brightest flashlight!");
        }
        if (number_input > pepper) {
            $('#info').text("That's hotter (in Scoville units) than the hottest pepper in the world!");
        }
        if (number_input > falcon) {
            $('#info').text("That's faster (in millimeters per second) than the fastest animal on earth!");
            setTimeout(() => {
                $('#peregrine').text("It's a Peregrine Falcon.");
            }, 2000); 
        }
    }, false);
}





