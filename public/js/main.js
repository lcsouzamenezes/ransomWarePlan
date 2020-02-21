// import components here
import router from "./components/Router.js";

(() => {
    // let's just use Vue for all the things

    const myVM = new Vue({
        data: {
            message: "welcome to my awesome vue app"
        },

        methods: {

        },

        created: function() {
            console.log('howdy from vue!');
        },

        router
    }).$mount("#app");
})()