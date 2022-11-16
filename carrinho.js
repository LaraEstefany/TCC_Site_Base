var login = JSON.parse(localStorage.getItem("login"))

var carrinho1 = JSON.parse(localStorage.getItem("carrinho1"))
var carrinho2 = JSON.parse(localStorage.getItem("carrinho2"))
var carrinho3 = JSON.parse(localStorage.getItem("carrinho3"))

var produtosCarrinho = document.getElementById("produtosCarrinho")
var valorTotal = document.getElementById("valorTotal")

var total = []
var soma = 0
// var carrinhos = JSON.parse(localStorage.getItem("carrinhos"))

adicionarAoCarrinho()
debugger

function adicionarAoCarrinho() {
    // id = carrinhos.carrinho.id
    // produtosCarrinho.innerHTML = ""

    if (login[0].id == 1) {

        for (let contador = 0; contador < carrinho1.length; contador++) {
            let item = carrinho1[contador]

            let div = document.createElement("div")
            div.classList.add("produtoCarrinho")

            let img = document.createElement("img")
            img.classList.add("imagemCarrinho")
            img.src = item.img

            let texto = document.createElement("p")
            texto.classList.add("textoCarrinho")
            texto.innerText = item.nome

            let h2 = document.createElement("h2")
            h2.classList.add("textoQuantidade")
            h2.innerText = `Qtd.`

            let number = document.createElement("input")
            number.type = "number"
            number.classList.add("quantidade")
            number.value = 1

            let preco = item.preco
            let h3 = document.createElement("h3")
            h3.classList.add("valor")
            h3.innerText = `R$ ${preco.toFixed(2)}`
            total.push(preco)

            let excluir = document.createElement("input")
            excluir.type = "button"
            excluir.classList.add("excluir")
            excluir.value = "❌"

            excluir.addEventListener("click", function () {
                excluirDoCarrinho()
            })

            div.append(img)
            div.append(texto)
            div.append(h2)
            div.append(number)
            div.append(h3)
            div.append(excluir)
            produtosCarrinho.append(div)
        }
    } else if (login[0].id == 2) {

        for (let contador = 0; contador < carrinho2.length; contador++) {
            let item = carrinho2[contador]

            let div = document.createElement("div")
            div.classList.add("produtoCarrinho")

            let img = document.createElement("img")
            img.classList.add("imagemCarrinho")
            img.src = item.img

            let texto = document.createElement("p")
            texto.classList.add("textoCarrinho")
            texto.innerText = item.nome

            let h2 = document.createElement("h2")
            h2.classList.add("textoQuantidade")
            h2.innerText = `Qtd.`

            let number = document.createElement("input")
            number.type = "number"
            number.classList.add("quantidade")
            number.value = 1

            let preco = item.preco
            let h3 = document.createElement("h3")
            h3.classList.add("valor")
            h3.innerText = `R$ ${preco.toFixed(2)}`
            total.push(preco)

            let excluir = document.createElement("input")
            excluir.type = "button"
            excluir.classList.add("excluir")
            excluir.value = "❌"

            excluir.addEventListener("click", function () {
                excluirDoCarrinho()
            })

            div.append(img)
            div.append(texto)
            div.append(h2)
            div.append(number)
            div.append(h3)
            div.append(excluir)
            produtosCarrinho.append(div)
        }
    } else if (login[0].id == 3) {

        for (let contador = 0; contador < carrinho3.length; contador++) {
            let item = carrinho3[contador]

            let div = document.createElement("div")
            div.classList.add("produtoCarrinho")

            let img = document.createElement("img")
            img.classList.add("imagemCarrinho")
            img.src = item.img

            let texto = document.createElement("p")
            texto.classList.add("textoCarrinho")
            texto.innerText = item.nome

            let h2 = document.createElement("h2")
            h2.classList.add("textoQuantidade")
            h2.innerText = `Qtd.`

            let number = document.createElement("input")
            number.type = "number"
            number.classList.add("quantidade")
            number.value = 1

            let preco = item.preco
            let h3 = document.createElement("h3")
            h3.classList.add("valor")
            h3.innerText = `R$ ${preco.toFixed(2)}`
            total.push(preco)

            let excluir = document.createElement("input")
            excluir.type = "button"
            excluir.classList.add("excluir")
            excluir.value = "❌"

            excluir.addEventListener("click", function () {
                excluirDoCarrinho()
            })

            div.append(img)
            div.append(texto)
            div.append(h2)
            div.append(number)
            div.append(h3)
            div.append(excluir)
            produtosCarrinho.append(div)
        }
    }
    calculoTotal()
}

function calculoTotal() {
    for (let contador = 0; contador < total.length; contador++) {
        soma += total[contador]
    }
    valorTotal.innerHTML = `R$ ${soma.toFixed(2)}`
}

function apagar() {
    if (login[0].id == 1) {
        localStorage.removeItem("carrinho1")
        alert("Seu carrinho será reiniciado.")
        window.location.reload(true)
    } else if (login[0].id == 2) {
        localStorage.removeItem("carrinho2")
        alert("Seu carrinho será reiniciado.")
        window.location.reload(true)
    } else if (login[0].id == 3) {
        localStorage.removeItem("carrinho3")
        alert("Seu carrinho será reiniciado.")
        window.location.reload(true)
    }
}