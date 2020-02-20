export default {
    template: `
        <section>
            <h1 class="hidden">This is the download component</h1>

            <form v-on:submit.prevent="handleMail" action="">
                <label for="usermail">Please enter your email address:</label>
                <input type="email" name="usermail" required>

                <label for="name">Please enter your company name (optional)</label>
                <input type="text" name="company" required>

                <label for="message">Please enter your message:</label>
                <textarea name="message" id="user-message" cols="30" rows="10"></textarea>

                <input type="submit" value="Send!" class="submit-button">
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