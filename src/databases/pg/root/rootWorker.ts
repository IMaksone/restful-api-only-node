import mySqlWorker from "../pgWorker";
import constants from "_const";
import { templateType, CallbacksType } from "_types";

const mySqlRootWorker = (params: templateType, callbacks: CallbacksType) =>
  mySqlWorker(constants.databases.mysql.root, {...params, ...callbacks});

export default mySqlRootWorker;
