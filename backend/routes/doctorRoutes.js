const express = require('express')
const asyncHandler = require('express-async-handler')
const router = express.Router()
const Doctor = require('../models/doctorModel')
const bcrypt = require('bcryptjs')
const generateToken = require('../utils/generateToken')
const { protectDoctor } = require('../middlewares/authMiddleware')


//admin middleware 
// const admin = (req, res, next) => {

//   if (req.user && req.user.isAdmin) {

//     next()
//   } else {
//     res.status(401)
//     throw new Error('Not an admin')
//   }
// }


//to register a new doctor
//public
router.post('/', asyncHandler(async (req, res) => {
  console.log('request aayi bc')
  const { name, age, address, gender, contactNumber, email, password,speciality,paymentMethod, fees } = req.body

  const doctorExists = await Doctor.findOne({ email })

  if (doctorExists) {
    res.status(400)
    throw new Error('User exists')
  }

  const doctor = await Doctor.create({
    name: name,
    age: age,
    address: address,
    contact_number: contactNumber,
    email: email,
    password: bcrypt.hashSync(password, 10),
    speciality: speciality,
    fees: fees,
    paymentMethod: paymentMethod
  })

  if (doctor) {
    res.status(201).json({
      _id: doctor._id,
      name: doctor.name,
      age: doctor.age,
      address: doctor.address,
      contact_number: doctor.contact_number,
      email: doctor.email,
      token: generateToken(doctor._id)
    })
  } else {
    res.status(400)
    throw new Error('User not found!!')
  }

}))




// to register a new user
//public
// router.post('/', asyncHandler(async (req, res) => {
//   const { name, age, gender, address, contact_number, email, password } = req.body

//   const userExists = await User.findOne({ email })

//   if (userExists) {
//     res.status(400)
//     throw new Error('User exists')
//   }

//   const user = await User.create({
//     name,
//     age,
//     gender,
//     address,
//     contact_number,
//     email,
//     password
//   })

//   if (user) {
//     res.status(201).json({
//       _id: user._id,
//       name: user.name,
//       age: user.age,
//       gender: user.gender,
//       address: user.address,
//       contact_number: user.contact_number,
//       email: user.email,
//       token: generateToken(user._id)
//     })
//   } else {
//     res.status(400)
//     throw new Error('User not found!!')
//   }

// }))



//get all doctors
//public
router.get('/', asyncHandler(async (req, res) => {
  const doctors = await Doctor.find({})
  res.json(doctors)
}))



// to authenticate a user. validate email/password and get a token
//public
router.post('/login', asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const doctor = await Doctor.findOne({ email })

  if (doctor && await bcrypt.compare(password, doctor.password)) {
    res.json({
      _id: doctor._id,
      name: doctor.name,
      age: doctor.age,
      gender: doctor.gender,
      address: doctor.address,
      contact_number: doctor.contact_number,
      email: doctor.email,
      type: 'doctor',
      token: generateToken(doctor._id)
    })
  } else {
    res.status(401)
    console.error('Invalid email or password')
    throw new Error('Invalid email or password')
  }
}))


// to get a logged in user.
//private
// router.get('/profile', protect, asyncHandler(async (req, res) => {
//   const user = await User.findById(req.user._id)
//   console.log(req.user._id)

//   if (user) {
//     res.json({
//       _id: user._id,
//       name: user.name,
//       age: user.age,
//       gender: user.gender,
//       address: user.address,
//       contact_number: user.contact_number,
//       email: user.email,
//     })
//   } else {
//     res.status(404)
//     throw new Error('User not found !')
//   }


// }))




// to update a user profile.
// PUT request
// private
// router.put('/profile', protect, asyncHandler(async (req, res) => {
//   const user = await User.findById(req.user._id)
//   //console.log(req.user._id)

//   if (user) {
//     user.name = req.body.name || user.name
//     user.email = req.body.email || user.email

//     if (req.user.password) {
//       user.password = req.user.password
//     }

//     const updatedUser = await user.save()

//     res.json({
//       _id: updatedUser._id,
//       name: updatedUser.name,
//       email: updatedUser.email,
//       isAdmin: updatedUser.isAdmin,
//       token: generateToken(updatedUser._id)
//     })
//   } else {
//     res.status(404)
//     throw new Error('User not found !')
//   }


// }))


//delete a user
//private

// router.delete('/:id', protect, admin, asyncHandler(async (req, res) => {
//   const user = await User.findById(req.params.id)
//   if (user) {
//     await user.remove()
//     res.json({ message: 'user Removed' })
//   } else {
//     res.status(404)
//     throw new Error('User not found')
//   }
// }))


// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Private/Admin

// router.get('/:id', protect, admin, asyncHandler(async (req, res) => {
//   const user = await User.findById(req.params.id).select('-password')

//   if (user) {
//     res.json(user)
//   } else {
//     res.status(404)
//     throw new Error('User not found')
//   }
// }))



// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private/Admin

// router.put('/:id', protect, admin, asyncHandler(async (req, res) => {
//   const user = await User.findById(req.params.id)

//   if (user) {
//     user.name = req.body.name || user.name
//     user.email = req.body.email || user.email
//     user.isAdmin = req.body.isAdmin || user.isAdmin

//     const updatedUser = await user.save()

//     res.json({
//       _id: updatedUser._id,
//       name: updatedUser.name,
//       email: updatedUser.email,
//       isAdmin: updatedUser.isAdmin,
//     })
//   } else {
//     res.status(404)
//     throw new Error('User not found')
//   }
// }))

module.exports = router