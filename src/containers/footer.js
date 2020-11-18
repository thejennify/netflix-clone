import React from 'react';
import { Footer } from '../components';

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Title> Questions? Call 1-844-542-4813</Footer.Title>
            <Footer.Row>
                <Footer.Column>
                    <Footer.Link href="#">FAQ</Footer.Link>
                    <Footer.Link href="#">Investor Relations</Footer.Link>
                    <Footer.Link href="#">ways to watch</Footer.Link>
                    <Footer.Link>coorporate information</Footer.Link>
                    <Footer.Link href="#"> Netflix originals</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#"> Help center</Footer.Link>
                    <Footer.Link href="#"> jobs</Footer.Link>
                    <Footer.Link href="#">terms of use</Footer.Link>
                    <Footer.Link href="#">contact us</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">account</Footer.Link>
                    <Footer.Link href="#">Reedem gift cards</Footer.Link>
                    <Footer.Link href="#">privacy</Footer.Link>
                    <Footer.Link href="#"> speed test</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">media center</Footer.Link>
                    <Footer.Link href="#"> buy gift card</Footer.Link>
                    <Footer.Link href="#">cookie preferences</Footer.Link>
                    <Footer.Link href="#">legal notices</Footer.Link>
                </Footer.Column>
            </Footer.Row>
        </Footer>
    );
}
