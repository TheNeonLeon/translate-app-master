import React from 'react';
import { STORAGE_KEY_USER } from '../../storage/storageKeys';
import { useUser } from '../../context/UserContext';
import {  readTheStorage, saveToStorage } from '../../storage/storage';
import { patchTranslations } from '../../api/user';
import withAuth from '../../hoc/withAuth';

const Profile = () => {
  const [user, setUser] = useUser();
  /*if(user === null){
    setUser(readTheStorage(STORAGE_KEY_USER));
  }*/
  const translations = [...user.translations];
  const deleted = [...user.deleted];


const alreadyDeleted = []
const translationsToDisplay = []

while(translationsToDisplay.length < 10 && translations.length > 0){
  //while-loop makes sure to extract 10 (or all if fewer) non-deleted stored texts from the translation page.
  //These are stored temporarily in translationsToDisplay awaiting further action.
  //alreadyDeleted stores deleted translations that "got in the way" and where they can be accessed and re-pushed if any changes are supposed to be made regarding the user.
  const translation = translations.pop()
  const isDeleted = deleted.pop()
  if(isDeleted){
    alreadyDeleted.push(translation);
  }
  else{
    translationsToDisplay.push(translation);
  }
}

for(let i = 0; i < alreadyDeleted.length; i++){
  //When while-loop is finished we put deleted stuff that got in the way back into the translations-array.
  translations.push(alreadyDeleted[i]);
  deleted.push(true);
}
  
const logOutButton = () => {
  //When user wishes to log out the local storage is cleared and user is directed back to login page.
  localStorage.clear();
  window.location.reload();
}


  const handleDelete = async() => {
    //If user wishes to delete the last 10 translations then they are added back into translations array and marked as deleted with the deleted array.
    //Then the new versions of the translations and deleted arrays are stored in an object and sent with the user.id to be patched in the API, and changed in state and localStorage.
    for(let i = 0; i < translationsToDisplay.length; i++){
      translations.push(translationsToDisplay[i]);
      deleted.push(true);
    }
    const payload = {translations, deleted};
    const [error, newUser] = await patchTranslations(user.id, payload);
    setUser(newUser);
    saveToStorage(STORAGE_KEY_USER, newUser);
}

  return (
    <>
    <button onClick={logOutButton}>Log out</button>
        <h1>Profile</h1>
        <h3>Welcome <u>{user.username}</u></h3>
        <ul>
          {/* The assembled list of translations is iterated over and displayed */}
          {translationsToDisplay.map((text, index) => 
            <li key={index}>
              {text}
            </li>
          )}
        </ul>
        <button onClick={handleDelete}>Delete translations</button>
    </>
  )
};
export default withAuth(Profile)
