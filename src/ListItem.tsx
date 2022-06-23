import React from "react";
import { Reservation } from "./constants/Interfaces/ReservationListInterface";

const ListItem: React.FC<Reservation> = ({ reservation }) => {
  return (
    <>
      {reservation && (
        <>
          <tr>
            <td>
              <h4>{reservation.id}</h4>
            </td>
            <td>
              <h4>
                {reservation.customer.firstName} {reservation.customer.lastName}
              </h4>
            </td>
            <td>
              <p> {reservation.status} </p>
            </td>
            <td>
              <p> {reservation.shift} </p>
            </td>
            <td>
              <p>{reservation.businessDate}</p>
            </td>
            <td>
              <p> {reservation.start} </p>
            </td>
            <td>
              <p> {reservation.end} </p>
            </td>
            <td>
              <p> {reservation.quantity} </p>
            </td>
            <td>
              <p> {reservation.area} </p>
            </td>
            <td>
              <p> {reservation.guestNotes} </p>
            </td>
          </tr>
        </>
      )}
    </>
  );
};

export default ListItem;
