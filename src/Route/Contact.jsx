import React from "react";
import Page from "../Component/Page";
import useAPI from "../Component/useAPI";

export default function Contact() {
  const {
    data: user,
    loading,
    error,
  } = useAPI("https://jsonplaceholder.typicode.com/users");

  if (loading) return <h2>loading.....</h2>;
  if (error) return <h2>{error}</h2>;
  return (
    <div>
      <h2>User data</h2>
      {user.map((person) => (
        <div
          key={person.id}
          style={{ padding: "20px", border: "2px solid #333" }}
        >
          <h2>{person.id}</h2>
          <h2>{person.name}</h2>
          <h2>{person.email}</h2>
        </div>
      ))}
      <h2>Contact component</h2>
      <Page />
    </div>
  );
}
