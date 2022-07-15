import http from 'http';

export interface RequestType extends http.IncomingMessage {}

export interface ResponseType extends http.ServerResponse {}

export interface ResponseParamsType {
  statusCode: number;
  end: string;
}

export interface RouteType {
  url: string;
  callback: CallbackType;
}

export interface RoutesType {
  GET: RouteType[];
  POST: RouteType[]
}

export interface HttpMethodsType {
  [key: string]: HttpMethodType;
}

export type HttpMethodType = 'GET'; //| "POST" | "PUT" | "DELETE"

export type GetResponseType = (
  status: number,
  end: string
) => void;

export type CallbackType = (
  request: RequestType,
  getResponse: GetResponseType
) => void;
