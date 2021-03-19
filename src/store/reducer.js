// src/store/reducer.js
import { combineReducers } from "redux";
import userReducer from "./user/reducer";
// import someFeatureReducer from "./someFeature/reducer";

const reducer = combineReducers({
  user: userReducer,
  // etc...
});

export default reducer;
