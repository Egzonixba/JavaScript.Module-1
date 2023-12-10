var inputYear = prompt("Enter a year:");


var year = parseInt(inputYear);


var isLeapYear = false;

if (year % 4 === 0) {
  if (year % 100 !== 0 || (year % 100 === 0 && year % 400 === 0)) {
    isLeapYear = true;
  }
}


if (isLeapYear) {
  document.write("<p>" + year + " is a leap year!</p>");
} else {
  document.write("<p>" + year + " is not a leap year.</p>");
}