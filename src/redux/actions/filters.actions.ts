import * as actions from "./actionTypes";

export const filterByStateAction = (caseFilter: string, filter: string) => {
  return {
    type: actions.Filter_By_State,
    payload: {
      caseFilter: caseFilter,
      filter: filter
    }
  };
};

export const filterByShiftAction = (caseFilter: string, filter: string) => {
  return {
    type: actions.Filter_By_Shifts,
    payload: {
      caseFilter: caseFilter,
      filter: filter
    }
  };
};

export const filterByAreaAction = (caseFilter: string, filter: string) => {
  return {
    type: actions.Filter_By_Area,
    payload: {
      caseFilter: caseFilter,
      filter: filter
    }
  };
};

export const filterByDateAction = (caseFilter: string, dateFilter: any) => {
  return {
    type: actions.Filter_By_Date,
    payload: {
      caseFilter: caseFilter,
      filter: dateFilter
    }
  };
};
