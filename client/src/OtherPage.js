import React from 'react';
import { Link } from 'react-router-dom';

const otherPage = () => {
  return (
    <div>
      Other page!
      <Link to="/">Go back home</Link>
    </div>
  );
};

export default otherPage;