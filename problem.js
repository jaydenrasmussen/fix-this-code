function fizzBuzz() {
    // This must print 1-100 in the console
    // If divisible by 3, print fizz
    // If divisible by 5, print buzz
    // If divisible by 3 and 5, print fizzbuzz
    // Else, print the number
    const { log } = console;
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) log("fizzbuzz");
        else if (i % 3 === 0) log("fizz");
        else if (i % 5 === 0) log("buzz");
        else log(i);
    }
}
fizzBuzz();

// Recursively...
/*
    function eval(int = 0) {
        if (int > 100) return;

        if (int % 3 === 0 && int % 5 === 0) console.log("fizzbuzz");
        else if (int % 3 === 0) console.log("fizz");
        else if (int % 5 === 0) console.log("buzz");
        else console.log(int);

        eval(int + 1);
    }
    eval();
 */
