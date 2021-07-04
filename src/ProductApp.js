import { useReducer } from "react";
import productReducer, { initialProductState } from "./reducers/productReducer";
import types from "./types";

const ProductApp = () => {
  const [productState, dispatch] = useReducer(
    productReducer,
    initialProductState
  );
  const { activeProduct, products, cart } = productState;

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title}
            <button
              onClick={() =>
                dispatch({
                  type: types.productShow,
                  payload: product,
                })
              }
            >
              show
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: types.productAddToCart,
                  payload: product,
                })
              }
            >
              Add to cart
            </button>
          </li>
        ))}
      </ul>

      <h2>Cart</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            {product.title} - quantity: {product.quantity}
            <button
              onClick={() =>
                dispatch({
                  type: types.productRemoveOneFromCart,
                  payload: product.id,
                })
              }
            >
              Remove to cart
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: types.productRemoveFromCart,
                  payload: product.id,
                })
              }
            >
              Remove to cart
            </button>
          </li>
        ))}
      </ul>
      <h2>Preview</h2>
      <p>{activeProduct.title}</p>
    </div>
  );
};

export default ProductApp;
