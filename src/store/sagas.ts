import {all, takeLatest} from 'redux-saga/effects';
import {FETCH_INVESTMENT_PRODUCT} from '../scence/investmentProduct/redux/InvestmentAction';
import {investmentSaga} from '../scence/investmentProduct/redux/InvestmentSaga';

export default function* sagas() {
  yield all([takeLatest(FETCH_INVESTMENT_PRODUCT, investmentSaga)]);
}
