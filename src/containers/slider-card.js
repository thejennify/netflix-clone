import React from 'react';

import { Slider } from '../components';
import Modal from './slider-metadata';


export default function CardContainer({contentData}) {

    return (
        <Slider.Row>
            <Slider.Container>
                {contentData.data.map( item => (
                    <div>
                        <Slider.Card key={item.docId}>
                            <Slider.Image src={`/images/movies/${contentData.title}/${item.slug}/small.jpg`}/>
                            <Modal data={item}/>
                        </Slider.Card>
                    </div>
                ))}
            </Slider.Container>
        </Slider.Row>
    )
}