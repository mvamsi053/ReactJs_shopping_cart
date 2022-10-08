import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import ThankYou from "./Components/ThankYou";

function App() {
  const [catset, setCatSet] = useState("ALL");
  const [sizeset, setSizeSet] = useState("ANY");
  const [searchterm, setSearchterm] = useState("");
  return (
    <BrowserRouter>
      <Header
        catset={catset}
        sizeset={sizeset}
        setCatSet={setCatSet}
        setSizeSet={setSizeSet}
        searchterm={searchterm}
        setSearchterm={setSearchterm}
      />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home catset={catset} sizeset={sizeset} searchterm={searchterm} />
          }
        />
        <Route path="cart" element={<Cart />} />
        <Route path="thankyou" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
