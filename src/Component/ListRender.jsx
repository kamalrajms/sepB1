import React from "react";

export default function ListRender() {
  const fruits = ["apple", "banana", "orange"];

  const users = [
    // { id: 1, name: "kumar" },
    // { id: 2, name: "rajani" },
    // { id: 3, name: "mandy" },
  ];
  console.log(users.length);

  return (
    <div>
      <h2>fruits data</h2>
      {fruits.map((name, ind) => (
        <h3 key={ind}>{name}</h3>
      ))}

      <h2>user Data</h2>
      {/* person={id: 1, name: "kumar"} */}

      {users.length > 0 ? (
        <div>
          {users.map((person) => (
            <h3 key={person.id}>
              {person.id}.{person.name}
            </h3>
          ))}
        </div>
      ) : (
        <p>no data found</p>
      )}
    </div>
  );
}
