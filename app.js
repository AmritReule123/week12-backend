
const express = require("express");
const { books } = require("./database/connection");
const app = express();

//connection.js loe import garya ko 
require("./database/connection")
app.use(express.json());

// GET books
app.get("/books",async function (req,res) {
  // logic to fetch books from database
  
const datas = await books.findAll()  //select from books, books.find()
  res.json({
    message: "books fetched successfully",
    datas,
  });
});


// POST books
app.post("/books",async function (req,res) {
  // logic to add book to database goes here..

// console.log(req.body)
// const bookName = req.body.bookName
// const bookprice = req.body.bookprice

// const {bookName,bookprice} = req.body
// console.log(bookName)
// console.log(bookprice)

const {bookName,bookPrice,bookAuthor,bookGenre} = req.body
await books.create({
  bookName, 
  bookPrice: bookPrice, 
  bookAuthor,
  bookGenre 
})
  res.json({
    message: "Book added successfully"
  });
});


// DELETE book
app.delete("/books/:id", function (req,res) {
  // logic to delete book


  res.json({
    message: "Book Deleted successfully"
  });
});


// PATCH book
app.patch("/books/:id", function (req, res) {
  // logic to update book


  res.json({
    message: "Book Updated successfully"
  });
});


app.listen(4949, () =>{
    console.log("server at port 4949")
})