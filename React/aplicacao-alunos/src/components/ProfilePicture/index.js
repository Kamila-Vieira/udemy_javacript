import React, { useState, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Container } from './styled';

export default function ProfilePicture({ url, name, size }) {
  const [isValidImage, setIsValidImage] = useState(true);

  useEffect(() => {
    setIsValidImage(!!url);
  }, [url]);

  return (
    <Container size={size}>
      {isValidImage ? (
        <img
          src={url}
          crossOrigin="anonymous"
          alt={name}
          onError={() => setIsValidImage(false)}
        />
      ) : (
        <FaUserCircle size={size} />
      )}
    </Container>
  );
}

ProfilePicture.defaultProps = {
  size: 36,
};

ProfilePicture.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  size: PropTypes.number,
};
