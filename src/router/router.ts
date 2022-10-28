import { Request, GetResponseType, Route } from "_types";

import routes from "./routes";
import { httpMetods } from "./variables";

const router = (request: Request, getResponse: GetResponseType) => {
  if (!request.method || !httpMetods[request.method])
    return getResponse(501, { message: "Not Implemented" });

  const route = routes[httpMetods[request.method]].find(
    (route: Route) => route.url === request.url
  );

  return route
    ? route.callback(request, getResponse)
    : getResponse(501, { message: "Not Implemented" });
};

export default router;
