// Algorithm Tests
import { final_words } from "/js-numerals/convert.js";

function test(parameter, expected) {
    let output = final_words(parameter);
    try {
    final_words(parameter);
    } catch (e) {
    console.log(e);
    } finally {
    console.log("Input: " + parameter +  "\n");
    console.log("Expected: " + expected +  "\n");
    console.log("Output: " + output +  "\n\n");
    }
}

test(42, "forty-two")
test(1999, "one thousand nine hundred and ninety-nine")
test(2001, "two thousand and one")
test(17999, "seventeen thousand nine hundred and ninety-nine")
test(100001, "one hundred thousand and one")
test(342251, "three hundred and forty-two thousand two hundred and fifty-one")
test(1300420, "one million three hundred thousand four hundred and twenty")

test(14, "fourteen")
test(20, "twenty")
test(1014, "one thousand and fourteen")
test(100, "one hundred")
test(303030, "three hundred and three thousand and thirty")
test(711111111, "seven hundred and eleven million one hundred and eleven thousand one hundred and eleven")
test(1234567890123, "one trillion two hundred and thirty-four billion five hundred and sixty-seven million eight hundred and ninety thousand one hundred and twenty-three")
test(1000, "one thousand")
test(100000000, "one hundred million")
test(1000000000000000, "one would think it's a googolplex")
test(320000000, "falcon")







