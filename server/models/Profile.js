const mongoose = require('mongoose');
const Availability = require('./Availability')

const profileSchema = new mongoose.Schema({
  _profile_id: mongoose.ObjectId,
  first_name: String,
  last_name: String,
  pronouns: String,
  birthday: Date,
  email: String,
  phone_number: Number,
  address: {
    street_number: {
      type: Number,
      required: true,
    },
    street_name: {
      type: String,
      required: true,
    },
    secondary_address: {
      type: String,
      required: false,
    },
    tertiary_address: {
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
    postal_code: {
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