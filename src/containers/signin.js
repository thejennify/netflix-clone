import React, {useState, useContext} from 'react';
import { Signin } from '../components';
import { FirebaseContext} from "../context/firebase";

export default function SigninFormContainer() {
const { firebase } = useContext(FirebaseContext)
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');
const [invalidEmail, setInvalidEmail] = useState(false);
const [invalidPassword, setInvalidPassword] = useState(false);


    const signinUser = e => {
        e.preventDefault();

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then( user => {
            alert("user is signed in")
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
        const validEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
        const validPassword  = password.length >= 6;

        !validEmail ? setInvalidEmail(true) : setInvalidEmail(false);
        !validPassword ? setInvalidPassword(true) : setInvalidPassword(false);
    }


    //ERROR HANDLING (error)
    //check if username & password are is correct 
  
    return (
        <Signin>
            <Signin.Container>
                <Signin.Title>Sign In</Signin.Title>
                {error && <Signin.ErrorMessage> {error}</Signin.ErrorMessage>}
                <Signin.Form onSubmit={signinUser}method="post">
                    <Signin.Input  
                        height="48px" 
                        width="100%"
                        type="text"
                        placeholder="Email or phone number" 
                        borderBottom={invalidEmail ? ".2em solid #e87c03": ""}
                        marginBottom={invalidEmail ? "0" : "1.5em"}
                        value={email}
                        onChange={({target}) => setEmail(target.value)} 
                        onMouseOut={validateForm} />
                        {invalidEmail && 
                        <Signin.ErrorText>
                            Invalid Email
                        </Signin.ErrorText> }
                    <Signin.Input 
                        type="password" 
                        placeholder="Password" 
                        height="48px" 
                        width="100%"
                        borderBottom= {invalidPassword ? ".2em solid #e87c03": ""}
                        marginBottom= {invalidPassword ? "0px": "1.5em"}
                        value={password}
                        onChange={({target}) => setPassword(target.value)}
                        onMouseOut={validateForm} />
                        {invalidPassword && 
                        <Signin.ErrorText>
                        Password must be at least 6 digit long
                        </Signin.ErrorText>}
                    <Signin.Button disabled={invalidEmail || invalidPassword}> Sign In </Signin.Button>
                    <Signin.Paragraph>
                        Login with Facebook
                    </Signin.Paragraph>
                    <Signin.Paragraph>
                        New to Netflix? <Signin.Link color="#fff">Sign up Now</Signin.Link>
                    </Signin.Paragraph>
                    <Signin.Paragraph>This page is protected by Google reCAPTCHA to ensure you're not a bot.<Signin.Link color="#0071eb">Learn more</Signin.Link></Signin.Paragraph>
                </Signin.Form>
            </Signin.Container>
        </Signin>
    )
}
