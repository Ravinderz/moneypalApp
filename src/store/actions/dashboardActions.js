import { db } from '../../dbConfig';

export const GET_SPENDINGS_OF_MONTH = "GET_SPENDINGS_OF_MONTH";
export const GET_RECENT_TEN_TRANSACTIONS = "GET_RECENT_TEN_TRANSACTIONS";

export const getRecentTransactions = () => {
  
  return dispatch => {
  db.ref('/transactions').on('value', querySnapShot => {
    
      let data = querySnapShot.val() ? querySnapShot.val() : {};
      console.log(data);  
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
      console.log(dbData);
      dispatch(getRecentTenTransactions(dbData));
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

export const getRecentTenTransactions = (dbData) => {
  return (dispatch) => {
    dispatch({
      type: GET_RECENT_TEN_TRANSACTIONS,
      payload: dbData,
    });
  };
};
