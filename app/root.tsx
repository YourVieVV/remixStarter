import type { LinksFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

import globalStyles from './styles/global.css';

export function meta() {
  return [
    { charset: 'utf-8' },
    { title: 'New Remix App' },
    { description: 'Starter pack' },
    { viewport: 'width=device-width,initial-scale=1' },
  ];
}

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: globalStyles },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
