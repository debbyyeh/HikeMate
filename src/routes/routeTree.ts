import { indexRoute, registerRoute, rootRoute } from './__root';

export const routeTree = rootRoute.addChildren([indexRoute, registerRoute]);
