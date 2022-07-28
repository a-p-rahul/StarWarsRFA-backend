const express = require('express');
const router = express.Router({ mergeParams: true });

const { get, getAll } = require('./people.controller');

router.route('/')
    .get(getAll);

router.route('/:_id')
    .get(get);

module.exports = router;