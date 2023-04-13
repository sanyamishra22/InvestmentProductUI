import {combineReducers} from 'redux';
import InvestmentReducer from './../scence/investmentProduct/redux/InvestmentReducer';

const rootReducer = combineReducers({
  Investment: InvestmentReducer,
});
export default rootReducer;
