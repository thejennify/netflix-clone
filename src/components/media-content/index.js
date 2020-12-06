import React from 'react';
import {Container, Banner, Title, Subtitle, Button, ImageWrapper, BannerTitle, ImageContainer, Image, Video} from './styles/content'

export default function MediaContent({children, ...props}) {
    return (
        <Container {...props}>
            {children}
        </Container>
    )
}

MediaContent.Banner = function MediaContentBanner({children, ...props}) {
    return <Banner {...props}>{children}</Banner>
}
MediaContent.BannerTitle = function MediaContentBannerTitle({children, ...props}) {
    return <BannerTitle {...props}>{children}</BannerTitle>
}

MediaContent.Title = function MediaContentTitle({children, ...props}) {
    return <Title {...props}> {children} </Title>
}

MediaContent.Subtitle = function MediaContentSubtitle({children, ...props}) {
    return <Subtitle {...props}> {children} </Subtitle>
}

MediaContent.Button = function MediaContentButton({children, ...props}) {
    return <Button {...props}> {children} </Button>
}

MediaContent.ImageWrapper = function MediaContentImageWrapper({children, ...props}) {
    return <ImageWrapper {...props}> {children} </ImageWrapper>
}
MediaContent.ImageContainer = function MediaContentImageContainer({children, ...props}) {
    return <ImageContainer {...props}> {children} </ImageContainer>
}
MediaContent.Image = function MediaContentImageContainer({ ...props}) {
    return <Image {...props}/>  
}

MediaContent.Video = function MediaContentVideo({ ...props}) {
    return <Video {...props}>  </Video>
}