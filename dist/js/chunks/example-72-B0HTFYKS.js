async function getMod() {
  return import("./example-72-DjaqMEDO.js");
}
const collectedLinks = [];
const collectedStyles = [];
const defaultMod = {
  __astroPropagation: true,
  getMod,
  collectedLinks,
  collectedStyles,
  collectedScripts: [],
};

export { defaultMod as default };
