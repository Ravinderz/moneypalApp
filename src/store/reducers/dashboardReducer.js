import * as actions from '../actions/dashboardActions';

const initialState = {
  recentTransactions: [],
  userid: "user1",
  spendingTillDate: 25000,
};


const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_SPENDINGS_OF_MONTH:
      return state;
    case actions.GET_RECENT_TEN_TRANSACTIONS:
      let newState = state;
      newState.recentTransactions = action.payload;
      console.log(newState)
      return newState;
    default:
      return state;
  }
};

export default dashboardReducer;
