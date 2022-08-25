export default function OpenMenu() {
  const itemMenu = document.querySelector("[data-menu]");
  const htmlGeral = document.documentElement;
  const eventos = ["touchstart", "mouseover"];

  function handleClick(e) {
    e.preventDefault();
    this.classList.add("ativo");

    fecharMenu(this, () => {
      this.classList.remove("ativo");
    });
  }

  function fecharMenu(el, callback) {
    eventos.forEach((item) => {
      htmlGeral.addEventListener(item, clickHtml);
    });

    function clickHtml(e) {
      if (!el.contains(e.target)) {
        eventos.forEach((item) => {
          htmlGeral.removeEventListener(item, clickHtml);
        });
        callback();
      }
    }
  }

  eventos.forEach((item) => {
    itemMenu.addEventListener(item, handleClick);
  });
}
