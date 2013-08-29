
module.exports = {

  /**
   * Finds all the user that belong to a user using the populate method.
   *
   * Finds by User but the opposite should work as well. So both the following will the do the
   * same thing using different parent records.
   *
   * User.find().populate('places')
   * Place.find().populate('user'
   */

  index: function(req, res) {
    User.findOne(req.param('id'))
    .populate('places')
    .exec(function(err, user) {
      if(err) return res.json(err, 400);
      if(!user) return res.json({ error: 'No User Found' }, 404);
      res.json(user);
    });
  },


  /**
   * Create an association between User and Place
   *
   * Needs work to cut down the nested queries still. You should prob be able to do something
   * like this and have it create the association:
   *
   * Place.create({ attr: 'foo', user: 1 })
   *
   * It should also return the populated user if an association was created to prevent the extra
   * lookup after the save. It may not actually cut down on queries that hit the db but it will
   * make the interface for creating them a lot nicer.
   */

  create: function(req, res) {

    // First lookup the User
    User.findOne(req.param('id')).exec(function(err, user) {
      if(err) return res.json(err, 400);
      if(!user) return res.json({ error: 'No User Found' }, 404);

      // Add the place to the user's places attribute
      user.places.add(req.body);

      // Save the user
      user.save(function(err) {
        if(err) return res.json(err, 400);

        // Lookup the user and populate the places association
        User.findOne(user.id)
        .populate('places')
        .exec(function(err, user) {
          if(err) return res.json(err, 400);
          res.json(user, 201);
        });
      });
    });
  },


  /**
   * Add A User to a Place that already exists.
   *
   * The associations create API allows either an object or an id to be used to
   * link 2 records. This endpoint adds a user to a place just using the Place ID.
   */

  update: function(req, res) {

    // First lookup the User
    User.findOne(req.param('id')).exec(function(err, user) {
      if(err) return res.json(err, 400);
      if(!user) return res.json({ error: 'No User Found' }, 404);

      // Add the place to the user's places attribute
      user.places.add(req.param('place_id'));

      // Save the user
      user.save(function(err) {
        if(err) return res.json(err, 400);

        // Lookup the user and populate the places association
        User.findOne(user.id)
        .populate('places')
        .exec(function(err, user) {
          if(err) return res.json(err, 400);
          res.json(user, 201);
        });
      });
    });
  },

  /**
   * Remove a User from a Place
   */

  del: function(req, res) {

    // To-Do In Waterline
    res.json({ error: 'NOT YET IMPLEMENTED IN WATERLINE' });
  }

};
