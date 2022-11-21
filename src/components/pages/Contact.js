import React, {useState} from 'react';
import {validateEmail} from '../../utils/helpers';


//This component returns the div that contains all of the content for the Contact portion of the site.
const Contact = () => {

    const [formState, setFormState] = useState({name: '', email: '', message: ''});
    const [errorMessage, setErrorMessage] = useState('');
    const {name, email, message} = formState;

    //This function validates the data entered into the contact form. The name and message inputs it only verifies that the field
    //is not empty. The email field has more validation using the validateEmail function in helpers.js to verify that a valid email
    //address has been entered.
    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if(!isValid){
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length){
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if(!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value});
        }
    };

    //Since the site is front-end only right now, the submit button only logs the values from the inputs. This is where additional
    //handling would go to submit the form datat to the back-end.
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    };

    return (
        <section>
            <h2 className="section-header">Contact Me</h2>
            <form id="contact-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
            </div>
            <div>
                <label htmlFor="email">Email address:</label>
                <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea name="message" rows="10" defaultValue={message} onBlur={handleChange} />
            </div>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
            <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default Contact;