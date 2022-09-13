function fizzBuzz(input){
    function fizzBuzz(n) {
        let output = "";
        if (n % 3 == 0) output += "fizz"
        if (n % 5 == 0) output += "Buzz"
        return (output || n)
    }
  
}


module.exports = fizzBuzz
