async function entrar() {
    debugger
    const corpo = {
        email: document.getElementById("email").value,
        senha: document.getElementById("senha").value
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

    alert(resultadoJson.mensagem)
}