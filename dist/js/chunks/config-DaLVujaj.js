const astroConfig = {
  base: "/",
  root: "file:///private/tmp/2026-02-20_21-39-52/ecliptic-ephemera/",
  srcDir: "file:///private/tmp/2026-02-20_21-39-52/ecliptic-ephemera/src/",
  build: { assets: "_astro" },
  markdown: { shikiConfig: { langs: [] } },
};
const ecIntegrationOptions = {};
let ecConfigFileOptions = {};
try {
  ecConfigFileOptions = (await import("./ec-config-CzTTOeiV.js")).default;
} catch (e) {
  console.error(
    '*** Failed to load Expressive Code config file "file:///private/tmp/2026-02-20_21-39-52/ecliptic-ephemera/ec.config.mjs". You can ignore this message if you just renamed/removed the file.\n\n(Full error message: "' +
      (e?.message || e) +
      '")\n',
  );
}

export { astroConfig, ecConfigFileOptions, ecIntegrationOptions };
