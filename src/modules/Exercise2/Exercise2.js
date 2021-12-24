import React, { useState } from "react";

import { HeaderTitle } from "../../common";

import { calculatePurchase } from "./utils/helpers";

import "./styles.css";
import { PurchaseDetail } from "./components";

const Exercise2 = () => {
  const [value, setValue] = useState(
    "milk,milk,bread,banana,bread,bread,bread,milk,apple"
  );
  const [purchase, setPurchase] = useState(null);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setPurchase(calculatePurchase(value));
  };

  return (
    <div>
      <HeaderTitle title="Exercise 2" backButton />
      <form className="exercise2-form" onSubmit={handleSubmit}>
        <span className="exercise2-form-description">
          Please enter all the items purchased separated by a comma
        </span>
        <input
          className="exercise2-form-input"
          value={value}
          onChange={handleChange}
        />
        <button type="submit" className="exercise2-form-submit-button">
          Buy
        </button>
        {purchase !== null && <PurchaseDetail data={purchase} />}
      </form>
    </div>
  );
};

export default Exercise2;
