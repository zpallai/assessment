// Number Conversion Scripts

// Numeral Arrays
const first = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const second = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
const higher = [" ", " thousand ", " million ", " billion ", "trillion ", " googleplex "];

// Return all digits less than a thousand
function to_thousand(number) {
    let og_number = number;
    while( number.charAt(0) === '0')
    {
      number = number.substring(1);
    }
    number = parseInt(number);
    
    if (number <= 10) {
        if (og_number.charAt(1) === '0') {
            return "and " + first[number];
        }
        else {
            return first[number];
        }
    }

    else if (number > 10 && number < 20) {
        return teens[og_number[-1]];
    }

    else if (number >= 20 && number < 100) {
        number = number.toString();
        if (number[1] == 0) {
            return second[number[0]];
        }
        else {
            return second[number[0]] + "-" + first[number[1]];
        }
    }

    else {
        number = number.toString();
        if (number[1] == 0 && number[2] == 0) {
            return first[number[0]] + " hundred";
        }
        else if (number[1] != 0 && number[2] == 0) {
            return first[number[0]] + " hundred and " + second[number[1]];
        }
        else if (number[1] == 0 && number[2] != 0) {
            return first[number[0]] + " hundred and " + first[number[2]];
        }
        else if (number[1] == 1) {
            return first[number[0]] + " hundred and " + teens[number[2]];
        }
        else {
            return first[number[0]] + " hundred and " + second[number[1]] + "-" + first[number[2]];;
        }
    }
}

// Split numbers on thousands place (comma separator)
function split_thousands(number) {
    let temp = [];
    let final = [];
    let x = 0;
    number = number.toString().split("").reverse();
    while (number[x]) {
        temp = [];
        for (var y = 0; y < 3 && x < number.length; y++) {
            temp.push(number[x]);
            x++;
        }
        temp.reverse()
        temp = temp.toString();
        temp = temp.replace(/,/g,'') 
        final.push(temp);
    }
    final.reverse();
    return final;
}

// Assemble final string by converting numbers split by thousands
function final_words(number) {
    let word = "";
    let words = "";
    let number_split = split_thousands(number);
    let thousands = number_split.length;
    for (var x = 0; x < number_split.length; x++ ) {
        word = to_thousand(number_split[x]);
        if (thousands > 1) {
            words += word + higher[thousands - 1];
            thousands--;
        }
        else {
            words += word;
        }
    }
    return words;
}

console.log(final_words(1300420));



















