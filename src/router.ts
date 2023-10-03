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

  const basePath = "/desafio-piedra-papel-tijera";
  function isGithubPages() {
    return location.host.includes("github.io");
  }
  function goTo(path: string) {
    const completePath = isGithubPages() ? basePath + path : path;
    history.pushState({}, "", completePath);
    handleRoute(completePath);
  }

  function handleRoute(route: string) {
    const newRoute = isGithubPages() ? route.replace(basePath, "") : route;
    for (const r of routes) {
      if (r.path.test(newRoute)) {
        // console.log(containerEl);

        containerEl?.firstChild?.remove();
        const pageEl = r.page({ goTo: goTo });
        containerEl?.appendChild(pageEl);
      }
    }
  }
  if (location.pathname == "/desafio-piedra-papel-tijera/") {
    goTo("/welcome");
  } else {
    handleRoute(location.pathname);
  }
}
