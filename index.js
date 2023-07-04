var express= require("express");
var path=require("path");
var session=require("express-session")
var usuariosRutas=require("./rutas/usuarios");
require("dotenv").config();

var app=express();
app.set("view engine", "ejs");
app.use("/web",express.static(path.join(__dirname,"/web")));
app.use(express.urlencoded({extended:true}));
app.use(session({
    secret:process.env.SESSION_SECRETO,
    resave:true,
    saveUninitialized:true
}));
app.use("/",usuariosRutas);

var port= process.env.PORT || 6001;

app.listen(port, ()=>{
    console.log("Servidor en http://localhost:"+port);
});