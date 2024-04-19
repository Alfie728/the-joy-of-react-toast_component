import { useState, createContext, useCallback } from 'react';
import useKeydown from '../../hooks/useKeydown';

export const ToastContext = createContext();

function ToastProvider({ children }) {
  const [toastList, setToastList] = useState([]);

  const createToast = (message, toastVariant) => {
    const newToast = {
      id: crypto.randomUUID(),
      message,
      toastVariant,
    };
    const newToastList = [...toastList, newToast];
    setToastList(newToastList);
  };

  const dismissToast = id => {
    const newToastList = toastList.filter(toast => {
      return toast.id !== id;
    });
    setToastList(newToastList);
  };

  const handleEscape = useCallback(() => {
    setToastList([]);
  }, []);

  useKeydown('Escape', handleEscape);

  return (
    <ToastContext.Provider value={{ toastList, createToast, dismissToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
