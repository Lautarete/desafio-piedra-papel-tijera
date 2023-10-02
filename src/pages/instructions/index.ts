export function initInstructionsPage(params) {
  const divEl = document.createElement("div");
  divEl.classList.add("instructions__root");
  divEl.innerHTML = `
    <div class="instructions__text-container">
      <text-ce>
        Presioná jugar y elegí: piedra, papel o tijera antes de que pasen
        los 3 segundos.
      </text-ce>
    </div>
    <div class="instructions__button-container">
      <button-ce>¡Jugar!</button-ce>
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
    params.goTo("/play");
  });

  return divEl;
}
