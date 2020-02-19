(() => {
    // let's just use Vue for all things

    let router = new VueRouter({
        routes: [
            { path: "/", name: "home", component: HomeComponent }
            { path: "/get-info", name: "download", component: DownloadComponent }
        ]
    })
    const myVM = new Vue({
        data: {
            message: "welcome to my awesome vue app"
        },

        methods: {

        },

        created: function() {
            console.log('howdy from vue!');
        }
    }).$mount("#app");
})()