import React, { useState } from "react";

export default function RegFrom() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });
  const handleChange = (e) => {
    const {name,value}=e.target
    setFormData({
      ...formData,                          // previous data
      [name]: value,                        // updated data
    //   [e.target.name]: e.target.value,    // updated data
    });
  };
  return (
    <div>
      <h2>Multiple fields</h2>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter a name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter a email"
      />
      <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
        placeholder="Enter a age"
      />
    </div>
  );
}
