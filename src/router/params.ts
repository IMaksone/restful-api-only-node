import { RoutesType, HttpMethodsType } from './types';

export const defaultRoutes: RoutesType = {
  GET: [
    {
      url: '/',
      callback: (request, getResponse) => getResponse(200, 'hello'),
    },
  ],
  POST: []
};

export const httpMetods: HttpMethodsType = {};
Object.keys(defaultRoutes).forEach((key: any) => (httpMetods[key] = key));