import { state } from "../../../state";
//Nunca estube seguro si era mejor pasarle la data por parametros o si debia poder acceder al state

export function initHistoryComp() {
  class HistoryCE extends HTMLElement {
    shadow: ShadowRoot;
    wins: number;
    looses: number;
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      const currentHistory = state.getState().history;
      this.wins = currentHistory.userWins;
      this.looses = currentHistory.PCWins;
      this.render();
    }
    render() {
      const style = document.createElement("style");
      style.innerHTML = `
      * {
      box-sizing: border-box;
    }
    .container {
      width: 259px;
      border-radius: 10px;
      border: 10px solid #000;
      background: #fff;
      text-align: center;
      padding: 5px 20px 18px 20px;
    }
    .score-container {
      margin-top: 15px;
      text-align: end;
    }    
      `;

      const containerEl = document.createElement("div");
      containerEl.classList.add("container");
      const titleEl = document.createElement("text-ce");
      titleEl.setAttribute("text-type", "large");
      titleEl.setAttribute("color", "black");
      titleEl.textContent = "Score";

      const scoreContainerEl = document.createElement("div");
      scoreContainerEl.classList.add("score-container");
      const playerScore = document.createElement("text-ce");
      playerScore.setAttribute("text-type", "button");
      playerScore.setAttribute("color", "black");
      playerScore.textContent = `Vos: ${this.wins}`;
      const pcScore = document.createElement("text-ce");
      pcScore.setAttribute("text-type", "button");
      pcScore.setAttribute("color", "black");
      pcScore.textContent = `Máquina: ${this.looses}`;

      scoreContainerEl.appendChild(playerScore);
      scoreContainerEl.appendChild(pcScore);
      containerEl.appendChild(titleEl);
      containerEl.appendChild(scoreContainerEl);

      this.shadow.appendChild(style);
      this.shadow.appendChild(containerEl);
    }
  }
  customElements.define("history-ce", HistoryCE);
}
