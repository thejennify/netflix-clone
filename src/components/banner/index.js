import React from 'react';
import { Background, Overlay, Container, Title, SubTitle, Inner, Paragraph } from './styles/banner';

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
