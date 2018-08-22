import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleCubes } from '../actions';
import store from '../store';

export default class App extends Component {

    CUBE_CLASS = "col-md-6 col-6 cube";

    CUBE = (color) => {
        return <div key={color} className={`${this.CUBE_CLASS} ${color}`} onClick={() => { store.dispatch(toggleCubes()) }}></div>
    }

    constructor(props) {
        super(props);
        this.state = {
            cubes: store.getState().cubes.cubes || []
        }
    }
    componentWillMount() {
        store.subscribe(() => {
            this.setState({ cubes: store.getState().cubes.cubes });
        });
    }
    render() {
        var { cubes } = this.state;
        return (
            <div>
                {cubes && cubes.length ? cubes.map((color) => { return this.CUBE(color) }) : null}
            </div>
        );
    }
}