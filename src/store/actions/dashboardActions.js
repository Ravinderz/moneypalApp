export const GET_SPENDINGS_OF_MONTH = "GET_SPENDINGS_OF_MONTH";
export const GET_RECENT_TEN_TRANSACTIONS = "GET_RECENT_TEN_TRANSACTIONS";

export const getSpendingsOfMonth = (userId) => {
  return (dispatch) => {
    dispatch({
      type: GET_SPENDINGS_OF_MONTH,
      payload: userId,
    });
  };
};

export const getRecentTenTransactions = (userId) => {
  return (dispatch) => {
    dispatch({
      type: GET_RECENT_TEN_TRANSACTIONS,
      payload: userId,
    });
  };
};
