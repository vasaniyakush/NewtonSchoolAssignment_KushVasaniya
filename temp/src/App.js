import React, { useRef, useState } from 'react';

function App() {
  const inputNameRef = useRef(null);
  const inputEmailRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = inputNameRef.current.value;
    const email = inputEmailRef.current.value;

    setFormData({
      name,
      email,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" ref={inputNameRef} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" ref={inputEmailRef} />
      </div>
      <button type="submit">Submit</button>
      <p>
        Name: {formData.name}
        <br />
        Email: {formData.email}
      </p>
    </form>
  );
}

export default App;