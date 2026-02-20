const __ASTRO_IMAGE_IMPORT_Z2gGaEW = new Proxy(
  {
    src: "/static/houston-CZZyCf7p.webp",
    width: 800,
    height: 800,
    format: "webp",
  },
  {
    get(target, name, receiver) {
      if (name === "clone") {
        return structuredClone(target);
      }
      if (name === "fsPath") {
        return "/private/tmp/2026-02-20_21-39-52/ecliptic-ephemera/src/assets/houston.webp";
      }
      if (target[name] !== undefined && globalThis.astroAsset)
        globalThis.astroAsset?.referencedImages.add(
          "/private/tmp/2026-02-20_21-39-52/ecliptic-ephemera/src/assets/houston.webp",
        );
      return target[name];
    },
  },
);

const contentAssets = new Map([
  [
    "../../assets/houston.webp?astroContentImageFlag=&importer=src%2Fcontent%2Fdocs%2Findex.mdx",
    __ASTRO_IMAGE_IMPORT_Z2gGaEW,
  ],
]);

export { contentAssets as default };
