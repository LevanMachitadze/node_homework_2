// 1) Create a Car class with properties make, model, and year, then make instance of electric car which have battery level
// 2) Create a Library class that stores a list of books (as an array) which have following methods addBook(), removeBook(), listBooks(). listBooks should have array of objects with following properties: [
// {
// author: 'George Orwell',
// book: 'Nineteen Eighty-Four',
// year: 1948,
// }
// ]
// 3) Create a class Employee with a method calculateSalary() that calculates salary based on hours worked and hourly rate.
// 4) Create a class ShoppingCart that holds a list of items. methods, addItem(), deleteItem(), updateItem(), calculateTotal()
// 5)  Create a CarFactory class that have following methods, addCar, deleteCar, updateCar, getAllCars. getAllCars should be array of objects with following properties: [
// {
// year: 2010  use random year from 2010 to 2024 using math.random
// model: 'Ferrari',
// price: 350000
// }
//]

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

class ElectricCar extends Car {
  constructor(make, model, year, batteryLevel) {
    super(make, model, year);
    this.batteryLevel = batteryLevel;
  }
}

const electricCar = new ElectricCar('Tesla', 'Model 3', 2022, 80);

class Library {
  constructor() {
    this.books = [];
  }

  addBook(author, book, year) {
    this.books.push({ author, book, year });
  }

  removeBook(bookTitle) {
    this.books = this.books.filter((book) => book.book !== bookTitle);
  }

  listBooks() {
    return this.books;
  }
}

const library = new Library();
library.addBook('George Orwell', 'Nineteen Eighty-Four', 1948);

class Employee {
  calculateSalary(hoursWorked, hourlyRate) {
    return hoursWorked * hourlyRate;
  }
}

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  deleteItem(itemIndex) {
    this.items.splice(itemIndex, 1);
  }

  updateItem(itemIndex, newItem) {
    this.items[itemIndex] = newItem;
  }

  calculateTotal() {
    return 0;
  }
}

class CarFactory {
  constructor() {
    this.cars = [];
  }

  addCar(year, model, price) {
    this.cars.push({ year, model, price });
  }

  deleteCar(model) {
    this.cars = this.cars.filter((car) => car.model !== model);
  }

  updateCar(model, newPrice) {
    const car = this.cars.find((car) => car.model === model);
    if (car) {
      car.price = newPrice;
    }
  }

  getAllCars() {
    return this.cars;
  }
}

const carFactory = new CarFactory();
carFactory.addCar(
  Math.floor(Math.random() * (2024 - 2010 + 1)) + 2010,
  'Ferrari',
  350000
);
