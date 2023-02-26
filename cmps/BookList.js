import BookPreview from './BookPreview.js'

export default {
  props: ['books'],
  template: `
        <section class="book-list">
        <ul  class="clean-list">
                <li  v-for="book in books" :key="book.id">
                <BookPreview :book="book"/>
                <button @click="showDetails(book.id)">Details</button>
                </li>
        </ul>
        </section>
    `,
  methods: {
    showDetails(bookId) {
      this.$emit('show-details', bookId)
    },
  },
  components: {
    BookPreview,
  },
}
