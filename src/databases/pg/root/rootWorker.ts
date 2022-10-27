import mySqlWorker from "../pgWorker";
import constants from "../../../constants";
import { templateType, CallbacksType } from "../../types";

const mySqlRootWorker = (params: templateType, callbacks: CallbacksType) =>
  mySqlWorker(constants.databases.mysql.root, {...params, ...callbacks});

export default mySqlRootWorker;
