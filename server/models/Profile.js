const mongoose = require('mongoose');
const { Schema } = mongoose;

const profileSchema = new mongoose.Schema({
  profile_id: mongoose.ObjectId,
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
    secondary_address: String,
    tertiary_address: String,
    city: {
      type: String,
      required: true,
    },
    county: String,
    province: String,
    state: String,
    region: String,
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
    type: [{type: Schema.Types.ObjectId}],
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