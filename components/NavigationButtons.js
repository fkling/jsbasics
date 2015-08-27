import React from 'react';
import {nextSlide, previousSlide} from 'exerslide/js/navigation';

/**
 * @css ../css/navigationButtons.css
 */
export default class NavigationButtons {
  render() {
    return (
      <div
        role="navigation"
        id="navigation-buttons"
        className={this.props.className}
        aria-label="Slide">
        <button
          type="button"
          aria-label="previous"
          onClick={previousSlide}
          disabled={this.props.slideIndex === 0}>
          <i className="fa fa-arrow-left"></i>
        </button>
        <button
          type="button"
          aria-label="next"
          onClick={nextSlide}
          disabled={this.props.slideIndex + 1 === this.props.numberOfSlides}>
          <i className="fa fa-arrow-right"></i>
        </button>
      </div>
    );
  }
}

NavigationButtons.propTypes = {
  /**
   * This index of the current slide.
   */
  slideIndex: React.PropTypes.number.isRequired,
  /**
   * Number of slides.
   */
  numberOfSlides: React.PropTypes.number.isRequired,
};

