import React, { useState } from 'react';
import './TaskerForm.css';

const TaskerForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    stateProvince: '',
    postalCode: '',
    country: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/taskers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Application submitted successfully!');
      } else {
        alert('Error submitting application');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div id="tasker-form">
      <h1>Become a Tasker</h1>
      <p>Join our community of skilled Taskers and start earning!</p>
      <form onSubmit={handleSubmit}>
        <h2>Personal Information</h2>
        <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
        <input type="text" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} />

        <h2>Address Information</h2>
        <input type="text" name="addressLine1" placeholder="Address Line 1" value={formData.addressLine1} onChange={handleChange} required />
        <input type="text" name="addressLine2" placeholder="Address Line 2" value={formData.addressLine2} onChange={handleChange} />
        <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required />
        <input type="text" name="stateProvince" placeholder="State/Province" value={formData.stateProvince} onChange={handleChange} />
        <input type="text" name="postalCode" placeholder="Postal Code" value={formData.postalCode} onChange={handleChange} required />
        <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} required />

        <button type="submit">Submit Application</button>
        <button type="reset" onClick={() => setFormData({})}>Reset Form</button>
        <p>Your information will be kept private.</p>
      </form>
    </div>
  );
};

export default TaskerForm;
