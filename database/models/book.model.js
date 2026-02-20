const bookModel = (sequelize, DataTypes) => {
  const Book = sequelize.define("book", {
    bookName : {
      type: DataTypes.STRING,
      allowNull: false
    },
    bookPrice: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    bookAuthor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    bookGenre: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  console.log("Book model called ✅");
  return Book;
};

module.exports = bookModel;
