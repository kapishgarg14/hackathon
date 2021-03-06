const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const morgan = require('morgan')
const connectDB = require('./config/db')
// const doctorRoutes = require('./routes/doctorRoutes')
// const userRoutes = require('./routes/userRoutes')

dotenv.config()

connectDB()

const app = express()
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())

// app.get('/', (req, res) => {
//   res.send("hello...")
// })


// app.use('/api/doctors', doctorRoutes)
// app.use('/api/users', userRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log("server running on port 5000"))
