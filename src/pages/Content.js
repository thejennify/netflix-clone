import React from 'react';
import Slider from '../containers/slider';
import dataSelection from '../utils/data';
import { useData } from '../hooks';
import  MediaBanner  from '../containers/mediaBanner';
import { MediaContent } from '../components';
import { FooterContainer } from '../containers/footer'; 


export default function ContentPage() {
const { series } = useData('series');
const { movies } = useData('movies');
const data = dataSelection(movies, series);

    return (
        <MediaContent>
            <MediaBanner />
            <Slider data={data} />
            <FooterContainer />
        </MediaContent>
    )
}
