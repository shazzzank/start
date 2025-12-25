import { createRootRoute, Outlet, Scripts, HeadContent } from "@tanstack/react-router";

export const Route = createRootRoute({
  head: () => ({ meta: [{ title: "Start Fresh" }] }),
  component: () => (
    <html>
      <head><HeadContent /></head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  )
});

