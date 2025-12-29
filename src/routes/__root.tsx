import { createRootRoute, Outlet, Scripts, HeadContent } from '@tanstack/react-router';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { seo } from '@/utils/data';
import css from '@/styles.css?url';

export const Route = createRootRoute({
  head: () => ({
    meta: [{ title: seo.find(item => item.name === 'brandName')?.value }],
    links: [{ rel: 'stylesheet', href: css }, { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lobster&family=Protest+Revolution&display=swap' }],
  }),
  notFoundComponent: () => <section><h1>404: Not Found</h1></section>,
  component: () => (
    <html>
      <head><HeadContent /></head>
      <body>
        <Header />
        <Outlet />
        <Scripts />
        <Footer />
      </body>
    </html>
  )
});

