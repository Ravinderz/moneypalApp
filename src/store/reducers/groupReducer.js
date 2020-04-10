import * as actions from "../actions/groupActions";

const initialState = {
  groups: [],
  group: {},
  userId: "",
};

const groupReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.STORE_GROUP:
      let newState = state;
      newState.groups.push(action.group);
      newState.userId = action.group.userId;
      return newState;
    case actions.GET_GROUP:
      return state;
    case actions.CLEAR_GROUP:
      let clearGroup = state;
        clearGroup.group = {}
        return clearGroup;  
    case actions.ADD_GROUP:
      let addGroup = state;
      if (action.payload.type === "title") {
        addGroup.group.title = action.payload.data;
      }
      if (action.payload.type === "desc") {
        addGroup.group.desc = action.payload.data;
      }
      if (action.payload.type === "image") {
        addGroup.group.image = action.payload.data;
      }
      if (action.payload.type === "members") {
        addGroup.group.members = action.payload.data;
      }
      return addGroup;
    default:
      return state;
  }
};

export default groupReducer;
