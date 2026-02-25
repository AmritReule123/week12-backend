

// databse collection ko code
const {Sequelize,DataTypes} = require("sequelize")

//  const bookMdel = require("./models/book.model")

// const sequelize = require("sequelize")
// const sequelize = require("DataTypes")


const sequelize = new Sequelize("postgresql://postgres.vemghrbykuvihgeaytzh:expressnodejsho@aws-1-ap-southeast-2.pooler.supabase.com:6543/postgres")

// console.log(process.nextTick.CS)
// const sequelize = new Sequelize(process.env.CS);

sequelize.authenticate()
.then(()=>{
    console.log("authenticate vayo ")
})

.catch((err)=>{
    console.log("error aayo" +err)
})


//object create garya ko ho 
const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.books = require("./models/book.model")(sequelize,DataTypes)
// db.users = require("./models/user.model")(sequelize,DataTypes)
 db.product = require("./models/product.model")(sequelize,DataTypes)


//migrate code ho yo chai hai 
sequelize.sync({alter : true}).then(()=>{
    console.log("migrae vato haii tw")
})


// export garna ko lage app.js maa
module.exports = db 