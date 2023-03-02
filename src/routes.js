import { WelcomePage } from "./components/welcome-page";

export const routes = [
  {
    path: "/",
    label: "Welcome",
    Component: WelcomePage,
    exact: true,
  },
];
