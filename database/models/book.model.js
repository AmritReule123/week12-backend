const bookModel = (sequelize,DataTypes) => {
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
      defaultValue : "Amrit Reule"
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
