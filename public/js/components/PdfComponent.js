export default {
    template: `
        <h1>This is where the pdf would go</h1>
    `,

    created: function() {
        this.$emit("enablehomebutton");
    }
}