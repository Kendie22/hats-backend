const express = require('express');
const hats = express.Router();


const {
    getAllHats,
    getHatById,
    createHat,
    updateHat,
    deleteHat
} = require("../queries/hats"); 



hats.get("/", async (req, res) => {
    const allHats = await getAllHats();
   res.json(allHats);
});


hats.get("/:id", async (req,res)) => {
const {id} = req.params; 
const hat = await getHatById(id);
res.json(hat);
};



hats.post("/", async (req, res) => {
    const newHat = await createHat(req.body); 
    res.json(newHat);
});  



hats.put("/:id", async (req, res)) => {
    const {id} = req.params;
const updatedHat = await updateHat(id, req.body);
res.json(updatedHat);
};   



hats.delete("/:id", async (req, res)) => {
    const {id} = req.params;
const deletedHat = await deleteHat(id);
res.json(deletedHat);
};


module.exports = hats;






