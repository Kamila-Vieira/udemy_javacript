import React, { useState, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Container } from './styled';
import axios from '../../services/axios';

export default function ProfilePicture({ urls, name, size }) {
  const [isValidImage, setIsValidImage] = useState(true);
  const [url, setUrl] = useState('');

  useEffect(() => {
    if (urls.length > 0) {
      urls.forEach(async (item) => {
        try {
          await axios.get(`/images/${item.filename}`);
          setUrl(item.url);
          // eslint-disable-next-line no-empty
        } catch (_error) {}
      });
    }
  }, [urls]);

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
  urls: PropTypes.arrayOf(
    PropTypes.shape({ url: PropTypes.string, filename: PropTypes.string })
  ).isRequired,
  size: PropTypes.number,
};
