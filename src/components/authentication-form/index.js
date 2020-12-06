import React from 'react';
import { Background, Overlay, Inner, Container, Title, Form, Input, Button, Paragraph, Link, ErrorMessage, ErrorText } from './styles/form';

export default function AuthForm( {children, ...props} ) {
    return (
        <Background>
            <Overlay>
                <Inner>
                {children}
                </Inner>
            </Overlay>
        </Background>
    )
}

AuthForm.Container = function AuthSigninContainer({children, ...props}) {
    return <Container {...props}> {children} </Container>
}

AuthForm.Title = function AuthFormTitle( {children, ...props}) {
    return <Title {...props}>{children}</Title>
}

AuthForm.Form = function FormForm( {children, ...props}) {
    return <Form {...props}> {children} </Form>
}

AuthForm.Input = function AuthFormInput( {...props}) {
    return <Input {...props} />
}

AuthForm.Button = function AuthFormButton( {children, ...props}) {
    return <Button {...props}> {children} </Button>
}

AuthForm.Link = function AuthAuthFormLink({children, ...props}) {
    return <Link {...props}> {children} </Link>
}
AuthForm.Paragraph = function AuthFormParagraph({children, ...props}) {
    return <Paragraph {...props}> {children} </Paragraph>
}

AuthForm.ErrorMessage = function AuthFormErrorMessage( { children , ...props}) {
    return <ErrorMessage {...props}> { children } </ErrorMessage>
}

AuthForm.ErrorText = function AuthFormErrorText( { children , ...props}) {
    return <ErrorText {...props}> { children } </ErrorText>
}