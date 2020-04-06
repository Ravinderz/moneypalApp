import * as actions from '../actions/dashboardActions';

const initialState = {
  recentTransactions: [
    {
      id: "r1",
      title: "First Item",
      date: "21-3-2019",
      amount: "2500",
    },
    {
      id: "r2",
      title: "Second Item",
      date: "21-3-2019",
      amount: "2500",
    },
    {
      id: "r3",
      title: "Third Item",
      date: "21-3-2019",
      amount: "2500",
    },
    {
      id: "r4",
      title: "Four Item",
      date: "21-3-2019",
      amount: "2500",
    },
    {
      id: "r5",
      title: "Five Item",
      date: "21-3-2019",
      amount: "2500",
    },
    {
      id: "r6",
      title: "Six Item",
      date: "21-3-2019",
      amount: "2500",
    },
    {
      id: "r7",
      title: "Seven Item",
      date: "21-3-2019",
      amount: "2500",
    },
    {
      id: "r8",
      title: "Eight Item",
      date: "21-3-2019",
      amount: "2500",
    },
    {
      id: "r9",
      title: "Nine Item",
      date: "21-3-2019",
      amount: "2500",
    },
  ],
  userid: "user1",
  spendingTillDate: 25000,
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_SPENDINGS_OF_MONTH:
      return state;
    case actions.GET_RECENT_TEN_TRANSACTIONS:
      return state;
    default:
      return state;
  }
};

export default dashboardReducer;
