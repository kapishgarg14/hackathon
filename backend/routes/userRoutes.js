const express = require('express')
const asyncHandler = require('express-async-handler')
const router = express.Router()
const User = require('../models/userModel')
const bcrypt = require('bcryptjs')
const generateToken = require('../utils/generateToken')
const { protectUser } = require('../middlewares/authMiddleware')
const Doctor = require('../models/doctorModel')

//admin middleware 
// const admin = (req, res, next) => {

//   if (req.user && req.user.isAdmin) {

//     next()
//   } else {
//     res.status(401)
//     throw new Error('Not an admin')
//   }
// }



// to register a new user
//public
router.post('/', asyncHandler(async (req, res) => {

  console.log(req.body)
  const { name, age, contactNumber, gender, address, email, password } = req.body
  console.log(name)
  console.log(contactNumber);
  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User exists')
  }

  const user = await User.create({
    name: name,
    age: age,
    gender: gender,
    address: address,
    contact_number: contactNumber,
    email: email,
    password: bcrypt.hashSync(password, 10)
  })

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      age: user.age,
      gender: user.gender,
      address: user.address,
      contact_number: user.contact_number,
      email: user.email,
      type: 'user',
      token: generateToken(user._id)
    })
  } else {
    res.status(400)
    throw new Error('User not found!!')
  }

}))



//get all users
//private
// router.get('/', protect, admin, asyncHandler(async (req, res) => {
//   const users = await User.find({})
//   res.json(users)
// }))



// to authenticate a user. validate email/password and get a token
//public
router.post('/login', asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user && await bcrypt.compare(password, user.password)) {
    res.json({
      _id: user._id,
      name: user.name,
      age: user.age,
      gender: user.gender,
      address: user.address,
      contact_number: user.contact_number,
      email: user.email,
      token: generateToken(user._id)
    })
  } else {
    res.status(401)
    console.error('Invalid email or password')
    throw new Error('Invalid email or password')
  }
}))


//book an appintment for user
//private
router.post('/bookAppointment', asyncHandler(async (req, res) => {
  console.log(req.body);
  const { symptoms, appointmentDate, department, doctor, userId } = req.body;

  const user = await User.findById(userId);

  console.log(userId)

  user.appointment = {
    symptoms,
    appointmentDate: new Date(appointmentDate),
    department,
    doctor,
  };
  console.log("User : ", user);

  await user.save();

  const appointedDoc = await Doctor.findOne({ name: req.body.doctor });

  appointedDoc.appointments.push({
    user: userId,
    ...req.body
  })

  await appointedDoc.save();

  res.json(user)

}))


router.get('/getPrescriptions', asyncHandler(async (req, res) => {
  console.log(req.query.id)
  const user = await User.findById(req.query.id);
  res.json(user);

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