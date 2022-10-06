/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

//const myArray = [0, 1, 2, 3, 4];

// Not fully sure what is being asked. I have created an Array, then I created a variable that will call the Array.*/

/*const myArray = [0, 1, 2, 3, 4];
const numbers = myArray;
console.log(
  "This Array is stored within myArray, but is being called by the variable called numbers: " +
    numbers
);
*/

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

/*const mySelf = {
  firstName: "Courtney",
  surname: "Hampton-Thomas",
  email: "jaye0888@gmail.com",
  age: 34,
};

console.log(mySelf);
*/

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

/*mySelf.driversLicense = true;

console.log(mySelf);
*/

/* EXERCISE 4
 Remove from the previously created object the age property.
*/

/*delete mySelf.age;

console.log(mySelf);
*/

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

/*const newPerson = Object.assign({}, mySelf);

newPerson.firstName = "Tamara";
newPerson.surname = "Cruz Santa-Cruz";
newPerson.email = "TCruz.hotmail.com";

console.log("Verified that the email addresses are different: " mySelf.email !== newPerson.email);
*/

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

/*const total = 50;
const shipping = 10;
const totalShoppingCart = total <= 50 ? total + shipping : total;

console.log(totalShoppingCart);
*/

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

/*
const total = 200;
const shipping = 10;
const totalShoppingCart = total <= 50 ? total + shipping : total;
const percentage = totalShoppingCart * 0.2;
const blkFriCart = totalShoppingCart - percentage;

console.log(blkFriCart);
*/

//or
/*const discountedPrice = totalShoppingCart - (totalShoppingCart * .20)
console.log(discountedPrice)
*/

/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

/*const car = {
  brand: "Ford",
  model: "Muststang",
  licensePlate: "ABC123",
};
const car2 = Object.assign({}, car);
car2.licensePlate = "DEF456";
const car3 = Object.assign({}, car);
car3.licensePlate = "GHI789";
const car4 = Object.assign({}, car);
car4.licensePlate = "JKL123";
const car5 = Object.assign({}, car);
car5.licensePlate = "MNO456";
const car6 = Object.assign({}, car);
car6.licensePlate = "PQR789";

console.log(
  car.licensePlate,
  car2.licensePlate,
  car3.licensePlate,
  car4.licensePlate,
  car5.licensePlate,
  car6.licensePlate
);

*/

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

/*const carsForRent = [car, car2, car3, car4, car5, car6];*/

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

/*const firstCarRemoved = carsForRent.shift();
const lastCarRemoved = carsForRent.pop();

console.log(carsForRent);
*/

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/
//did not understand the task...
/*console.log(typeof car, typeof car.brand, typeof car.licensePlate);*/

/*console.log(car.model, car.licensePlate, car.make);*/

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

/*const carsForSale = [];
const car4sale = {
  make: "Toyota",
  model: "Corolla",
  year: 2022,
};
const car4sale2 = Object.assign({}, car4sale);
car4sale2.year = 2021;
const car4sale3 = Object.assign({}, car4sale);
car4sale3.year = 2020;

carsForSale.push(car4sale, car4sale2, car4sale3);

console.log(carsForSale);

const totalCars = carsForRent.length + carsForSale.length;

console.log(totalCars);
*/

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

/*for (let i = 0; i < carsForSale.length; i++) {
  console.log(carsForSale[i]);
}
*/
