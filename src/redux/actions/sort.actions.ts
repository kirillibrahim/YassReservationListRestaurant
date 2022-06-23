import * as actions from "./actionTypes";
import { sort } from "../../constants/Interfaces/ReservationListInterface";

export const sortByIdAction = (sort: sort) => {
  return {
    type: actions.Sort_By_Id,
    payload: sort
  };
};

export const sortByNameAction = (sort: sort) => {
  return {
    type: actions.Sort_By_Name,
    payload: sort
  };
};
