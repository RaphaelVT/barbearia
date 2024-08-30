const express = require("express")
const barbeiro_controller = require("./controller/barbeiro.js")
const app = express()
const port = 3000




// barbeiro

app.get("/barbeiro", (req, res) => {
    res.json(barbeiro_controller.index())
})

app.get("/barbeiro/:id", (req, res) => {
    res.json(barbeiro_controller.show(req.params.id))
})

app.post("/barbeiro", (req, res) => {
    const code = barbeiro_controller.store(req.body)
    res.status(code).json()
})

app.put("/barbeiro/:id", (req, res) => {
    const code = barbeiro_controller.update(req.body, req.params.id)
    res.status(code).json()
})

app.delete("/barbeiro/:id", (req, res) => {
    barbeiro_controller.destroy(req.params.id)
    res.json()
})


app.listen(port, () => {
    console.log(`Servidor ativado na porta: ${port}`)
})