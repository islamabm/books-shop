import { bookService } from '../services/book.service.js'
import BookList from './BookList.js'
import BookDetails from './BookDetails.js'
import BookFilter from './BookFilter.js'
import BookEdit from './BookEdit.js'
export default {
  template: `
        <section class="book-index">
        <BookFilter @filter="setFilterBy"/>
         <BookList
         :books="filteredBooks" 
         v-if="books"
         @show-details="showBookDetails" /> 
        </section>
        <BookEdit @book-saved="onSaveBook"/>
        <BookDetails
                v-if="selectedBook" 
                @hide-details="selectedBook = null"
                :book="selectedBook"/>
    `,
  data() {
    return {
      selectedBook: null,
      books: null,
      filterBy: { maxPrice: 500 },
    }
  },
  methods: {
    showBookDetails(bookId) {
      this.selectedBook = this.books.find((book) => book.id === bookId)
    },
    onSaveBook(newBook) {
      this.books.unshift(newBook)
    },

    setFilterBy(filterBy) {
      this.filterBy = filterBy
    },
  },
  computed: {
    filteredBooks() {
      const regex = new RegExp(this.filterBy.title, 'i')
      return this.books.filter(
        (book) =>
          regex.test(book.title) &&
          this.filterBy.maxPrice > book.listPrice.amount
      )
    },
  },
  created() {
    bookService.query().then((books) => {
      this.books = books
    })
  },
  components: {
    BookFilter,
    BookList,
    BookDetails,
    BookEdit,
  },
}
