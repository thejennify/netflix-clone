import React, {useState, useContext} from 'react';
import { AuthForm } from '../components';
import { validateEmail, validatePassword } from '../lib/validation';
import { FirebaseContext } from "../context/firebase";
import { useHistory } from 'react-router-dom';
import { routes } from '../routes';

export default function SigninFormContainer() {

    const { firebase } = useContext(FirebaseContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [invalidEmail, setInvalidEmail] = useState(false);
    const [invalidPassword, setInvalidPassword] = useState(false);

    let history = useHistory();

    const routeToSignupPage = () => {
        history.push(routes.signup);
    }

    const signinUser = e => {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then( user => {
            history.push(routes.profile)
            //reoute to the movies page
        })
        .catch( error => {
            const errorCode = error.code;
            const errorMessage = error.message
            console.log(errorCode);
            setError(errorMessage);
           
        })
            //personalize error message based on error code, add actionable steps for users.
    }


    //FORM VALIDATION (invalid)
    const validateForm = () => {
        const validEmail = validateEmail(email);
        const validPassword  = validatePassword(password);
        !validEmail ? setInvalidEmail(true) : setInvalidEmail(false);
        !validPassword ? setInvalidPassword(true) : setInvalidPassword(false);
    }

    //ERROR HANDLING (error)
    //check if username & password are is correct 
  
    return (
        <AuthForm>
             <AuthForm.Container>
                <AuthForm.Title> Sign In </AuthForm.Title>
                {error && <AuthForm.ErrorMessage> { error }</AuthForm.ErrorMessage>}
                    <AuthForm.Form onSubmit={signinUser}method="post">
                        <AuthForm.Input  
                            type="text"
                            placeholder="Email or phone number" 
                            borderBottom={ invalidEmail ? ".2em solid #e87c03": ""}
                            marginBottom={ invalidEmail ? "0" : "1.5em"}
                            value={ email }
                            onChange={({target}) => setEmail(target.value)} 
                            onMouseOut={validateForm} />
                            { invalidEmail && 
                            <AuthForm.ErrorText>
                            Please enter a valid email
                            </AuthForm.ErrorText> }
                        <AuthForm.Input 
                            type="password" 
                            placeholder="Password" 
                            borderBottom= {invalidPassword ? ".2em solid #e87c03": ""}
                            marginBottom= {invalidPassword ? "0px": "1.5em"}
                            value={ password }
                            onChange={({target}) => setPassword(target.value)}
                            onMouseOut={validateForm} />
                            {invalidPassword && 
                            <AuthForm.ErrorText>
                            Your password must conatain between 4 and 60 characters
                            </AuthForm.ErrorText>}
                        <AuthForm.Button disabled={ invalidEmail || invalidPassword }> Sign In </AuthForm.Button>
                        <AuthForm.Paragraph>
                            New to Netflix? <AuthForm.Link color="#fff" onClick={routeToSignupPage}> Sign up Now </AuthForm.Link>
                        </AuthForm.Paragraph>
                        <AuthForm.Paragraph>
                            This page is protected by Google reCAPTCHA to ensure you're not a bot.
                        </AuthForm.Paragraph>
                    </AuthForm.Form>
                </AuthForm.Container> 
        </AuthForm>
    )
}
