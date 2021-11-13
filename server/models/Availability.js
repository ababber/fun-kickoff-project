const mongoose = require('mongoose');
const { Schema } = mongoose;

const availabilitySchema = new mongoose.Schema({
  id: mongoose.ObjectId,
  isRecurring: Boolean,
  from: Number,
  to: Number,
  date: {
    type: Date, 
    validate: [cleanupAvailability, "date has passed"]
  },
  patrons: {
    profile_id: [{type: Schema.Types.ObjectId}],
    validate: [arrayBound, 'patrons exceed the number of hours in a day']
  }
});

const arrayBound = (val) => {
  return val.length <= 24
};

const cleanupAvailability = (val) => {
  return Date.now <= val;
};

module.exports = Availability = mongoose.model("availability", availabilitySchema);