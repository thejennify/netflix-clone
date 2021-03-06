import React from 'react';
import { Background, Overlay, DescriptionContainer, Group, Title, Subtitle, Button } from './styles/header';


export default function Header({ children, ...props }) {
    return (
        <Background {...props}>
          { children }  
        </Background>
    )
}

Header.Overlay = function HeaderOverlay({children, ...props}) {
    return <Overlay {...props}> {children} </Overlay>
}

Header.DesciptionContainer = function HeaderDesciptionContainer({children, ...props}) {
    return <DescriptionContainer {...props}> {children} </DescriptionContainer>
}

Header.Group = function HeaderTitle({ children, ...props}) {
    return <Group {...props}> {children} </Group>
}

Header.Title = function HeaderTitle({ children, ...props}) {
    return <Title {...props}> {children} </Title>
}

Header.Subtitle = function HeaderSubtitle({ children, ...props}) {
    return <Subtitle {...props}> {children} </Subtitle>
}
Header.Button = function HeaderButton({ children, ...props}) {
    return <Button {...props}> {children} </Button>
}