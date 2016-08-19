'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Users Schema
 */
var UsersSchema = new Schema({
  // Users model fields
  // ...
});

mongoose.model('Users', UsersSchema);
