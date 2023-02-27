import LongTxt from '../cmps/LongTxt.js'
import { bookService } from '../services/book.service.js'
import AddReview from '../cmps/AddReview.js'

export default {
  template: `
        <section class="book-details" v-if="book">
            <h1>{{ book.title }}</h1>
            <h5  class="book-title">{{ book.subtitle }}</h5>
            <h5><span>Authors:</span> {{ book.authors[0] }}</h5>
            <img class="book-img" :src="book.thumbnail" />
            <h5><span>published Date:</span> {{ book.publishedDate }} <span>{{setDate}}</span></h5>
            <h5><span> Pages:</span>{{ book.pageCount }} <span>{{setSentance}}</span></h5>
            <h5>{{ book.categories[0] }}, {{ book.categories[1] }}</h5>
            <h5><span>Lang Of Book:</span> {{ book.language }}</h5>
            <ul>
                <li v-bind:class="PriceClass">{{book.listPrice.amount}}</li>
                <li>{{book.listPrice.currencyCode}}</li>
                <li>{{isInSale}}</li>
            </ul>
            <p><span>About Book:</span>{{ book.description }}</p>
           
        <RouterLink to="/book">Go Back To Books</RouterLink>
        </section>
        <AddReview @add-review="onAddReview"/>
        <article  v-if=" book && book.reviews " v-for="review in book.reviews" :key="review.fullname">
  
          <ul>
          <li>{{review.fullname}}</li>
          <li>{{review.rate}}</li>
          <li>{{review.readAt}}</li>
          <button @click="onRemovePreview">delete review</button>
          </ul>
        </article>
    `,
  data() {
    return {
      book: null,
      sentance: '',
      date: '',
      sale: '',
    }
  },
  created() {
    const { bookId } = this.$route.params
    bookService.get(bookId).then((book) => {
      this.book = book
    })
  },
  methods: {
    onAddReview(review) {
      const { bookId } = this.$route.params
      console.log(review)
      console.log(bookId)
      bookService.addReview(bookId, review)
    },
    onRemovePreview() {},
  },
  computed: {
    setSentance() {
      if (this.book.pageCount > 500) this.sentance = 'Serious Reading'
      else if (this.book.pageCount > 200) this.sentance = 'Descent Reading'
      else if (this.book.pageCount < 100) this.sentance = 'Light Reading'
      return this.sentance
    },
    setDate() {
      if (2023 - this.book.publishedDate > 10) this.date = 'Vintage'
      else if (2023 - this.book.publishedDate <= 1) this.date = 'New'
      return this.date
    },
    PriceClass() {
      return {
        red: this.book.listPrice.amount > 150,
        green: this.book.listPrice.amount < 20,
      }
    },
    isInSale() {
      if (this.book.listPrice.isOnSale) this.sale = '😎'
      else this.sale = '😥'
      return this.sale
    },
  },
  components: {
    LongTxt,
    AddReview,
  },
}

//     "listPrice": {
//     "amount": 109,
//     "currencyCode": "EUR",
//     "isOnSale": false
//     }
// Based on pageCount, also display the text:
// - pageCount > 500 – Serious Reading
// - pageCount > 200 – Descent Reading
// - pageCount < 100 – Light Reading
