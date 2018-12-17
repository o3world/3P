const createSeoUrl =(url) => {

    // make the url lowercase
    var encodedUrl = url.toString().toLowerCase();

    // replace & with and
    encodedUrl = encodedUrl.split(/\&+/).join("-and-")

    // remove invalid characters
    encodedUrl = encodedUrl.split(/[^a-z0-9]/).join("-");

    // remove duplicates
    encodedUrl = encodedUrl.split(/-+/).join("-");

    // trim leading & trailing characters
    encodedUrl = encodedUrl.trim('-');

    return encodedUrl;
};
export default createSeoUrl;
