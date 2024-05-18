const express = require("express");
const cardEntryModel = require("./entry-schema.js");
const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");

const router = express.Router();
const stringBBDD = "mongodb+srv://sufianeh8:XgbRDt6yBcRER6Dz@cluster0.xhejdrs.mongodb.net/Bank?retryWrites=true&w=majority&appName=Cluster0";
mongoose
	.connect(stringBBDD)
	.then(() => {
		console.log("Conexión a la BBDD satisfactoria");
	})
	.catch((error) => console.log("Mongo no esta: " + error));


router.post("/addCard", (req, res)=>{
    const cardEntry = new cardEntryModel(req.body);
    cardEntry.save();

    res.json({msg:"Registro añadido con éxito.", success:true});
})

router.get("/:id", async (req, res) => {
    let data = []
    await cardEntryModel.find((_id = new ObjectId(req.params))).then((givenData)=>{
        console.log(req.params);
        data = givenData;
    }).catch((error)=>{
        console.error(error);
    })
    
    res.json(data);
})

router.get("/", async (req, res) => {
    let data = []
    await cardEntryModel.find().then((givenData)=>{
        data = givenData;
    }).catch((error)=>{
        console.error(error);
    })
    res.json(data);
})
module.exports = router;





















/* router.post("/", (req, res, next) => {
	console.log(req.body);
	res.json(req.body);
});

router.get("/createCard", (req, res) => {
	const user = req.body; // Inicializa un objeto vacío
	user.titular = "Rodolfo";
	res.status(404).json(user); // Devuelve el objeto con un estado 200 (OK)
}); */



/* app.use(express.json({limit:'10mb'})) */
