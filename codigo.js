var queroQueApareca = []

var login = JSON.parse(localStorage.getItem("login"))

var mudanca = document.getElementById("mudanca")

if (login != null) {
    if (login[0].id == 1) {
        mudanca.title = "Usuário 1"
    } else if (login[0].id == 2) {
        mudanca.title = "Usuário 2"
    } else if (login[0].id == 3) {
        mudanca.title = "Usuário 3"
    }
}

if (localStorage.getItem("carrinho1") != null) {
    var carrinho1 = JSON.parse(localStorage.getItem("carrinho1"))
} else if (localStorage.getItem("carrinho1") == null) {
    var carrinho1 = []
}

if (localStorage.getItem("carrinho2") != null) {
    var carrinho2 = JSON.parse(localStorage.getItem("carrinho2"))
} else if (localStorage.getItem("carrinho2") == null) {
    var carrinho2 = []
}

if (localStorage.getItem("carrinho3") != null) {
    var carrinho3 = JSON.parse(localStorage.getItem("carrinho3"))
} else if (localStorage.getItem("carrinho3") == null) {
    var carrinho3 = []
}


// {
//     carrinho = {
//         produtos: [],
//         id: login[0].id
//     }
// }



// var carrinho = {
//     produtos: [],
//     id: login[0].id
// }

// if (localStorage.getItem("carrinhos") != null) {
//     var carrinhos = localStorage.getItem("carrinhos")
//     for (let contador = 0; contador < carrinhos.length; contador++) {
//         let daVez = carrinhos[contador]

//         if (daVez.id == login[0].id) {
//             carrinho = daVez.produtos
//         } else {
//             carrinho = {
//                 produtos: [],
//                 id: login[0].id
//             }
//         }
//     }
// } else {
//     var carrinhos = []

// if (localStorage.getItem("carrinho") != null) {
//     if (carrinho.id == login[0].id) {
//         carrinho = JSON.parse(localStorage.getItem("carrinho"))
//     }
// } else {
//     carrinho = {
//         produtos: [],
//         id: login[0].id
//     }
// }

var home = document.getElementById("home")
var feminino = document.getElementById("feminino")
var masculino = document.getElementById("masculino")
var calcados = document.getElementById("calcados")
var acessorios = document.getElementById("acessorios")

async function pesquisar() {

    home.classList.remove("teste")
    feminino.classList.remove("teste")
    masculino.classList.remove("teste")
    calcados.classList.remove("teste")
    acessorios.classList.remove("teste")

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

        home.classList.remove("teste")
        feminino.classList.remove("teste")
        masculino.classList.remove("teste")
        calcados.classList.remove("teste")
        acessorios.classList.remove("teste")

        if (pagina === 1) {
            menu = "lançamento"
            home.classList.add("teste")
        } else if (pagina === 2) {
            menu = "feminino"
            feminino.classList.add("teste")
        } else if (pagina === 3) {
            menu = "masculino"
            masculino.classList.add("teste")
        } else if (pagina === 4) {
            menu = "calçados"
            calcados.classList.add("teste")
        } else if (pagina === 5) {
            menu = "acessorios"
            acessorios.classList.add("teste")
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

        // let detalhe = document.createElement("div")
        // detalhe.classList.add("detalheCategoria")

        aside.append(h2)
        // aside.append(detalhe)

        pesquisa.value = ""

        for (let contador = 0; contador < queroQueApareca.length; contador++) {
            let item = queroQueApareca[contador]

            let div = document.createElement("div")
            div.classList.add("produto")

            let figure = document.createElement("div")
            figure.classList.add("figure")

            let img = document.createElement("img")
            img.classList.add("fotoProduto")
            let src1 = queroQueApareca[contador].img
            let src2 = queroQueApareca[contador].img2
            img.src = src1
            figure.addEventListener('mouseover', function (event) {
                img.src = src2
            })
            figure.addEventListener('mouseleave', function (event) {
                img.src = src1
            })

            let texto = document.createElement("p")
            texto.classList.add("textoProduto")
            texto.innerText = queroQueApareca[contador].nome

            let h3 = document.createElement("h3")
            h3.classList.add("precoProduto")
            h3.innerText = `R$ ${queroQueApareca[contador].preco.toFixed(2)}`

            let botao = document.createElement("input")
            botao.type = "button"
            botao.classList.add("adicionarCarrinho")
            botao.value = "COMPRAR"

            if (login != null) {
                if (login[0].id == 1) {
                    botao.addEventListener("click", function () {
                        carrinho1.push(item)
                        var carrinho1JSON = JSON.stringify(carrinho1)
                        localStorage.setItem("carrinho1", carrinho1JSON)
                    })
                } else if (login[0].id == 2) {
                    botao.addEventListener("click", function () {

                        carrinho2.push(item)
                        var carrinho2JSON = JSON.stringify(carrinho2)
                        localStorage.setItem("carrinho2", carrinho2JSON)
                    })
                } else if (login[0].id == 3) {
                    botao.addEventListener("click", function () {

                        carrinho3.push(item)
                        var carrinho3JSON = JSON.stringify(carrinho3)
                        localStorage.setItem("carrinho3", carrinho3JSON)
                    })
                }
            } else {
                debugger
                botao.addEventListener("click", function () {
                    alert("Por favor faça login para adicionar produtos ao seu carrinho.")
                    window.location.href = "red2.html"
                })
            }

            div.append(figure)
            div.append(texto)
            div.append(h3)
            div.append(botao)
            figure.append(img)
            produtos.append(div)
        }
        queroQueApareca = []
    }
}

function irPara(onde) {

    if (onde == 1) {
        window.location.href = "red2.html"
    } else if (onde == 2) {
        if (login != null) {
            window.location.href = "red3.html"
        } else {
            alert("Por favor faça login para visualizar seus favoritos.")
            window.location.href = "red2.html"
        }
    } if (onde == 3) {
        if (login != null) {
            window.location.href = "red4.html"
        } else {
            alert("Por favor faça login para acessar o carrinho.")
            window.location.href = "red2.html"
        }
    }
}

// function DEPOISEUVEJO() {
//     carrinhos.push(carrinho)
//     var carrinhosJSON = JSON.stringify(carrinhos)
//     localStorage.setItem("carrinhos", carrinhosJSON)
// }

trocarPagina(1)

// DEPOIS DO BOTÃO
// if (login != null) {
//     // carrinho.id = login[0].id
//     botao.addEventListener("click", function () {
//         debugger
//         carrinho.produtos.push(item)
//         var carrinhosJSON = JSON.stringify(carrinhos)
//         localStorage.setItem("carrinhos", carrinhosJSON)
//     })
// } else {
//     botao.addEventListener("click", function () {
//         alert("Por favor faça login para adicionar produtos ao seu carrinho.")
//         window.location.href = "red2.html"
//     })
// }