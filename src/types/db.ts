import pg from "pg";

interface ConnectionData {
  host: string;
  user: string;
  database: string;
  password: string;
}

export interface PGQueryParams {
  query: string;
  params: any[];
  error: ErrorCallbackType;
  success: SuccessCallbackType;
}

export type templateType = {
  query: string;
  params: any[];
};

export type templateQueryType = (props: any) => templateType;

export type ErrorCallbackType =
  | ((error: string | undefined) => void)
  | undefined;

export type SuccessCallbackType =
  | ((results: any, fields: any[]) => void)
  | undefined;

export type CallbacksType = {
  error: ErrorCallbackType;
  success: SuccessCallbackType;
};

export type PGQueryType = (
  connection: PGConnectionType,
  params: {
    query: string;
    params: any[];
    error: ErrorCallbackType;
    success: SuccessCallbackType;
  },
  end?: boolean
) => void;

export type PGConnectionType = pg.Client;

export type PGQueryArgFunctionType = (
  callback: (params: PGQueryParams) => void
) => void;

export type PGWorkerType = (
  connectionData: ConnectionData,
  arg: PGQueryParams | PGQueryParams[] | PGQueryArgFunctionType
) => void;