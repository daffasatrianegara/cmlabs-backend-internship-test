const generateFizzBuzz = (num) => {
    for(let i = 1; i <= num; i++) {
        (i % 3 === 0) && (i % 5 === 0) ? console.log("FizzBuzz") : (i % 5 === 0) ? console.log("Buzz") : (i % 3 === 0) ? console.log("Fizz") : console.log(i)
    }
}

generateFizzBuzz(100)