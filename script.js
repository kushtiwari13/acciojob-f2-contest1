let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  const studentsWithMarksOver50 = arr.filter(student => student.marks > 50);
  studentsWithMarksOver50.map(student => console.log(student));
}

function PrintStudentsbyForEach() {
  arr.forEach(student => {
    if (student.marks > 50) {
      console.log(student);
    }
  });
}

function addData() {
  const newStudent = { id: 4, name: "susan", age: "20", marks: 45 };
  arr.push(newStudent);
  console.log(newStudent);
}

function removeFailedStudent() {
  arr = arr.filter(student => student.marks >= 50);
  console.log(arr);
}

function concatenateArray() {
  const newArray = [
    { id: 4, name: "emma", age: "19", marks: 70 },
    { id: 5, name: "david", age: "21", marks: 60 },
    { id: 6, name: "lisa", age: "20", marks: 55 }
  ];
  arr = arr.concat(newArray);
  console.log(arr);
}

PrintStudentswithMap();
PrintStudentsbyForEach();
addData();
removeFailedStudent();
concatenateArray();
