import { WelcomePage } from "./components/welcome-page";
import { CustomHookPage } from "./custom-hook/classwork/custom-hook-page";
import { CustomHookPageHomework } from "./custom-hook/homework/custom-hook-page";
import { HocPage } from "./hoc/classwork/hoc-page";
import { HocPageHomework } from "./hoc/homework/hoc-page";
import { ExtensibleStylesPage } from "./extensible-styles/classwork/extensible-styles-page";
import { ExtensibleStylesPageHomework } from "./extensible-styles/homework/extensible-styles-page";
import { CompoundComponentPage } from "./compound-component/classwork/compound-component-page";
import { CompoundComponentPageHomework } from "./compound-component/homework/compound-component-page";
import { RenderPropsPage } from "./render-props/classwork/render-props-page";
import { RenderPropsPageHomework } from "./render-props/homework/render-props-page";
import { ControlPropsPage } from "./control-props/components/control-props-page";

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
  {
    path: "/hoc-homework",
    label: "HOC Homework",
    Component: HocPageHomework,
  },
  {
    path: "/extensible-styles",
    label: "Extensible Styles",
    Component: ExtensibleStylesPage,
  },
  {
    path: "/extensible-styles-homework",
    label: "Extensible Styles Homework",
    Component: ExtensibleStylesPageHomework,
  },
  {
    path: "/compound-components",
    label: "Compound Components",
    Component: CompoundComponentPage,
  },
  {
    path: "/compound-components-homework",
    label: "Compound Components Homework",
    Component: CompoundComponentPageHomework,
  },
  {
    path: "/render-props",
    label: "Render Props",
    Component: RenderPropsPage,
  },
  {
    path: "/render-props-homework",
    label: "Render Props Homework",
    Component: RenderPropsPageHomework,
  },
  {
    path: "/control-props",
    label: "Control Props",
    Component: ControlPropsPage,
  },
];
