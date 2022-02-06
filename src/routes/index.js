
const express = require("express");


const router = express.Router();


router.get("/", (req,res)=>{

    const opciones = {
        titulo_pagina: "My site made in Node.js"
    }
    

    res.render("index", opciones);

});


router.get("/services", (req,res)=>{

    const opciones = {
        titulo_pagina: "Services for you"
    };


    res.render("services", opciones);

});



router.get("/blog", (req,res)=>{

    const opciones = {
        titulo_pagina: "Blog..."
    };

    res.render("blog", opciones);

});



router.get("/contact", (req,res)=>{

    const opciones = {
        titulo_pagina: "Contact me for more info"
    };


    res.render("contact", opciones);

});



module.exports = router;
