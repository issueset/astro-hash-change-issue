const astroConfig = {
  base: "/",
  root: "file:///private/tmp/astro-hash-change-issue/",
  srcDir: "file:///private/tmp/astro-hash-change-issue/src/",
  build: { assets: "_astro" },
  markdown: { shikiConfig: { langs: [] } },
};
const ecIntegrationOptions = {};
let ecConfigFileOptions = {};
try {
  ecConfigFileOptions = (await import("./ec-config-CzTTOeiV.js")).default;
} catch (e) {
  console.error(
    '*** Failed to load Expressive Code config file "file:///private/tmp/astro-hash-change-issue/ec.config.mjs". You can ignore this message if you just renamed/removed the file.\n\n(Full error message: "' +
      (e?.message || e) +
      '")\n',
  );
}

export { astroConfig, ecConfigFileOptions, ecIntegrationOptions };
