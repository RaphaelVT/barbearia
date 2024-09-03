const express = require("express")
const barbeiro_router = require("./routes/barbeiro.js")
const barbearia_router = require("./routes/barbearia.js")
const cliente_router = require("./routes/cliente.js")
const rede_router = require("./routes/rede.js")
const usuario_router = require("./routes/usuario.js")
const app = express()
const port = 3000

app.use(express.json())

// barbeiro

app.use("/barbeiro", barbeiro_router)

// barbearia

app.use("/barbearia", barbearia_router)

// cliente

app.use("/cliente", cliente_router)

// rede

app.use("/rede", rede_router)

// usuario

app.use("/usuario", usuario_router)


app.listen(port, () => {
    console.log(`Servidor ativado na porta: ${port}`)
})