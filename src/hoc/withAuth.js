//Imports
import { Navigate } from "react-router-dom";
import { readTheStorage } from "../storage/storage";
import { STORAGE_KEY_USER } from "../storage/storageKeys";

const withAuth = Component => props => {
    //A HOC that makes sure people can't sneakily use pages they aren't supposed to get access to without logging in.
    const user = readTheStorage(STORAGE_KEY_USER);
    if (user !== null) {
        //render out the component
        return <Component {...props}/>
    } else {
        //Navigate back to Login
        return <Navigate to = "/"/>
    }
}
export default withAuth;