import * as actions from "../actions/actionTypes";

export default function reservationsReducer(state = [], action: any) {
  switch (action.type) {
    case actions.Get_Reservations:
      return action.payload;
    default:
      return state;
  }
}
