import { combineReducers } from "redux";

import reservationsReducer from "./reservationsReducer";
import filterReducer from "./filterReducer";
import sortReducer from "./sortReducer";

const rootReducer = combineReducers({
  reservations: reservationsReducer,
  filter: filterReducer,
  sort: sortReducer
});

export default rootReducer;
