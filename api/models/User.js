/**
 * User Model
 */

module.exports = {

  attributes: {

    // Many-To-Many Relationship
    // User can have many places and places can belong to
    // many people such as a husband and a wife
    places: {
      collection: 'place'
    },

    // Has Many Relationship
    // A User can have many reservations
    reservations: {
      collection: 'reservation'
    },

    firstName: {
      type: 'string',
      required: true
    },

    lastName: {
      type: 'string',
      required: true
    },

    email: {
      type: 'string',
      email: true,
      unique: true,
      required: true
    }

  }

};
