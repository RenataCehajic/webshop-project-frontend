// src/store/reducer.js
import { combineReducers } from "redux";
import productReducer from "./product/reducer";
import userReducer from "./user/reducer";
// import someFeatureReducer from "./someFeature/reducer";

const reducer = combineReducers({
  user: userReducer,
  product: productReducer,
  // etc...
});

export default reducer;
