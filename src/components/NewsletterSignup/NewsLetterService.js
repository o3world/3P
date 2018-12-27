import { SENDGRID_API_KEY,SENDGRID_API,SENDGRID_LIST_API } from '../Common/Constants';

class NewsLetterService {

    ErrorMessage = "Something went wrong plese try again";
    SuccessMessage = "Thank You!!!";

    addEmailToSendGrid = async (email) => {
        const url = SENDGRID_API;

        try {
            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify([{ "email": email }]),
                headers: {
                    "authorization": "Bearer " + SENDGRID_API_KEY,
                    "Content-Type": "application/json"
                }
            })

            let data = await response.json();
            const newurl =  SENDGRID_LIST_API + data.persisted_recipients[0];
            try {
                let status = await this.addEmailToList(newurl)
                if (status === 201) {
                    return this.SuccessMessage;
                } else {
                    return this.ErrorMessage
                }
            } catch (error) { return this.ErrorMessage }
        } catch (error) { return this.ErrorMessage }
    }

    addEmailToList = async (url) => {
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "authorization": "Bearer " + SENDGRID_API_KEY,
                }
            })
            return response.status;
        } catch (error) {
            return this.ErrorMessage
        }
    }

}

export default new NewsLetterService();