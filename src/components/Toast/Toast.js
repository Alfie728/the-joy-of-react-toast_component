import React, { useContext } from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';
import { ToastContext } from '../ToastProvider';
import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';
import { on } from 'process';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ id, toastVariant, message }) {
  const { dismissToast } = useContext(ToastContext);
  const ToastIcon = ICONS_BY_VARIANT[toastVariant] || Info;
  return (
    <div className={`${styles.toast} ${styles[toastVariant]}`}>
      <div className={styles.iconContainer}>
        <ToastIcon size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{toastVariant} - </VisuallyHidden>
        {message}
      </p>
      <button
        className={styles.closeButton}
        onClick={() => dismissToast(id)}
        aria-label="Dismiss message"
        aria-live="off"
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
