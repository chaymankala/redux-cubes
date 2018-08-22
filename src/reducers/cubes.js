import APPCONFIG from '../constants/Config';
import {
    TOGGLE_CUBES,
} from '../constants/ActionTypes';

const initialSettings = APPCONFIG;

const cubes = (state = initialSettings, action) => {
    // console.log(action)
    switch (action.type) {
        case TOGGLE_CUBES: {
            let times = 1;
            let cubes = state.cubes;
            while (times--) {
                var temp = cubes.shift();
                cubes.push(temp)
            }
            return {
                ...state,
                cubes
            };
        }
        default:
            return state;
    }
};

module.exports = cubes;
