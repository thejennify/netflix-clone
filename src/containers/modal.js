import React from 'react';
import { Slider } from '../components';

export default function Modal({data}) {
    return (
        <Slider.Modal>
            <Slider.ImageModal src={`/images/movies/${data.genre}/${data.slug}/large.jpg`}/>
            <Slider.MetaContainer>
                <Slider.IconRow>
                        <Slider.Icon border='false'> <img src='/images/icons/arrow.svg' alt='play'/></Slider.Icon> 
                        <Slider.Icon > <img src='/images/icons/add.png' alt='add'/></Slider.Icon> 
                        <Slider.Icon > <img src='/images/icons/thumbs-up.svg' alt='like'/></Slider.Icon> 
                        <Slider.Icon > <img src='/images/icons/thumbs-down.svg' alt='dislike'/></Slider.Icon> 
                </Slider.IconRow>
                <Slider.MetaRow>
                    <Slider.Metadata rating='true'> 
                        { data.rating ? `${data.rating}% Match`: 'New'}
                    </Slider.Metadata>
                    <Slider.Metadata margin='true'> 
                        {`PG-${data.maturity}`}
                    </Slider.Metadata>
                    <Slider.Metadata>
                        {`${data.duration}`}
                    </Slider.Metadata>
                </Slider.MetaRow>
                <Slider.Metadata>{`${data.genre}`}</Slider.Metadata>
            </Slider.MetaContainer>
        </Slider.Modal>
    )
}