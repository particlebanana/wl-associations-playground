
module.exports = {

  /**
   * Find A Reservation
   */

  show: function(req, res) {
    Reservation.findOne(req.param('id'))
    .populate('user')
    .populate('place')
    .exec(function(err, reservation) {
      if(err) return res.json(err, 400);
      if(!reservation) return res.json({ error: 'No Reservation with that Id' }, 404);
      res.json(reservation);
    });
  },

  /**
   * Create A New Reservation
   */

  create: function(req, res) {
    if(!req.param('user')) return res.json({ error: 'Requires a User param'}, 400);
    if(!req.param('place')) return res.json({ error: 'Requires a Place param'}, 400);

    Reservation.create(req.body).exec(function(err, reservation) {
      if(err) return res.json(err, 400);

      // Lookup the new reservation and populate associations
      Reservation.findOne(reservation.id)
      .populate('user')
      .populate('place')
      .exec(function(err, reservation) {
        if(err) return res.json(err, 400);
        res.json(reservation);
      });
    });
  },

  /**
   * Update A Reservation
   */

  update: function(req, res) {
    var obj = {};
    if(req.param('startDate')) obj.startDate = req.param('startDate');
    if(req.param('endDate')) obj.endDate = req.param('endDate');

    Reservation.update({ id: req.param('id') }, obj).exec(function(err, reservation) {
      if(err) return res.json(err, 400);

      // Lookup the new reservation and populate associations
      Reservation.findOne(reservation[0].id)
      .populate('user')
      .populate('place')
      .exec(function(err, reservation) {
        if(err) return res.json(err, 400);
        res.json(reservation);
      });
    });
  },

  /**
   * Delete A Reservation
   */

  del: function(req, res) {
    var id = req.param('id');
    Reservation.destroy(req.param('id')).exec(function(err) {
      if(err) return res.json(err, 400);
      res.json({ id: id });
    });
  }

};
