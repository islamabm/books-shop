export default {
  template: `
        <header class="app-header">
            <h1>Islam Books Store</h1>
            <nav class="main-menu">
                <a class="clean-link" @click="setRoute('HomePage')" href="#">Home</a>
                <a class="clean-link" @click="setRoute('CarIndex')" href="#">Books</a>
                <a class="clean-link" @click="setRoute('AboutPage')" href="#">About</a>
            </nav>
        </header>
    `,
  methods: {
    setRoute(route) {
      this.$emit('set-route', route)
    },
  },
}
