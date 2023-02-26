import BookPreview from './BookPreview.js'

export default {
  props: ['books'],
  template: `
        <section class="book-list">
        <ul  class="clean-list">
                <li  v-for="book in books">
                <BookPreview :book="book"/>
                </li>
        </ul>
        </section>
    `,
  components: {
    BookPreview,
  },
}
