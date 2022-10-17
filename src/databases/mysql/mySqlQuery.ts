import mySql from 'mysql';

import { MySqlQueryType, MySqlConnectionQueryType } from '../types';

const mySqlConnectionQuery: MySqlConnectionQueryType = (
  connection,
  { query, params, error, success }
) => {
  connection.query(query, params, (err, results, fields) => {
    if (err) {
      return error(err);
    }

    success(results, fields);
  });
};

const mySqlQuery: MySqlQueryType = async (connectionData, queryParams) => {
  const connection = mySql.createConnection(connectionData);

  mySqlConnectionQuery(connection, queryParams);

  connection.end();
};

export default mySqlQuery;
