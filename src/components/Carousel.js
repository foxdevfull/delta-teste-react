
import slideOne from '../assets/slide1.png'
import slideTwo from '../assets/slide2.png'
import slideThree from '../assets/slide3.png'
import React from 'react';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import SearchIcon from '@material-ui/icons/Search';

const MyCarousel = () => (
    <Carousel

        plugins={['arrows']} >
        <img src={slideOne} />
        <img src={slideTwo} />
        <img src={slideThree} />
    </Carousel>
);

export default MyCarousel;