import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/product/actions";
import {
  selectProductLoading,
  selectProducts,
} from "../store/product/selectors";

export default function ProductList() {
  const products = useSelector(selectProducts);
  const loading = useSelector(selectProductLoading);

  console.log("Products:", products.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts);
  }, [dispatch]);

  return (
    <div>
      <h1>List of our products</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {products.map((product, id) => (
            <li key={id}>
              <strong>{product.name}</strong>({product.description}) <br />
              <p>Price {product.price}</p>
              <img src={product.imageUrl} alt="" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
