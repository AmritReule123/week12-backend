
const express = require("express");
// const { users, Book } = require("./database/connection");
const bookRoute = require("./routes/bookRoute")

// const reviewRoute = require("./reviews/reviewsRoutes")


const app = express();
//connection.js loe import garya ko 
require("./database/connection")
app.use(express.json());



// localhost:4949/api + /hello = localhost:4949/api/hello
/// localhost:4949/api + /books/:id = localhost:4949/api/books/:id
app.use("/api/books",bookRoute)



app.listen(4949, () =>{
    console.log("server at port 4949")
})