import React from "react";
import { CartState } from "../context/Context";
import Filters from "./Filters";
import SingleProduct from "./SingleProduct";
import "./styles.css";

function Home({ catset, sizeset, searchterm }) {
  const {
    state: { products },
  } = CartState();
  console.log(products);
  const filterCategory = [];
  const filterSize = [];
  products.forEach((product) => {
    if (product.category === catset) {
      filterCategory.push(product);
    }
    if (catset === "ALL") {
      filterCategory.push(product);
    }
  });
  filterCategory.forEach((product) => {
    if (product.size === sizeset) {
      filterSize.push(product);
    }
    if (sizeset === "ANY") {
      filterSize.push(product);
    }
  });
  return (
    <div className="home">
      <div className="productContainer">
        <table className="table-head table ">
          <thead>
            <tr className="head-col">
              <th scope="col" className="head-img">
                Image
              </th>
              <th scope="col">Name</th>
              <th scope="col">Color</th>
              <th scope="col"> Stock </th>
              <th scope="col"> Price </th>

              <th scope="col"> Buy </th>
            </tr>
          </thead>
        </table>
        <div className="empty-div"></div>
        {filterSize
          .filter((product) => {
            if (searchterm === "") {
              return product;
            } else if (
              product.name.toLowerCase().includes(searchterm.toLowerCase())
            ) {
              return product;
            }
          })
          .map((product, key) => {
            return <SingleProduct product={product} key={product.id} />;
          })}
      </div>
    </div>
  );
}

export default Home;
