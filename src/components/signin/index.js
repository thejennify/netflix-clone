import React from 'react';
import { Background, Container, Title, Form, Input, Button, Label, Paragraph, Section, Link, ErrorMessage, ErrorText } from './styles/signin';

export default function Signin( {children, ...props} ) {
    return (
        <Background>
            {children}
        </Background>
    )
}

Signin.Container = function SigninContainer({children, ...props}) {
    return <Container {...props}> {children} </Container>
}

Signin.Title = function SigninTitle( {children, ...props}) {
    return <Title {...props}>{children}</Title>
}

Signin.Form = function SigninForm( {children, ...props}) {
    return <Form {...props}> {children} </Form>
}

Signin.Input = function SigninInput( {...props}) {
    return <Input {...props} />
}
Signin.Label = function SigninLabel({ children, ...props}) {
   return <Label {...props}> {children} </Label>
}
Signin.Button = function SigninButton( {children, ...props}) {
    return <Button {...props}> {children} </Button>
}

Signin.Section = function SigninSection({children, ...props}) {
    return <Section {...props}> {children} </Section>
}

Signin.Paragraph = function SigninParagraph( {children, ...props}) {
    return <Paragraph {...props}> {children} </Paragraph>
}
Signin.Link = function SinginLink({children, ...props}) {
    return <Link{...props}> {children} </Link>
}
Signin.ErrorMessage = function SinginErrorMessage( { children , ...props}) {
    return <ErrorMessage{...props}> { children } </ErrorMessage>
}

Signin.ErrorText = function SinginErrorText( { children , ...props}) {
    return <ErrorText{...props}> { children } </ErrorText>
}