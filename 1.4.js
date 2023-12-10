var studentName = prompt("Welcome to Hogwarts! Please enter your name:");


var randomNumber = Math.floor(Math.random() * 4) + 1;


var house;
switch (randomNumber) {
  case 1:
    house = "Gryffindor";
    break;
  case 2:
    house = "Slytherin";
    break;
  case 3:
    house = "Hufflepuff";
    break;
  case 4:
    house = "Ravenclaw";
    break;
  default:
    house = "Error";
}


document.write("<p>" + studentName + ", you are in " + house + "!</p>");