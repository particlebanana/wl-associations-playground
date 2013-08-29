
module.exports.routes = {

  // Users

  'get /users': {
    controller: 'user',
    action: 'index'
  },

  'post /users': {
    controller: 'user',
    action: 'create'
  },

  'get /users/:id': {
    controller: 'user',
    action: 'show'
  },

  'put /users/:id': {
    controller: 'user',
    action: 'update'
  },

  'delete /users/:id': {
    controller: 'user',
    action: 'del'
  },

  'get /users/:id/reservations': {
    controller: 'user',
    action: 'reservations'
  },

  // Places

  'get /places': {
    controller: 'place',
    action: 'index'
  },

  'post /places': {
    controller: 'place',
    action: 'create'
  },

  'get /places/:id': {
    controller: 'place',
    action: 'show'
  },

  'put /places/:id': {
    controller: 'place',
    action: 'update'
  },

  'delete /places/:id': {
    controller: 'place',
    action: 'del'
  },

  'get /places/:id/users': {
    controller: 'place',
    action: 'users'
  },

  'get /places/:id/reservations': {
    controller: 'place',
    action: 'reservations'
  },


  // User's Places

  'get /users/:id/places': {
    controller: 'placeuser',
    action: 'index'
  },

  'post /users/:id/places': {
    controller: 'placeuser',
    action: 'create'
  },

  'post /users/:id/places/:place_id': {
    controller: 'placeuser',
    action: 'update'
  },

  'delete /users/:id/places/:place_id': {
    controller: 'placeuser',
    action: 'del'
  },

  // Reservations

  'post /reservation': {
    controller: 'reservation',
    action: 'create'
  },

  'get /reservation/:id': {
    controller: 'reservation',
    action: 'show'
  },

  'put /reservation/:id': {
    controller: 'reservation',
    action: 'update'
  },

  'delete /reservation/:id': {
    controller: 'reservation',
    action: 'del'
  }

};
