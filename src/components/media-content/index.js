import React from 'react';
import { Container } from './styles/content'

export default function MediaContent({children, ...props}) {
    return (
        <Container {...props}>
            {children}
        </Container>
    )
}

