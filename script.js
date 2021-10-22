// write code from 1-100
// print "Fizz" for each number that is a multiple of 3
// print "Buzz" for each number that is a multiple of 5
// for numbers that are multiple of 3 and 5 print "FizzBuzz"

for (i = 1; i < 101; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 == 0) {
        console.log("Fizz");
    }
    else if (i % 5 == 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}

