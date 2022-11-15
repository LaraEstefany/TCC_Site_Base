async function entrar() {
    let email = document.getElementById("email")
    let senha = document.getElementById("senha")

    const corpo = {
        email: email.value,
        senha: senha.value
    }

    const requisicao = {
        method: "POST",
        body: JSON.stringify(corpo),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const resultadoApi = await fetch("https://codifica-demo-api.herokuapp.com/api/v1/users/login", requisicao)

    const resultadoJson = await resultadoApi.json()

    if (resultadoJson.mensagem == "Login feito com sucesso") {

    } else {
        email.value = ""
        senha.value = ""
        alert(resultadoJson.mensagem)
    }
}