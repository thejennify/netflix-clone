import React from 'react';
import { Banner } from '../components/';
import  NewsletterContainer  from './newsletter';

export  function BannerContainer() {
    const signIn = () => {
        alert("button has been clicked")
    }

    return (
        <Banner>
            <Banner.Navbar> 
                <Banner.Button onClick={signIn}> sign in </Banner.Button> 
            </Banner.Navbar>
            <Banner.Inner>
                <Banner.Title> 100% entertainment.
                <br/> Pay for 1 month, get 1 month free. 
                </Banner.Title>
                <Banner.SubTitle>Watch anywhere. Cancel anytime</Banner.SubTitle>
                <NewsletterContainer value='get 1 month free'/>
                <Banner.Paragraph> Only new members are eligible for this offer. </Banner.Paragraph>
            </Banner.Inner>
        </Banner>
    )
}
