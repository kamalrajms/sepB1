import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function UseParamHook() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);
  return (
    <div>
      <h2>user data</h2>
      {user.map((person) => (
        <h3 key={person.id}>
          <Link to={`/bolgs/:${person.email}/:${person.name}`}>
            {person.name}
          </Link>
        </h3>
      ))}
    </div>
  );
}
