'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Toon Schema
 */
var ToonSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  buildTitle: {
    type: String,
    default: '',
    trim: true
  },
  buildNotes: {
    type: String,
    default: '',
    trim: true
  },
  stats: {
    type: Object,
    default: {}
  },
  selectedRace: {
    type: Object,
    default: {}
  },
  selectedBaseClass: {
    type: Object,
    default: {}
  },
  selectedPrestigeClass: {
    type: Object,
    default: {}
  },
  selectedTraits: {
    type: Array,
    default: []
  },
  selectedDisciplines: {
    type: Array,
    default: []
  },
  selectedMasteries: {
    type: Array,
    default: []
  },
  selectedStatRunes: {
    type: Array,
    default: []
  },
  remainingPoints: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('Toon', ToonSchema);