// import DownloadComponent from "./DownloadComponent.js";
import HomeComponent from "./HomeComponent.js";
import PdfComponent from "./PdfComponent.js";
import ErrorComponent from "./ErrorComponent.js";

let router = new VueRouter({
    routes: [
        { path: "/", name: "home", component: HomeComponent },
        //{ path: "/get-info", name: "download", component: DownloadComponent },
        { path: "/show-pdf", name: "pdf", component: PdfComponent },
        { path: "*", name: "error", component: ErrorComponent }
    ]
})

export default router;