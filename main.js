// let cat = {
//     name: 'Tony',
//     color: 'grey',
//     age: 2
// };

// let friendObj = {
//     name: 'Steve',
//     age: 24,
//     heigth: 5.11,
//     hobbies: ['soccer', 'xboxGames', 'traveling'],
//     pets: ['dog', 'cats']
// }

// "use strict"
// let myInfo = {
//     name: "Pursalane Faye",
//     address: "121 Main Street",
//     city : "Brooklyn",
//     state : "NY",
//     zipCode : "7272",

// };

// for (let i = 0; i < 10; i++){

// }

// let number = 0;

// while (number < 7){
//     console.log('I Love While Loops')
//     number += 1
// }

//push

// const numberArray = [ 1, 2, 3]

// function addToArray(newNumber){

//     newNumber.push(newNumber);

// }

// addToArray(4)

// console.log({numberArray});

// let courses = [
//     {
//       CourseId: "PROG100",
//       Title: "Introduction to HTML/CSS/Git",
//       Location: "Classroom 7",
//       StartDate: "09/08/22",
//       Fee: "100.00",
//     },
//     {
//       CourseId: "PROG200",
//       Title: "Introduction to JavaScript",
//       Location: "Classroom 9",
//       StartDate: "11/22/22",
//       Fee: "350.00",
//     },
//     {
//       CourseId: "PROG300",
//       Title: "Introduction to Java",
//       Location: "Classroom 1",
//       StartDate: "01/09/23",
//       Fee: "50.00",
//     },
//     {
//       CourseId: "PROG400",
//       Title: "Introduction to SQL and Databases",
//       Location: "Classroom 7",
//       StartDate: "03/16/23",
//       Fee: "50.00",
//     },
//     {
//       CourseId: "PROJ500",
//       Title: "Introduction to Angular",
//       Location: "Classroom 1",
//       StartDate: "04/25/23",
//       Fee: "50.00",
//     },
//   ];

//   for(const course of courses){
//     console.log(course);
//   };

//   for (const course of courses ) {
//     if(course.CourseId === "PROG200"){
//      console.log("The PROG200 course starts on: " + course.StartDate);
//     };
//   };

//   for (const course of courses) {
//     if (course.CourseId == "PROJ500") {
//       console.log("The PROJ500 course title is: " + course.Title);
//     };
//   };

// const cheapCourseTitles = [];

// for (const course of courses) {
//   const fee = Number(course.Fee);
//   if (fee <= 50) {
//     cheapCourseTitles.push(course);
//   };
// };

// console.log("These are the titles of the courses that cost $50 or less");
// console.log(cheapCourseTitles);

const selectParentContainer = document.getElementById('selectContainer');

const selectForm = document.createElement('select');

selectParentContainer.appendChild(selectForm);

const optionEmpty = document.createElement('option');
optionEmpty.disabled = true;
optionEmpty.value = 'Empty';
optionEmpty.innerText = 'Select One';

const option1 = document.createElement('option');
option1.value = '1';
option1.innerText = 'New York';

const option2 = document.createElement('option');
option2.value = '2';
option2.innerText = 'Florida';

const option3 = document.createElement('option');
option3.value = '3';
option3.innerText = 'Cali';

selectForm.appendChild(optionEmpty);
selectForm.appendChild(option1);
selectForm.appendChild(option2);
selectForm.appendChild(option3);
