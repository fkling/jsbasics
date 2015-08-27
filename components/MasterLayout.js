import React from 'react';
import TOC from './TOC';
import NavigationButtons from './NavigationButtons';

/**
 * The master layout specifies the different parts of the page, e.g. the
 * progress bar. The current slide is passed as child to it.
 */
export default class MasterLayout {
  render() {
    let slide = this.props.slides[this.props.slideIndex];
    let {className, children, ...props} = this.props;
    return (
      <div id="page" className={className}>
        <TOC {...props} />
        <div id="main" className="flex-column">
          {slide.__path__ ?
            <div
              role="region"
              aria-label="File path of current slide"
              className="__exerslide__file_path flex-item-fix">
              File path: {slide.__path__}
            </div> :
            null
          }
          {children}
          <NavigationButtons
            className="flex-item-fix"
            slideIndex={this.props.slideIndex}
            numberOfSlides={this.props.slides.length}
          />
        </div>
      </div>
    );
  }
};

MasterLayout.propTypes = {
  /**
   * The index of the current slide
   */
  slideIndex: React.PropTypes.number,

  /**
   * All slides
   */
  slides: React.PropTypes.array,

  /**
   * CSS class names to add to the page.
   */
  className: React.PropTypes.string,
};

