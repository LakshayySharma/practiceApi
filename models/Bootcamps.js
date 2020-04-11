const mongoose = require('mongoose');

const BootcampSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        unique: true,
        trim: true,
        maxlength: [50, 'Name cannot be longer than 50 characters']
    },
    slug: String,
    description:  {
        type: String,
        required: [true, 'Please add a description'],
        maxlength: [500, 'Description cannot be longer than 50 characters']
    },
    website: {
        type: String,
        match: [
            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
            'Please enter a valid url with http or https']
    },
    phone:{
        type: String,
        maxlength: [20, 'Phone number cannot be longer than 20 characters']
    },
    email:{
        type: String,
        match: [
            /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
            'Please add a valid email'
    ]
    },
    address: {
        type: String,
        required: [true, 'Please add a address']
    },
    location: {
        //GeoJSON Point
        type: {
            type: String,
            emun: ['Point'],
            // required:true
        },
        coordinates: {
            type: [Number],
            // required: true,
            index: '2dsphere'
        },
        formattedAddress: String,
        street: String,
        city: String,
        state: String,
        country: String,
    },
    careers: {
        type: [String],
        required: true,
        enum: [
            'Web Development',
            'Mobile Development',
            'UI/UX',
            'Data Science',
            'Business',
            'Other'
        ]
    },
    averageRating:{
        type: Number,
        min: [1, 'Rating must be at least 1'],
        max: [10, 'Rating cannot be more than 10'],
    },
    averageCost:Number,
    photo: {
        type: String,
        default: 'no-photo.jpeg'
    },
    housing: {
      type: Boolean,
      default: false
    },
    jobAssistance: {
      type: Boolean,
      default: false
    },
    jobGuarantee: {
      type: Boolean,
      default: false
    },
    acceptGi: {
      type: Boolean,
      default: false
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
});

module.exports = mongoose.model('Bootcamp', BootcampSchema);