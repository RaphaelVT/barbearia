let proxId = 1;

const model = (body, id = proxId++) => {
    if(
        body.email != "" &&
        body.senha != ""
    ) {
        return {
            id,
            email: body.email,
            senha: body.senha,
        }
    }
}

module.exports = model