const { createApp } = Vue

import AppHeader from './cmps/AppHeader.js'
import AppFooter from './cmps/AppFooter.js'
import UserMsg from './cmps/UserMsg.js'

import { router } from './routes.js'

// import BookIndex from './pages/BookIndex.js'

// import HomePage from './pages/HomePage.js'
// import AboutPage from './pages/AboutPage.js'

const options = {
  template: `
        <section class="container">
            <AppHeader @setRoute="route = $event"/>
            <main class="router-view">
              <RouterView></RouterView>
              <!-- <router-view></router-view> -->
                <!-- <HomePage v-if="route === 'HomePage'"/>
                <BookIndex v-if="route === 'BookIndex'"/>
                <AboutPage v-if="route === 'AboutPage'"/> -->
            </main>
            <!-- <AppFooter /> -->
            <UserMsg />
            <!-- <AppFooter /> -->
        </section>
    `,
  data() {
    return {
      route: 'BookIndex',
    }
  },
  components: {
    AppHeader,
    AppFooter,
    UserMsg,
    // BookIndex,
    // HomePage,
    // AboutPage,
  },
}
const app = createApp(options)
app.use(router)
app.mount('#app')
