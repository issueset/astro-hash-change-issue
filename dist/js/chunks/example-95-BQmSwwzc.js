async function getMod() {
  return import("./example-95-CHLxS_Ir.js");
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
