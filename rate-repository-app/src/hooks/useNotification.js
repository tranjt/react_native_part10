import { useState } from 'react';

const useNotification = () => {
  const [notification, setNotification] = useState('');
  let timeoutID;

  const displayNotification = (text) => {
    setNotification(text);
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
      setNotification('');
    }, 5000);
  };

  return [notification, displayNotification];
};

export default useNotification;