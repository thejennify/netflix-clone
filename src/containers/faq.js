import React from 'react';
import { Faq } from '../components';
import faqData from '../fixtures/faqs.json';
import  NewsletterContainer  from './newsletter';

export function FaqContainer() {
    return ( 
        <Faq>
            <Faq.Frame>
                <Faq.Title>
                 Frequently Asked Questions 
                </Faq.Title>
                {faqData.map(faq =>
                    <Faq.Item key={faq.id}>
                        <Faq.Header> {faq.header} </Faq.Header>
                        <Faq.Body> {faq.body} </Faq.Body>
                    </Faq.Item>
                )}
            </Faq.Frame>
            <NewsletterContainer value="get started">
            </NewsletterContainer>
        </Faq>
    );
}
