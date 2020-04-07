import * as actions from '../actions/authActions';

const initialState = {
    displayName: null,
    email: null,
    expiresIn: null,
    token: null,
    userId: null,
    refreshToken: null,
    registered: false,
};


const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SIGNUP:
      return state;
    case actions.SIGNIN:
     return {
        displayName :action.displayName,
        email : action.email,
        expiresIn : action.expiresIn,
        token: action.token,
        userId: action.userId,
        refreshToken: action.refreshToken,
        registered : action.registered,
     }
    case actions.LOGOUT:
        return state; 
    default:
      return state;
  }
};

export default authReducer;
