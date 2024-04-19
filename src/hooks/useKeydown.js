import { useEffect } from 'react';

const useKeydown = (key, callback) => {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === key) {
        callback(event);
      }
    }
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [key, callback]);
};

export default useKeydown;
