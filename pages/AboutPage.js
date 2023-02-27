export default {
  template: `
        <section class="about-page">
            <h1 class="about-header">About</h1>
            <img class="about-img" src="images/about.webp" />
            <hr />
            <nav>
                <RouterLink to="/about/team">Our team</RouterLink> |
                <RouterLink to="/about/services">Our services</RouterLink> |
            </nav>
            <hr />
            <RouterView />
        </section>
    `,
}

export const AboutTeam = {
  template: `<section>
        <h3>Our team is amazing</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis enim rem porro delectus. Quos expedita ipsam repellendus voluptas quas, nam ea eligendi veniam ullam, modi impedit eveniet quia quaerat molestias?</p>
        <img src="images/team.png" />
    </section>`,
}
export const AboutServices = {
  template: `<section>
        <h3>Our Services are incredible!</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis enim rem porro delectus. Quos expedita ipsam repellendus voluptas quas, nam ea eligendi veniam ullam, modi impedit eveniet quia quaerat molestias?</p>
    </section>`,
}
