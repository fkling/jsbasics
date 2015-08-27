import Markdown from 'exerslide/components/Markdown';
import React from 'react';
import {normalizeImageData, isPath, isImageObject} from 'exerslide/js/imageDataHelper';

function renderColumn(data) {
  let child;
  let isImage;
  if (isImageObject(data) || isPath(data)) {
    let imageObject = normalizeImageData(data);
    isImage = !!imageObject;
    child = <img {...imageObject} />;
  } else {
    child = <Markdown value={data} />;
  }

  return (
    <div className={'TwoColumn-column' + (isImage ? ' TwoColumn-image' : '')}>
      {child}
    </div>
  );
}

/**
 * This layout renders two columns of text / images.
 * @css css/TwoColumn.css
 */
export default class TwoColumn {
  render() {
    const {left, right} = this.props.layoutData;
    return (
      <div className="TwoColumn-wrapper">
        {renderColumn(left)}
        {renderColumn(right)}
      </div>
    );
  }
}
