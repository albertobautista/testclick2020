import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import images from '../Carousel/data/images'
var Carousel = require('react-responsive-carousel').Carousel;


class CarouselComp extends Component {
    render() {
        return (
            <Grid centered>
                <Grid.Column width={14}>
                    <Carousel 
                    width="100%" 
                    infiniteLoop={true} 
                    autoPlay={true} 
                    interval={5000} 
                    showIndicators={false} 
                    showThumbs={false} 
                    transitionTime={1000}
                    showStatus={false}>
                        {images.map(image =>
                            <div> <img src={image.url} /></div>
                        )}

                    </Carousel>
                </Grid.Column>
            </Grid>

        )
    }
}

export default CarouselComp;