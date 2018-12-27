const API_KEY = "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";

class NewsLetterService {

    submitEmail = async (email) => {
        const url = "https://api.sendgrid.com/v3/contactdb/recipients";

        try {
            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify([{ "email": email }]),
                headers: {
                    "authorization": "Bearer " + API_KEY,
                    "Content-Type": "application/json"
                }
            })

            let data = await response.json();
            const newurl = "https://api.sendgrid.com/v3/contactdb/lists/6416658/recipients/" + data.persisted_recipients[0];
            try {
                let status = await this.submitSecondRequest(newurl)
                if (status === 201) {
                    return status;
                } else {
                    return null
                }
            } catch (error) {
                console.log(error)
            }
        } catch (error) {
            console.log('error1-------->', error)
        }
    }

    submitSecondRequest = async (url) => {
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "authorization": "Bearer " + API_KEY,
                }
            })
            return response.status;
        } catch (error) {
            console.log('error2----->', error)
        }
    }

}

export default new NewsLetterService();