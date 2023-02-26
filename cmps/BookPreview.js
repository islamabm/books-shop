export default {
  props: ['book'],
  template: `
        <article class="book-preview">
            <h2>{{ book.name }}</h2>
            <h3>{{ book.maxPrice }}</h3>
        </article>
    `,
}
