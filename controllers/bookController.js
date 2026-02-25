const { books } = require("../database/connection");

// Fetch all books
exports.fetchBooks = async function (req, res) {
    try {
        const datas = await books.findAll();  // fetch all books
        res.json({
            message: "Books fetched successfully",
            datas
        });
    } catch (error) {
        res.status(500).json({
            message: "Error fetching books",
            error: error.message
        });
    }
};


// Add book
exports.addBook = async function (req, res) {
    try {
        const { bookName, bookPrice, bookAuthor, bookGenre } = req.body;

        // Validate required fields
        if (!bookName || !bookPrice || !bookAuthor || !bookGenre) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        await books.create({
            bookName,
            bookPrice,
            bookAuthor,
            bookGenre
        });

        res.json({
            message: "Book added successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error adding book",
            error: error.message
        });
    }
};


// Delete book
exports.deleteBook = async function (req, res) {
    try {
        const id = req.params.id;

        const deleted = await books.destroy({
            where: { id }
        });

        if (!deleted) {
            return res.status(404).json({
                message: "Book not found"
            });
        }

        res.json({
            message: "Book deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting book",
            error: error.message
        });
    }
};


// Edit / update book
exports.editBook = async function (req, res) {
    try {
        const id = req.params.id;

        const updated = await books.update(req.body, {
            where: { id }
        });

        if (!updated[0]) {
            return res.status(404).json({
                message: "Book not found or no change made"
            });
        }

        res.json({
            message: "Book updated successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error updating book",
            error: error.message
        });
    }
};


// Fetch single book
exports.singleFetchBook = async function (req, res) {
    try {
        const id = req.params.id;
        const datas = await books.findByPk(id);

        if (!datas) {
            return res.status(404).json({
                message: "Book not found"
            });
        }

        res.json({
            message: "Single book fetched successfully",
            datas
        });
    } catch (error) {
        res.status(500).json({
            message: "Error fetching book",
            error: error.message
        });
    }
};