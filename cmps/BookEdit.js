import { bookService } from '../services/book.service.js'

export default {
  template: `

        <section class="book-edit">
        <h2>Add Book</h2>
            <form @submit.prevent="save">
                <input type="text" v-model="book.title" placeholder="book name?">
                <input type="number" v-model.number="book.maxPrice">
                <button>Save</button>

            </form>
        </section>
    `,
  data() {
    return {
      book: bookService.getEmptyBook(),
      //   hide: true,
    }
  },
  methods: {
    save() {
      bookService.save(this.book).then((savedBook) => {
        this.book = bookService.getEmptyBook()
        this.$emit('book-saved', savedBook)
      })
    },
  },
  //   onAdd() {
  //     this.hide = true
  //   },
  //   onSave() {
  //     this.hide = false
  //   },
  //   computed: {
  //     AddClass() {
  //       return {
  //         hide: !this.hide,
  //         show: this.hide,
  //       }
  //     },
  //   },
}
