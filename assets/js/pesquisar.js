var botao = document.querySelector('.input__botao')
var pesquisa = document.querySelector('#input')
var cards = document.querySelectorAll('#card')

function pesquisar(){
    console.log(this)
}

cards.forEach(function(){
    console.log(this)
})

botao.addEventListener('click', pesquisar)
