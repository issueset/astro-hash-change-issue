const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "js/chunks/react-component-67-D3VkNd10.js",
      "js/chunks/jsx-runtime-D_zvdyIk.js",
    ]),
) => i.map((i) => d[i]);
import { _ as r } from "./chunks/preload-helper-BlTxHScW.js";
import { j as o } from "./chunks/jsx-runtime-D_zvdyIk.js";
import { r as t } from "./chunks/index-DiEladB3.js";
const e = t.lazy(() =>
  r(
    () => import("./chunks/react-component-67-D3VkNd10.js"),
    __vite__mapDeps([0, 1]),
  ),
);
function i() {
  return o.jsx(t.Suspense, {
    fallback: o.jsx("div", { children: "Loading 67..." }),
    children: o.jsx(e, {}),
  });
}
export { i as default };
