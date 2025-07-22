let body = document.querySelector("body")
let sneaker = document.querySelector(".tenis")

function mudarVisual(color, img) {
   sneaker.classList.add('troca-efeito')

   body.style.background = color


   setTimeout(() => {

      sneaker.classList.remove('troca-efeito')
      sneaker.src = img
   }, 500);





}