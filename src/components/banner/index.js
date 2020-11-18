import React from 'react';
import { Background, Overlay, Container, Navbar, Title, SubTitle, Inner, Button, Paragraph } from './styles/banner';

export default function Banner({ children, ...props}) {
    return (
        <Background>
            <Overlay>
                <Container>
                {children}
                </Container>
            </Overlay>
        </Background>
    )
}
Banner.Inner = function BannerInner({ children, ...props}) {
    return(
        <Inner {...props}> {children} </Inner>
    )
}
Banner.Navbar = function BannerNavbar({ children, ...props}) {
    return( 
        <Navbar {...props}> <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netlix logo"/>
        {children}
        </Navbar>
    )
}

Banner.Button = function BannerButton({ children, ...props }) {
    return <Button {...props}> {children} </Button>
}

Banner.Title = function BannerTitle({
    children, ...props
}) {
    return <Title {...props}> {children} </Title>
}
Banner.SubTitle = function BannerSubTitle({ children, ...props }) {
    return <SubTitle {...props}> {children}</SubTitle>

}

Banner.Paragraph = function BannerParagraph({ children, ...props}) {
    return <Paragraph {...props}> {children} </Paragraph>
}
