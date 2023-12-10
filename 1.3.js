 var num1 = prompt("Enter the first integer:");
    var num2 = prompt("Enter the second integer:");
    var num3 = prompt("Enter the third integer:");


    num1 = parseInt(num1);
    num2 = parseInt(num2);
    num3 = parseInt(num3);


    var sum = num1 + num2 + num3;
    var product = num1 * num2 * num3;
    var average = sum / 3;


    document.write("<h2>Results:</h2>");
    document.write("<p>Sum: " + sum + "</p>");
    document.write("<p>Product: " + product + "</p>");
    document.write("<p>Average: " + average + "</p>");