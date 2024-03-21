const express = require('express');
const router = express.Router();

const { getPeople, addPerson, updatePeople, deletePeople } = require("../controllers/people");

router.get('/', getPeople)
router.post('/post', addPerson)
router.put('/:id', updatePeople)
router.delete('/:id', deletePeople)


module.exports = router;