import React from "react";
import { useSearchParams } from "react-router-dom";

export default function Page() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const itemPerpage = 5;
  // []
  // allItem=[,,,,,,,,]
  const allItem = Array.from({ length: 22 }, (_, ind) => ({ id: ind + 1 }));
  // allItem=[{id:1},{id:2},,{id:3},,,,,,{id:20}]

  //clculation

  const totalPage = Math.ceil(allItem.length / itemPerpage);
  const startInd = (currentPage - 1) * itemPerpage; //0  5   10
  const endInd = startInd + itemPerpage; //5   10    15
  const currentItem = allItem.slice(startInd, endInd);
  //   const currentItem=[{1},{2},{3},{4},{5}]
  console.log(currentItem);

  //   normal
  // 4.5=5
  // 4.2=4
  // 4.7=5
  // ceil
  // 4.5=5
  // 4.7=5
  // 4.2=5

  const gotoPage = (pageNum) => {
    if (pageNum >= 1 && pageNum <= totalPage) {
      setSearchParams({ page: pageNum });
    }
  };

  const nextPage = () => {
    if (currentPage < totalPage) {
      gotoPage(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage > 1) {
      gotoPage(currentPage - 1);
    }
  };

  return (
    <div>
      <h2>useSearchParams hook</h2>
      <h1>Product data</h1>
      {currentItem.map((item) => (
        <div key={item.id}>
          <h1>{item.id}</h1>
        </div>
      ))}

      <div>
        <button onClick={prevPage}>previous</button>
        <div>
          {/* [1,2,3,4,5] */}
          {Array.from({ length: totalPage }, (_, ind) => ind + 1).map(
            (pageNum) => (
              <button key={pageNum} onClick={()=>gotoPage(pageNum)}>{pageNum}</button>
            ),
          )}
        </div>
        <button onClick={nextPage}>next</button>
      </div>
    </div>
  );
}
