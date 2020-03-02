import rForm from "./DownloadComponent.js";
import DownloadComponent from "./DownloadComponent.js";

export default {
    template: `
    <div>
        <section class="home-wrapper">
            <h1 class="hidden">Home page</h1>
            <h2 id="main-header">How To Build A Backup and Disaster Recovery Plan</h2>

            <div class="image-bar">
                <div>
                    <img src="images/disaster.jpg" alt="disaster image">
                </div>
                
                <div>
                    <img src="images/coffee_spill.jpg" alt="human error image">
                </div>

                <div>
                    <img src="images/cyberattack.jpg" alt="cyber attack image">
                </div>
            </div>

            <p class="intro">
                Unforeseen natural disasters, human errors or cyberattacks can cause you to lose access to critical information you need to run your business. Preparing your business to protect itself against the increasing threat of Ransomware attacks just makes sense. 
            </p>
            
            <p class="intro">
                Building an effective plan will help you ensure business continuity and avoid preventable damage to your business and your reputation. This knowledge guide explains the what, why and how to protect yourself and your business.
            </p>

            <h3 class="subhead">This FREE guide includes:</h3>

            <ul class="benefits">
                <li>
                    5 benefits of building a Ransomware plan
                </li>

                <li>
                    Proactive ideas to mitigate risk
                </li>

                <li>
                    Strategies to maintain business continuity after a disaster strikes
                </li>
            </ul>
            <h3 class="subhead"> Download your FREE guide now to learn how to build a back-up and disaster recovery plan for your business!</h3>
        </section>

        <rForm id="reg-form" class="form-section" @authsuccess="authsuccess" @authfail="authfail"></rForm>
    </div>        
    `,

    methods: {
        authsuccess() {
            this.$emit("authsuccess");
        },

        authfail() {
            this.$emit("authfail");
        }
    },

    components: {
        rForm: DownloadComponent
    }
}