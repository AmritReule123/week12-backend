

const productModel =(sequelize, DataTypes)=> {
   const product = sequelize.define("product", {
    productName : {
        type : DataTypes.STRING,
    }, 
    ProductPrice : {
        type : DataTypes.FLOAT
    },
    productImage: {
        type : DataTypes.STRING
    }
   }) 
   return product;
}

module.exports = productModel;