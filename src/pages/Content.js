import React from 'react';
import ProfileContent from '../containers/mediaContent';
import dataSelection from '../utils/data';
import { useData } from '../hooks';

export default function ContentPage() {
const { series } = useData('series');
const { movies } = useData('movies');
const data = dataSelection(movies, series);

    return (
        <ProfileContent data={data} />
    )
}
