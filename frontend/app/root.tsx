import type { MetaFunction, LinksFunction } from "@remix-run/node";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import stylesUrl from "~/styles.css";

export const links: LinksFunction = () => {
  return [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: true },
    {
      href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
      rel: "stylesheet",
    },
    { rel: "stylesheet", href: stylesUrl },
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Sanity A/B Testing",
  viewport: "width=device-width,initial-scale=1",
});

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
