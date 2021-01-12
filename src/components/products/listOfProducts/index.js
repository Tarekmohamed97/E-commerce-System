import React, { Component } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./listOfProducts.css";
import wallImage from '../../../images/ceramicwall1.jpg';
import woodImage from '../../../images/ceramicwood2.jpg'

export default class ListOfProducts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }    

    

    render() {

        let sliderSettings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
          };
        let {listOfProducts} = this.props;

        function SampleNextArrow(props) {
            const { className, style, onClick } = props;
            return (
              <div
                className={className}
                style={{ ...style, display: "block", color: "black", marginLeft: '50px'}}
                onClick={onClick}
              />
            );
          }
          
          function SamplePrevArrow(props) {
            const { className, style, onClick } = props;
            return (
              <div
                className={className}
                style={{ ...style, display: "block", color: "black" }}
                onClick={onClick}
              />
            );
          }

        return (
            <div>
                <div className = "collections_section">
                    <div className = "subHeading__section">Wall Collections</div>
                    <div className = "discriptionButtons_section">
                        <div className = "discriptionText_section">Find everything from beautiful canvas art clocks and wall decals to seasonal decortions</div>
                        <div>
                            <button className = "widthChoosingButton">30x60cm</button>
                            <button className = "widthChoosingButton">30x90cm</button>
                            <button className = "widthChoosingButton">30x120cm</button>
                            <button className = "widthChoosingButton">30x60cm</button>
                        </div>
                    </div>
                    <div style = {{marginTop: '3rem'}}>
                        <div style = {{fontSize: '220%'}}>30x60cm</div>
                        <div style = {{fontSize: '170%', fontWeight: 'lighter', color: "rgb(48, 48, 48)"}}>Wall Collections</div>
                    </div>
                </div>
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
                                    <h4 style = {{direction: 'ltr'}}>{productPath === "/" ?  "/CERAMIC" : productPath }</h4>
                                    <img className = "productImage" src = {wallImage} alt = "floor" />
                                    <button className = "viewCollectionProduct__button">View Collections</button>
                                </div>
                            )
                        })
                    }
                    </Slider>
                </div>
                <hr style = {{color: "gray", height: '1px', width: '70%'}}></hr>
                <div className = "collections_section">
                    <div className = "subHeading__section">Wood Collections</div>
                    <div className = "discriptionButtons_section">
                        <div className = "discriptionText_section">Find everything from beautiful canvas art clocks and wall decals to seasonal decortions</div>
                        <div>
                            <button className = "widthChoosingButton">16x60cm</button>
                            <button className = "widthChoosingButton">14x48cm</button>
                            <button className = "widthChoosingButton">14x114cm</button>
                        </div>
                    </div>
                    <div style = {{marginTop: '3rem'}}>
                        <div style = {{fontSize: '220%'}}>16x60cm</div>
                        <div style = {{fontSize: '170%', fontWeight: 'lighter', color: "rgb(48, 48, 48)"}}>Wood Collections</div>
                    </div>
                </div>
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
                                    <h4 style = {{direction: 'ltr'}}>{productPath === "/" ?  "/CERAMIC" : productPath }</h4>
                                    <img className = "productImage" src = {woodImage} alt = "wood" />
                                    <button className = "viewCollectionProduct__button">View Collections</button>
                                </div>
                            )
                        })
                    }
                    </Slider>
                </div>
                <hr style = {{color: "gray", height: '1px', width: '70%'}}></hr>
                <div className = "collections_section">
                    <div className = "subHeading__section">Floor Collections</div>
                    <div className = "discriptionButtons_section">
                        <div className = "discriptionText_section">Find everything from beautiful canvas art clocks and wall decals to seasonal decortions</div>
                        <div>
                            <button className = "widthChoosingButton">Matt</button>
                            <button className = "widthChoosingButton">Glory</button>
                            <button className = "widthChoosingButton">Rustic</button>
                            <button className = "widthChoosingButton">satin</button>
                        </div>
                    </div>
                    <div style = {{marginTop: '3rem'}}>
                        <div style = {{fontSize: '220%'}}>Rustic</div>
                        <div style = {{fontSize: '170%', fontWeight: 'lighter', color: "rgb(48, 48, 48)"}}>Floor Collections</div>
                    </div>
                </div>
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
                                    <h4 style = {{direction: 'ltr'}}>{productPath === "/" ?  "/CERAMIC" : productPath }</h4>
                                    <img className = "productImage" src = {woodImage} alt = "wood" />
                                    <button className = "viewCollectionProduct__button">View Collections</button>
                                </div>
                            )
                        })
                    }
                    </Slider>
                </div>
            </div>
        )
    }
}
