import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";
import styles from "./tailwind.css";
import NavBar from "./components/navigation/NavBar";
import Foundation from "./components/layoutAndWrappers/Foundation";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body >
     <div className="flex flex-col h-screen w-screen bg-gradient-to-r from-base-100 to-neutral">
<div>


        <NavBar/>

        </div>
     
        <div className="container flex flex-grow w-screen items-center justify-center bg-gradient-to-r from-base-100 to-neutral" >
        <Outlet />
   
    </div>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
