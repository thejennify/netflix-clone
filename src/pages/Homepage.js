import React from 'react'
import { JumbotronContainer } from '../containers/jumbotron'
import { FooterContainer } from '../containers/footer'; 
import { FaqContainer } from '../containers/faq';
import { BannerContainer } from '../containers/home-banner';

export default function Homepage() {
    return (
        <div>
        <BannerContainer />
        <JumbotronContainer />
        <FaqContainer />
        <FooterContainer /> 
        </div>
    )
}
