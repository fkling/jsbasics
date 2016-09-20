'use strict';

import React from 'react';
import abstractEqualityComparison from './abstractEqualityComparison';

const algorithmSteps = [
  [1, 'If <code>Type(x)</code> is the same as <code>Type(y)</code>, then'],
  ['1.a', 'Return the result of performing Strict Equality Comparison <code>x === y</code>.', true],
  [2, 'If <code>x</code> is <strong>null</strong> and <code>y</code> is <strong>undefined</strong>, return <strong>true</strong>'],
  [3, 'If <code>x</code> is <strong>undefined</strong> and <code>y</code> is <strong>null</strong>, return <strong>true</strong>'],
  [4, 'If <code>Type(x)</code> is Number and <code>Type(y)</code> is String, return the result of the comparison <code>x == ToNumber(y)</code>.'],
  [5, 'If <code>Type(x)</code> is String and <code>Type(y)</code> is Number, return the result of the comparison <code>ToNumber(x) == y</code>.'],
  [6, 'If <code>Type(x)</code> is Boolean, return the result of the comparison <code>ToNumber(x) == y</code>.'],
  [7, 'If <code>Type(y)</code> is Boolean, return the result of the comparison <code>x == ToNumber(y)</code>.'],
  [8, 'If <code>Type(x)</code> is either String, Number, or Symbol and <code>Type(y)</code> is Object, return the result of the comparison <code>x == ToPrimitive(y)</code>.'],
  [9, 'If <code>Type(x)</code> is Object and <code>Type(y)</code> is either String, Number, or Symbol, return the result of the comparison <code>ToPrimitive(x) == y</code>.'],
  [10, 'Return <strong>false</strong>.'],
];


export default class LooseComparison extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      examples: props.examples,
      selectedExample: -1,
      left: '42',
      right: '"42"',
      iterations: [],
    };

    this._updateLeft = this._updateLeft.bind(this);
    this._updateRight = this._updateRight.bind(this);
    this._compare = this._compare.bind(this);
    this._selectExample = this._selectExample.bind(this);
  }

  _selectExample(event) {
    const selectedExample = event.target.value;
    const {[selectedExample]: [left, right]} = this.state.examples;
    const result = abstractEqualityComparison(
      eval(left),
      eval(right),
    );
    this.setState({
      selectedExample,
      left,
      right,
      iterations: result,
    });
  }

  _updateLeft(event) {
    this.setState({
      left: event.target.value,
      selectedExample: -1,
      iterations: [],
    });
  }

  _updateRight(event) {
    this.setState({
      right: event.target.value,
      selectedExample: -1,
      iterations: [],
    });
  }

  _compare() {
    const result = abstractEqualityComparison(
      eval(`(${this.state.left})`),
      eval(`(${this.state.right})`),
    );
    this.setState({iterations: result});
  }

  render() {
    const {iterations} = this.state;
    let result = null;
    if (this.state.iterations.length > 0) {
      result = iterations[iterations.length - 1][2];
    }
    return (
      <div className="callout">
        <div style={{textAlign: 'center'}}>
          <p>
            <select
              style={{
                width: 'auto',
                padding: 0,
                paddingRight: '1.5rem',
                paddingLeft: '0.2rem',
                margin: 0,
                fontSize: '0.9rem',
              }}
              value={this.state.selectedExample}
              onChange={this._selectExample}>
              <option value={-1}>Select an example...</option>
              {this.state.examples.map(([left, right], i) => (
                <option key={i} value={i}>{left} == {right}</option>
              ))}
            </select>
          </p>
          <p>
            <input
              style={{textAlign:'center'}}
              value={this.state.left}
              onChange={this._updateLeft}
            />
            {' == '}
            <input
              style={{textAlign:'center'}}
              value={this.state.right}
              onChange={this._updateRight}
            />
          </p>
        <button className="primary button" onClick={this._compare}>Compare</button>
        </div>
        <div style={{fontSize: '0.9em'}}>
          {this.state.iterations.map(([comparison, steps], i) => (
            <details key={i}>
              <summary style={{cursor: 'pointer'}}>
                <strong>{comparison}</strong>
              </summary>
              <ul className="comparisonIteration">
                {algorithmSteps.map(([step, description]) => {
                  const style = {
                    color: '#AAA',
                  };
                  const index = steps.indexOf(step);
                  let wasExecuted = index > -1;
                  let wasSuccessful = index === steps.length - 1;
                  let marker;
                  if (wasExecuted) {
                    style.color = '#333';
                    marker =
                      <i
                        style={{color: 'red'}}
                        className="fa fa-times"
                        aria-hidden={true}
                      />;
                  }
                  if (wasSuccessful) {
                    marker =
                      <i
                        style={{color: 'green'}}
                        className="fa fa-check"
                        aria-hidden={true}
                      />;
                  }
                  return (
                    <li
                      style={{...style, position: 'relative', listStyle: 'none'}}
                      key={step}>
                      <span style={{position: 'absolute', left: '-1.2em'}}>
                        {marker}
                      </span>
                      {step}. <span dangerouslySetInnerHTML={{__html: description}} />
                    </li>
                  );
                })}
              </ul>
            </details>
          ))}
        </div>
        {result !== null ?
          <div>
            <strong>Result: </strong>
            <code>{result.toString()}</code>
          </div> :
          null
        }
      </div>
    );
  }
}
