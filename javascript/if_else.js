const i = require("prompt-sync")();

const score1 = parseFloat(i("Input Score 1 :"));
const score2 = parseFloat(i("Input Score 2 :"));
const score3 = parseFloat(i("Input Score 3 :"));
const score4 = parseFloat(i("Input Score 4 :"));
const score5 = parseFloat(i("Input Score 5 :"));

var Total = score1 + score2 + score3 + score4 + score5;
var Average = Total/5;
var grade ;
if(Average >= 0 && Average < 50){
    grade = "F";
}else if(Average >= 50 && Average < 60){
    grade = "E";
}else if(Average >= 60 && Average < 70){
    grade = "D";
}else if(Average >= 70 && Average < 80){
    grade = "C";
}else if(Average >= 80 && Average < 90){
    grade = "B";
}else if(Average >= 90 && Average <= 100){
    grade = "A";
}

console.log("\nOutput Score1     :"+score1);
console.log("Output Score2     :"+score2);
console.log("Output Score3     :"+score3);
console.log("Output Score4     :"+score4);
console.log("Output Score5     :"+score5);
console.log("Output Total      :"+Total);
console.log("Output Average    :"+Average);
console.log("Output Grade      :"+grade);