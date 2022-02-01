import React from 'react';
import { useForm } from 'react-hook-form'
import arrow from '../../images/arrow.svg'
import './TranslationUserInput.css'

const translationConfig = {
    //Configuration for translation input, there must be something written for translation to be performed.
    required: true
}

const TranslationUserInputForm = (props) => {
    //Component that returns the input box and its functionality. 
    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit =({translationInput}) => {
        //Sends the input-text along to the parent and then resets the input field.
        props.performTranslation(translationInput);
        document.getElementById("inputForm").reset();
    }

    const errorMessage = (() => {
        //Displays error if attempts are made at sending empty text for translation.
        if(!errors.translationInput){
            return null;
        }
        if(errors.translationInput.type === 'required'){
            return <span>Input is required for a translation to be performed!</span>;
        }
    })()

    return (
        <>
            <form id="inputForm" onSubmit={handleSubmit(onSubmit)}>
                <fieldset id="translationInput">
                    <label htmlFor="translationInput"></label>
                    <input className='translate-text-field' placeholder='Text to translate' type="text"  {...register("translationInput", translationConfig)} />
                    <button className='translate-button' type="submit" ><img src={arrow}></img></button>
                    {errorMessage}
                </fieldset>
            </form>
        </>
    )
};

export default TranslationUserInputForm;