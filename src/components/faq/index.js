import React, { useState, useContext, createContext } from 'react';
import { Container, Inner, Frame, Title, Item, Header, Body } from './styles/faq';

const ToggleContext = createContext();

export default function Faq({children, ...props}) {
    return (
        <Container {...props}>
            <Inner> {children} </Inner>
        </Container>
    )
}

Faq.Title = function FaqTitle({ children, ...props }) {
    return <Title {...props}> {children} </Title>
}

Faq.Frame = function FaqFrame({ children, ...props}) {
    return <Frame {...props}> {children} </Frame>
}

Faq.Item = function FaqItem({children, ...props}) {
    const [toggleShow, setToggleShow] = useState(false);

    return ( 
        <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
            <Item {...props}> {children} </Item>
        </ToggleContext.Provider>
        );
}

Faq.Header = function FaqHeader({ children, ...props }) {
    const { toggleShow, setToggleShow } = useContext(ToggleContext);
    return (
        <Header 
        onClick={() => setToggleShow( toggleShow => !toggleShow)} {...props}> 
            {children} 
            {toggleShow ? <img src="/images/icons/close-slim.png" alt="close"/> : <img src="/images/icons/add.png" alt="open" />
            }
        </Header>
    );
}

Faq.Body = function FaqBody({ children, ...props }) {
    const { toggleShow } = useContext(ToggleContext);

    return toggleShow ? <Body {...props}> {children} </Body> : null;

}