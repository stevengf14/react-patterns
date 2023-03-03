import { WelcomePage } from "./components/welcome-page";
import { CustomHookPage } from "./custom-hook/classwork/components/custom-hook-page";
import { CustomHookPageHomework } from "./custom-hook/homework/components/custom-hook-page";

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
];
