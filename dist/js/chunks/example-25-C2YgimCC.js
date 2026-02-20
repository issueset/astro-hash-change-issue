async function getMod() {
  return import("./example-25-CXDMVeNs.js");
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
