import {createSlice} from '@reduxjs/toolkit';
import LIST from '../List';
import {InvestmentState} from '../../../store/types/InvestmentState';

const initialState = {
  isInvestmentProductFetching: false,
  isInvestmentProductSuccess: false,
  ListOfInvestments: LIST, //currenlty initializing the list locally
} as InvestmentState;

const InvestmentSlice = createSlice({
  name: 'Investment',
  initialState,
  reducers: {
    //This are the three functions which will be responsible for showing loader or successModal or any other events
    isInvestmentProductFetchingStarted(state) {
      state.isInvestmentProductFetching = true;
      state.isInvestmentProductSuccess = false;
    },
    isInvestmentProductFetchingSuccess(state) {
      state.isInvestmentProductFetching = false;
      state.isInvestmentProductSuccess = true;
    },
    isInvestmentProductFetchingFail(state) {
      state.isInvestmentProductFetching = false;
      state.isInvestmentProductSuccess = false;
    },
  },
});

const {actions, reducer} = InvestmentSlice;

export const {
  isInvestmentProductFetchingStarted,
  isInvestmentProductFetchingSuccess,
  isInvestmentProductFetchingFail,
} = actions;
export default reducer;
