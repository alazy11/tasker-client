import "server-only";

const dictionaries = {
   en: () => import("./en.json").then((module) => module.default),
   ar: () => import("./ar.json").then((module) => module.default),
};

const getDictionary = async (locale) => dictionaries[locale]();
export default getDictionary;
