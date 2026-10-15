let name =prompt("Enter your name:");
console.log("Name:"+name);

let age =parseInt(prompt("Enter your age:"));
console.log("age:"+age);

let cgpa= parseFloat(prompt("Enter your CGPA:"));
console.log("CGPA:"+cgpa);

let isStudent=(prompt("are you a student?(true/false)")==="true");
console.log("Student:"+isStudent);

let grade=prompt("Enter your grade(A/B/C):").charAt(0);
console.log("Grade:"+grade);

let courses=[
  "webtech",
  "OOP",
  "Database"
];
console.log("using for loops:");
for(let i=0;i<courses.length;i++){
  console.log(courses[i]);
  i++;
}
let marks =parseInt(prompt("Enter your marks:"));
console.log("Marks:"+marks);
if(marks>=80){
   console.log("Grade :A+");
  
}
else if(marks>=70){
   console.log("Grade :A");
  
}
else if(marks>=60){
   console.log("Grade :B");  
}
else{
   console.log("Grade :F");
  
}
function showStudent(name,age){
   console.log("student name "+name);
  console.log("student age "+age);
  showStuddent (name,age)
}
let student=[]
for(let i=0;i<3;i++){
  student[i]=prompt("Enter your name:"+(i+1)+":");
}
console.log("students ");
for(let i=0;i<student.length;i++){
  console.log(student[i] );
}