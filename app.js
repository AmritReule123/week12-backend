
const express = require("express");
const app = express();

//connection.js loe import garya ko 
require("./database/connection")


// GET books
app.get("/books", function (req, res) {


  // logic to fetch books from database
  res.json({
    message: "books fetched successfully"
  });
});


// POST books
app.post("/books", function (req, res) {
  // logic to add book to database goes here..


  res.json({
    message: "Book added successfully"
  });
});


// DELETE book
app.delete("/books/:id", function (req, res) {
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