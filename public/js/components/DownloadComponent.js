export default {
    template: `
        <section id="formSection">
            <h1 class="hidden">Access Our Document</h1>

            <!-- <h2 class="form-header">Please complete the form below</h2> -->

            <form v-on:submit.prevent="handleMail" action="">
                <div class="input-wrapper">
                    <label for="firstname">First Name:</label>
                    <input type="text" name="firstname" required placeholder="Enter your first name">
                </div>

                <div class="input-wrapper">
                    <label for="lastname">Last Name:</label>
                    <input type="text" name="lastname" required placeholder="Enter your last name">
                </div>

                <div class="input-wrapper">  
                    <label for="usermail">Email:</label>
                    <input type="email" name="usermail" required placeholder="Enter email address">
                </div>

                <div class="input-wrapper">
                    <label for="companyname">Company:</label>
                    <input type="text" name="companyname" required placeholder="Enter your company name">
                </div>

                <div class="submit-wrapper">
                    <input type="submit" value="Download the Guide" class="submit-button">
                </div>
            </form>           
        </section>
    `,

    created: function () {
        this.$emit('enablehomebutton');
    },

    methods: {
        handleMail() {
            // add the flash message here -> this is the initial please wait, submitting message
            document.querySelector(".flash-message").className = `flash-message show-msg`;

            let formdata = new FormData(document.querySelector('form')),
                maildata = {};

            // parse the form data
            // and populate the maildata object with the input values (the formdata entries)
            for (let [key, value] of formdata.entries()) {
                maildata[key] = value;
            }

            let url = `/mail`;

            fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-type': 'application/json'
                },

                body: JSON.stringify(maildata)
            })
                .then(res => res.json())
                .then(data => {
                    this.$emit((data.response.includes("OK")) ? 'authsuccess' : 'authfail');
                })
                .catch((err) => console.log(err));

            document.querySelector('form').reset();
        } // end of handle mail function
    }
}