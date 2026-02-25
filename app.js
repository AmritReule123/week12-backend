
const express = require("express");
// const { users, Book } = require("./database/connection");
const bookRoute = require("./routes/bookRoute")

// const reviewRoute = require("./reviews/reviewsRoutes")


const app = express();
//connection.js loe import garya ko 
require("./database/connection")
app.use(express.json());


// // ✅ GET all users
// app.get("/users", async (req, res) => {
//   const datas = await User.findAll();
//   res.json({
//     message: "Users fetched successfully",
//     datas
//   });
// });


// // ✅ POST new user
// app.post("/users", async (req, res) => {
//   const { userName, email, password, age } = req.body;

//   const newUser = await User.create({
//     userName,
//     email,
//     password,
//     age
//   });
  
//  res.json({
//   message: "user automatically changed"
//  })
// })

// localhost:4949/api + /hello = localhost:4949/api/hello
/// localhost:4949/api + /books/:id = localhost:4949/api/books/:id
app.use("/api/books",bookRoute)



app.listen(4949, () =>{
    console.log("server at port 4949")
})