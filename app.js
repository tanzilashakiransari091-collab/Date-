// 1. Write a program that displays current date and time in
// your browser.
// var day = new Date()
// console.log(day);

// 2. Write a program that alerts the current month in words.
// For example December.

// var months = [
//   "January", "February", "March", "April",
//   "May", "June", "July", "August",
//   "September", "October", "November", "December"
// ];

// var currentMonth= months[new Date().getMonth()]
// alert(currentMonth)
// console.log(currentMonth);

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

// var day = new Date()
// var dayName  = day.toString().slice(0,3)
// alert(dayName)

// console.log(dayName);

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.


// var days = [
//   "Sunday",
// "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// var weekDay = days[new Date().getDay()]
// console.log(weekDay);
// if(weekDay === 0 || weekDay=== 6){

//     console.log(" its a fun day");
    
// }
// else{
//     console.log(" its a week day");
// }



// 5. Show message according to the date of the month.

// var date = new Date();
// var today = date.getDate();
// console.log(today);


// if (today < 16) {
//     document.write("First fifteen days of the month");
// } else {
//     document.write("Last days of the month");
// }




// 7. Check whether it is AM or PM.

// var date = new Date();
// var hours = date.getHours();
// console.log(hours);


// if (hours < 12) {
//     alert("Its AM");
// } else {
//     alert("Its PM");
// }


// 8. Create a Date object for the last day of 2020.

// var laterDate = new Date("December 31, 2020");

// document.write(laterDate);


// 9. Calculate days passed since 1st Ramadan 2015.

// var ramadanDate = new Date("June 18, 2015");
// var today = new Date();

// var difference = today - ramadanDate;
// var days = Math.floor(difference / (1000 * 60 * 60 * 24));

// alert(days + " days have passed since 1st Ramadan");


// 10. Display seconds elapsed between January 1, 1970 and January 1, 2015.

// var referenceDate = new Date("January 1, 1970");
// var startDate = new Date("January 1, 2015");

// var difference = startDate - referenceDate;
// var seconds = difference / 1000;

// document.write("Elapsed seconds: " + seconds);

// 11. Create current date, extract hours, and move one hour ahead.

// var date = new Date();
// var hours = date.getHours();

// date.setHours(hours + 1);

// document.write(date);

// 12. Display the date from 100 years ago.

// var date = new Date();

// date.setFullYear(date.getFullYear() - 100);

// alert(date);

// 13. Ask the user for age and calculate birth year.

// var age = prompt("Enter your age:");
// var currentYear = new Date().getFullYear();
// console.log(currentYear);


// var birthYear = currentYear - age;

// document.write("Your birth year is: " + birthYear);

// 14. Generate a K-Electric bill.

var name = "Ali";
var month = "October";
var units = 350;
var price = 50;
var surcharge = 500;

var net = units * price;
var gross = net + surcharge;

console.log("Customer Name: " + name);
console.log("Current Month: " + month);
console.log("Number of Units: " + units);
console.log("Charges per Unit: " + price);
console.log("Net Amount Payable: " + net);
console.log("Late Payment Surcharge: " + surcharge);
console.log("Gross Amount Payable: " + gross);


