import React, {useState } from 'react';
import { validateEmail } from '../lib/validation';
import { Newsletter } from '../components';
import { useHistory } from 'react-router-dom';

export default function NewsletterContainer({value}) {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    let history = useHistory();

    const routeToSignupPage = () => {
        return history.push("/signup")
          
    }

    const signup = (e) => {
        e.preventDefault()
        const validEmail = validateEmail(email);
        //check if email is valid format, if it is, save email to context and route to sign up page to complete the sign up
        validEmail ? routeToSignupPage() : setError(true)
        
    }

    return (
            <Newsletter>
                <Newsletter.Title>Ready to watch? Enter your email to create or restart your membership.
                </Newsletter.Title>
                <Newsletter.Form >
                    <Newsletter.Input onChange={({target}) => setEmail(target.value)}/>
                    <Newsletter.Button onClick={signup}>{value}</Newsletter.Button>
                </Newsletter.Form>
                {error && <p>please enter a valid email</p>}
            </Newsletter>
       
    )
}
