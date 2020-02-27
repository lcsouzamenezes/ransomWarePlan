export default {
    template: `
    <div>
        <h1>This is where the pdf would go</h1>
        <embed src="pdf/ransomware.pdf" type="application/pdf" width="25%" height="25%"></embed>
    </div>
    `,

    created: function() {
        this.$emit("enablehomebutton");
    }
}