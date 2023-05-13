// Creating array of students 

let students = [
    { id:1, name:"john", age:"18", marks:80},
    { id:2, name:"jack", age:"20", marks:85},
    { id:3, name:"karen", age:"19", marks:35}
]


// Printing all students with marks over 50 using the map function 

function PrintStudentbyMap(){
    const passedStudents = students.filter(student => student.marks > 50);
    const studentNames = passedStudents.map(student => student.name);
    console.log(studentNames);
}
PrintStudentbyMap();


// Printing all students with marks over 50 using the forEach function 

function PrintStudentbyForEach(){
    students.forEach(student => {
        if(student.marks > 50){
            console.log(student.name);
        }
    });
}
PrintStudentbyForEach();


// Creating another function to add some new students in the array 

function addData(){
    const newStudent = {id:4, name:"susan", age:"20", marks:45};
    students.push(newStudent);
    console.log(students);
}
addData();


// Removing failed students from the array 


function removeFailedStudent(){
    students = students.filter(student => student.marks >= 50);
    console.log(students);
}
removeFailedStudent();


//Creating another array with 3 new students

function ConcatenateArray(){
    const newStudents = [
        {id:5, name:"cheems", age:"21", marks:95},
        {id:6, name:"ajay birare", age:"22", marks:70},
        {id:7, name:"shivendra", age:"20", marks:60}
    ];
    const allStudents = students.concat(newStudents);
    console.log(allStudents);
}
ConcatenateArray()
