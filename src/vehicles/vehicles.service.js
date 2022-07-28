const axios = require("axios");
const { host, port, downstream } = require('../config');


async function getVehicles() {
  try {
    const vehicles = await axios.get('/vehicles');
    var vehiclesRes = JSON.stringify(vehicles.data.results);
    return vehiclesRes.replaceAll(downstream, `http://${host}:${port}/`);
  } catch(e) {
    console.log(' +++++++++++++++++++++ ')
    console.log(e);
    console.log(' +++++++++++++++++++++ ')
    return []; // the list is empty
  }
}

async function getVehicle(id) {
  try {
    const vehicle = await axios.get(`/vehicles/${id}`);
    var vehicleRes = JSON.stringify(vehicle.data);
    return vehicleRes.replaceAll(downstream, `http://${host}:${port}/`);
  } catch(e) {
    console.log(' +++++++++++++++++++++ ')
    console.log(e);
    console.log(' +++++++++++++++++++++ ')
    return null;
  }
}

module.exports = {
  getVehicles,
  getVehicle,
};



