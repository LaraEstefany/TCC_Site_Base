var listaProdutosJSON = [
    {
        "nome": "Homens Regatas Carta Gráfica",
        "preco": 47.99,
        "categoria": [
            "camiseta",
            "masculino",
            "lançamento"
        ],
        "tamanho": [
            "P",
            "M",
            "G",
            "GG"
        ],
        "img": "https://img.ltwebstatic.com/images3_pi/2022/08/18/16608080488a4579385b6f50105e9f11ec9f2844ee_thumbnail_600x.webp",
        "img2": "https://img.ltwebstatic.com/images3_pi/2022/08/18/1660808050767132598e7d8b92770941f67d4ea6cc_thumbnail_600x.webp"
    },
    {
        "nome": "Homens Regatas Carta Gráfica",
        "preco": 51.99,
        "categoria": [
            "camiseta",
            "masculino"
        ],
        "tamanho": [
            "P",
            "M",
            "G",
            "GG"
        ],
        "img": "https://img.ltwebstatic.com/images3_pi/2022/07/11/16575387104fbd1f52ec5eede560a000e4db8b16a0_thumbnail_600x.webp",
        "img2": "https://img.ltwebstatic.com/images3_pi/2022/05/16/16526665202ed433ee52c3adbae00116b945b9d23a_thumbnail_600x.webp"
    },
    {
        "nome": "Desenho Animado Estampa em toda a parte Formal",
        "preco": 59.90,
        "categoria": [
            "camiseta",
            "masculino",
            "lançamento"
        ],
        "tamanho": [
            "P",
            "M",
            "G",
            "GG"
        ],
        "img": "https://img.ltwebstatic.com/images3_pi/2022/08/25/166141433264fc75536c051f1d5a816dde5a527472_thumbnail_600x.webp",
        "img2": "https://img.ltwebstatic.com/images3_pi/2022/08/25/1661414334f6a8d578e66115e130e1c8b9f5dbd0dc_thumbnail_600x.webp"
    },
    {
        "nome": "Desenho Animado Estampa em toda a parte Formal",
        "preco": 61.95,
        "categoria": [
            "camiseta",
            "masculino",
            "lançamento"
        ],
        "tamanho": [
            "P",
            "M",
            "G",
            "GG"
        ],
        "img": "https://img.ltwebstatic.com/images3_pi/2022/04/22/16506044904687957addf6817c7deabc1e07caa942_thumbnail_600x.webp",
        "img2": "https://img.ltwebstatic.com/images3_pi/2022/04/22/16506044940d13b74717f05cad7fb4b40ca9a6f27f_thumbnail_600x.webp"
    },
    {
        "nome": "Slogan Fogo Estilos de Rua Camiseta & Tanque Masculina",
        "preco": 57.99,
        "categoria": [
            "camiseta",
            "masculino"
        ],
        "tamanho": [
            "P",
            "M",
            "G",
            "GG"
        ],
        "img": "https://img.ltwebstatic.com/images3_pi/2022/04/21/1650506107a1c7f97debd7e602fee116688a1074fa_thumbnail_600x.webp",
        "img2": "https://img.ltwebstatic.com/images3_pi/2022/04/21/1650506109d7128d4332b0f97629eb18f0993f8077_thumbnail_600x.webp"
    }
]

var queroQueApareca = []

function pesquisar() {

    let pesquisa = document.getElementById("search").value.toLowerCase()

    for (let contador = 0; contador < listaProdutosJSON.length; contador++) {
        let item = listaProdutosJSON[contador].nome.toLocaleLowerCase()

        if (item.indexOf(pesquisa) >= 0) {

            queroQueApareca.push(listaProdutosJSON[contador])
        }
    }
    aparecer()
}

function trocarPagina(pagina) {

    let menu = ""
    for (let contador = 0; contador < listaProdutosJSON.length; contador++) {
        let item = listaProdutosJSON[contador].categoria

        if (pagina === 1) {
            menu = "lançamento"
        } else if (pagina === 2) {
            menu = "feminino"
        } else if (pagina === 3) {
            menu = "masculino"
        } else if (pagina === 4) {
            menu = "calçados"
        } else if (pagina === 5) {
            menu = "acessórios"
        }

        if (item.indexOf(menu) >= 0) {

            queroQueApareca.push(listaProdutosJSON[contador])
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
            botao.classList.add("adicionarCarrinho")
            botao.value = 'COMPRAR'
            debugger


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



// function aparecer() {
//     alert(queroQueApareca.length)

//     for (let contador = 0; contador < queroQueApareca.length; contador++) {
//         let item = queroQueApareca[contador]

//         alert(item.nome)

//         let div = document.getElementById(`produto${contador}`)
//         div.classList.add("produto")

//         let figure = document.getElementById(`figure${contador}`)
//         figure.classList.add("figure")

//         let img = document.getElementById(`fotoProduto${contador}`)
//         img.classList.add("fotoProduto")
//         img.src = queroQueApareca[contador].img

//         let p = document.getElementById(`textoProduto${contador}`)
//         p.classList.add("textoProduto")
//         p.innerText = queroQueApareca[contador].nome

//         let h3 = document.getElementById(`precoProduto${contador}`)
//         h3.classList.add("precoProduto")
//         h3.innerText = queroQueApareca[contador].preco

//         let botao = document.getElementById(`botaoProduto${contador}`)
//         botao.classList.add("adicionarCarrinho")
//         botao.value = 'COMPRAR'
//     }
// }