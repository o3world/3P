class NewsLetterService {

    submitEmail = (email) => {
        const url = "https://api.sendgrid.com/v3/contactdb/recipients";
        fetch(url, {
            method: "POST",
            body: JSON.stringify([{ "email": email }]),
            headers: {
                "authorization": "Bearer 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",
                "Content-Type": "application/json"
            },
        })
        .then(response => {return response.json();})
        .then(data => {
            const newurl = "https://api.sendgrid.com/v3/contactdb/lists/6416658/recipients/" + data.persisted_recipients[0];
            this.submitSecondRequest(newurl)
        })
        .catch(error => {console.log("error-------->", error);})
    }

    submitSecondRequest = (url) => {
        fetch(url, {
            method: "POST",
            headers: {
                "authorization": "Bearer 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",
            }
        })
        .then(response => { })
        .catch(error => console.log('error2----->', error));
    }

}

export default new NewsLetterService();