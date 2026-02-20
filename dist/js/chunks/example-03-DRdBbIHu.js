async function getMod() {
  return import("./example-03-Tr_Fu0IX.js");
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
