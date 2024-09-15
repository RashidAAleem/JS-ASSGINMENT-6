// var items = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
//   ];
//   console.log(items[0][0]); // 1
//   console.log(items[0][1]); // 2
//   console.log(items[1][0]); // 3
//   console.log(items[1][1]); // 4
//   console.log(items);


//Q1

// var multiDimen = [
//     [],
//     [],
//     []
// ]
// console.log(multiDimen)

// var multi = [[],[],[],[]]
// console.log(multi)
//Q2

// var multiDimen = [
//     [0],[1],[2],[3]
// ]
// document.write(multiDimen[0][0]  )
// document.write(multiDimen[1][0]  )
// document.write(multiDimen[2][0]  )
// document.write(multiDimen[3][0] +"<br>" )

// document.write(multiDimen[1][0]  )
// document.write(multiDimen[0][0]  )
// document.write(multiDimen[1][0]  )
// document.write(multiDimen[2][0] +"<br>" )

// document.write(multiDimen[2][0]  )
// document.write(multiDimen[1][0]  )
// document.write(multiDimen[0][0]  )
// document.write(multiDimen[1][0] +"<br>" )

//Q3
// for (var i = 0; i<= 10; i++) {
// // console.log(i)
// document.write(i + "<br>");
    
// }

//Q4
// var table = +prompt("Enter a number to show its multiplication table")
//  for (var i = 1; i <= 10; i++) {
//         document.write(table + " X " + i + " = " + table * i + "<br>" );
        
//     }

//Q4

// var table = +prompt("Enter a number to show its multiplication table")
// var total = +prompt("Enter length multiplication table")
//  for (var i = 1; i <= total; i++) {
//         document.write(table + " X " + i + " = " + table * i + "<br>" );
        
//     }

//Q5

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
// for (var i = 0; i <= fruits.length-1; i++) {
//     document.write(fruits[i] + "<br>")
    
// }

// for (var i = 0; i <= fruits.length-1; i++) {
//     document.write("Element at index"+ i  +" "+ fruits[i] + "<br>")
    
// }


//Q6

// var counting = [];

// for (var i = 1; i <= 15; i++) {
//     counting.push(i);

// }

// document.write("<h1>Counting:</h1> " + counting.join(", ") + "<br>");  // Display the array as a string with spaces


// var counting = [];

// for (var i = 1; i <= 10; i++) {
//     counting.push(i);
    
// }


// document.write("<h1>Reverse: </h1> " + counting.reverse().join(", ") + "<br>");  // Display the array as a string with spaces






// var even =[];
// var odd = [];

// for (var i = 1; i <= 20; i++) {
//     counting.push(i);
//     if (i % 2 === 0 ) {
//         even.push(i);
        
//     } else{
//         odd.push(i);
//     }
// }

// document.write("<h1>Even:</h1> " + even.join(", ") + "<br>");  // Display the array as a string with spaces
// document.write("<h1>Odd:</h1> " + odd.join(", ") + "<br>");  // Display the array as a string with spaces


// var series = [];

// for (var i = 2; i<=20; i +=2) {
//     series.push(i + "k");
    
// }

// document.write("<h1>Series:</h1> " + series.join(", ") + "<br>");  // Display the array as a string with spaces

//Q7

// var A = ["cake","apple pie","cookie","chips","patties",]
// var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir / ma'am");
// var flag = false

// for (var i = 0; i < A.length; i++) {
//     if (A[i]===userInput) {
//         flag = true
//         break; //only in loop to stop the loop when the condition is true 
//     } 
    
// }

// if (flag) {
//     document.write(userInput +" is <b>available</b> at index " + i+ " in our bakery");
// } else{
//     document.write("We are Sorry. "+userInput+" is <b>not available </b> in our bakery")
// }

// //Q8

// var A = [24,53,78,91,12];
// var largestNumber = A[0]
// document.write("Array items: "+A.join(", "))
// for (var i = 0; i < A.length; i++) {
       
//     if (A[i]>largestNumber) {
//         largestNumber = A[i];
        
//     }
// }
// document.write("<br>The Largest Number: " + largestNumber);


//Q9

// var A = [24,53,78,91,12];
// var smallestNumber = A[0]
// document.write("Array items: "+A.join(", "))
// for (var i = 0; i < A.length; i++) {
       
//     if (A[i]<smallestNumber) {
//         smallestNumber = A[i];
        
//     }
// }
// document.write("<br>The smallest Number: " + smallestNumber);


//Q 10

// var number= [5]

// for (let i = 1; i <= 100; i++) {
//     document.write(number*i)
//     if(i<100){
//         document.write(", ")
//     }
// }