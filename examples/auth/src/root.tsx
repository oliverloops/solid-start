// @refresh reload
import { Suspense } from "solid-js";
import { Links, Meta, Routes, Scripts } from "solid-start/components";
import { ErrorBoundary } from "solid-start/server/ErrorBoundary";
import "virtual:windi.css";

export default function Root() {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <ErrorBoundary>
          <Suspense>
            <Routes />
          </Suspense>
        </ErrorBoundary>
        <Scripts />
      </body>
    </html>
  );
}
