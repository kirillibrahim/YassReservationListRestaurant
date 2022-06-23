import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";
import Filters from "./Filters";
import {
  Reservation,
  Reservations
} from "./constants/Interfaces/ReservationListInterface";
import { useSelector, useDispatch } from "react-redux";
import { fetchReservations } from "./redux/actions/reservations.actions";

import { sortByIdAction, sortByNameAction } from "./redux/actions/sort.actions";
import { filterReservations, sortBy } from "./utlis/utlis";

const List: React.FC = () => {
  const [searchFilter, setSearchFilter] = useState<string>("");
  const [sortId, setSortId] = useState<string>("asc");
  const [sortName, setSortName] = useState<string>("desc");

  let reservations = useSelector<Reservations>((state) =>
    sortBy(filterReservations(state.reservations, state.filter), state.sort)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const reservData = await dispatch(fetchReservations());
      //console.log(reservData);
    }
    fetchData();
  }, []);

  const sortIds = (sort: string) => {
    if (sortId) {
      setSortName("desc");
      dispatch(sortByIdAction({ sortCase: "id", sort: sortId }));
    }
  };
  const sortNames = (sort: string) => {
    if (sortName) {
      setSortId("asc");
      dispatch(sortByNameAction({ sortCase: "name", sort: sortName }));
    }
  };

  return (
    <>
      <div className="filter">
        <label className="form-label">Type to filter the list:</label>
        <input
          id="filter"
          name="filter"
          type="text"
          className="search-filter"
          value={searchFilter}
          onChange={(event) => setSearchFilter(event.target.value)}
        />

        <Filters />
      </div>
      <div className="list">
        {reservations && reservations.length > 0 && (
          <>
            <table>
              <thead>
                <tr>
                  <th>
                    <button
                      className="sort-btn"
                      type="button"
                      onClick={() => {
                        setSortId(sortId === "asc" ? "desc" : "asc");
                        sortIds(sortId);
                      }}
                    >
                      ID
                    </button>
                  </th>
                  <th>
                    <button
                      className="sort-btn"
                      type="button"
                      onClick={() => {
                        //sortByName()
                        setSortName(sortName === "desc" ? "asc" : "desc");
                        sortNames(sortName);
                      }}
                    >
                      Name
                    </button>
                  </th>
                  <th>Status</th>
                  <th>Shift</th>
                  <th>Business Date</th>
                  <th>Start</th>
                  <th>End</th>
                  <th>Quantity</th>
                  <th>Area</th>
                  <th>Guest Notes</th>
                </tr>
              </thead>
              {reservations
                .filter((reservation: Reservation) => {
                  let name = reservation.customer.firstName.concat(
                    " ",
                    reservation.customer.lastName
                  );
                  return (
                    name.toLowerCase().includes(searchFilter) ||
                    searchFilter === ""
                  );
                })
                .map((reservation: Reservation) => (
                  <>
                    <tbody>
                      <ListItem
                        reservation={reservation}
                        key={reservation.id}
                      />
                    </tbody>
                  </>
                ))}
            </table>
          </>
        )}
      </div>
    </>
  );
};

export default List;
