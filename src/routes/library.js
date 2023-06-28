const express = require("express");

const router = express.Router();

router.get("/:libraryId", (req, res)=>
    res.json({libreryId: req.params.libraryId, name: "El ateneo"
    })
)

router.post("/", (req, res)=>{

console.log(req.body);
console.log(`metodo ${req.method} en la url ${req.url} con el siguiente contenido ${req.body}` )
res.json(req.body)
})

router.put("/:libraryId", (req, res)=>{
console.log(`metodo ${req.method} en la url ${req.url} con el siguiente contenido ${req.body}` )
res.json({id:req.params.libraryId, ...req.body})
}
)

router.delete("/:libraryId", (req, res)=>{
console.log(`metodo ${req.method} en la url ${req.url} con el siguiente contenido ${req.body}` )
res.json({})
}
)

module.exports = router

