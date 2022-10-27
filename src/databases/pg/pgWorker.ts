import { Client } from "pg";

import {
  PGWorkerType,
  PGQueryType,
  PGQueryParams,
  PGQueryArgFunctionType,
} from "../types";

const pgQuery: PGQueryType = (client, { query, params, error, success }, end) =>
  error && success
    ? client.query(query, params, (err, results) => {
        if (err) {
          return error(err.stack);
        }

        success(results, results.rows);

        if (end) client.end();
      })
    : client.query(query, params);

const mySqlWorker: PGWorkerType = async (connectionData, arg) => {
  const client = new Client(connectionData);
  await client.connect();

  switch (arg) {
    case <PGQueryParams>arg:
      pgQuery(client, arg, true);
      break;

    case <PGQueryParams[]>arg:
      arg.forEach((el, i) => pgQuery(client, el, i === arg.length - 1));
      break;

    case <PGQueryArgFunctionType>arg:
      arg((params: PGQueryParams) => pgQuery(client, params)); // arg = () => {...; client.end()} 
      break;

    default:
      break;
  }
};

export default mySqlWorker;
