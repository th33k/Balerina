// Import necessary libraries
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './seller.css';

const Seller = () => {
  const [sellerData, setSellerData] = useState(null);

  useEffect(() => {
    // Fetch data from MongoDB (Assuming you have an API endpoint set up)
    axios.get('/api/seller')
      .then(response => setSellerData(response.data))
      .catch(error => console.error("There was an error fetching the data!", error));
  }, []);

  if (!sellerData) return <p>Loading...</p>;

  return (
    <div className="seller-container">
      <div className="seller-header">
        <img src={sellerData.profilePic} alt="Profile" className="profile-pic" />
        <div className="seller-info">
          <h1>{sellerData.name}</h1>
          <p>{sellerData.role}</p>
          <p>{sellerData.username}</p>
        </div>
      </div>
      <hr className="divider" />
      <div className="orders-section">
        <h2>Your <span>Orders</span></h2>
        {sellerData.orders.map((order, index) => (
          <div key={index} className="order-item">
            <p className="order-title">• {order.title}</p>
            <p className="order-details">{order.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Seller;
