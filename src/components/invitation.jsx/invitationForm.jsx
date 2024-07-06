/* eslint-disable no-unreachable */
import React, { useState, useEffect } from 'react';
import Button from '../../ui/button';
import { CgDanger } from 'react-icons/cg';
import { FaRegCheckCircle } from 'react-icons/fa';

const InvitationForm = () => {
  const initialFormData = {
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  };
  const [invitationData, setInvitationData] = useState(initialFormData);
  const [addSelect, setAddSelect] = useState('I am Attending');
  const [notification, setNotification] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInvitationChange = (e) => {
    const { name, value } = e.target;
    setInvitationData({
      ...invitationData,
      [name]: value,
    });
  };

  const invitationSubmit = (e) => {
    e.preventDefault();

    const { name, email, phoneNumber, message } = invitationData;
    try {
      if (!name || !email || !phoneNumber || !addSelect || !message) {
        throw new Error('You should fill all the columns on the form.');
      }

      setNotification('success');
      setErrorMessage('');

      const formData = { ...invitationData };
      console.log('Form Data:', formData);

      setInvitationData(initialFormData);
      setAddSelect('I am Attending');
    } catch (error) {
      setNotification('failure');
      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
        setErrorMessage('');
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [notification]);

  return (
    <form onSubmit={invitationSubmit} method="POST">
      <div className="first">
        <input type="text" placeholder="Your Name" name="name" value={invitationData.name} onChange={handleInvitationChange} />
        <input type="email" placeholder="Your Email" name="email" value={invitationData.email} onChange={handleInvitationChange} />
      </div>
      <div className="second">
        <input type="number" placeholder="Your Number" name="phoneNumber" value={invitationData.phoneNumber} onChange={handleInvitationChange} />
        <select value={addSelect} name="select" onChange={(e) => setAddSelect(e.target.value)}>
          <option value="I am Attending">I am Attending</option>
          <option value="Skip for Attended">Skip for Attended</option>
        </select>
      </div>
      <div className="third">
        <textarea placeholder="Message" name="message" value={invitationData.message} onChange={handleInvitationChange} />
      </div>
      <div className="actions">
        <Button className="submit" type="submit">
          Submit
        </Button>
      </div>
      {notification === 'success' && (
        <div className="notif-success">
          <FaRegCheckCircle />
          <p>Form data successfully sent to your email!</p>
        </div>
      )}
      {notification === 'failure' && errorMessage && (
        <div className="notif-failure">
          <CgDanger />
          <p>{errorMessage}</p>
        </div>
      )}
    </form>
  );
};

export default InvitationForm;
