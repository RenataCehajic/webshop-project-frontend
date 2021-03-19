import axios from "axios";

const API_URL = "http://localhost:4000";

const setLoading = () => ({ type: "user/loading" });

const setToken = (jwt) => ({ type: "user/setToken", payload: jwt });

const loginSuccess = (profile, token) => ({
  type: "user/loginSuccess",
  payload: { profile, token },
});

export const logout = () => ({ type: "user/logout" });

export const signUp = (
  fullName,
  email,
  password,
  address,
  isAdmin,
  history
) => async (dispatch, getState) => {
  try {
    console.log(fullName, email, password, address, isAdmin);
    dispatch(setLoading());

    const response = await axios.post(`${API_URL}/users`, {
      fullName,
      email,
      password,
      address,
      isAdmin,
    });

    console.log("sign up success");

    history.push("/login");
  } catch (e) {
    console.log(e.message);
  }
};

export const login = (email, password, history) => async (
  dispatch,
  getState
) => {
  try {
    dispatch(setLoading());

    const response = await axios.post(`${API_URL}/login`, { email, password });

    const token = response.data.jwt;

    console.log("Login success");

    const userProfileresponse = await axios.get(`${API_URL}/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const profile = userProfileresponse.data;

    // dispatch(setToken(token));
    dispatch(loginSuccess(profile, token));
    history.push("/");
  } catch (e) {
    console.log(e.message);
  }
};
