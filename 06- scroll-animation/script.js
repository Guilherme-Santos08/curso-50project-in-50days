const boxes = document.querySelectorAll(".box")

window.addEventListener("scroll", checkBoxes)

function checkBoxes() {
   const triggerBottom = window.innerHeight / 5 * 4

   boxes.forEach(box => {
      const boxTop = box.getBoundingClientRect().top

      if(boxTop < triggerBottom) {
         box.classList.add("show")
      } else {
         box.classList.remove("show")
      }
   })
}

// Obeservações minhas:
// Posso trocar esse if por um laço de repetição for, sempre que eu chegar em X altura eu adiciono uma div com o conteudo dentro