import { initButtonComp } from "./components/button";
import { initTimerComp } from "./components/count-down";
import { initStarComp } from "./components/gameover-star";
import { initHistoryComp } from "./components/history";
import { initOptionComp } from "./components/options";
import { initTextComp } from "./components/text";
import { initRouter } from "./router";
import { state } from "../state";

function main() {
  initTextComp();
  initButtonComp();
  initStarComp();
  initOptionComp();
  initTimerComp();
  initHistoryComp();
  const rootEl = document.querySelector("#root");
  initRouter(rootEl);
  window.addEventListener("load", () => {
    console.log("se cargo el juego");

    state.init();
  });
}
main();
