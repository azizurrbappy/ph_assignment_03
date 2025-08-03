/** Problem 05 - ( PH Email Generator )  */
var student = { name: 'jhanku', roll: 1014, department: 'cse' };
//write your code here
var phEmailInfo = student.name + student.roll + '.' + student.department;
var phEmailGenerator = phEmailInfo + '@ph.ac.bd';
console.log(phEmailGenerator);
