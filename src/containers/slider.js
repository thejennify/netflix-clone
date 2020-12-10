import React, { useState } from 'react';
import { Slider } from '../components';
import CardContainer from './slider-card';

export default function SliderContainer({ data }) {
    const {movies, series} = data;
   
    return (
            <Slider>
                {movies.map(movie => ( 
                    <div key={`${movie.title.toLowerCase()}`}>
                        <Slider.Category> {movie.title} </Slider.Category> 
                        <CardContainer contentData={movie}/>
                    </div>
               ))} 
            </Slider>
        
    )
}

