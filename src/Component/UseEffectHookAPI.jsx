import React, { useState, useEffect } from "react";

export default function UseEffectHookAPI() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch,axios
    fetch("https://jsonplaceholder.typicode.com/users")
      // api=[{},{},{}....{}]        //raw data
      .then((res) => res.json())
      // api=[{},{},{}.....{}]        //obj data
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  }, []);

  console.log(user);

  return (
    <div>
      <h2>API call</h2>

      {loading ? (
        <h3>loading....</h3>
      ) : (
        <div>
          {user.map((person) => (
            <div key={person.id} style={{ border: "2px solid black" }}>
              <h3>{person.name}</h3>
              <h3>{person.username}</h3>
              <h3>{person.email}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
