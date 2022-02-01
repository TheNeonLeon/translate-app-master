import React from 'react';

const TranslationOutputBox = ({translation}) => {
    //This component handles the fetching and displaying of images corresponding to the text it receives.
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    const translate = translation.map((character, index) => {
        //The core of this component's functionality, here all the characters received from parent are iterated over.
        //Each character is compared to the "alphabet" and any non-alphabetical character is ignored.
        //If character matches alphabet the corresponding picture is fetched and returned as img-tag to the "html" part.
        if(!alphabet.includes(character.toLowerCase())){
            return;
        }
        const char = character.toLowerCase();
        const filepath = "assets/"+char+".png" 
        return (
            <span key={index}><img contentEditable="false" src={filepath} alt='A sign-language-sign corresponding to a letter of the alphabet.' width="70" height="70"/></span>
        );
    });

    return (
        <div id="imagefield">
            {translate}
        </div>
    )
}
export default TranslationOutputBox