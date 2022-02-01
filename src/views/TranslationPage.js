import {React, useState} from 'react';
import TranslationUserInputForm from '../components/Translation/TranslationUserInputForm';
import TranslationOutputBox from '../components/Translation/TranslationOutputBox';
import withAuth from '../hoc/withAuth';
import { STORAGE_KEY_USER } from '../storage/storageKeys';
import { saveToStorage } from '../storage/storage';
import { useUser } from '../context/UserContext';
import { patchTranslations } from '../api/user';
import { useNavigate } from 'react-router-dom';


const TranslationPage = () => {
  //TranslationPage, returns a page with 2 child components.
  const [user, setUser] = useUser();
  const [translationArray, setTranslationArray] = useState([]);
  const [sendToAPI, setSendToAPI] = useState(false);

  
  const processText = (text) => {
    //When TranslationUserInputForm sends a text for translation this method both updates translationArray for the other child component and stores the new text in the user state and localstorage and api.
    setSendToAPI(true);
    const newUser = {...user, translations: [...user.translations, text], deleted: [...user.deleted, false]};
    setUser(newUser);
    saveToStorage(STORAGE_KEY_USER, newUser);
    const chars = text.split("");
    setTranslationArray(chars);
    patchTranslations(newUser.id, {translations: newUser.translations, deleted: newUser.deleted});
    setSendToAPI(false);
  }


    return (
      <div>
        <TranslationUserInputForm performTranslation={processText} />
        { sendToAPI && <p>Please wait until this message goes away...</p>}
        <TranslationOutputBox translation={translationArray}/>
      </div>
    )
  };

export default withAuth(TranslationPage);
