import * as actions from '../actions/contactActions';

const initialState = 
    [{
      id: 'g4',
      name: "new",
      picture: "../assets/images/groupthree.png",
    }]
  ;


  const contactReducer = (state = initialState, action) => {
    switch (action.type) {
      case actions.ADD_CONTACT:
        let newState = [...action.contact,...state];
          return newState;
      case actions.GET_CONTACTS:
          return state;
      case actions.REMOVE_CONTACT:
        let removeContact = [...state];
        return removeContact.filter(c => c.id !== action.id);
      case actions.CLEAR_CONTACTS:
        newState = [{
          id: 'g4',
          name: "new",
          picture: "../assets/images/groupthree.png",
        }]
          return newState;
      default:
        return state;
    }
  };

  export default contactReducer;