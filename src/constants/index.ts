import development from "./development.json";
import production from "./production.json";

const constants = process.env.NODE_ENV === "development" ? development : production;

export default constants;
