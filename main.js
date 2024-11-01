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

// const usStates = [
//   { id: 1, name: 'Alabama', abbreviation: 'AL', capital: 'Montgomery' },
//   { id: 2, name: 'Alaska', abbreviation: 'AK', capital: 'Juneau' },
//   { id: 3, name: 'Arizona', abbreviation: 'AZ', capital: 'Phoenix' },
//   { id: 4, name: 'Arkansas', abbreviation: 'AR', capital: 'Little Rock' },
//   { id: 5, name: 'California', abbreviation: 'CA', capital: 'Sacramento' },
//   { id: 6, name: 'Colorado', abbreviation: 'CO', capital: 'Denver' },
//   { id: 7, name: 'Connecticut', abbreviation: 'CT', capital: 'Hartford' },
//   { id: 8, name: 'Delaware', abbreviation: 'DE', capital: 'Dover' },
//   { id: 9, name: 'Florida', abbreviation: 'FL', capital: 'Tallahassee' },
//   { id: 10, name: 'Georgia', abbreviation: 'GA', capital: 'Atlanta' },
//   { id: 11, name: 'Hawaii', abbreviation: 'HI', capital: 'Honolulu' },
//   { id: 12, name: 'Idaho', abbreviation: 'ID', capital: 'Boise' },
//   { id: 13, name: 'Illinois', abbreviation: 'IL', capital: 'Springfield' },
//   { id: 14, name: 'Indiana', abbreviation: 'IN', capital: 'Indianapolis' },
//   { id: 15, name: 'Iowa', abbreviation: 'IA', capital: 'Des Moines' },
//   { id: 16, name: 'Kansas', abbreviation: 'KS', capital: 'Topeka' },
//   { id: 17, name: 'Kentucky', abbreviation: 'KY', capital: 'Frankfort' },
//   { id: 18, name: 'Louisiana', abbreviation: 'LA', capital: 'Baton Rouge' },
//   { id: 19, name: 'Maine', abbreviation: 'ME', capital: 'Augusta' },
//   { id: 20, name: 'Maryland', abbreviation: 'MD', capital: 'Annapolis' },
//   { id: 21, name: 'Massachusetts', abbreviation: 'MA', capital: 'Boston' },
//   { id: 22, name: 'Michigan', abbreviation: 'MI', capital: 'Lansing' },
//   { id: 23, name: 'Minnesota', abbreviation: 'MN', capital: 'Saint Paul' },
//   { id: 24, name: 'Mississippi', abbreviation: 'MS', capital: 'Jackson' },
//   { id: 25, name: 'Missouri', abbreviation: 'MO', capital: 'Jefferson City' },
//   { id: 26, name: 'Montana', abbreviation: 'MT', capital: 'Helena' },
//   { id: 27, name: 'Nebraska', abbreviation: 'NE', capital: 'Lincoln' },
//   { id: 28, name: 'Nevada', abbreviation: 'NV', capital: 'Carson City' },
//   { id: 29, name: 'New Hampshire', abbreviation: 'NH', capital: 'Concord' },
//   { id: 30, name: 'New Jersey', abbreviation: 'NJ', capital: 'Trenton' },
//   { id: 31, name: 'New Mexico', abbreviation: 'NM', capital: 'Santa Fe' },
//   { id: 32, name: 'New York', abbreviation: 'NY', capital: 'Albany' },
//   { id: 33, name: 'North Carolina', abbreviation: 'NC', capital: 'Raleigh' },
//   { id: 34, name: 'North Dakota', abbreviation: 'ND', capital: 'Bismarck' },
//   { id: 35, name: 'Ohio', abbreviation: 'OH', capital: 'Columbus' },
//   { id: 36, name: 'Oklahoma', abbreviation: 'OK', capital: 'Oklahoma City' },
//   { id: 37, name: 'Oregon', abbreviation: 'OR', capital: 'Salem' },
//   { id: 38, name: 'Pennsylvania', abbreviation: 'PA', capital: 'Harrisburg' },
//   { id: 39, name: 'Rhode Island', abbreviation: 'RI', capital: 'Providence' },
//   { id: 40, name: 'South Carolina', abbreviation: 'SC', capital: 'Columbia' },
//   { id: 41, name: 'South Dakota', abbreviation: 'SD', capital: 'Pierre' },
//   { id: 42, name: 'Tennessee', abbreviation: 'TN', capital: 'Nashville' },
//   { id: 43, name: 'Texas', abbreviation: 'TX', capital: 'Austin' },
//   { id: 44, name: 'Utah', abbreviation: 'UT', capital: 'Salt Lake City' },
//   { id: 45, name: 'Vermont', abbreviation: 'VT', capital: 'Montpelier' },
//   { id: 46, name: 'Virginia', abbreviation: 'VA', capital: 'Richmond' },
//   { id: 47, name: 'Washington', abbreviation: 'WA', capital: 'Olympia' },
//   { id: 48, name: 'West Virginia', abbreviation: 'WV', capital: 'Charleston' },
//   { id: 49, name: 'Wisconsin', abbreviation: 'WI', capital: 'Madison' },
//   { id: 50, name: 'Wyoming', abbreviation: 'WY', capital: 'Cheyenne' },
// ];

// Menu data
const menu = {
  drinks: ['Water', 'Tea', 'Sweet Tea', 'Coke', 'Dr. Pepper', 'Sprite'],
  entrees: [
    'Hamburger w/ Fries',
    'Grilled Cheese w/ Tater Tots',
    'Grilled Chicken w/ Veggies',
    'Chicken Fried Steak w/ Mashed Potatoes',
    'Fried Shrimp w/ Coleslaw',
    'Veggie Plate',
  ],
  desserts: ['Cheesecake', 'Chocolate Cake', 'Snickerdoodle Cookie'],
};

// Select parent container
const selectParentContainer = document.getElementById('selectContainer');

// Create and set up label
const label = document.createElement('label');
label.setAttribute('for', 'mySelect');
label.textContent = 'Menu';

// Create and set up select form
const selectForm = document.createElement('select');
selectForm.id = 'mySelect';

// Add default option to select form
const defaultMenuOption = document.createElement('option');
defaultMenuOption.innerText = 'Select One';
selectForm.appendChild(defaultMenuOption);

// Populate select form with menu categories
Object.keys(menu).forEach((category) => {
  const menuOption = document.createElement('option');
  menuOption.innerText = category;
  selectForm.appendChild(menuOption);
});

// Append label and select form to container
selectParentContainer.appendChild(label);
selectParentContainer.appendChild(selectForm);

// Create and append display container for selected menu items
const menuDisplay = document.createElement('ul');
selectParentContainer.appendChild(menuDisplay);

// Event listener to display selected menu category items
selectForm.addEventListener('change', () => {
  menuDisplay.replaceChildren(); // Clear existing menu items

  const selectedCategory = selectForm.value;
  const items = menu[selectedCategory] || [];

  // Populate menu display with items in the selected category
  items.forEach((item) => {
    const menuItem = document.createElement('li');
    menuItem.innerText = item;
    menuDisplay.appendChild(menuItem);
  });
});

//   Second Exercise

let categories = ['Adventures', 'Arts & Crafts', 'Museums', 'Wine Tastings', 'Other'];

let activities = [
  {
    category: 'Adventures',
    id: 'A101',
    name: 'Valley Hot Air Balloons',
    description:
      'Enjoy a lovely hot air balloon ride over the valley at sunrise.  Call 800-555-1212 to reserve a date/time after you complete your e-ticket purchase.',
    location: '121 S. Main Street',
    price: 265.0,
  },
  {
    category: 'Adventures',
    id: 'A102',
    name: 'River Runners: Float Trip',
    description:
      'A mellow float trip with lovely scenery, great fishing, just a few riffles, and it finishes back at our base. It is a perfect trip for those wishing to take their time, or those on a limited schedule.',
    location: '145 FM 103',
    price: 65.0,
  },
  {
    category: 'Adventures',
    id: 'A103',
    name: 'River Runners: Ride the Rapids',
    description:
      'Experience 3-4 hours of Class II and III whitewater rafting with breathtaking scenery. It is a fun, thrilling, and memorable adventure that everyone from ages 8 and up can enjoy – no experience necessary!',
    location: '145 FM 103',
    price: 145.0,
  },
  {
    category: 'Arts & Crafts',
    id: 'AC101',
    name: 'Painting with a Twist : Oils',
    description:
      'Enjoy 2 hours of creating an oil painting by following along with an experienced artist.  Drinks and snacks are included.',
    location: '1991 Paint Drive',
    price: 40.0,
  },
  {
    category: 'Arts & Crafts',
    id: 'AC102',
    name: 'Painting with a Twist : Watercolor',
    description:
      'Enjoy 2 hours of creating a watercolor painting by following along with an experienced artist.  Drinks and snacks are included.',
    location: '1991 Paint Drive',
    price: 40.0,
  },
  {
    category: 'Museums',
    id: 'M101',
    name: 'Bravings Airship Museum',
    description:
      'Enjoy climbing on and in our collection of small airplanes.  You will find bi-planes, experimental planes and small jets.',
    location: '101 Airfield Drive',
    price: 10.0,
  },
  {
    category: 'Museums',
    id: 'M102',
    name: 'Forks and Spoons Museum',
    description:
      'Enjoy touring our qwerky Forks and Spoons Museum.  It houses the worlds largest collection of, you guessed it, forks and spoons!',
    location: '1056 Lost Knives Court',
    price: 3.0,
  },
  {
    category: 'Museums',
    id: 'M103',
    name: 'Steenges Computing Museum',
    description:
      'Enjoy our the Stengees Computing Museum that illustrates how computing has changed over the last 60 years.',
    location: '103 Technology Way',
    price: 0.0,
  },
  {
    category: 'Wine Tastings',
    id: 'WT-101',
    name: 'Hastings Winery Tours and Tastings',
    description:
      'Hastings Winery is a small, family owned winery in the heart of San Jose, CA. We pride ourselves on producing single vineyard, small-batch, handcrafted premium wines sourced from the finest grapes in our valley.',
    location: '10987 FM 1187',
    price: 12.0,
  },
  {
    category: 'Wine Tastings',
    id: 'WT-102',
    name: 'Lone Oak Winery',
    description:
      'We are a family and friend centered winery that thrives to make each of our guests feel right at home. With a growing wine list of the finest local wines, we offer tours and an incredible experience. We are open for to-go, curbside, and delivery.',
    location: '121 Burleson Court',
    price: 0.0,
  },
  {
    category: 'Other',
    id: 'OTH101',
    name: 'Fire Department: Ride Along',
    description:
      'Spend the day hanging out at one of our local fire stations, visiting with the staff and learning about their jobs.  If they receive a call, you can ride along with them!',
    location: '10 Redline Drive',
    price: 25.0,
  },
  {
    category: 'Other',
    id: 'OTH102',
    name: 'Homes For Our Neighbors',
    description:
      'Yes, you are a visitor!  But what better way to learn about a community than volunteer with the locals to build affordable housing.  Whether it be for an hour or a week, we would love to have you with us!',
    location: 'Call (555) 555-5555',
    price: 0.0,
  },
];

const categorySelect = document.getElementById('categorySelect');
const activitySelect = document.getElementById('activitySelect');

for (const category of categories) {
  const option = document.createElement('option');
  option.innerText = category;
  categorySelect.appendChild(option);
}

// categorySelect.addEventListener('change', () => {
//   const selectedCategory = categorySelect.value; //Adve
//   activitySelect.length = 1;

//   const activitiesArray = activities.filter((activitie) => activitie.category === selectedCategory);
//   console.log(activitiesArray);

//   for (const activitie of activitiesArray) {
//     const option = document.createElement('option');
//     option.innerText = activitie.name;
//     activitySelect.appendChild(option);
//   }
// });

categorySelect.addEventListener('change' , () => {
  const selectedCategory = categorySelect.value; 
  console.log(selectedCategory)

   const array = activities.filter((activitie)=> activitie.category === selectedCategory )

  console.log(array)


})






activitySelect.addEventListener('change', () => {
  const selectedActivity = activitySelect.value;
  console.log(selectedActivity);

  const activitieObj = activities.find(activitie => activitie.name === selectedActivity);

  console.log(activitieObj)
});





