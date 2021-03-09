const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
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
  appointment: [{
    appointmentId: {
      type: Number
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
  }]

}, {
  timestamps: true
})


userSchema.pre('save', async function (next) {
  // if (!this.isModified('password')) {
  //   next()
  // }

  // const salt = await bcrypt.genSalt(10)
  // this.password = await bcrypt.hash(this.password, salt)
})


const User = mongoose.model('User', userSchema)

module.exports = User
