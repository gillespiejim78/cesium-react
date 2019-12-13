import {call, put, takeEvery} from 'redux-saga/effects'
import { TOGGLE_VISIBLE_START, TOGGLE_VISIBLE_COMPLETE } from "./store";
import { CzmlDataSource } from 'cesium';
import { select } from '@redux-saga/core/effects';
import { czml, czml2, czml3 } from './czml';

const getViewer = state => state.viewer;
const getIsVisible = state => state.isVisible;

const addDataSource = (viewer, dataSource) => {
    return viewer.dataSources.add(dataSource);
}

function* toggleCesiumVisible() {
    console.log('[sagas.js] Entered toggleCesiumVisible')

    const viewer = yield select(getViewer);
    const isVisible = yield select(getIsVisible);

    console.log('[sagas.js] ', viewer, isVisible)

    // if(!isVisible) {
    //     const czmlDataSource = yield call(CzmlDataSource.load, czml3);
    //     console.log('[sagas.js] czmlDataSource', czmlDataSource);
    //     console.log('[sagas.js] dataSources', viewer.dataSources);
    //     const dataSource = yield call(addDataSource, viewer, czmlDataSource);
    // } else {
    //     viewer.dataSources.removeAll(true);
    // }

    yield put({type: TOGGLE_VISIBLE_COMPLETE});
}

export function* toggleVisible() {
    yield takeEvery(TOGGLE_VISIBLE_START, toggleCesiumVisible);
}