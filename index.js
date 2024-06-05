// const express = require("express") // importar en nodejs
import express from "express"   // ES modules
import {PORT, DATABASE} from "./constants.js"
import provedorRouter from "./routers/provedoresRouter.js"


const app = express()

app.use(provedorRouter)




// PETICIONES Y RESPUESTAS

// leer, crear, actualizar, eliminar
app.get(
    '/',
    function(req, res) {   //request (peticion)   response (respuesta)
        res.send('Home: Bienvenido')
    }
)

//////////////////////

// const router = express.Router()

// const home = router.get(
//     '/',
//     (_, res) => {
//         res.status(200).send('Hoooome')
//     }
// )

// app.use(home)




// leer, crear, actualizar, eliminar
// app.get(
//     '/contacto',
//     function(req, res) {   //request (peticion)   response (respuesta)
//         res.send('David Ares')
//     }
// )


// app.get(   // lectura
//     '/provedores',
//     function(_, res) {   // ruta estática
//         res.status(200).send('Página provedores')
//     }
// )


// app.get(
//     '/provedores/:id',
//     function(req, res) {   // ruta dinámica por parámetro
//         const id = req.params.id
//         // res.status(200).send(`Usuario con id ${id}`)
//         res.status(200).json({
//             message: "Listar detalle provedor",
//             codigo: id
//         }) 
//     }
// )

// app.get(
//     '/artigos/:cod',   // ruta dinamica  // y lleva siempre req tiene la propieda params
//     (req, res) => {
//         res.send(`Estoy en el articulo ${req.params.cod}`)
//     }
// )


// ESCUCHAMOS ()LEVANTAMOS SERVIDOR
app.listen(
    PORT,
    function () {
        console.log(`Servidor a la escucha en puerto ${PORT}, base de datos en ${DATABASE} jeje`)
    }
)

