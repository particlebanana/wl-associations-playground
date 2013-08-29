
/**
 * Place Model
 */

module.exports = {

  attributes: {

    // Many-To-Many Relationship
    // User can have many places and places can belong to
    // many people such as a husband and a wife
    users: {
      collection: 'user'
    },

    // Has Many Relationship
    // A place can have many reservations
    reservations: {
      collection: 'reservation'
    },

    title: {
      type: 'string',
      required: true
    },

    address: {
      type: 'string',
      required: true
    },

    city: {
      type: 'string',
      required: true
    },

    state: {
      type: 'string',
      max: 2,
      required: true
    },

    zip: {
      type: 'integer',
      min: 5,
      required: true
    },

    price: {
      type: 'integer',
      required: true
    }

  }

};
