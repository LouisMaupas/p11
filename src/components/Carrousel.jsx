import React, { Component } from 'react'
// style sheet
import '../Styles/components/_carrousel.scss'
//img
import arrowLeft from '../img/arrow_left.png';
import arrowRight from '../img/arrow_right.png';

export default class Carrousel extends Component {
    
    constructor(props){
        super(props)
        this.state={
            index: 0, 
            images : []
        }
    }

    /**
     * Get images from props and set state with.
     */
    componentDidMount() {
        this.setState({images:this.props.images})
    }


    /**
     * Manages carrousel arrows so that they can scroll the images 
     * @param {*} e 
     */
    moveSlide(e, direction) {
         e.preventDefault();
         let index = this.state.index;
         let carrouselGallery = this.props.images;
         let galleryLength = carrouselGallery.length - 1;
         // case : next
         if(direction === 'next') {
             if(index === galleryLength - 1) {
                  this.setState({index: 0})
              } else {
                  this.setState({index: index + 1})
              } 
         // case : previous     
         } else {
             if(index < 1) {
                 this.setState({index: galleryLength})
             } else {
                 this.setState({index: index - 1})
             }
         }
    }

    render() {
        const images = this.props.images
        return (
            <div className='carrousel mb-2'>
                     {images ? 
                        images.map((pic, i) =>
                        i === this.state.index ?
                            <div className='slides' key={i}>
                                {images.length === 1 ? <div></div> : 
                                <div>
                                    <div onClick={(e) => {this.moveSlide(e, 'previous')}} className='carrousel-left carrousel-arrows'><img key={'arrow-left-img-'+i} src={arrowLeft} alt='carrousel'/></div>
                                    <div onClick={(e) => {this.moveSlide(e, 'next')}} className='carrousel-right carrousel-arrows'><img key={'arrow-left-img-'+i} src={arrowRight} alt='carrousel' /></div>
                                </div>  
                                }
                                <img className='carrousel-img slide' src={pic} alt='banner' />
                            </div>  
                            : null
                        )
                        : <div>Erreur pas de réseau internet.</div>
                    } 
            </div>
        )
    }
}

