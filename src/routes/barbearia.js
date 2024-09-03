const express = require("express")
const router = express.Router()

// definindo rotas
const barbearia_controller = require("../controller/barbearia.js")

router.get("/", (req, res) => {
    res.json(barbearia_controller.index())
})

router.get("/:id", (req, res) => {
    res.json(barbearia_controller.show(req.params.id))
})

router.post("/", (req, res) => {
    const code = barbearia_controller.store(req.body)
    res.status(code).json()
})

router.put("/:id", (req, res) => {
    const code = barbearia_controller.update(req.body, req.params.id)
    res.status(code).json()
})

router.delete("/:id", (req, res) => {
    barbearia_controller.destroy(req.params.id)
    res.json()
})

router.get("/", (req, res) => {
    res.json(barbearia_controller.index())
})

router.get("/:id", (req, res) => {
    res.json(barbearia_controller.show(req.params.id))
})

// definindo rotas

module.exports = router