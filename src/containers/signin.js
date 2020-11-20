import React, {useState} from 'react';
import { Signin } from '../components';


export default function SigninFormContainer() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');



    const signinUser = e => {
        e.preventDefault();
        alert(`email is:${email}, password is:${password}`)
    }
    
    return (
        <Signin>
            <Signin.Container>
                <Signin.Title>Sign In</Signin.Title>
                {error && 
                    <Signin.Error>
                        <strong>Incorrect password.</strong> Please try again or you can <Signin.Link 
                        color="#fff" textDecoration="underline">
                        reset your password
                        </Signin.Link>
                    </Signin.Error>}
                <Signin.Form onSubmit={signinUser}method="post">
                    <Signin.Input  
                    height="48px" 
                    width="100%"
                    type="text"
                    placeholder="Email or phone number" 
                    value={email}
                    onChange={({target}) => setEmail(target.value)}/>
                    <Signin.Input type="password" placeholder="Password" height="48px" 
                    width="100%"
                    value={password}
                    onChange={({target}) => setPassword(target.value)}/>
                    <Signin.Button >Sign In</Signin.Button>
                    <Signin.Section color="b3b3b3" fontSize="13px">
                        <div>
                            <Signin.Input type="checkbox" height="1em" name="remember me"/>
                            <label htmlFor="remember me"> Remember me </label>
                        </div>
                        <p>Need help</p>
                    </Signin.Section>
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
