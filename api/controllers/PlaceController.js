
module.exports = {

  index: function(req, res) {
    Place.find().exec(function(err, place) {
      if(err) return res.json(err, 400);
      if(!place) return res.json({ error: 'No place exist with that Id' }, 404);
      res.json(place);
    });
  },

  show: function(req, res) {
    Place.findOne(req.param('id')).exec(function(err, place) {
      if(err) return res.json(err, 400);
      if(!place) return res.json({ error: 'No place exist with that Id' }, 404);
      res.json(place);
    });
  },

  create: function(req, res) {
    Place.create(req.body).exec(function(err, place) {
      if(err) return res.json(err, 400);
      res.json(place, 201);
    });
  },

  update: function(req, res) {
    Place.update(req.param('id'), req.body).exec(function(err, place) {
      if(err) return res.json(err, 400);
      res.json(place);
    });
  },

  del: function(req, res) {
    var id = req.param('id');
    Place.destroy(req.param('id')).exec(function(err) {
      if(err) return res.json(err, 400);
      res.json({ id: id });
    });
  },

  users: function(req, res) {
    Place.findOne(req.param('id'))
    .populate('users')
    .exec(function(err, place) {
      if(err) return res.json(err, 400);
      if(!place) return res.json({ error: 'No place exist with that Id' }, 404);
      res.json(place);
    });
  },

  reservations: function(req, res) {
    Place.findOne(req.param('id'))
    .populate('reservations')
    .exec(function(err, place) {
      if(err) return res.json(err, 400);
      if(!place) return res.json({ error: 'No place exist with that Id' }, 404);
      res.json(place);
    });
  }

};
