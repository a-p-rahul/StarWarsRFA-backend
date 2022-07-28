const express = require('express');
const planets = require('./planets/planets.route');
const router = express.Router();

router.use('/planets', planets);

router.get('/', (req, res) => res.send('Star wars RFA API'));
router.get('/health', (req, res) => {
  const healthcheck = {
		uptime: process.uptime(),
		message: 'OK',
		timestamp: Date.now()
  };
  res.send(JSON.stringify(healthcheck));
});

module.exports = router;
