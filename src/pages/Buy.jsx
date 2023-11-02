import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Buy = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    creditCardNumber: '',
    cvc: '',
    purchaseConfirmed: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePurchase = () => {
    if (
      formData.firstName &&
      formData.lastName &&
      formData.address &&
      formData.email &&
      formData.creditCardNumber &&
      formData.cvc
    ) {
      setFormData({
        ...formData,
        purchaseConfirmed: true,
        firstName: '',
        lastName: '',
        address: '',
        email: '',
        creditCardNumber: '',
        cvc: '',
      });

      document.body.style.backgroundColor = 'green';

      toast.success('Thank you for your purchase!', {
        position: 'top-center',
      });
    } else {
      toast.error('Please fill in all fields!', {
        position: 'top-center',
      });
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4 text-chocolate">
        {formData.purchaseConfirmed ? 'Purchase Confirmed' : 'Purchase Your Coffee'}
      </h1>
      <form className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
          className="py-2 px-4 border rounded"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
          className="py-2 px-4 border rounded"
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
          className="py-2 px-4 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="py-2 px-4 border rounded"
        />
        <input
          type="text"
          name="creditCardNumber"
          placeholder="Credit Card Number"
          value={formData.creditCardNumber}
          onChange={handleChange}
          required
          className="py-2 px-4 border rounded"
        />
        <input
          type="text"
          name="cvc"
          placeholder="CVC"
          value={formData.cvc}
          onChange={handleChange}
          required
          className="py-2 px-4 border rounded"
        />
        <button
          onClick={handlePurchase}
          className="bg-chocolate hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
        >
          {formData.purchaseConfirmed ? 'Purchase Confirmed' : 'Purchase'}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Buy;
