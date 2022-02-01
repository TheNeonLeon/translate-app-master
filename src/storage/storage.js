
export const saveToStorage = (key, value) => {
    //saveToStorage - Function to save to local storage
    localStorage.setItem(key, JSON.stringify(value))
}


export const readTheStorage = key => {
    //readTheStorage - function to read the storage in localStorage
    const data = localStorage.getItem(key)
    if (data) {
        return JSON.parse(data)
    }
    else {
        return null;
    }
}