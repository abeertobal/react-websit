import React from 'react';
import "./TwitterIconWithCircleStyles.css"
import { FaTwitter } from 'react-icons/fa';

const TwitterIconWithCircle = () => {
  return (
    <div className="circle">
      <FaTwitter className="twitter-icon" />
    </div>
  );
};

export default TwitterIconWithCircle;