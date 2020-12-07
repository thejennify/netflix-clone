import React from 'react';
import { Slider } from '../components';

export default function SliderContainer({ data }) {
    const {movies, series} = data;
    return (
       
        <Slider>
            {movies.map(movie => ( 
                <div key={`${movie.title.toLowerCase()}`}>
                    <Slider.Category> {movie.title} </Slider.Category> 
                    <Slider.Row>
                        <Slider.Container>
                        {movie.data.map( item => (
                            <div>
                                <Slider.Card key={item.docId}>
                                    <Slider.Image src={`/images/movies/${movie.title}/${item.slug}/small.jpg`}/>
                                </Slider.Card>
                                <Slider.MetaContainer>
                                    <Slider.IconRow>
                                        <Slider.Icon />
                                    </Slider.IconRow>
                                    <Slider.MetaRow>
                                        <Slider.MetaData>
                                        </Slider.MetaData>
                                        <Slider.Mood>Chill, mood</Slider.Mood>
                                    </Slider.MetaRow>
                                </Slider.MetaContainer>
                            </div>
                        ))}
                        </Slider.Container>
                    </Slider.Row>
                </div>
            ))}
        </Slider>
        
    )
}

