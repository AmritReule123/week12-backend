const { books } = require("../database/connection");

// Fetch all books
exports.fetchBooks = async function (req, res) {
    
        const datas = await books.findAll();  // fetch all books
        res.json({
            message: "Books fetched successfully",
            datas
        })
}


// Add book
exports.addBook = async function (req, res) {
  
        const { bookName, bookPrice, bookAuthor, bookGenre } = req.body;
        // Validate required fields
        await books.create({
            bookName,
            bookPrice,
            bookAuthor,
            bookGenre
        });
        res.json({
            message: "Book added successfully"
        });
    } 

// Delete book
exports.deleteBook = function (req, res) {
      res.json({
            message: "Book deleted successfully"
     
        })
   
    }

    //EDIT THIS BOOK
exports.editBook =  function (req, res) {

        res.json({
            message: "Book updated successfully"
        })
}


// Fetch single book
exports.singleFetchBook = async function (req, res) {
    
        const id = req.params.id;
        const datas = await books.findByPk(id);
        res.json({
            message: "Single book fetched successfully",
            datas
        })
}