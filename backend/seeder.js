const mongoose = require('mongoose')
const dotenv = require('dotenv')
const users = require('./data/users')
const doctors = require('./data/doctors')
const User = require('./models/userModel')
const Doctor = require('./models/doctorModel')
const connectDB = require('./config/db')

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await Doctor.deleteMany()
    await User.deleteMany()

    await User.insertMany(users)

    // const createdUsers = await User.insertMany(users)
    // const adminUser = createdUsers[0]._id
    // const sampleProducts = products.map(product => {
    //   return { ...product, user: adminUser }
    // })
    // await Product.insertMany(sampleProducts)

    await Doctor.insertMany(doctors)

    console.log("data imported")
    process.exit()

  } catch (err) {
    console.error(err.message)
    process.exit(1)
  }
}



const destroyData = async () => {
  try {
    await Doctor.deleteMany()
    await User.deleteMany()


    console.log("data destroyed")
    process.exit()

  } catch (err) {
    console.error(err.message)
    process.exit(1)
  }
}

// if (process.argv[2] === '-d') {
//   destroyData()
// } else {
importData()
// }

