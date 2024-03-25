import React, { useEffect, useState } from 'react'
import '../components/Hreg.css'
import img from'../components/custlog.jpeg'


function Hreg() {

    const [hotelName, setHotelName] = useState('');
  const [location, setLocation] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    console.log('Hotel Name:', hotelName);
    console.log('Location:', location);
    console.log('Contact Number:', contact);
    console.log('Email:', email);
    console.log('Password:', password);
}, [hotelName, location, contact, email, password]);

const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted!');
};
  return (
    <div>
         <div className="hotel">
            <div className="image-section">
            <img src={img} alt="Lu" style={{ height: '530px' }}></img>
                {/* <img src="image2.jpg" alt="Image 2" />
                <img src="image3.jpg" alt="Image 3" /> */}
            </div>
            <div className="form-section">
                <h1>Hotel Registration</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="hotel-name">Hotel Name:</label>
                    <input type="text" id="hotel-name" name="hotel-name" value={hotelName} onChange={(e) => setHotelName(e.target.value)} required />

                    <label htmlFor="location">Location:</label>
                    <input type="text" id="location" name="location" value={location} onChange={(e) => setLocation(e.target.value)} required />

                    <label htmlFor="contact">Contact Number:</label>
                    <input type="tel" id="contact" name="contact" value={contact} onChange={(e) => setContact(e.target.value)} required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Hreg