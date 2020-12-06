import React from 'react';
import { Slider } from '../components';
import MediaBanner from './mediaBanner';

export default function MediaContent({ data }) {
    const {movies, series} = data;
    console.log(movies.movie);
    return (
        <div>
            <MediaBanner/>
            {movies.map(movie => ( <Slider>
                <Slider.Category> {movie.title}</Slider.Category> 
                <Slider.ImageContainer>
                    <Slider.Image src={`/images/movies/${movie.title}/${movie.data.title}/small.jpg`}/>
                </Slider.ImageContainer>
            </Slider>))}
        </div>
        
    )
}

