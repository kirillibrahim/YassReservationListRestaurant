import * as actions from "./actionTypes";
import axios from "axios";
import store from "../store";
import { Reservations } from "../../constants/Interfaces/ReservationListInterface";

export const getReservationsAction = (payload: Reservations) => {
  return {
    type: actions.Get_Reservations,
    payload
  };
};

export const fetchReservations = () => async (dispatch: any) => {
  let reservations = store.getState().reservations;

  // if reservations exist in store, return it
  if (reservations.length) {
    return dispatch(getReservationsAction(reservations));
  }
  try {
    let data = await axios.get("data/reservations.json");
    if (data) {
      return dispatch(getReservationsAction(data.data?.reservations));
    } else {
      alert("Couldn't be gotten! Fetch Users Data ");
    }
  } catch (e) {
    throw e;
  }
};
