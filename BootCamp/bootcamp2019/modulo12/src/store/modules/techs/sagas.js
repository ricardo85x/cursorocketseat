import { call, put } from 'redux-saga/effects'
import api from '~/services/api'

import { getTechSuccess, getTechsFailure } from '~/store/modules/techs/actions'

export function* getTechs(){
    try {
        const response = yield call(api.get, 'techs')

        console.log(response.data)

        yield put(getTechSuccess(response.data))
    } catch(_){
        yield put(getTechsFailure())
    }
}