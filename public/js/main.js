// import components here
import router from "./components/Router.js";

(() => {
    // let's just use Vue for all the things

    const myVM = new Vue({
        data: {
            message: "Submitting, please wait...",
            isAuthenticated: false,
            showHome: false,
            enableScrollTo: true
        },

        methods: {
            setAuthenticated() {
                //debugger;
                this.flashMessage({ message: "Submission successful, redirecting...", class: "success" });
                this.isAuthenticated = true;

                setTimeout(() => {
                    this.$router.push("/show-pdf");
                    this.enableScrollTo = false;

                    // this needs to be fixed
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    })
                }, 1000);
            },

            setMessage() {
                this.message = (this.showHome == true) ? "Submitting, please wait..." : this.message;
            },

            setAuthError() {
                this.flashMessage({ message: "Submission failed, please try again.", class: "fail" });
                this.isAuthenticated = false;
            },

            flashMessage(msg) {
                this.message = msg.message;
                document.querySelector(".flash-message").className = `flash-message ${msg.class} hide-msg`;
            },

            setHomeActive() {
                this.showHome = true;
            },

            showScroll() {
                this.enableScrollTo = true;
                this.showHome = false;
            },

            scrollToTarget(event) {
                let theTarget = document.querySelector(`${event.currentTarget.getAttribute("href")}`).offsetTop;
                // scroll the form into view
                window.scrollTo({
                    top: theTarget,
                    behavior: "smooth"
                })

            }
        },

        router
    }).$mount("#app");

    router.beforeEach((from, to, next) => {
        console.warn('testing router guard');

        if (!myVM.isAuthenticated) {
            console.error('not authenticated');
            next("/");
        } else {
            next();
        }
    })
})()