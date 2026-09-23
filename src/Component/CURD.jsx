import React, { useState, useEffect } from "react";

export default function CURD() {
  const [user, setUser] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  const addItem = () => {
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (name && email) {
      fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
        }),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        // res={name:"kjrf",email:"jbrj"}
        .then((data) => {
          const newUser = { ...data, id: user.length + 1 };
          // res={name:"kjrf",email:"jbrj",id:11}
          setUser([...user, newUser]);
          setName("");
          setEmail("");
        });
    }
  };

  const handleDelete = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setUser((user) => {
          // uesr=[{id:1},{id:2},{id:3},{4}...{10}]
          // person={id:1}
          return user.filter((person) => person.id !== id);
        });
      });
  };

  return (
    <div>
      <h1>cure operation</h1>
      <table>
        <thead>
          <tr>
            <td>S.no</td>
            <td>name</td>
            <td>email</td>
            <td>option</td>
          </tr>
        </thead>
        <tbody>
          {user.map((person) => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.name}</td>
              <td>{person.email}</td>
              <td>
                <button>update</button>
                <button onClick={() => handleDelete(person.id)}>delete</button>
              </td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </td>
            <td>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </td>
            <td>
              <button onClick={addItem}>update</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
