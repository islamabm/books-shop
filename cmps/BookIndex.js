import { bookService } from '../services/book.service.js'
import BookList from './BookList.js'

export default {
  template: `
        <section class="book-index">
         <BookList
         :books="books" 
         v-if="books"/> 
        </section>
    `,
  data() {
    return {
      books: null,
    }
  },
  created() {
    bookService.query().then((books) => {
      this.books = books
      console.log(this.books)
    })
  },
  components: {
    BookList,
  },
}
