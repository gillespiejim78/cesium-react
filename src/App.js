import React, { Component } from 'react';
import Globe from './Globe';
import { TOGGLE_VISIBLE_START } from './store';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
          <button onClick={this.props.toggleVisible}>Toggle</button>
          <div>{this.props.isVisible ? "True" : "False"}</div>
          <Globe/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isVisible: state.isVisible
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleVisible: () => dispatch({type: TOGGLE_VISIBLE_START})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);