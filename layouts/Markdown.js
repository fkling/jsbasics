import React from 'react';
import Markdown from 'exerslide/components/Markdown';

export default class MarkdownSlide extends React.Component {
  static getClassNames() {
    return 'markdown';
  }

  render() {
    return <Markdown value={this.props.content} />;
  }
};

MarkdownSlide.propTypes = {
  content: React.PropTypes.string,
};
