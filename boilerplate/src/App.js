import React, { useRef, useState } from 'react';

function App() {
  // Create ref to Name & Email Input field
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    // replace name and email with vaule from input field using ref
    const name = 'name';
    const email = 'email';

    setFormData({
      name,
      email,
    });
  };

  return (

    // add created ref to the input fields
    <form onSubmit={handleSubmit}>
      <div>
       
        <label htmlFor="name">Name:</label>
        <input type="text" id="name"  />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email"  />
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