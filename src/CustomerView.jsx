import React from "react";
import { useSelector } from "react-redux";

export default function CustomerView() {
  //     state= {
  //     customers: customerSlice,
  //   }
  const customer = useSelector((state) => state.customers);
  console.log(customer);

  return (
    <div>
      <h3>customer list</h3>
      {customer.map((person, ind) => (
        <h2 key={ind}>{person}</h2>
      ))}
    </div>
  );
}
