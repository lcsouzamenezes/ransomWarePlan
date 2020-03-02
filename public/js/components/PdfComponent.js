export default {
    template: `
    <div>
        <section class="iframe-wrapper">
            <iframe src="pdf/ransomware.pdf" type="application/pdf" width="100%" height="500px"></iframe>
        </section>
    </div>
    `,

    created: function () {
        this.$emit("enablehomebutton");
    }
}