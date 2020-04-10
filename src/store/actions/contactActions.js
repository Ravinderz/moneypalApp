export const GET_CONTACTS = "GET_CONTACTS";
export const ADD_CONTACT = "ADD_CONTACT";
export const CLEAR_CONTACTS = "CLEAR_CONTACTS";
export const REMOVE_CONTACT = "REMOVE_CONTACT";


export const getContacts = () => {
    return async (dispatch) => {
        dispatch({
          type: GET_CONTACTS
        });
      };
}

export const clearContacts = () => {
  return async (dispatch) => {
      dispatch({
        type: CLEAR_CONTACTS
      });
    };
}


export const addContact = (id,name,picture,phoneNumbers) => {
    return async (dispatch) => {
        dispatch({
          type: ADD_CONTACT,
          contact:[{id,name,picture,phoneNumbers}]
        });
      };
}
export const removeContact = (id) => {
    return async (dispatch) => {
        dispatch({
          type: REMOVE_CONTACT,
          id:id
        });
      };
}