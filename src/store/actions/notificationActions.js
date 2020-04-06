export const GET_NOTIFICATIONS = "GET_NOTIFICATIONS";

export const getNotifications = (userId) => {
  return (dispatch) => {
    dispatch({
      type: GET_NOTIFICATIONS,
      payload: userId,
    });
  };
};