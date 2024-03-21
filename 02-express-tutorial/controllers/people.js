
let {people} = require('../data');

const getPeople = (req, res) => {
    const newPeople = people.map((person) => {
        const { id, name } = person
        return { id, name }
    })

    res.status(201).json( { success: true, data: newPeople } )
}

const addPerson = (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(401).json( { success: false, msg: "please provide a name!" })
    }

    people.push( { id: people.length + 1, name: name })
    res.status(201).json( { success: true, person: name })
}

const updatePeople = (req, res) => {
    const { name } = req.body;
    const { id } = req.params;
    
    const person = people.find((person => person.id === Number(id) ))
    if (!person) {
        return res.status(401).json({ success: false, msg: `Provided ${id} not found!` })
    }

    const newPerson = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name;
        }
        return person;
    })

    res.status(201).json({ success: true, person: newPerson })
}


const deletePeople = (req, res) => {
    const { name } = req.body;
    const { id } = req.params
    const person = people.find((person => person.id === Number(id) ))
    if (!person) {
        return res.status(401).json({ success: false, msg: `Provided ${id} not found!` })
    }

    const newListPerson = people.filter((person) => person.id !== Number(id))
    return res.status(201).json({ success: true, person: newListPerson })

}

module.exports = { getPeople, addPerson, updatePeople, deletePeople }