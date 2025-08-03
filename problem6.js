/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here
var currentSalary = startingSalary;

for (var year = 1; year <= experience; year++) {
  var increment = currentSalary * 0.05; // 5% -> 5/100 = 0.05
  currentSalary = currentSalary + increment;
}

console.log(currentSalary.toFixed(2));
