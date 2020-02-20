export default {
    template: `
        <section>
            <h1 class="hidden">Access Our Document</h1>

            <h2 class="form-header">Complete the form below</h2>

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
                    <input type="submit" value="Submit" class="submit-button">
                </div>
            </form>           
        </section>
    `,

    data: function() {
        // just a stub for now
        return {
            message: "hey"
        }
    },

    created: function() {
        console.log('form ready');
    },

    methods: {
        handleMail() {
            debugger;

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
                    // remove this when testing is done and everything is working
                    console.log(data);
    
                    if (data.response.includes("OK")) {
                        // we successfully sent an email via gmail and nodemailer!
                        // flash success here, reset the form
                        form.reset();
                        alert("email was sent!"); // DO NOT use alerts. they are so hacky and gross.
                    }
                }) // this will be a success or fail message from the server
            .catch((err) => console.log(err));
            // end of our fetch call
        } // end of handle mail function
    }
}