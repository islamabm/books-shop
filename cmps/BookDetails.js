export default {
  props: ['book'],
  template: `
        <section class="book-details">
            <h1>{{ book.title }}</h1>
            <h5  class="book-title">{{ book.subtitle }}</h5>
            <h5><span>Book Id :</span> {{ book.id }}</h5>
            
            <h5><span>Authors:</span> {{ book.authors[0] }}</h5>
            <img class="book-img" src="images/booksPhotos.jpg" />
            <h5><span>published Date:</span> {{ book.publishedDate }}</h5>
            <h5><span> Pages:</span> {{ book.pageCount }}</h5>
            <h5>{{ book.categories[0] }}, {{ book.categories[1] }}</h5>
            <h5><span>Lang Of Book:</span> {{ book.language }}</h5>
            <p><span>About Book:</span> {{book.desc}}</p>
           
            <button @click="closeDetails">Close</button>
        </section>
    `,
  methods: {
    closeDetails() {
      this.$emit('hide-details')
      console.log(this.book)
    },
  },
}

//     "listPrice": {
//     "amount": 109,
//     "currencyCode": "EUR",
//     "isOnSale": false
//     }
