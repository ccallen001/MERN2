import { useState } from 'react';

import './Toast.scss';

interface ToastProps {
  msg: string;
  duration?: number;
  setToastMsg: Function;
}

export default function Toast({ msg, duration, setToastMsg }: ToastProps) {
  const [showing, setShowing] = useState(false);

  setTimeout(() => setShowing(true));

  setTimeout(() => {
    setToastMsg('');
  }, duration || 3000);

  function handleDismiss() {
    setToastMsg('');
  }

  return (
    <div className={`Toast ${showing ? 'showing' : ''}`}>
      <span className="times" onClick={handleDismiss}>
        &times;
      </span>
      <span>{msg}</span>
    </div>
  );
}
