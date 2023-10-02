export function initWelcomePage(params) {
  const divEl = document.createElement("div");
  divEl.classList.add("welcome__root");
  divEl.innerHTML = `
          <div class="welcome__title-container">
            <text-ce text-type="title"> Piedra Papel ó Tijera </text-ce>
          </div>
          <div class="welcome__button-container">
            <button-ce>Empezar</button-ce>
          </div>
          <div class="welcome__footer">
            <option-ce class="welcome__hand" play-option="scissors"></option-ce>
            <option-ce class="welcome__hand" play-option="rock"></option-ce>
            <option-ce class="welcome__hand" play-option="paper"></option-ce>
          </div>
      `;
  //funcionamiento de los botones (ver si hay que hacerle algo al componente button para que escuche)
  const buttonEl = divEl.querySelector("button-ce");
  buttonEl?.addEventListener("click", () => {
    console.log("se cambio de pagina");
    params.goTo("/instructions");
  });

  return divEl;
}
