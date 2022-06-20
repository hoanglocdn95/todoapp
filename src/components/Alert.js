import { useContext, useRef, useEffect } from 'react';
import AlertContext from '../context/AlertContext';
import { ALERT } from '../constants';

const Alert = () => {
  const alert = useContext(AlertContext);
  const { action, label } = alert.callBack;
  const callBackRef = useRef(null);

  useEffect(() => {
    if (callBackRef.current) {
      callBackRef.current.focus();
    }
  });

  const chooseStyleAlert = () => {
    switch (alert.alert) {
      case ALERT.SUCCESS:
        return 'alert--success';
      case ALERT.ERROR:
        return 'alert--error';
      default:
        return 'alert--none';
    }
  };
  return (
    <div className={`alert ${chooseStyleAlert()}`}>
      <p className="alert__content">{alert.alertText}</p>
      <button className="alert__clear" onClick={alert.clear}>
        DISMISS
      </button>
      {label && (
        <button className="alert__clear" onClick={action} ref={callBackRef}>
          {label}
        </button>
      )}
    </div>
  );
};

export default Alert;
