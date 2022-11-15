loginFeito = []

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


    let usuario = await fetch("https://codifica-demo-api.herokuapp.com/api/v1/users")

    let usuarioJson = await usuario.json()

    if (resultadoJson.mensagem == "Login feito com sucesso") {
        debugger
        for (let contador = 0; contador < usuarioJson.length; contador++) {
            let item = usuarioJson[contador]
            if (email.value == item.email) {
                loginFeito.push(item)
                var loginFeitoJson = JSON.stringify(loginFeito)
                localStorage.setItem("login", loginFeitoJson)
                window.location.href = "red.html"
            }
        }
    } else {
        email.value = ""
        senha.value = ""
        alert(resultadoJson.mensagem)
    }
}