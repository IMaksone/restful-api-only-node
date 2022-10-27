import {
  RequestType,
  GetResponseType,
  RouteType,
} from './types';

import routes from './routes';
import { httpMetods } from './params';

const router = (request: RequestType, getResponse: GetResponseType) => {
  if (!request.method || !httpMetods[request.method])
    return getResponse(501, 'Not Implemented');

  const route = routes[httpMetods[request.method]].find(
    (route: RouteType) => route.url === request.url
  );
  
  return route
    ? route.callback(request, getResponse)
    : getResponse(501, 'Not Implemented');
};

export default router;

