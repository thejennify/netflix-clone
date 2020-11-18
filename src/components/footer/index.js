import React from 'react';
import { Container, Column, Link, Title, Text, Row } from './styles/footer';

export default function Footer({children, ...props}) {
    return (
        <Container {...props}>
            {children}
        </Container>
    )
}

Footer.Column = function FooterColumn({children, ...props }) {
    return <Column {...props}> {children} </Column>
}

Footer.Link = function FooterLink({ children, ...props }) {
    return <Link {...props}> {children} </Link>
}

Footer.Title = function FooterTitle({ children, ...props }) {
    return <Title {...props}> {children} </Title>
}

Footer.Text = function FooterText({ children, ...props }) {
    return <Text {...props}> {children} </Text>
}

Footer.Row = function FooterRow({ children, ...props }) {
    return <Row {...props}> {children} </Row>
}