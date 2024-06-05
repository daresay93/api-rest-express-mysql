import express from "express"

const router = express.Router()

router.get(
    './provedores',
    (_, res) => {
        res.status(200).json({
            message: 'Listaaaado de proveeedores'
        })
    }
)

router.post(   // Crear
    './provedores/:id',
    (_, res) => {
        res.status(200).json({
            message: 'Crear proveeedores',
            codigo: req.params.id
        })
    }
)


router.delete(
    './provedores/:id',
    (req, res) => {
        res.status(200).json({
            message: 'Borradooo de proveeedores',
            codigo: req.params.id
        })
    }
)


router.put(   
    './provedores/:id',
    (req, res) => {
        res.status(200).json({
            message: 'Actualizar proveeedores',
            codigo: req.params.id
        })
    }
)


export default router