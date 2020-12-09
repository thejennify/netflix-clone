import React, { useState, useContext } from 'react'
import { AuthForm } from '../components';
import { validateEmail, validatePassword } from '../lib/validation';
import { FirebaseContext } from "../context/firebase";
import {useHistory} from 'react-router-dom';
import { routes } from '../routes';
import { Navbar } from '../components';


export default function SignupFormContainer() {

    const { firebase } = useContext(FirebaseContext);
    const [email, setEmail] = useState('')
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [invalidPassword, setInvalidPassword] = useState(false);
    const [invalidEmail, setInvalidEmail] = useState(false);


    let history = useHistory();

    const routeToSigninPage = () => {
        history.push(routes.signin);
    }

    const signupUser = (e) => {
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then( res => res.user.updateProfile({
                displayName: name,
                photoURL: Math.floor((Math.random() * 5)), 
            }).then(() => {
                history.push(routes.profile)
            })
        )
        .catch( error => {
            const errorCode = error.code;
            const errorMessage = error.message
            console.log(errorCode);
            setError(errorMessage);
           
        })
    }
    const validateForm = () => {
        const validEmail = validateEmail(email);
        const validPassword  = validatePassword(password);
        !validEmail ? setInvalidEmail(true) : setInvalidEmail(false);
        !validPassword ? setInvalidPassword(true) : setInvalidPassword(false);
    }

    return (
        <AuthForm>
            <Navbar />
            <AuthForm.Container>
                <AuthForm.Title> Sign Up </AuthForm.Title>
                <AuthForm.Form method="post">
                {error && <AuthForm.ErrorMessage> { error }</AuthForm.ErrorMessage>}
                <AuthForm.Input 
                    type="text"
                    placeholder="Name"
                    value={name}
                    marginBottom= "1.5em"
                    onChange={({target}) => setName(target.value)}/>
                <AuthForm.Input 
                    type="email"
                    placeholder="Email address"
                    value={email} 
                    borderBottom={ invalidEmail ? ".2em solid #e87c03": ""}
                    marginBottom={ invalidEmail ? "0" : "1.5em"}
                    onMouseOut={validateForm}
                    onChange={({target}) => setEmail(target.value)}/>
                    { invalidEmail && 
                        <AuthForm.ErrorText>
                        Please enter a valid email
                        </AuthForm.ErrorText> }
                <AuthForm.Input 
                    type="password" 
                    placeholder="Password"
                    value={password} 
                    borderBottom={ invalidEmail ? ".2em solid #e87c03": ""}
                    marginBottom={ invalidEmail ? "0" : "1.5em"}
                    onChange={({target}) => setPassword(target.value)}
                    onMouseOut={validateForm}/>
                    {invalidPassword && 
                        <AuthForm.ErrorText>
                        Your password must contain between 4 and 60 characters
                        </AuthForm.ErrorText>}
                    <AuthForm.Button onClick={signupUser}> Sign Up </AuthForm.Button>
                    <AuthForm.Paragraph>
                        Already have an account?<AuthForm.Link color="#fff" onClick={routeToSigninPage}> Sign in Now</AuthForm.Link>
                    </AuthForm.Paragraph>
                    <AuthForm.Paragraph> This page is protected by Google reCAPTCHA to ensure you're not a bot.
                    </AuthForm.Paragraph>
                </AuthForm.Form>
            </AuthForm.Container>
        </AuthForm>
    )
}


