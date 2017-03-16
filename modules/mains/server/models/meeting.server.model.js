'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Main Schema
 */
var MeetingSchema = new Schema({
  name: {
    type: String,
    default: '',
    required: 'Please fill Main name',
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  topic: {
    type: String,
    default: '',
    trim: true
  },
    idMeeting: {
    type: String,
    default: '',
    trim: true
  }
});

mongoose.model('Meeting', MeetingSchema);
