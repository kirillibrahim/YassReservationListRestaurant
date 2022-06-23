import * as actions from "../actions/actionTypes";

export default function sortReducer(state = {}, action: any) {
  switch (action.type) {
    case actions.Sort_By_Id:
      return action.payload;
    case actions.Sort_By_Name:
      return action.payload;
    default:
      return state;
  }
}
