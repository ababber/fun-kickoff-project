const mongoose = require('mongoose');
const Availability = require('./Availability')

const profileSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  pronouns: String,
  birthday: Date,
  email: String,
  phoneNumber: Number,
  address: {
    streetNumber: {
      type: Number,
      required: true,
    },
    streetName: {
      type: String,
      required: true,
    },
    secondaryAddress: {
      type: String,
      required: false,
    },
    tertiaryAddress: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: false,
    },
    county: {
      type: String,
      required: false,
    },
    province: {
      type: String,
      required: false,
    },
    state: {
      type: String,
      required: false,
    },
    region: {
      type: String,
      required: false,
    },
    postalCode: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  description: {
    type: [String],
    validate: [descriptionArrayBound, 'description exceeds 500 words']
  },
  availability: {
    type: Availability,
    days: [mongoose.Types.ObjectId],
    validate: [availabilityArrayBound, 'availability exceeds 365 days']
  }
});

const descriptionArrayBound = (val) => {
  return val.length <= 500;
};

const availabilityArrayBound = (val) => {
  return val.length <= 365;
};

module.exports = Profile = mongoose.model("profile", profileSchema);