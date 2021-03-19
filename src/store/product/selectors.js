export const selectProductLoading = (reduxState) => {
  return reduxState.product.loading;
};

export const selectProducts = (reduxState) => reduxState.product.products;
