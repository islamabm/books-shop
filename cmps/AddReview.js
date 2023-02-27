export default {
  template: `
          <section class="add-review">
             <form @submit.prevent="saveReview" class="form-review">
                 <input type="text" class="name-input" placeholder="fullname?" v-model=" review.fullname">
                 <input type="number" min="1" max="5" class="rate-input" placeholder="rate?" v-model=" review.rate">
                <input type="text" class="date-input" placeholder="date" v-model=" review.readAt">   
                <button>Add Review</button>

             </form>
          </section>
      `,

  data() {
    return {
      review: {
        fullname: '',
        rate: 1,
        readAt: '',
      },
    }
  },

  methods: {
    saveReview() {
      this.$emit('add-review', { ...this.review })
    },
  },
}
