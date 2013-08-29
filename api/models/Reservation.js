
/**
 * Reservation Model
 */

module.exports = {

  attributes: {

    // Belongs To Association
    // A reservation can only belong to a single user
    user: {
      model: 'user'
    },

    // Belongs To Association
    // A reservation can only belong to a single place
    place: {
      model: 'place'
    },

    startDate: {
      type: 'datetime',
      required: true
    },

    endDate: {
      type: 'datetime',
      required: true
    }

  }

};
