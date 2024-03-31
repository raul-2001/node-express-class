const express = require('express');
const router = express.Router();

const { getPeople, addPerson, updatePeople, deletePeople } = require("../controllers/people");

router.route('/').get(getPeople).post(addPerson);
router.route('/:id').put(updatePeople).delete(deletePeople);

module.exports = router;