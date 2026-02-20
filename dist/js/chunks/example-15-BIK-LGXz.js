async function getMod() {
  return import("./example-15-CLLCfrR9.js");
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
