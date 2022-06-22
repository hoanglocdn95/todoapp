import { useRef, useEffect } from 'react';
import { observer } from 'mobx-react';
import { ALERT } from '../constants';
import alertStore from '../stores/alertStore';

const Alert = () => {
  const alert = alertStore.AlertContent;

  const { action, label } = alert.callBack;
  const callBackRef = useRef(null);

  useEffect(() => {
    if (callBackRef.current) {
      callBackRef.current.focus();
    }
  });

  const chooseStyleAlert = () => {
    switch (alert.status) {
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
      <p className="alert__content">{alert.text}</p>
      <button className="alert__clear" onClick={() => alertStore.clear()}>
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

export default observer(Alert);
