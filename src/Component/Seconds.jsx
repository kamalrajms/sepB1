import React, { useEffect, useState } from "react";

export default function Seconds() {
  const [sec, setSec] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSec((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div>
      <h3>timer:{sec}</h3>
    </div>
  );
}

// setTimeout== delay time + function
// setInterval==delay time +function +delay time+ function.... infinite
