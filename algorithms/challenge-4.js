function calculateGrade(marks) {
    function calculateGrade(arr) {
        let overall = arr.reduce((a, b) => a + b)
        const result = Math.round(overall / arr.length);
        let grade = '';
        if (result >= 90  ) {
            grade = "A"
         } else if (result >= 80 && result <= 89) {
            grade = "B"
        } else if (result >= 70 && result <= 79) {
             grade = "C"
        } else if (result >= 60 && result <= 69) {
           grade = "D"
        } else if (result >= 50 && result <= 59) {
            grade = "E"
         } else if (result >= 49 && result <= 1) {
             grade = "F"
         }
    
        console.log(grade);
       
    }
 }
  module.exports =calculateGrade
