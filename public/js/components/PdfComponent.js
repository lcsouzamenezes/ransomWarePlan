export default {
    template: `
    <div>
        <h1>This is where the pdf would go</h1>
        <section class="iframe-wrapper">
            <iframe src="pdf/ransomware.pdf" type="application/pdf" width="100%" height="500px"></iframe>
        </section>
    </div>
    `,

    created: function() {
        this.$emit("enablehomebutton");
    }
}