'use strict';

const smartcar = require('smartcar');

const accessToken = '';

smartcar.getVehicleIds(accessToken)
  .then(function(response) {
    const vid = response.vehicles[0];
    const vehicle = new smartcar.Vehicle(vid, accessToken);
    return vehicle.location();
  })
  .then(function(response) {
    console.log(response);
  });
