//Literal notation Example
let stupidBoy = {
  name: "kapper",
  age: 26,
  mentalAge: 13,
  quote: "Ingen fest ududududen hest!",
  iq: 4.7,
  sko: "træsko",
}
//#region Classes -nheritance and prototypesaaa
class Shape {
  _name = "shape"

  printName() {
    return this._name
  }

  getArea() {
    return "none"
  }
}

class Square extends Shape {
  #length
  #height
  _name = "square"
  constructor(l, h) {
    super()
    this.#length = l
    this.#height = h
  }
  getArea() {
    return this.#length * this.#height
  }
}

class Circle extends Shape {
  #radius
  _name = "circle"
  constructor(r) {
    super()
    this.#radius = r
  }

  getArea() {
    return Math.PI * (this.#radius * this.#radius)
  }
  getComf() {
    return Math.PI * (this.#radius * 2)
  }
}

class Triangle extends Shape {
  #width
  #height
  _name = "triangle"
  constructor(w, h) {
    super()
    this.#height = h
    this.#width = w
  }

  getArea() {
    return this.#height * this.#width * 0.5
  }
}

function sumArea(shape1, shape2) {
  return `${shape1.printName()} and ${shape2.printName()} has a combined area of ${
    shape1.getArea() + shape2.getArea()
  }`
}

let polygon = new Shape()
console.log(polygon.printName())

let rectangle = new Square(2, 4)
console.log(rectangle.getArea())

let round = new Circle(3)
console.log(round.getArea())
console.log(round.getComf())

let pointy = new Triangle(4, 2)
console.log(pointy.getArea())

console.log(sumArea(round, pointy))
//#

// books
const form = document.getElementById("form");
const read = document.getElementById("read");
const unread = document.getElementById("unread");

bookArray = [];

class book {
  title;
  author;
  year;
  isRead;
  constructor(title, author, year, isRead) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.isRead = isRead;
  }
}

function printBook() {
  read.innerHTML = "";
  unread.innerHTML = "";

  for (let i = 0; i < bookArray.length; i++) {
    let newLi = document.createElement("li");
    let newP = document.createElement("p");

    newP.innerHTML = `"${bookArray[i].title}" er skrevet af ${bookArray[i].author} og udgivet i ${bookArray[i].year}`;

    newLi.append(newP);
    if (bookArray[i].isRead) {
      read.append(newLi);
    } else {
      unread.append(newLi);
    }
  }
}

function addBook(e) {
  e.preventDefault();

  let title = form.elements["title"].value;
  let author = form.elements["author"].value;
  let year = Number(form.elements["year"].value);
  let isRead = form.elements["isRead"].checked;

  let newBook = new book(title, author, year, isRead);

  bookArray.push(newBook);
  printBook();

}

form.addEventListener("submit", addBook);