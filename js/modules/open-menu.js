export default function OpenMenu() {
  const itemMenu = document.querySelector("[data-menu]");
  const htmlGeral = document.documentElement;



  function handleClick  (e)  {
    e.preventDefault();
    itemMenu.classList.add("ativo");

    ["touchstart", "mouseover"].forEach((itemEvent) => {
      htmlGeral.addEventListener(itemEvent, ()=>{
        console.log(htmlGeral.contains(this))
      });

      // function htmlClick (element)  {
   
      //     console.log(element);
        
       
      // };
    });
  };

  

  ["touchstart", "mouseover"].forEach((itemEvent) => {
    itemMenu.addEventListener(itemEvent, handleClick);
  });
}
