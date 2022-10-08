import React, { useEffect, useState } from "react";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { CartState } from "../context/Context";
import { cartReducer } from "../context/Reducers";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

function Cart() {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState();
  useEffect(() => {
    setTotal(cart.reduce((acc, crr) => acc + Number(crr.price) * crr.qty, 0));
  }, [cart]);
  return (
    <div className="home">
      <div className="productContainer">
        <ListGroup>
          {cart.map((prod, key) => {
            return (
              <ListGroup.Item key={prod.id}>
                <Row>
                  <Col md={2}>
                    <Image src={prod.image} alt={prod.name} fluid rounded />
                  </Col>
                  <Col md={2}>
                    <span>{prod.name}</span>
                  </Col>
                  <Col md={2}>
                    <span> &#8377; {prod.price}</span>
                  </Col>
                  <Col md={2}>
                    <Form.Select
                      value={prod.qty}
                      onChange={(e) =>
                        dispatch({
                          type: "CHANGE_CART_QUANT",
                          payload: { id: prod.id, qty: e.target.value },
                        })
                      }
                    >
                      {[...Array(prod.stock).keys()].map((x) => {
                        return (
                          <option value={x + 1} key={x + 1}>
                            {x + 1}
                          </option>
                        );
                      })}
                    </Form.Select>
                  </Col>
                  <Col md={2}>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: prod,
                        })
                      }
                    >
                      <AiFillDelete fontSize="20px" />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </div>
      <div className="filters summary ">
        <span className="title"> Subtotal ({cart.length}) items </span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>
          Total : &#8377; {total}
        </span>
        <Link to="/thankyou">
          <Button disabled={cart.length === 0}> Proceed to Checkout</Button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
