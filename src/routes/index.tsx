import { createFileRoute } from "@tanstack/react-router"
import Banner from "@/components/banner"
import Cards from "@/components/cards"
import { categories } from "@/data/categories"
import { products } from "@/data/products"

export const Route = createFileRoute('/')({
  component: () => (
    <section id="page-container">
      <Banner />
      <Cards data={categories} />
      <Cards data={products} />
    </section>
  ),
})
