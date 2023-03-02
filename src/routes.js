import { WelcomePage } from "./components/welcome-page";
import { CustomHookPage } from "./custom-hook";

export const routes = [
  {
    path: "/",
    label: "Welcome",
    Component: WelcomePage,
    exact: true,
  },
  {
    path: "/custom-hook",
    label: "Custom Hooks",
    Component: CustomHookPage,
  },
];
