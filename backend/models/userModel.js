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
  medical_history: [
    {
      prescriptions: [
        {
          type: String,
          required: false
        }
      ],
      last_visited: {
        type: Date,
        required: false
      }
    }
  ],
  appointments: [
    {
      date: {
        type: Date,
        required: true
      },
      doctor: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Doctor'
      }
    }
  ]
}, {
  timestamps: true
})


userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }

  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})


const User = mongoose.model('User', userSchema)

module.exports = User
