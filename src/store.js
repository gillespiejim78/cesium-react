import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { toggleVisible } from './sagas';

export const TOGGLE_VISIBLE_COMPLETE = 'TOGGLE_VISIBLE_COMPLETE';
export const TOGGLE_VISIBLE_START = 'TOGGLE_VISIBLE_START';
export const SET_VIEWER = 'SET_VIEWER';

const visible = (state = {isVisible: false, viewer: null}, action) => {
    console.log('[store.js] action: ', action);
    switch (action.type) {
        case TOGGLE_VISIBLE_COMPLETE:
            return {
                ...state,
                isVisible: !state.isVisible
            }
        case SET_VIEWER:
            return {
                ...state,
                viewer: action.viewer
            }
        default:
           return state;
    }
}

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(visible, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(toggleVisible);