import React from "react";
import { Button, Form } from "react-bootstrap";
import { CartState } from "../context/Context";

function SingleProduct({ product }) {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <table className="table-body table  table-borderless ">
      <tbody>
        <tr className="product-details ">
          <td className="image-container">
            <img
              className="product-image"
              src={product.image}
              alt={product.name}
            />
          </td>
          <td className="product-name">{product.name}</td>
          <td className="product-color">{product.color.toUpperCase()}</td>
          <td className="product-stock">
            {product.stock >= 1 ? (
              <p className="in-stock">
                <span className="material-symbols-outlined">
                  sentiment_very_satisfied
                </span>
                In Stock
              </p>
            ) : (
              <p className="out-stock">
                <span className="material-symbols-outlined">
                  sentiment_dissatisfied
                </span>
                Out of Stock
              </p>
            )}
          </td>
          <td className="product-price">&#8377; {product.price}/-</td>

          <td>
            {cart.some((p) => p.id === product.id) ? (
              <Button
                className="btns"
                variant="danger"
                onClick={() => {
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: product,
                  });
                }}
              >
                Remove from Cart
              </Button>
            ) : (
              <Button
                className="btns"
                variant="primary"
                onClick={() => {
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: product,
                  });
                }}
                disabled={!product.stock}
              >
                {!product.stock ? "Out of Stock" : "Add to Cart"}
              </Button>
            )}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
// <Card className="product-card">
//   <Card.Img variant="top" src={prod.image} alt={prod.name} />
//   <Card.Body>
//     <Card.Title>{prod.name}</Card.Title>
//     <Card.Subtitle style={{ paddingBottom: 10 }}>
//       <span> &#8377; {prod.price}/- </span>
//     </Card.Subtitle>
//   </Card.Body>

// </Card>;
export default SingleProduct;
