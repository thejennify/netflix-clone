import React, {useState} from 'react';
import { Signin } from '../components';


export default function FormContainer() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
    const handleChange = (e) => {
        const value = e.target.value;
        console.log(value);
        setEmail(value);
        console.log(email);
        
    }
    const submitForm = e => {
        alert("Form submited")
    }
    return (
        <Signin>
            <Signin.Container>
                <Signin.Title>Sign In</Signin.Title>
                <Signin.Form>
                    <Signin.Input type="text" placeholder="Email or phone number" height="48px" 
                    width="100%"
                    onChange={ handleChange}/>
                    <Signin.Input type="password" placeholder="Password" height="48px" 
                    width="100%"
                    onChange={ handleChange}/>
                    <Signin.Button onClick={submitForm}>Sign In</Signin.Button>
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