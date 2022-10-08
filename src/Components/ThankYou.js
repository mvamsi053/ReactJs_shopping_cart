import React from "react";
import { Link } from "react-router-dom";

function ThankYou() {
  return (
    <center>
      <div className="jumbotron">
        <h1 className="display-4">Thank You!</h1>
        <p className="lead">Your Order is placed.</p>

        <p>Let's Shop More...!</p>
        <Link to="/" className="btn btn-primary btn-lg">
          Home
        </Link>
      </div>
    </center>
  );
}

export default ThankYou;
