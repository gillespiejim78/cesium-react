import React, { Component } from 'react';
import { Viewer, CzmlDataSource } from 'cesium';
import 'cesium/Build/Cesium/Widgets/widgets.css';
import { SET_VIEWER } from './store';
import { connect } from 'react-redux'
import { czml3 } from './czml';

class Globe extends Component {
    constructor(props) {
        super(props);

        this.cesiumDiv = null;
        this.viewer = null;
    }

    componentDidMount() {
        this.viewer = new Viewer('cesium');
        this.props.setViewer(this.viewer);
    }

    componentDidUpdate() {
        console.log('[Globe.js] componentDidUpdate')
        if(this.props.isVisible) {
            this.viewer.dataSources.add(CzmlDataSource.load(czml3));
        } else {
            this.viewer.dataSources.removeAll(true);
        }
    }
    
    render() {
        return (
            <div id="cesium" ref={element => this.cesiumDiv = element}/>
        );
    }
}

const mapStateToProps = state => {
    return {
        isVisible: state.isVisible
    };
}

const mapDispatchToProps = dispatch => {
    return {
        setViewer: viewer => dispatch({type: SET_VIEWER, viewer})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Globe);