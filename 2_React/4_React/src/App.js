import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", country: "", 
    streetAddress: "",city:"", state: "",postalCode:"",comments:false,candidates:false,offers:false,pushNotifications:""});
  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({ ...prev, [name]: type=="checkbox"? checked:value }));
  }
  function submitHandler(event){
    event.preventDefault();
    console.log("printing form data")
    console.log(formData)
  }
  return (
    <div className='flex flex-col items-center'>
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName"> First Name :</label>
        <br />
        <input type="text" name="firstName" id="firstName" onChange={changeHandler} placeholder='Yash' value={formData.firstName}
          className='outline' />
        <br />
        <br />
        <label htmlFor="lastName">   Last Name :</label>
        <br />
        <input type="text" name="lastName" id="lastName" onChange={changeHandler} placeholder='Heda' value={formData.lastName}
          className='outline' />
        <br />
        <br />
        <label htmlFor="email">   Email :</label>
        <br />
        <input type="email" name="email" id="email" onChange={changeHandler} placeholder='yashheda5@outlook.com ' value={formData.email}
          className='outline' />
        <br />
        <br />
        <label htmlFor="country">   Country :</label>
        <br />
        <select name="country" className='outline' onChange={changeHandler} value={formData.country} id="country">
          <option value="">India</option>
          <option value="">Russia</option>
          <option value="">Nepal</option>
          <option value="">Israel</option>
        </select>
        <br />
        <br />
        <label htmlFor="streetAddress">  Street Address :</label>
        <br />
        <input type="text" name="streetAddress" id="streetAddress" onChange={changeHandler} placeholder='Down Town ' value={formData.streetAddress}
          className='outline' />
        <br />
        <br />
        <label htmlFor="city">  City :</label>
        <br />
        <input type="text" name="city" id="city" onChange={changeHandler} placeholder='Bangalore ' value={formData.city}
          className='outline' />
        <br />
        <br />
        <label htmlFor="state">  State :</label>
        <br />
        <input type="text" name="state" id="state" onChange={changeHandler} placeholder='karnataka' value={formData.state}
          className='outline' />
        <br />
        <br />
        <label htmlFor="postalCode">  Postal Code :</label>
        <br />
        <input type="number" name="postalCode" id="postalCode" onChange={changeHandler} placeholder='karnataka' value={formData.postalCode}
          className='outline' />

<br />
<br />
          <fieldset>
            <legend>By Email</legend>
            <input type="checkbox" name="comments" id="comments" checked={formData.comments} onChange={changeHandler}  />
            <label htmlFor="comments"> Comments</label>
            <br />
            <br />
            <input type="checkbox" name="candidates" id="candidates" checked={formData.candidates} onChange={changeHandler}  />
            <label htmlFor="candidates"> Candidates</label>
            <br />
            <br />
            <input type="checkbox" name="offers" id="offers" checked={formData.offers} onChange={changeHandler}  />
            <label htmlFor="offers"> Offers</label>
            <br />
            <br />
          </fieldset>
          <fieldset>
            <legend>Push Notifications </legend>
            <input type="radio" name="pushNotifications" onChange={changeHandler} value="everything" id="everything" />
            <label htmlFor="everything"> Everything</label>
            <br />
            <br />
            <input type="radio" name="pushNotifications" onChange={changeHandler} value="Same as Email"  id="Same as Email" />
            <label htmlFor="Same as Email"> Same as Email</label>
            <br />
            <br />
            <input type="radio" name="pushNotifications" onChange={changeHandler} value="nothing"  id="nothing" />
            <label htmlFor="nothing"> No push Notifications</label>
          </fieldset>
          <br />
          <br />
          
          <button className='bg-blue-500 text-white rounded py-2 px-4' >Save</button>


      </form>

    </div>
  );
}

export default App;
