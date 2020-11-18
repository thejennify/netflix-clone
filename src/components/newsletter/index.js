import React from 'react';
import { Item, Title, Button, Input, Div} from './styles/newsletter';

export default function Newsletter({children, ...props}) {
    return (
        <form>
            {children}
        </form>
    );
}

Newsletter.Item = function NewsletterItem({ children, ...props }) {
    return <Item {...props}> {children} </Item>
}

Newsletter.Title = function NewsletterTitle({ children, ...props }) {
    return <Title {...props}> {children} </Title>
}

Newsletter.Input = function NewsletterInput({ ...props }) {
    return <Input {...props} placeholder="Email address" />
}

Newsletter.Div = function NewsletterDiv({ ...props}) {
    return <Div {...props}></Div>
}

Newsletter.Button = function NewsletterButton({ children, ...props }) {
    return (
        <Button {...props}>
         {children} <img src="../../images/icons/chevron-right.png" alt="move forward"/> 
         </Button>
    );
}