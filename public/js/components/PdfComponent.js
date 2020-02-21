export default {
    template: `
        <h1>This is where the pdf would go</h1>
    `,

    created: function() {
        if (!this.$parent.isAuthenticated) {
            this.$router.replace("/get-info");
        }
    }
}