import * as actions from "../actions/actionTypes";

export default function filterReducer(state = "All", action: any) {
  switch (action.type) {
    case actions.Filter_By_State:
      return action.payload;
    case actions.Filter_By_Shifts:
      return action.payload;
    case actions.Filter_By_Area:
      return action.payload;
    case actions.Filter_By_Date:
      return action.payload;
    default:
      return state;
  }
}
