import React from 'react';
import './TaskerForm.css';

const TaskerForm = () => {
  return (
    <div id="tasker-form">
      <h1>Become a Tasker</h1>
      <p>Join our community of skilled Taskers and start earning!</p>
      <form>
        <h2>Personal Information</h2>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />
        <input type="text" placeholder="Phone Number" />

        <h2>Upload Profile Picture</h2>
        <input type="file" accept="image/*" required />

        <h2>Upload Gig Cover Photo</h2>
        <input type="file" accept="image/*" required />

        <h2>Address Information</h2>
        <input type="text" placeholder="Address Line 1" required />
        <input type="text" placeholder="Address Line 2" />
        <input type="text" placeholder="City" required />
        <select>
          <option>State/Province</option>
        </select>
        <input type="text" placeholder="Postal Code" required />
        <select>
          <option>Country</option>
        </select>

        <button type="submit">Submit Application</button>
        <button type="reset">Reset Form</button>
        <p>Your information will be kept private.</p>
      </form>
    </div>
  );
};

export default TaskerForm;
