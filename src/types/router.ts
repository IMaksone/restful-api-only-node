import http from "http";

import { MyObject } from "./common";

export interface Request extends http.IncomingMessage {}

export interface Response extends http.ServerResponse {}

export interface ResponseParams {
  statusCode: number;
  end: string;
}

export interface Route {
  url: string;
  callback: CallbackType;
}

export interface Routes {
  [key: string]: Route[];
}

export interface HttpMethods {
  [key: string]: HttpMethodType;
}

export type HttpMethodType = "GET" | "POST" | "PUT" | "DELETE";

export type GetResponseType = (status: number, end: MyObject) => void;

export type CallbackType = (
  request: Request,
  getResponse: GetResponseType
) => void;

export type GetBodyType = (
  request: Request,
  callback: (body: any) => void
) => any;

export type GetHashType = (str: string) => Promise<string | void>;
