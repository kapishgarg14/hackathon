const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({
  name: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
}, {
  timestamps: true
})




const doctorSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  contact_number: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  reviews: [reviewSchema],
  rating: {
    type: Number,
    required: true,
    default: 0
  },
  numReviews: {
    type: Number,
    required: true,
    default: 0
  },
  speciality: {
    type: String,
    required: true
  },
  fees: {
    type: Number,
    required: true
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  paymentResult: {
    id: { type: String },
    status: { type: String },
    update_time: { type: String },
    email_address: { type: String },
  },
  appointment_available: {
    type: Boolean,
    required: true,
    default: true
  },
  start_time: {
    type: Number,
    required: true
  },
  end_time: {
    type: Number,
    required: true
  },
  patients: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
      }
    }
  ]
}, {
  timestamps: true
})

const Products = mongoose.model('Doctor', doctorSchema)

module.exports = Products