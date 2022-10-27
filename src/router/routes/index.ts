import { defaultRoutes as routes, httpMetods } from "../variables";
import usersRoutes from "./users";

export default {
  [httpMetods.GET]: [...routes.GET, ...usersRoutes.GET],
  [httpMetods.POST]: [...routes.POST, ...usersRoutes.POST],
  [httpMetods.PUT]: [...routes.POST, ...usersRoutes.PUT],
  [httpMetods.DELETE]: [...routes.POST, ...usersRoutes.DELETE],
};
