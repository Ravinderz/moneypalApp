import { AsyncStorage } from 'react-native';

export const SIGNUP = "SIGNUP";
export const SIGNIN = "SIGNIN";
export const LOGOUT = "LOGOUT";

export const signup = (email, password) => {
  return async (dispatch) => {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB9QaXGTUKbTlvMsy2Yef5rDHZGKpnljBY",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      }
    );
    if (!response.ok) {
      throw new Error("something went wrong !");
    }
    const resData = await response.json();
    dispatch({
      type: SIGNUP,
    }); 
    saveDataToStorage(resData.idToken,resData.localId,resData.refreshToken);
  };
};

export const signin = (email, password) => {
  return async (dispatch) => {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB9QaXGTUKbTlvMsy2Yef5rDHZGKpnljBY",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      }
    );
    console.log(response.ok);
    if (!response.ok) {
      throw new Error("something went wrong !");
    }
    const resData = await response.json();
    dispatch({
      type: SIGNIN,
      displayName :resData.displayName,
      email : resData.email,
      expiresIn: resData.expiresIn,
      token: resData.idToken,
      userId: resData.localId,
      refreshToken: resData.refreshToken,
      registered : resData.registered
    });
    saveDataToStorage(resData.idToken,resData.localId,resData.refreshToken,resData.displayName,resData.email,resData.registered,resData.expiresIn);
  };
};

export const logout = (email, password) => {
    return async (dispatch) => {
      dispatch({
        type: LOGOUT
      });
      AsyncStorage.removeItem('userData');
    };
  };

const saveDataToStorage = (token,userId,refreshToken,displayName,email,registered,expiresIn) => {
  AsyncStorage.setItem('userData',JSON.stringify({
    token,
    userId,
    refreshToken,
    displayName,
    email,
    registered,
    expiresIn
  }))
}

