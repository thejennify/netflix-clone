import React from 'react';
import { Slider } from '../components';

export default function Modal({data}) {
    return (
        <Slider.Modal>
            <Slider.ImageModal src={`/images/movies/${data.genre}/${data.slug}/large.jpg`}/>
            <Slider.MetaContainer>
                <Slider.IconRow>
                    <div>
                        <Slider.Icon border='false' src='/images/icons/arrow.svg' />
                        <Slider.Icon src='/images/icons/add.png' />
                        <Slider.Icon src='/images/icons/thumbs-up.svg' />
                        <Slider.Icon src='/images/icons/thumbs-down.svg' />
                    </div>
                    <Slider.Icon src='/images/icons/thumbs-down.svg'/>
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