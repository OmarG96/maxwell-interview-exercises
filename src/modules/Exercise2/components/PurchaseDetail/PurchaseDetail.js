import React from "react";

import "./styles.css";

const PurchaseDetail = ({ data }) => {
  const { items, totalPriceWithSaved, saved } = data;

  return (
    <div className="purchase-detail">
      <table>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
        {items.map((element) => (
          <tr key={element.item.name}>
            <td>{element.item.name}</td>
            <td>{element.quantity}</td>
            <td>{`$${element.totalPriceWithSaved}`}</td>
          </tr>
        ))}
      </table>
      <span>{`Total price: ${totalPriceWithSaved}`}</span>
      <span>{`You saved $${saved} today`}</span>
    </div>
  );
};

export default PurchaseDetail;
