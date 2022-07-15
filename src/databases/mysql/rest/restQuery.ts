import mySqlQuery from '../mySqlQuery';
import { databases } from '../../../constants/constants.json';
import { MySqlQueryParamsType } from '../../types';

const mySqlRestQuery = (params: MySqlQueryParamsType) =>
  mySqlQuery(databases.mysql.rest, params);

export default mySqlRestQuery;
