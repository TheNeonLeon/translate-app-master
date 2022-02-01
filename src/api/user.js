//Imports
import { headerCreate } from "./helper";

const userApiUrl = process.env.REACT_APP_BASE_API_URL;


const userCheck = async (username) => {
    //userCheck - Function to check if the user exists in the database, and fetch the user if it is there.
    try {
        const response = await fetch(`${userApiUrl}?username=${username}`);
        if (!response.ok) {
            throw new Error("Could not complete the request.");
        }
        const data = await response.json();
        return [null, data];
    } catch (error) {
        return [error.message, []];
    }
};


const userCreate = async (username) => {
    //userCreate - Function to create a new user on the database, and return the user if successful.
    try {
        const response = await fetch(userApiUrl, {
            method: "POST",
            headers: headerCreate(),
            body: JSON.stringify({
                username,
                translations: [],
                deleted: [],
            }),
        });
        if (!response.ok) {
            throw new Error("Your name has to be something, right?");
        }
        const data = await response.json();
        return [null, data];
    } catch (error) {
        return [error.message, []];
    }
};

export const patchTranslations = async (userId, payload) => {
    //Updates properties of existing user on the database and returns the updated user if successful.
    let user;
    await fetch(`${userApiUrl}/${userId}`, {
        method: "PATCH",
        headers: headerCreate(),
        body: JSON.stringify(payload),
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error("Could not update translations history!");
        }
        return response.json();
    })
    .then((updatedUser) => {
        user = updatedUser;
    })
    .catch((error) => {
        return [error.message, null];
    });
    console.log("In API PATCH, user: ",user)
    return [null, user];
};


export const userLogin = async (username) => {
    //userLogin - Function for the user to log in
    const [errorCheck, user] = await userCheck(username);
    if (errorCheck !== null) {
        return [errorCheck, null];
    }
    if (user.length > 0) {
        const newUser = user.pop();
        if (!newUser.deleted) {
            newUser.deleted = [];
        }
        return [null, newUser];
    }
    return await userCreate(username);
};
