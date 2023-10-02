import { state } from "../../../state";

export function initGamePage(params) {
  let selectedOption: string = "";
  const divEl = document.createElement("div");
  divEl.classList.add("game__root");
  divEl.classList.remove("show-hand");
  divEl.classList.remove("show-results");
  divEl.innerHTML = `
        <div class="game__countdown-container">
          <timer-ce></timer-ce>
        </div>
        <div class="game__choice-container">
          <option-ce class="game__hand scissors" play-option="scissors"></option-ce>
          <option-ce class="game__hand rock" play-option="rock"></option-ce>
          <option-ce class="game__hand paper" play-option="paper"></option-ce>
        </div>
          `;
  const buttonEl = divEl.querySelector("button-ce");
  buttonEl?.addEventListener("click", () => {
    console.log("se cambio de pagina");
  });

  const playOptions = [
    divEl.querySelector(".scissors"),
    divEl.querySelector(".rock"),
    divEl.querySelector(".paper"),
  ];

  function selectHand() {
    const PCChosen = playOptions[Math.floor(Math.random() * 3)];
    const PCPlay = PCChosen?.getAttribute("play-option");

    function addClasses(chosenItem: number) {
      const lastState = state.getState();
      lastState.PCPlay = PCPlay;
      for (const item of playOptions) {
        if (item == playOptions[chosenItem]) {
          item?.classList.remove("discarded");
          item?.classList.add("chosen");
          lastState.userPlay = item?.getAttribute("play-option");

          state.setState(lastState);
        } else {
          item?.classList.remove("chosen");
          item?.classList.add("discarded");
        }
      }
    }

    playOptions[0]?.addEventListener("select", (e) => {
      selectedOption = e["detail"].selected;
      addClasses(0);
    });
    playOptions[1]?.addEventListener("select", (e) => {
      selectedOption = e["detail"].selected;
      addClasses(1);
    });
    playOptions[2]?.addEventListener("select", (e) => {
      selectedOption = e["detail"].selected;
      addClasses(2);
    });
  }

  function showHands() {
    const timerEl = divEl.querySelector("timer-ce");
    timerEl?.addEventListener("game-over", () => {
      const lastState = state.getState();
      if (lastState.userPlay == "") {
        params.goTo("/instructions");
      }

      console.log("se muestran las manos");
      state.setWinner();

      divEl.classList.add("show-hand");
      divEl.innerHTML = `
      <option-ce play-option=${lastState.PCPlay} class="game__hand-big rotate rock"></option-ce>
      <option-ce play-option=${lastState.userPlay} class="game__hand-big rock"></option-ce>
      `;
      showResults();
    });
  }

  function showResults() {
    const winBg = "rgba(136, 137, 73, 0.90)";
    const looseBg = "rgba(137, 73, 73, 0.90)";
    let timerShowID = setInterval(() => {
      const lastState = state.getState();
      const gameOverContainer = document.createElement("div");
      if (lastState.currentWinner == "user") {
        gameOverContainer.style.backgroundColor = winBg;
      } else {
        gameOverContainer.style.backgroundColor = looseBg;
      }

      gameOverContainer.classList.add("show-results");
      gameOverContainer.innerHTML = `
      <game-over is-win=${
        lastState.currentWinner == "user" ? "true" : "false"
      }></game-over>
      <history-ce ></history-ce>
      <div class="game__button-container">
        <button-ce>Volver a jugar</button-ce>
      </div>
     `;
      divEl.appendChild(gameOverContainer);
      divEl
        .querySelector(".game__button-container")
        ?.addEventListener("click", () => {
          lastState.PCPlay = "";
          lastState.userPlay = "";
          lastState.currentWinner = "";
          state.setState(lastState);
          params.goTo("/instructions");
        });
      clearInterval(timerShowID);
    }, 3000);
  }

  selectHand();
  showHands();
  return divEl;
}
