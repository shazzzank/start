import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute('/')({
  component: () => (
    <section id="page-container">
      <div>
        <h1 id="page-title">Home Page</h1>
        <h2 id="page-heading">Title</h2>
        <p id="page-text">Hello world</p>
        <input name="test" placeholder="test" />
      </div>
    </section>
  ),
})
