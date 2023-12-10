
var startYear = prompt("Enter the start year:");
var endYear = prompt("Enter the end year:");


startYear = parseInt(startYear);
endYear = parseInt(endYear);


if (isNaN(startYear) || isNaN(endYear) || startYear > endYear) {
  console.error("Invalid input. Please enter valid start and end years.");
} else {

  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }


  var unorderedList = document.createElement("ul");


  for (var currentYear = startYear; currentYear <= endYear; currentYear++) {
    if (isLeapYear(currentYear)) {
      var listItem = document.createElement("li");
      listItem.textContent = currentYear;
      unorderedList.appendChild(listItem);
    }
  }


  document.body.appendChild(unorderedList);
}
