const rede_controller = require("../controller/rede.js")

let proxId = 1;

const model = (body, id = proxId++) => {
    if(
        body.nome != undefined &&
        body.nome != "" && 
        rede_controller.show(body.rede_id)
        ) {
        return {
            id,
            nome: body.nome,
            endereco: body.endereco,
            rede_id: body.rede_id
        }
    }
}

module.exports = model