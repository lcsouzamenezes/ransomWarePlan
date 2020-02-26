// import components here
import router from "./components/Router.js";

(() => {
    // let's just use Vue for all the things

    const myVM = new Vue({
        data: {
            message: "welcome to my awesome vue app",
            isAuthenticated: false,
            showHome: false,
            enableScrollTo: true
        },

        methods: {
            setAuthenticated() {
                debugger;

                this.isAuthenticated = true;

                setTimeout(() => {
                    this.$router.push("/show-pdf");
                    this.enableScrollTo = false;
                }, 800);
            },

            setHomeActive() {
                debugger;
                this.showHome = true;
            },

            showScroll() {
                this.enableScrollTo = true;
            },

            scrollToTarget(event) {
                let theTarget = document.querySelector(`${event.currentTarget.getAttribute("href")}`).offsetTop;
                // scroll the form into view
                window.scrollTo({
                    top: theTarget, //event.currentTarget.getAttribute("href"),
                    behavior: "smooth"
                })

            }
        },

        created: function() {
            console.log('howdy from vue!');
        },

        router
    }).$mount("#app");
})()