import React from 'react';
import './invitation.css';
import { invitationImage } from '../../data/weddingData';
import InvitationForm from './invitationForm';

const Invitation = () => {
  return (
    <div className="invitation" style={{ backgroundImage: `url(${invitationImage.image})` }}>
      <div className="layer">
        <div className="invitation-form">
          <div className="header">
            <h1>RSVP</h1>
            <p>Please reserve before January 10th, 2025</p>
          </div>
          <div className="body">
            <InvitationForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invitation;
