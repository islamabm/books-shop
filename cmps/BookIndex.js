import { bookService } from '../services/book.service.js'
import BookList from './BookList.js'
import BookDetails from './BookDetails.js'

export default {
  template: `
        <section class="book-index">
         <BookList
         :books="books" 
         v-if="books"
         @show-details="showBookDetails" /> 
        </section>
        <BookDetails
                v-if="selectedBook" 
                @hide-details="selectedBook = null"
                :book="selectedBook"/>
    `,
  data() {
    return {
      selectedBook: null,
      books: null,
    }
  },
  methods: {
    showBookDetails(bookId) {
      this.selectedBook = this.books.find((book) => book.id === bookId)
    },
  },
  created() {
    bookService.query().then((books) => {
      this.books = books
      console.log(this.books)
    })
  },
  components: {
    BookList,
    BookDetails,
  },
}
