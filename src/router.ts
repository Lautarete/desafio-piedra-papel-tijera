import { initWelcomePage } from "./pages/welcome";
import { initInstructionsPage } from "./pages/instructions";
import { initGamePage } from "./pages/game";

export function initRouter(containerEl: Element | null) {
  const routes = [
    {
      path: /\/welcome/,
      page: initWelcomePage,
    },
    {
      path: /\/instructions/,
      page: initInstructionsPage,
    },
    {
      path: /\/play/,
      page: initGamePage,
    },
  ];

  function goTo(path: string) {
    history.pushState({}, "", path);
    handleRoute(path);
  }

  function handleRoute(route: string) {
    for (const r of routes) {
      if (r.path.test(route)) {
        // console.log(containerEl);

        containerEl?.firstChild?.remove();
        const pageEl = r.page({ goTo: goTo });
        containerEl?.appendChild(pageEl);
      }
    }
  }

  // window.addEventListener("load", () => {
  //   goTo("/welcome");
  // });
  // window.addEventListener("beforeunload", () => {
  //   goTo("/welcome");
  // });
  // window.addEventListener("beforeprint", () => {
  //   goTo("/welcome");
  // });
  if (location.pathname == "/") {
    goTo("/welcome");
  } else {
    handleRoute(location.pathname);
  }
}
