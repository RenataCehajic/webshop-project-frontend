import axios from "axios";

const API_URL = "http://localhost:4000";

export function startLoading() {
  return {
    type: "product/startLoading",
  };
}

export function productsFetched(productList) {
  return {
    type: "product/productsFetched",
    payload: productList,
  };
}

export async function fetchProducts(dispatch, getState) {
  try {
    dispatch(startLoading());

    const response = await axios.get(`${API_URL}/products`);

    console.log("What data do I get?", response.data.rows);

    const productList = response.data.rows;

    dispatch(productsFetched(productList));
  } catch (e) {
    console.log(e.message);
  }
}
