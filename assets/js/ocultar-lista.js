var botao = document.querySelector('.botao-ocultar')
var lista = document.querySelector('.lista-modificavel')
var destaques = document.querySelector('.destaques')

function mudaEstadoDaLista(){
    if(lista.classList.contains('lista-oculta')){
        lista.classList.remove('lista-oculta')
        destaques.classList.add('destaques__abaixado')
    }else{
        lista.classList.add('lista-oculta')
        destaques.classList.remove('destaques__abaixado')
    }
}

botao.addEventListener('click', mudaEstadoDaLista)
