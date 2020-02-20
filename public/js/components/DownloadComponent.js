export default {
    template: `
        <h1>This is the download component</h1>
    `,

    data: function() {
        // just a stub for now
        return {
            message: "hey"
        }
    },

    created: function() {
        console.log('form ready');
    }
}