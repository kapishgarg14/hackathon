const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

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
    required: false
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
  avg_rating: {
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
    required: false,
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
    default: false
  },
  start_time: {
    type: Date,
    required: false
  },
  end_time: {
    type: Date,
    required: false
  },
  appointments: [{
    appointmentId: {
      type: Number
    },
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    symptoms: {
      type: String
    },
    appointmentDate: {
      type: Date
    },
    department: {
      type: String
    },
    doctor: {
      type: String,
    },
    prescription: {
      symptoms: {
        type: String
      },
      medicine: {
        type: String
      },
      comments: {
        type: String
      },
      date: {
        type: Date
      }
    }
  }],
}, {
  timestamps: true
})

doctorSchema.pre('save', async function (next) {
  // if (!this.isModified('password')) {
  //   next()
  // }

  // const salt = await bcrypt.genSalt(10)
  // this.password = await bcrypt.hash(this.password, salt)
})


const Doctor = mongoose.model('Doctor', doctorSchema)

module.exports = Doctor