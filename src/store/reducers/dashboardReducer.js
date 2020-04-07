import * as actions from '../actions/dashboardActions';

const initialState = {
  recentTransactions: [],
  userId: "",
  spendingTillDate: 0,
};


const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_SPENDINGS_OF_MONTH:
      return state;
    case actions.GET_RECENT_TEN_TRANSACTIONS:
      let newState = state;
      newState.recentTransactions = action.payload.dbData;
      newState.userId = action.payload.userId;
      return newState;
    default:
      return state;
  }
};

export default dashboardReducer;
