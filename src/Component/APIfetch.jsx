import React, { useEffect, useState } from "react";

export default function APIfetch() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        setLoading(true);
        // api call
        const response = await fetch(
          "https:jsonplaceholder.typicode.com/users",
        );

        if (!response.ok) {
          throw new Error("failed to fetch data");
        }
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, []);

  if (loading) return <h2>loading....!!1</h2>;
  if (error) return <h2>{error}</h2>;
  return (
    <div>
      <h2>user List</h2>
      {user.map((person) => (
        <div
          key={person.id}
          style={{ padding: "10px", border: "2px solid #3333" }}
        >
          <h2>{person.name}</h2>
          <h2>{person.email}</h2>
        </div>
      ))}
    </div>
  );
}
