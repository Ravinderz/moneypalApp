
export const GET_SPENDINGS_OF_MONTH = "GET_SPENDINGS_OF_MONTH";
export const GET_RECENT_TEN_TRANSACTIONS = "GET_RECENT_TEN_TRANSACTIONS";

export const getRecentTransactions = (userId) => {


  return async dispatch => {
    const response = await fetch(
      `https://moneypalapp.firebaseio.com/transactions/${userId}.json`);
    if (!response.ok) {
      throw new Error("something went wrong !");
    }
    const data = await response.json();
    const keys = Object.keys(data);  
      let dbData = [];
      keys.map(key => {
        dbData.push({
          id: key,
          title: data[key].title,
          amount : data[key].amount,
          transactionType : data[key].transactionType,
          transactionDate : data[key].transactionDate,
          selectedGroup : data[key].selectedGroup
        })
      })
    dispatch({
      type: GET_RECENT_TEN_TRANSACTIONS,
      payload: {dbData: dbData, userId: userId }
    });
  };
}

export const getSpendingsOfMonth = (userId) => {
  return (dispatch) => {
    dispatch({
      type: GET_SPENDINGS_OF_MONTH,
      payload: userId,
    });
  };
};

export const getRecentTenTransactions = (dbData,userId) => {
  return (dispatch) => {
    dispatch({
      type: GET_RECENT_TEN_TRANSACTIONS,
      payload: {dbData: dbData, userId: userId },
    });
  };
};
