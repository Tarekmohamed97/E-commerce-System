import React, { Component } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./listOfProducts.css"

export default class ListOfProducts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }    

    handleShowingCards = (listOfProducts) => {
        listOfProducts.map(product => {
            return(<div>
                <h2>{product.name}</h2>
            </div>
            )
        }
        )
        
    }

    render() {

        let sliderSettings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
          };
        let {listOfProducts} = this.props;
        return (
            <div className = "sliderContainer__Section">
                <Slider {...sliderSettings}>
                {
                    listOfProducts.map((product) => {
                        let productPath = ""
                        product.tags.forEach(tag => {
                            productPath += "/" + tag 
                        });
                        return (
                            <div className = "singleProductCard__Section">
                                <h2>{product.name}</h2>
                                <h4>{productPath}</h4>
                            </div>
                        )
                    })
                }
                </Slider>
            </div>
        )
    }
}
