import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";

import {
  filterByStateAction,
  filterByShiftAction,
  filterByAreaAction,
  filterByDateAction
} from "./redux/actions/filters.actions";

const Filters: React.FC = () => {
  const [startDate, setStartDate] = useState<any>(null);
  const [endDate, setEndDate] = useState<any>(null);
  const dispatch = useDispatch();

  let statusSelect = document.getElementById("status") as HTMLInputElement;
  let shiftsSelect = document.getElementById("shift") as HTMLInputElement;
  let areaSelect = document.getElementById("area") as HTMLInputElement;

  useEffect(() => {
    function filterByDate() {
      if (startDate && endDate) {
        statusSelect.value = "";
        shiftsSelect.value = "";
        areaSelect.value = "";
        dispatch(
          filterByDateAction("date", { startDate: startDate, endDate: endDate })
        );
      } else if (!startDate && !endDate) {
        dispatch(filterByDateAction("date", null));
      }
    }
    filterByDate();
  }, [startDate, endDate]);

  return (
    <>
      <div className="filter-group">
        <select
          name="status"
          id="status"
          onChange={(e) => {
            shiftsSelect.value = "";
            areaSelect.value = "";
            setStartDate(null);
            setEndDate(null);
            console.log(e.target.value);
            return dispatch(filterByStateAction("state", e.target.value));
          }}
        >
          <option value="">Select State</option>
          <option value="CONFIRMED">Confirmed</option>
          <option value="SEATED">Seated</option>
          <option value="CHECKED OUT">Checked out</option>
          <option value="NOT CONFIRMED">Not confirmed</option>
        </select>

        <select
          name="shift"
          id="shift"
          onChange={(e) => {
            statusSelect.value = "";
            areaSelect.value = "";
            setStartDate(null);
            setEndDate(null);
            return dispatch(filterByShiftAction("shifts", e.target.value));
          }}
        >
          <option value="">Select Shift</option>
          <option value="BREAKFAST">Breakfast </option>
          <option value="LUNCH">Lunch</option>
          <option value="DINNER">Dinner</option>
        </select>

        <select
          name="area"
          id="area"
          onChange={(e) => {
            shiftsSelect.value = "";
            statusSelect.value = "";
            setStartDate(null);
            setEndDate(null);
            return dispatch(filterByAreaAction("area", e.target.value));
          }}
        >
          <option value="">Select Area</option>
          <option value="BAR">Bar </option>
          <option value="MAIN ROOM">MAIN_ROOM</option>
        </select>

        <DatePicker
          selected={startDate}
          selectsStart
          isClearable
          placeholderText="Select Start Date"
          startDate={startDate}
          endDate={endDate}
          onChange={(date) => {
            setStartDate(date);
          }}
        />
        <DatePicker
          selected={endDate}
          selectsEnd
          isClearable
          placeholderText="Select End Date"
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          onChange={(date) => {
            setEndDate(date);
          }}
        />
      </div>
    </>
  );
};

export default Filters;
