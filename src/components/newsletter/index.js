import React from 'react';
import { Item, Title, Button, Input, Form} from './styles/newsletter';

export default function Newsletter({children, ...props}) {
    return (
        <Item>
            {children}
        </Item>
    );
}

Newsletter.Title = function NewsletterTitle({ children, ...props }) {
    return <Title {...props}> {children} </Title>
}

Newsletter.Input = function NewsletterInput({ ...props }) {
    return <Input {...props} placeholder="Email address" />
}

Newsletter.Form = function NewsletterForm({children, ...props}) {
    return <Form {...props}>{children}</Form>
}

Newsletter.Button = function NewsletterButton({ children, ...props }) {
    return (
        <Button {...props}>
         {children} <img src="../../images/icons/chevron-right.png" alt="move forward"/> 
         </Button>
    );
}