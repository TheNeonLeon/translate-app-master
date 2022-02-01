//Imports
import { createContext, useContext, useState } from "react";
import { readTheStorage } from "../storage/storage";
import { STORAGE_KEY_USER } from "../storage/storageKeys";

//UserContext - a context for exposing the value
const UserContext = createContext();


export const useUser = () => {
    //exposing the value
    return useContext(UserContext);
}

const UserProvider = ({ children }) => {
    //The provider where a state is initialized before making the state available to the user.
    const [ user, setUser ] = useState(readTheStorage(STORAGE_KEY_USER));

    const state = [
        user,
        setUser
    ]
    return (
        <UserContext.Provider value = { state }>
            { children }
        </UserContext.Provider>
    )
}
export default UserProvider;