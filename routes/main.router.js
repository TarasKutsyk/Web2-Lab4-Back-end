const planetRouter = require('./planet.router');
const stationRouter = require('./station.router');
const cargoRouter = require('./cargo.router');
const router = require('express').Router({strict: true});

router.use('/planets', planetRouter);
router.use('/stations', stationRouter);
router.use('/cargoes', cargoRouter);

module.exports = router;
