const apiKey = process.env.REACT_APP_API_KEY;


export const headerCreate = () => {
    //headerCreate - to make sure JSON data is sent to the API with API key.
    return {
        'Content-Type' : 'application/json',
        'x-api-key' : apiKey
    }
};

