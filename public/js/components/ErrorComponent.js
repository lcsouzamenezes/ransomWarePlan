export default {
    template: `
    <section class="error-page">
        <h1>404: Page Not Found</h1>
        <h4>This is a navigation disaster!</h4>
        <a @click.prevent="redirectToHome" href="/">Click here to recover</a>
    </section>
    `,

    methods: {
        redirectToHome() {
            this.$router.push("/");
        }
    }
}