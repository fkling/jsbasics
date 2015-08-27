import React from 'react';

function whitespace(n) {
  let s = '';
  while (s.length < n) {
    s += ' ';
  }
  return s;
}

export default class __ExerslideError__ {
  static getClassNames() {
    return '__error__';
  }

  render() {
    let {error, source, filePath} = this.props.layoutData;
    let {problem_mark: mark} = error; // eslint-disable-line camelcase
    return (
      <div>
        <p>The slide <code>{filePath}</code> could not be parsed:</p>
        <pre className="alert-danger">
          {error.problem}<br/><br />
          {mark.buffer
            .split('\n')
            .slice(0, mark.line + 1)
            .join('\n')
          }<br/>
          {whitespace(mark.column) + '^'}
        </pre>
        <h2>Full source</h2>
        <pre>{source}</pre>
      </div>
    );
  }
};
