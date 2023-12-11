let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}


let interaction2 = document.querySelector('a:nth-of-type(1)')
interaction2.addEventListener('click', jumpHandler2)

function jumpHandler2() {
  interaction2.classList.toggle('move')
}

let interaction3 = document.querySelector('a:nth-of-type(2)')
interaction3.addEventListener('keydown', jumpHandler3)

function jumpHandler3(s) {
  interaction3.classList.toggle('move2')
} 

let interaction4 = document.querySelector('a:nth-of-type(3)')
interaction4.addEventListener('keypress', jumpHandler4)

function jumpHandler4() {
  interaction4.classList.toggle('grow')
} 

let interaction5 = document.querySelector('a:nth-of-type(4)')
interaction5.addEventListener('mouseenter', jumpHandler5)

function jumpHandler5() {
  interaction5.classList.toggle('animation')
} 

let interaction6 = document.querySelector('a:nth-of-type(5)')
interaction6.addEventListener('mouseleave', jumpHandler6)

function jumpHandler6() {
  interaction5.classList.toggle('animation2')
} 

let interaction7 = document.querySelector('a:nth-of-type(6)')
interaction7.addEventListener('mousewheel', jumpHandler7)

function jumpHandler7() {
  interaction7.classList.toggle('animation3')
} 

let interaction8 = document.querySelector('a:nth-of-type(7)')
interaction8.addEventListener('dblclick', jumpHandler8)

function jumpHandler8() {
  interaction8.classList.toggle('animation4')
} 

let interaction9 = document.querySelector('a:nth-of-type(8)')
interaction9.addEventListener('focusin', jumpHandler9)

function jumpHandler9() {
  interaction9.classList.toggle('animation5')
} 

let interaction10 = document.querySelector('a:nth-of-type(9)')
interaction10.addEventListener('focusout', jumpHandler10)

function jumpHandler10() {
  interaction10.classList.toggle('animation6')
} 

let interaction11 = document.querySelector('a:nth-of-type(10)')
interaction11.addEventListener('keydown', jumpHandler11)

function jumpHandler11(s) {
  interaction11.classList.toggle('animation7')
} 