const myRepository = require('../DB/myRepository')
const express = require('express');
const router = express.Router();


// //--------------------------------------
// Get all people
router.get("/", async (req, res) => {

    const x = await myRepository.getAllusersFromDB();
    res.send(x);
});
//--------------------------------------
// Get a person by id
router.get("/:id", async (req, res) => {

    const x = await myRepository.getUserById(req.params.id);
    res.send(x);
});

//--------------------------------------
// Add new person

router.post("/", async (req, res) => {

    const x = await myRepository.addUser(req.body);
    res.send(x);

});
//--------------------------------------
//update person
router.put("/:id", async (req, res) => {

    const x = await myRepository.updateUser(req.params.id, req.body);
    res.send(x);

});
//--------------------------------------
//delete person by id
router.delete("/:id", async (req, res) => {

    let result = await myRepository.deleteUserById(req.params.id)
    res.send(result);
});




module.exports = router;

