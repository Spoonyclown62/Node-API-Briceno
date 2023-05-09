const express = require ("express");
const router = express.Router();

const res = require("express/lib/response");

const usuariosController = require("../controllers/usuarios-controller");

router.get("/hola",(req,res)=>{res.send("Hola mundo")});

router.get("/",(req,res)=>{res.send("Pagina principal")});

router.get("/usuarios",usuariosController.findAllUsuarios);

router.put("/usuarios/:id",usuariosController.findUsuario);

router.post("/createUser",usuariosController.createUser);   

//router.post("/createUser",usuariosController.createUser);   

router.put("/deleteUser/:id",usuariosController.deleteUsuario);


module.exports=router;