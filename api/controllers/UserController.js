
module.exports = {

  index: function(req, res) {
    User.find().exec(function(err, users) {
      if(err) return res.json(err, 400);
      res.json(users);
    });
  },

  show: function(req, res) {
    User.findOne(req.param('id')).exec(function(err, user) {
      if(err) return res.json(err, 400);
      if(!user) return res.json({ error: 'No User found with that Id' }, 404);
      res.json(user);
    });
  },

  create: function(req, res) {
    User.create(req.body).exec(function(err, user) {
      if(err) return res.json(err, 400);
      res.json(user, 201);
    });
  },

  update: function(req, res) {
    User.update(req.param('id'), req.body).exec(function(err, user) {
      if(err) return res.json(err, 400);
      res.json(user);
    });
  },

  del: function(req, res) {
    var id = req.param('id');

    User.destroy(req.param('id')).exec(function(err) {
      if(err) return res.json(err, 400);
      res.json({ id: id });
    });
  },

  reservations: function(req, res) {
    User.findOne(req.param('id'))
    .populate('reservations')
    .exec(function(err, user) {
      if(!user) return res.json({ error: 'No User found with that Id' }, 404);
      res.json(user);
    });
  }

};
