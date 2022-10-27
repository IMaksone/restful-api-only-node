import http from "http";

import { MyObject } from "../types";

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
  [key: string]: RouteType[];
}

export interface HttpMethodsType {
  [key: string]: HttpMethodType;
}

export type HttpMethodType = "GET" | "POST" | "PUT" | "DELETE";

export type GetResponseType = (status: number, end: MyObject) => void;

export type CallbackType = (
  request: RequestType,
  getResponse: GetResponseType
) => void;

export type GetBodyType = (
  request: RequestType,
  callback: (body: any) => void
) => any;

export type GetHashType = (str: string) => Promise<string | void>;
