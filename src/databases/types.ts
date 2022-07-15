import mySql from 'mySql';

interface ConectionDataType {
  host: string;
  user: string;
  database: string;
  password: string;
}

interface MySqlQueryParamType {
  query: string;
  params: any[];
  error: any;
  success: any;
}

export type QueryType = (
  args: {
    error: (error: mySql.MysqlError | null) => void;
    success: (results: any, fields: mySql.FieldInfo[] | undefined) => void;
  },
  params: any
) => void;

export type MySqlConnectionQueryType = (
  connection: MySqlConnectionType,
  params: {
    query: string;
    params: any[];
    error: (error: mySql.MysqlError | null) => void;
    success: (results: any, fields: mySql.FieldInfo[] | undefined) => void;
  }
) => void;

export type MySqlConnectionType = mySql.Connection;

export type MySqlQueryParamsType = MySqlQueryParamType; //[];

export type MySqlQueryType = (
  conectionData: ConectionDataType,
  queryParams: MySqlQueryParamsType
) => any;
