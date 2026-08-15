//header qye aparece em todas as paginas

import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration
} from "react-router";

import Header from "./components/Header";

export default function App() {
    return (
        <>
            <Meta />
            <Links />

            <Header />

            <Outlet />

            <ScrollRestoration />
            <Scripts />
        </>
    );
}