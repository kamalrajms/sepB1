import React from "react";
import { useSearchParams } from "react-router-dom";

export default function UseSearchParamHook() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = () => {
    setSearchParams({ category: "lap", price: "50000" });
  };
  return (
    <div>
      <h3>useSearchParams hook eg1</h3>
      <button onClick={handleClick}>change Filter</button>
    </div>
  );
}
