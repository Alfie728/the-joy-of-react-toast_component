import { useContext } from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider';

function ToastShelf() {
  const { toastList } = useContext(ToastContext);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toastList.map(({ id, message, toastVariant }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast id={id} toastVariant={toastVariant} message={message} />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
