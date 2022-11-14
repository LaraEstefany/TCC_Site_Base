var carrinho = JSON.parse(localStorage.getItem("carrinho"))
var produtosCarrinho = document.getElementById("produtosCarrinho")
var valorTotal = document.getElementById("valorTotal")

var total = []
var soma = 0

adicionarAoCarrinho()

function adicionarAoCarrinho() {

    for (let contador = 0; contador < carrinho.length; contador++) {
        let item = carrinho[contador]

        let div = document.createElement("div")
        div.classList.add("produtoCarrinho")

        let img = document.createElement("img")
        img.classList.add("imagemCarrinho")
        img.src = carrinho[contador].img

        let texto = document.createElement("p")
        texto.classList.add("textoCarrinho")
        texto.innerText = carrinho[contador].nome

        let h2 = document.createElement("h2")
        h2.classList.add("textoQuantidade")
        h2.innerText = `Qtd.`

        let number = document.createElement("input")
        number.type = "number"
        number.classList.add("quantidade")
        number.value = 1

        let preco = carrinho[contador].preco
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
    calculoTotal()
}

function calculoTotal() {
    for (let contador = 0; contador < total.length; contador++) {
        soma += total[contador]
    }
    valorTotal.innerHTML = `R$ ${soma.toFixed(2)}`
}