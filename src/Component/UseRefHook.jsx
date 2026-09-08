import React, { useEffect, useState, useRef } from "react";

export default function UseRefHook() {
  // eg1
  const inputRef = useRef();
  const focusinput = () => {
    inputRef.current.focus();
  };
  // eg2
  const [sec, setSec] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSec((prev) => prev + 1);
    }, 500);
    return () => clearInterval(intervalRef.current);
  }, []);
  // eg3

  const [newProduct, setNewProduct] = useState(true);
  const [imgURL, setImgURL] = useState("");
  const imgRef = useRef(0);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setImgURL(preview);
      setNewProduct(false);
    }
  };
  //   console.log(imgURL);

  return (
    <div>
      {/* eg1 */}
      <nav>
        <input type="text" ref={inputRef} />
        <button onClick={focusinput}>focus</button>
      </nav>
      {/* eg2 */}
      <nav>
        <h2>seconds:{sec}</h2>
        <button onClick={() => clearInterval(intervalRef.current)}>stop</button>
      </nav>
      {/* eg3 */}
      <input type="file" ref={imgRef} hidden onChange={handleImage} />
      {newProduct ? (
        <div className="image" onClick={() => imgRef.current.click()}>
          upload image....
        </div>
      ) : (
        <img
          src={imgURL}
          className="org"
          onClick={() => imgRef.current.click()}
        />
      )}
    </div>
  );
}
