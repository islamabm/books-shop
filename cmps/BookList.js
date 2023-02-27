import BookPreview from './BookPreview.js'

export default {
  props: ['books'],
  template: `
        <section class="book-list">
        <ul  class="clean-list">
                <li  v-for="book in books" :key="book.id">
                <BookPreview :book="book"/>
                <button  class="glow-on-hover"> <RouterLink :to="'/book/'+book.id">Details</RouterLink></button>|
                <RouterLink :to="'/book/edit/'+book.id">Edit</RouterLink> 
                <button @click="remove(book.id)">x</button>
                <!-- <button hidden class="glow-on-hover" @click="showDetails(book.id)">Details</button> -->
                </li>
        </ul>
        </section>
    `,
  methods: {
    remove(bookId) {
      this.$emit('remove', bookId)
    },
    showDetails(bookId) {
      this.$emit('show-details', bookId)
    },
  },
  components: {
    BookPreview,
  },
}
