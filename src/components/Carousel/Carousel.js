import React, { Component } from 'react'
import ImageSlide from './ImageSlide/ImageSlide'
import Arrow from './Arrow/Arrow'
import Pagination from './Pagination/Pagination'

import '../../styles/carousel.css'


class Carousel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentImageIndex: 0
    }

    this.imgUrls = [
      "https://images.pexels.com/photos/1400026/pexels-photo-1400026.jpeg?cs=srgb&dl=abandoned-adult-architecture-1400026.jpg&fm=jpg", 
      "https://images.pexels.com/photos/1391379/pexels-photo-1391379.jpeg?cs=srgb&dl=african-descent-american-blond-hair-1391379.jpg&fm=jpg",
      "https://images.pexels.com/photos/1048039/pexels-photo-1048039.jpeg?cs=srgb&dl=blue-sky-clouds-countryside-1048039.jpg&fm=jpg",
      "https://images.pexels.com/photos/681347/pexels-photo-681347.jpeg?cs=srgb&dl=aerial-aerial-view-architecture-681347.jpg&fm=jpg",
      "https://images.pexels.com/photos/1125048/pexels-photo-1125048.jpeg?cs=srgb&dl=bed-bedroom-book-1125048.jpg&fm=jpg"
    ]
  }

  previousSlide = () => {
    const lastIndex = this.imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index
    });
  }

  nextSlide = () => {
    const lastIndex = this.imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index
    });
  }

  render() { 
    return (
      <div className="carousel">
        <Arrow
          direction="left"
          clickFunction={ this.previousSlide }
          glyph="&#9664;" />

        <div>
          <ImageSlide url={ this.imgUrls[this.state.currentImageIndex] } />
          <ImageSlide url={ this.imgUrls[this.state.currentImageIndex] } />
          <ImageSlide url={ this.imgUrls[this.state.currentImageIndex] } />

        </div>

        <Arrow
          direction="right"
          clickFunction={ this.nextSlide }
          glyph="&#9654;" />
      </div>
    )
  }
}
 
export default Carousel