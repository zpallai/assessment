// Scripts to Dictate Numbers

const first = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const second = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
const higher = ["hundred", "thousand", "million"];

function singles(number) {
    return first[number];        
}

function tens(number) {
    if (number == 1) {
        return teens[number];
    }
    else {
        return second[number] + "-" + first[number];        
    }
}

function to_hundred(number) {
    number = number.toString();
    if (number <= 10) {
        return first[number];
    }
    else if (number > 10 && number < 20) {
        return teens[number];
    }
    else if (number > 20 && number < 100) {
        if (number[1] == 0) {
            return second[number[0]];
        }
        else {
            return second[number[0]] + "-" + first[number[1]];
        }
    }
}

function under_hundred(number) {
    number = number.toString();
    return number.slice(-2, number.length);
}

console.log(to_hundred(under_hundred(44472)));






