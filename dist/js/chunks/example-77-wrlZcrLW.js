import {
  c as createComponent,
  r as renderComponent,
  b as renderTemplate,
  y as createVNode,
  h as Fragment,
  a2 as __astro_tag_component__,
} from "./astro/server-DWYvtS63.js";
import { jsx } from "react/jsx-runtime";
import { Suspense, lazy } from "react";

const ReactComponent77 = lazy(() => import("./react-component-77-GpDk-EPk.js"));
function ReactComponent77Lazy() {
  return /* @__PURE__ */ jsx(Suspense, {
    fallback: /* @__PURE__ */ jsx("div", { children: "Loading 77..." }),
    children: /* @__PURE__ */ jsx(ReactComponent77, {}),
  });
}

const $$AstroComponent77 = createComponent(
  ($$result, $$props, $$slots) => {
    return renderTemplate`${renderComponent($$result, "ReactComponent77Lazy", ReactComponent77Lazy, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/private/tmp/2026-02-20_21-39-52/ecliptic-ephemera/src/components/react-component-77-lazy.tsx", "client:component-export": "default" })}`;
  },
  "/private/tmp/2026-02-20_21-39-52/ecliptic-ephemera/src/components/astro-component-77.astro",
  void 0,
);

const frontmatter = {
  title: "Reference Title 77",
  description: "Reference Description 77",
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const { Fragment: Fragment$1 } = props.components || {};
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [
      createVNode(Fragment$1, {
        "set:html": "<p>Reference content 77</p>\n",
      }),
      createVNode($$AstroComponent77, {}),
    ],
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout
    ? createVNode(MDXLayout, {
        ...props,
        children: createVNode(_createMdxContent, {
          ...props,
        }),
      })
    : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error(
    "Expected " +
      "component" +
      " `" +
      id +
      "` to be defined: you likely forgot to import, pass, or provide it.",
  );
}

const url = "src/content/docs/reference/example-77.mdx";
const file =
  "/private/tmp/2026-02-20_21-39-52/ecliptic-ephemera/src/content/docs/reference/example-77.mdx";
const Content = (props = {}) =>
  MDXContent({
    ...props,
    components: { Fragment: Fragment, ...props.components },
  });
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId =
  "/private/tmp/2026-02-20_21-39-52/ecliptic-ephemera/src/content/docs/reference/example-77.mdx";
__astro_tag_component__(Content, "astro:jsx");

export { Content, Content as default, file, frontmatter, getHeadings, url };
