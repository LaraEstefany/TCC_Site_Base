async function entrar() {
    const corpo = {
        email: document.getElementById("email").Value,
        senha: document.getElementById("senha").value
    }

    const chamaApi = {
        method: 'POST',
        body: JSON.stringify(corpo),
        Headers: {
            "Content=Type": "application/json"
        }
    }

    const resultadoApi = await fetch("https://codifica-demo-api.herokuapp.com/api/v1/users/login", chamaApi);
    const resultadoJson = await resultadoApi.json();

    alert(resultadoJson.mensagem)
}