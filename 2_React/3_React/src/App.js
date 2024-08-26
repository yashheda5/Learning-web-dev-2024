import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData(prevFormData => {
      const updatedFormData = {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value // Handle checkbox and other input types correctly
      };
      console.log(updatedFormData); // Log the updated formData to the console
      return updatedFormData;
    });
  }

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isVisible: true,  // Initialize as boolean (was a string before)
    mode: "",        // Initialize as empty string (kept as a string)
    favCar: ""
  });
  function submitHandler(event) {
    event.preventDefault();
    console.log("printing entire form data");
    console.log(formData);
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="firstName"
          placeholder='First Name'
          onChange={changeHandler}
          value={formData.firstName}
        />
        <br />
        <br />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={changeHandler}
          value={formData.lastName}
        />
        <br />
        <br />
        <input
          type="email"
          onChange={changeHandler}
          placeholder='Enter your email here'
          name="email"
          value={formData.email}
        />
        <br />
        <br />
        <textarea
          name="comments"
          placeholder='Enter your comments'
          onChange={changeHandler}
          value={formData.comments}
        />
        <br />
        <br />
        <input
          type="checkbox"
          onChange={changeHandler}
          checked={formData.isVisible} // Correctly use the boolean for checked
          name="isVisible"
        />
        <label htmlFor="isVisible">Am I visible</label>
        <br />
        <br />
        <input
          type="radio"
          onChange={changeHandler}
          checked={formData.mode === "Online Mode"} // Ensure the value comparison matches exactly
          name="mode"
          value="Online Mode"
          id="Online-Mode"
        />
        <label htmlFor="Online-Mode">Online Mode</label>
        <input
          type="radio"
          onChange={changeHandler}
          checked={formData.mode === "Offline Mode"} // Ensure the value comparison matches exactly
          name="mode"
          value="Offline Mode"
          id="Offline-Mode"
        />
        <label htmlFor="Offline-Mode">Offline Mode</label>
        <br />
        <br />
        <label htmlFor="favCar">Tell Me about ur favoruite car :    &nbsp;</label>
        <select name="favCar" onChange={changeHandler} value={formData.favCar} id="">
          <option value="toyota">Toyota</option>
          <option value="honda">Honda</option>
          <option value="ford">Ford</option>
          <option value="chevrolet">Chevrolet</option>
          <option value="bmw">BMW</option>

        </select>
        <br />
        <br />
        <button >Submit</button>

      </form>
    </div>
  );
}

export default App;
