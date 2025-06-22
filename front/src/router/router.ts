import AllCats from "../Pages/AllCats";
import LikeCats from "../Pages/LikeCats";

export interface IRoute {
  path: string;
  component: React.ComponentType;
}

export enum RouteNames {
  LikeCats = "/likeCats",
  AllCats = "/",
}

export const PublicRoutes: IRoute[] = [
  {
    path: RouteNames.AllCats,
    component: AllCats,
  },
];

export const PrivateRoutes: IRoute[] = [
  {
    path: RouteNames.AllCats,
    component: AllCats,
  },
  { path: RouteNames.LikeCats, component: LikeCats },
];
