import rForm from "./DownloadComponent.js";
import DownloadComponent from "./DownloadComponent.js";

export default {
    template: `
    <div>
        <section>
            <h1 class="hidden">Home page</h1>
            <h2>How to build a Backup and Disaster Recovery plan</h2>

            <p class="intro">
                Unforeseen natural disasters, human errors or cyberattacks can cause you to lose access to critical information you need to run your business. Preparing your business to protect itself against the increasing threat of Ransomware attacks just makes sense. 
            </p>
            
            <p class="intro">
                Building an effective plan will help you ensure business continuity and avoid preventable damage to your business and your reputation. This knowledge guide explains the what, why and how to protect yourself and your business.
            </p>

            <h3>This FREE guide includes:</h3>
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
            <h2>Fill out the form below for access to our guide</h2>
        </section>

        <rForm id="reg-form" class="form-section"></rForm>
    </div>        
    `,

    components: {
        rForm: DownloadComponent
    }
}