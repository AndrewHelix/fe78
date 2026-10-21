import { createBrowserRouter } from 'react-router';
import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/HomePage'));
const PostsPage = lazy(() => import('../pages/PostsPage'));
const AppLayout = lazy(() => import('../lessons/AppLayout'));
const PostPage = lazy(() => import('../pages/PostPage'));
const ProfilePage = lazy(() => import('../pages/ProfilePage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const PublicRoute = lazy(() => import('./PublicRoute'));
const PrivateRoute = lazy(() => import('./PrivateRoute'));
const Page404 = lazy(() => import('../pages/Page404'));

export const router = createBrowserRouter([
  {
    path: '/',
    Component: AppLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: 'posts', // / + posts = /posts
        Component: PostsPage,
      },
      {
        path: 'posts/:id', // useParams > id
        Component: PostPage,
      },
      {
        Component: PublicRoute,
        children: [
          {
            path: '/login',
            Component: LoginPage,
          },
        ],
      },
      {
        Component: PrivateRoute,
        children: [
          {
            path: '/profile',
            Component: ProfilePage,
          },
        ],
      },
      { path: '*', Component: Page404 },
    ],
  },
]);
