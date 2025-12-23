import { createRootRoute, createRoute } from '@tanstack/react-router';
import { Home } from '../components/Home';
import { Index } from '../components/Index';
import { Register } from '../components/Register';

export const rootRoute = createRootRoute({
  component: Index,
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
