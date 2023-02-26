import LongTxt from './LongTxt.js'

// {
//     "id": "OXeMG8wNskc",
//     "title": "metus hendrerit",
//     "subtitle": "mi est eros dapibus himenaeos",
//     "authors": [ "Barbara Cartland" ],
//     "publishedDate": 1999,
//     "description": "placerat nisi sodales suscipit tellus",
//     "pageCount": 713,
//     "categories": [ "Computers", "Hack" ],
//     "thumbnail": "http://ca.org/books-photos/20.jpg",
//     "language": "en",
//     "listPrice": {
//     "amount": 109,
//     "currencyCode": "EUR",
//     "isOnSale": false
//     }
export default {
  props: ['book'],
  template: `
        <section class="book-details">
            <h1>{{ book.title }}</h1>
            <h5  class="book-title">{{ book.subtitle }}</h5>
            <h5><span>Book Id :</span> {{ book.id }}</h5>
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
           
            <button @click="closeDetails">Close</button>
        </section>
    `,
  data() {
    return {
      sentance: '',
      date: '',
      sale: '',
    }
  },
  methods: {
    closeDetails() {
      this.$emit('hide-details')
      console.log(this.book)
    },
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
