import React, { useState, useContext, createContext } from 'react';
import { Wrapper, Category, Row, Container, Card, Image, MetaContainer, IconRow, Icon , Modal, ImageModal, MetaRow, Metadata, Mood } from './styles/sliders';

export const SliderContext = createContext();

export default function Slider({children, ...props}) {
    return (
            <Wrapper {...props}>
                {children}
            </Wrapper>
    )
}


Slider.Category = function SliderCategory({children, ...props}) {
    return <Category {...props}> { children } </Category>
}

Slider.Row = function SliderRow({children, ...props}) {
    return <Row {...props}> {children} </Row>
}
Slider.Container = function SliderContainer({children, ...props}) {
    return <Container {...props}> {children} </Container>
}

Slider.Card = function SliderCard({ children, ...props}) {
    return <Card {...props}> { children } </Card>
}

Slider.Image = function SliderImage({ children, ...props}) {
    return <Image {...props} /> 
}

Slider.MetaContainer = function SliderMetaContainer({ 
children, ...props}) {
    return <MetaContainer {...props}>  {children} </MetaContainer>
}

Slider.IconRow = function SliderIconRow({ children, ...props}) {
    return <IconRow {...props} >  {children} </IconRow>
}

Slider.Icon = function SliderIcon({ children, ...props}) {
    return <Icon {...props} /> 
}

Slider.Modal = function SliderModal({ children, ...props}) {
    return <Modal {...props} >  {children} </Modal>
}

Slider.ImageModal = function SliderImageModal({ children, ...props}) {
    return <ImageModal {...props} />  
}


Slider.MetaRow = function SliderMetaRow({ children, ...props}) {
    return <MetaRow {...props} >  {children} </MetaRow>
}

Slider.Metadata = function SliderMetadata({ children, ...props}) {
    return <Metadata {...props} >  {children} </Metadata>
}

Slider.Mood = function SliderMood({ children, ...props}) {
    return <Mood {...props} >  {children} </Mood>
}