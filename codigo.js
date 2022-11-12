var queroQueApareca = []

async function pesquisar() {

    let endpointProduto = "https://codifica-demo-api.herokuapp.com/api/v2/streetwear/products"

    let response = await fetch(endpointProduto)
    let bodyJson = await response.json()

    let listaProdutos = bodyJson

    let pesquisa = document.getElementById("search").value.toLowerCase()

    for (let contador = 0; contador < listaProdutos.length; contador++) {
        let item = listaProdutos[contador].nome.toLowerCase()

        if (item.indexOf(pesquisa) >= 0) {
            queroQueApareca.push(listaProdutos[contador])
        }
    }
    aparecer()
}

async function trocarPagina(pagina) {

    let endpointProduto = "https://codifica-demo-api.herokuapp.com/api/v2/streetwear/products"

    let response = await fetch(endpointProduto)
    let bodyJson = await response.json()

    let listaProdutos = bodyJson

    let menu = ""
    for (let contador = 0; contador < listaProdutos.length; contador++) {
        let item = listaProdutos[contador].categoria

        if (pagina === 1) {
            menu = "lançamento"
        } else if (pagina === 2) {
            menu = "feminino"
        } else if (pagina === 3) {
            menu = "masculino"
        } else if (pagina === 4) {
            menu = "calçados"
        } else if (pagina === 5) {
            menu = "acessorios"
        }

        if (item.indexOf(menu) >= 0) {
            queroQueApareca.push(listaProdutos[contador])
        }
    }
    aparecer()
}

var produtos = document.getElementById("produtos")
var aside = document.getElementById("aside")

function aparecer() {

    produtos.innerHTML = ""
    aside.innerHTML = ""

    if (queroQueApareca.length > 0) {

        let pesquisa = document.getElementById("search")

        let h2 = document.createElement("h2")
        h2.innerText = pesquisa.value

        let detalhe = document.createElement("div")
        detalhe.classList.add("detalheCategoria")

        aside.append(h2)
        aside.append(detalhe)

        pesquisa.value = ""

        for (let contador = 0; contador < queroQueApareca.length; contador++) {
            let item = queroQueApareca[contador]

            let div = document.createElement("div")
            div.classList.add("produto")

            let figure = document.createElement("div")
            figure.classList.add("figure")

            let img = document.createElement("img")
            img.classList.add("fotoProduto")
            img.src = queroQueApareca[contador].img

            let texto = document.createElement("p")
            texto.classList.add("textoProduto")
            texto.innerText = queroQueApareca[contador].nome

            let h3 = document.createElement("h3")
            h3.classList.add("precoProduto")
            h3.innerText = queroQueApareca[contador].preco

            let botao = document.createElement("input")
            botao.type = "button"
            botao.classList.add("adicionarCarrinho")
            botao.value = 'COMPRAR'

            div.append(figure)
            div.append(texto)
            div.append(img)
            div.append(h3)
            div.append(botao)
            figure.append(img)
            produtos.append(div)
        }
        queroQueApareca = []
    }
}

trocarPagina(1)