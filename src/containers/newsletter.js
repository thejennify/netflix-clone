import React from 'react';
import { Newsletter } from '../components'

export default function NewsletterContainer({value}) {
    return (
        <Newsletter>
            <Newsletter.Title>Ready to watch? Enter your email to create or restart your membership.
            </Newsletter.Title>
            <Newsletter.Div>
                <Newsletter.Input />
                <Newsletter.Button >{value}</Newsletter.Button>
            </Newsletter.Div>
        </Newsletter>
    )
}
