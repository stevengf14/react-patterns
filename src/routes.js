import { WelcomePage } from "./components/welcome-page";
import { CustomHookPage } from "./custom-hook/components/classwork/custom-hook-page";
import { CustomHookPageHomework } from "./custom-hook/components/homework/custom-hook-page";
import { HocPage } from "./hoc";

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
  {
    path: "/custom-hook-homework",
    label: "Custom Hooks Homework",
    Component: CustomHookPageHomework,
  },
  {
    path: "/hoc",
    label: "HOC",
    Component: HocPage,
  },
];
