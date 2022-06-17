import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Container } from './styles';

export default function ProfilePicture({ url, name }) {
  const [isValidImage, setIsValidImage] = useState(!!url);

  return (
    <Container>
      {isValidImage ? (
        <img src={url} alt={name} onError={() => setIsValidImage(false)} />
      ) : (
        <FaUserCircle size={36} />
      )}
    </Container>
  );
}

ProfilePicture.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
