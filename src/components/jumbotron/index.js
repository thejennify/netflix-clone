import React from 'react';
import { Main, Inner, Container, Title, SubTitle, Image, Pane } from './styles/jumbotron';

export default function Jumbotron({ 
    children, 
    direction ='row', 
    ...props 
}) {
    return (
        <Main {...props}>
            <Inner direction={direction}>{children}</Inner>
        </Main>
    )
}

//compound component

Jumbotron.Container = function JumbotronContainer({ children, ...props }) {
    return <Container {...props}> {children} </Container>
}

Jumbotron.Title = function JumbotronTitle({ children, ...props}) {
    return <Title {...props}> {children} </Title>
}

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...props}) {
    return <SubTitle {...props}> {children} </SubTitle>
}

Jumbotron.Image = function JumbotronImage({ children, ...props}) {
    return <Image {...props} />  
}
Jumbotron.Pane = function JumbotronPane({ children, ...props}) {
    return <Pane {...props}> {children}</Pane>
}