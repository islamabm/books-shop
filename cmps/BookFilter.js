// import BookEdit from './BookEdit.js'

export default {
  template: `
        <section class="book-filter">
            <input 
                v-model="filterBy.title"
                @input="filter" 
                placeholder="Search"
                type="text" />
                <input 
                v-model="filterBy.maxPrice"
                @input="filter" 
                placeholder="Search"
                type="number" />
                <!-- <button @click="isOnModal = true">Add Book</button>
                <section :class="{show : is}">
                  <BookEdit/>
                  
                  <button @click="isOnModal = false">Add Book</button>
                </section> -->
        </section>
    `,
  data() {
    return {
      // isOnModal: false,
      filterBy: { title: '', maxPrice: 500 },
    }
  },
  methods: {
    filter() {
      this.$emit('filter', this.filterBy)
    },
  },
  // components: {
  //   BookEdit,
  // },
}
