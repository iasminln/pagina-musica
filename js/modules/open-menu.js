export default function OpenMenu (){

  const itemMenu = document.querySelector("[data-menu]")
  const subMenu = document.querySelector("[data-menu] ul")
  
  const colocarMouse = () =>{
    subMenu.classList.add("ativo")

  }

  const tirarMouse = () =>{
    subMenu.classList.remove("ativo")
  }

  itemMenu.addEventListener("mousemove", ()=>{
    colocarMouse()
  })

}