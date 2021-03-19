const initialState = {
  loading: false,
  products: [],
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case "product/startLoading": {
      return {
        ...state,
        loading: true,
      };
    }
    case "product/productsFetched": {
      return {
        loading: false,
        products: [...state.products, action.payload],
      };
    }

    default: {
      return state;
    }
  }
}
