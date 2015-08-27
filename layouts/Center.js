import Markdown from 'exerslide/components/Markdown';
import React from 'react';
import {normalizeImageData} from 'exerslide/js/imageDataHelper';

/**
 * Layout that centers its content
 * @css css/Center.css
 */
export default class Center {
  render() {
    let {layoutData: {image}, content} = this.props;
    let style = {};
    let child = <Markdown value={this.props.content} />;
    image = normalizeImageData(image);
    if (image && content) {
      // image becomes background image
      style.background = `no-repeat center url("${image.src}")`;
    } else if (image) {
      child = <img src={image.src} alt={image.alt || ''} />;
    }
    return (
      <div className="Center-wrapper" style={style}>
        {child}
      </div>
    );
  }
}
