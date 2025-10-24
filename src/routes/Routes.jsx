import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import Apps from "../pages/Apps";
import InstalledApps from "../pages/InstalledApps";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "apps",
        Component: Apps,
      },
      {
        path: "installed",
        Component: InstalledApps,
      },
    ],
  },
]);
