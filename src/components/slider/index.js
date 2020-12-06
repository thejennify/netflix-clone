import React from 'react';
import { Wrapper, Category, ImageContainer, Image } from './styles/sliders';

export default function Slider({children, ...props}) {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

Slider.Category = function SliderCategory({children, ...props}) {
    return <Category {...props}> { children } </Category>
}

Slider.ImageContainer = function SliderImageContainer({children, ...props}) {
    return <ImageContainer {...props}> {children} </ImageContainer>
}

Slider.Image = function SliderImage({ ...props}) {
    return <Image {...props}/>
}