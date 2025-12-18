import { createRootRoute, createRoute } from '@tanstack/react-router';
import App from '../App';
import { Home } from '../components/Home';
import { Register } from './register';

export const rootRoute = createRootRoute({
  component: App,
});

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

export const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/register',
  component: Register,
});
