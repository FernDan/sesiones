var ruta=require("express").Router();

ruta.get("/",(req, res)=>{
    res.render("inicio");
});

module.exports=ruta;
