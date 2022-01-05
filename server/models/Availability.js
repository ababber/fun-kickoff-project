const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const availabilitySchema = new mongoose.Schema({
  isRecurring: Boolean,
  from: Number,
  to: Number,
  date: {
    type: Date, 
    validate: [cleanupAvailability, 'date has expired']
  },
  sitterId: { 
    type: Schema.Types.ObjectId, 
    ref: 'Profile',
  },
  patrons: {
    profileIds: [{ 
      type: Schema.Types.ObjectId, 
      ref: 'Profile' 
    }],
    validate: [arrayBound, 'patrons exceed the number of hours in a day']
  }
});

const arrayBound = (val) => {
  return val.length <= 24
};

const cleanupAvailability = (val) => {
  return Date.now <= val;
};

module.exports = Availability = mongoose.model('Availability', availabilitySchema);