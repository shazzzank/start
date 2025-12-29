import { createFileRoute } from "@tanstack/react-router"
import Banner from "@/components/banner"
import Cards from "@/components/cards";
import Hero from "@/components/hero";
import Newsletter from "@/components/newsletter";
import { categories, collections, hero, newsletter, products } from "@/utils/data";

export const Route = createFileRoute('/')({
  component: () => (
    <section>
      <Banner />
      <Cards data={categories} />
      <Cards data={products.filter(item => item.category === 'featured').slice(0, 5)} />
      <Cards data={collections} />
      <Hero {...hero} />
      <Newsletter {...newsletter} />
    </section>
  )
});
