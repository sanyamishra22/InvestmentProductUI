import {call, put} from 'redux-saga/effects';

import {
  isInvestmentProductFetchingFail,
  isInvestmentProductFetchingStarted,
  isInvestmentProductFetchingSuccess,
} from './InvestmentReducer';

export function* investmentSaga(action) {
  const {payload} = action;
  yield put(isInvestmentProductFetchingStarted({}));
  const {data, ok} = yield call();
  //Will call api here
  if (ok && data) {
    yield put(isInvestmentProductFetchingSuccess(data));
  } else if (!ok && data) {
    yield put(isInvestmentProductFetchingFail(data));
    console.log('error');
  }
}
