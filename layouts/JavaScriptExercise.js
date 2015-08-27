/*eslint no-new-func: 0, new-cap: 0*/
import Cache from 'exerslide/js/SlideDataCache';
import Editor from 'exerslide/components/Editor';
import Markdown from 'exerslide/components/Markdown';
import React from 'react';
import chai from 'chai';
import classnames from 'classnames';
import withoutComments from 'exerslide/js/withoutComments';

import 'exerslide/node_modules/codemirror/mode/javascript/javascript';

const CACHE_KEY = 'JavaScriptExercise';

let defautExerciseData = {
  completed: false,
  error: null,
  code: '',
};

function createAssertion(code) {
  return new Function('assert, source, output', code);
}

function log() {
  console.log.apply(console, arguments);
}
global.log = log;

export default class JavaScriptExercise extends React.Component {

  static getClassNames(slideIndex) {
    let exercise = Cache.get(slideIndex, CACHE_KEY);
    return classnames( {
      javascriptExercise: true,
      completed: exercise && exercise.completed,
      error: exercise && exercise.error,
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      exercise: Cache.get(props.slideIndex, CACHE_KEY, defautExerciseData),
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.slideIndex !== this.props.slideIndex) {
      return true;
    }
    let thisExercise = this.state.exercise;
    let nextExercise = nextState.exercise;
    return thisExercise.completed !== nextExercise.completed ||
      thisExercise.error !== nextExercise.error;
  }

  componentDidUpdate(prevProps) {
    if (this.props.slideIndex !== prevProps.slideIndex) {
      // Update the value of the editor
      this.refs.editor.setValue(this.state.exercise.code || this.props.content);
    }
  }

  reset() {
    this.refs.editor.setValue(this.props.content);
    let exercise = {
      ...this.state.exercise,
      completed: false,
      error: '',
    };
    Cache.set(this.props.slideIndex, CACHE_KEY, exercise);
    this.setState({exercise});
  }

  runCode() {
    let code = this.refs.editor.getValue();
    let func = new Function('log, console', code);
    func(log, console);
  }

  submitCode() {
    let code = this.refs.editor.getValue();
    let assertion = createAssertion(this.props.layoutData.assertion);
    let output = [];
    let {exercise} = this.state;
    try {
      let func = new Function('log, console', code);
      let realLog = console.log;
      let log = function log() {
        output.push.apply(output, arguments);
        realLog.apply(console, arguments);
      };
      console.log = log;
      func(log, console);
      console.log = realLog;
      assertion(chai.assert, withoutComments(code), output);

      exercise = {...exercise, error: '', completed: true};
    } catch(ex) {
      let error = ex.name + ': ' + ex.message;
      exercise = {...exercise, error, completed: false};
      console.error(error);
    }
    Cache.set(this.props.slideIndex, CACHE_KEY, exercise);
    this.setState({exercise});
  }

  _onChange(code) {
    let exercise = {...this.state.exercise, code};
    Cache.set(this.props.slideIndex, CACHE_KEY, exercise);
    this.setState({exercise});
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      exercise: Cache.get(newProps.slideIndex, CACHE_KEY, defautExerciseData),
    });
  }

  render() {
    let message;
    let {assertion, description} = this.props.layoutData;
    if (description) {
      description = <Markdown value={description} />;
    }
    let exercise = this.state.exercise;

    if (exercise.completed) {
      message =
        <div className="alert alert-success">
          <strong>Well done!</strong>
        </div>;
    } else if (exercise.error) {
      message =
        <div className="alert alert-danger">
          <strong>Oh no :(</strong><br />
          {exercise.error}
        </div>;
    }
    return (
      <div>
        {description}
        {this.props.solution}
        <Editor
          ref="editor"
          mode="javascript"
          defaultValue={exercise.code || this.props.content}
          onChange={this._onChange.bind(this)}
        />
        <div className="toolbar">
          <button
            style={{margin: 5}}
            className="btn btn-primary"
            onClick={this.runCode.bind(this)}>
            Run
          </button>
          <button
            style={{margin: 5}}
            className="btn btn-default"
            onClick={this.reset.bind(this)}>
            Reset
          </button>
          {assertion ?
            <button
              style={{margin: 5}}
              className="btn btn-success"
              onClick={this.submitCode.bind(this)}>
              Submit
            </button> :
            null
          }
        </div>
        {message ? <div style={{marginTop: 20}}>{message}</div> : null}
      </div>
    );
  }

}
