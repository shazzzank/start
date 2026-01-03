import { createRootRoute, Outlet, Scripts, HeadContent } from "@tanstack/react-router";
import css from "@/styles/layout.css?url";
import Header from "@/components/header";

export const Route = createRootRoute({
  head: () => ({
    meta: [{ title: "Start Fresh" }],
    links: [
      { rel: 'stylesheet', href: css },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lobster&family=Protest+Revolution&family=Google+Sans+Flex&display=swap' },
    ],
  }),
  component: () => (
    <html>
      <head><HeadContent /></head>
      <body>
        <Header />
        <Outlet />
        <Scripts />
      </body>
    </html>
  )
});

