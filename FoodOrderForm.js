import React, { useState } from "react";

function FoodOrderForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [order, setOrder] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order Successful!\nYour order was ${order}.\nPlease show your confirmation number for pickup.`);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
        name="name"
        id="name"
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        />
        <label htmlFor="phone">Phone:</label>
        <input
        name="phone"
        id="phone"
        type="text"
        onChange={(e) => setPhone(e.target.value)}
        value={phone}
        />
        <label htmlFor="address">Address:</label>
        <input
        name="address"
        id="address"
        type="text"
        onChange={(e) => setAddress(e.target.value)}
        value={address}
        />
        <label htmlFor="order">Order:</label>
        <input
        name="order"
        id="order"
        type="text"
        onChange={(e) => setOrder(e.target.value)}
        value={order}
        />
        <button type="submit">Submit Order</button>
      </form>
    </div>
  )
}

export default FoodOrderForm;
