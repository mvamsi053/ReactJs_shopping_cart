import React from "react";

import {
  Container,
  FormControl,
  Navbar,
  NavbarBrand,
  Nav,
  Dropdown,
  Badge,
  Button,
  Form,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";

function Header({
  catset,
  setCatSet,
  sizeset,
  setSizeSet,
  searchterm,
  setSearchterm,
}) {
  const {
    state: { products, cart },
    dispatch,
  } = CartState();
  const categories = ["ALL"];
  const sizes = ["ANY"];
  const handleReset = (e) => {
    e.preventDefault();
    setCatSet("ALL");
    setSizeSet("ANY");
  };

  products.map((product, key) => {
    if (categories.indexOf(product.category) === -1) {
      categories.push(product.category);
    }

    if (sizes.indexOf(product.size) === -1) {
      sizes.push(product.size);
    }
  });
  return (
    <>
      <Navbar className="navbar" bg="dark" variant="dark" expand="lg">
        <Container>
          <NavbarBrand>
            <Link className="home-link" to="/">
              Shopping cart
            </Link>
          </NavbarBrand>
          <Form.Select
            className="form-control nav-select "
            value={catset}
            onChange={(e) => setCatSet(e.target.value)}
          >
            {categories.map((cat, key) => {
              return (
                <option value={cat} key={cat}>
                  {cat.toUpperCase()}
                </option>
              );
            })}
          </Form.Select>
          <Form.Select
            className="form-control nav-select "
            value={sizeset}
            onChange={(e) => setSizeSet(e.target.value)}
          >
            {sizes.map((size, key) => {
              return (
                <option value={size} key={size}>
                  {size.toUpperCase()}
                </option>
              );
            })}
          </Form.Select>
          <div className="reset-btn " type="button" onClick={handleReset}>
            <span className="material-symbols-outlined ">replay</span>
            <p> Reset</p>
          </div>

          <Navbar.Text className="search">
            <FormControl
              style={{ width: 400 }}
              className="m-auto"
              placeholder="Search Products"
              value={searchterm}
              onChange={(e) => setSearchterm(e.target.value)}
            />
          </Navbar.Text>
          <Nav>
            <Dropdown align="end">
              <Dropdown.Toggle variant="success">
                <FaShoppingCart color="white" fontSize="25px" />
                <Badge bg="success">{cart.length}</Badge>
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ minWidth: 370 }}>
                {cart.length ? (
                  <div>
                    {cart.map((prod) => {
                      return (
                        <span className="cartitem" key={prod.id}>
                          <img
                            src={prod.image}
                            alt={prod.name}
                            className="cartItemImg"
                          />
                          <div className="cartItemDetail">
                            <span>{prod.name}</span>
                            <span> &#8377; {prod.price} </span>
                          </div>
                          <AiFillDelete
                            fontSize="20px"
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              dispatch({
                                type: "REMOVE_FROM_CART",
                                payload: prod,
                              })
                            }
                          />
                        </span>
                      );
                    })}
                    <Link to="/cart">
                      <Button style={{ width: "95%", margin: "0 10px" }}>
                        Go to Cart{" "}
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <span style={{ padding: 10 }}>Cart is Empty</span>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
      <div className="empty"></div>
    </>
  );
}

export default Header;
