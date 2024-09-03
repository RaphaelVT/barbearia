const express = require("express")
const router = express.Router()

// definindo rotas
const barbeiro_controller = require("../controller/barbeiro")

router.get("/", (req, res) => {
    res.json(barbeiro_controller.index())
})

router.get("/:id", (req, res) => {
    res.json(barbeiro_controller.show(req.params.id))
})

router.post("/", (req, res) => {
    const code = barbeiro_controller.store(req.body)
    res.status(code).json()
})

router.put("/:id", (req, res) => {
    const code = barbeiro_controller.update(req.body, req.params.id)
    res.status(code).json()
})

router.delete("/:id", (req, res) => {
    barbeiro_controller.destroy(req.params.id)
    res.json()
})

router.get("/", (req, res) => {
    res.json(barbeiro_controller.index())
})

router.get("/:id", (req, res) => {
    res.json(barbeiro_controller.show(req.params.id))
})

// definindo rotas

module.exports = router