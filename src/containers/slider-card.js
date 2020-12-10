import React from 'react';

import { Slider } from '../components';
import Modal from './modal';


export default function CardContainer({contentData}) {

    return (
        <Slider.Row>
            <Slider.Container>
                {contentData.data.map( item => (
                        <Slider.Card key={item.docId}>
                            <Slider.Image src={`/images/movies/${contentData.title}/${item.slug}/small.jpg`} alt={item.title}/>
                            <Modal data={item}/>
                        </Slider.Card>
                ))}
            </Slider.Container>
        </Slider.Row>
    )
}