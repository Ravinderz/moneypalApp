
export const GET_GROUP = "GET_GROUP";
export const STORE_GROUP = "STORE_GROUP";
export const CLEAR_GROUP = "CLEAR_GROUP";
export const ADD_GROUP = "ADD_GROUP";

export const addContact = (contact,userId) => {
    return async (dispatch) => {
        const response = await fetch(
            `https://moneypalapp.firebaseio.com/groups/${userId}.json`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              contact: contact
            }),
          }
        );
        if (!response.ok) {
          throw new Error("something went wrong !");
        }
        const resData = await response.json();
        dispatch({
          type: ADD_CONTACT,
          contact:contact
        });
      };
}
export const storeGroup = (title,desc,userId,members,img) => {
    return async (dispatch) => {
        dispatch({
          type: STORE_GROUP,
          group:{title,desc,userId,members,img}
        });
      };
}

export const getGroup = () => {
    return async (dispatch) => {
        dispatch({
          type: GET_GROUP
        });
      };
}

export const clearGroup = () => {
    return async (dispatch) => {
        dispatch({
          type: CLEAR_GROUP
        });
      };
}

export const addGroup = (type,data) => {
  return async (dispatch) => {
      dispatch({
        type: ADD_GROUP,
        payload:{type,data}
      });
    };
}