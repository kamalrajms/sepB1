import React from "react";
import { useParams } from "react-router-dom";

export default function Blogs() {
  const { id, name } = useParams();
  return (
    <div>
      <h2>Blog detailes</h2>
      <h3>email:{id}</h3>
      <h3>name:{name}</h3>
    </div>
  );
}
