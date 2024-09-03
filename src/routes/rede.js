const express = require("express")
const router = express.Router()

// definindo rotas
const rede_controller = require("../controller/rede.js")

router.get("/", (req, res) => {
    res.json(rede_controller.index())
})

router.get("/:id", (req, res) => {
    res.json(rede_controller.show(req.params.id))
})

router.post("/", (req, res) => {
    const code = rede_controller.store(req.body)
    res.status(code).json()
})

router.put("/:id", (req, res) => {
    const code = rede_controller.update(req.body, req.params.id)
    res.status(code).json()
})

router.delete("/:id", (req, res) => {
    rede_controller.destroy(req.params.id)
    res.json()
})

router.get("/", (req, res) => {
    res.json(rede_controller.index())
})

router.get("/:id", (req, res) => {
    res.json(rede_controller.show(req.params.id))
})

// definindo rotas

module.exports = router