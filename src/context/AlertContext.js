import React, { useState } from "react";

import { ALERT } from "../constants";

const AlertContext = React.createContext(null);
AlertContext.displayName = "AlertContext";

const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState(ALERT.NONE);
  const [alertText, setAlertText] = useState(null);

  return (
    <AlertContext.Provider
      value={{
        alert: alert,
        alertText: alertText,
        success: (text, timeout) => {
          setAlertText(text);
          setAlert(ALERT.SUCCESS);
          setTimeout(() => {
            setAlert(ALERT.NONE);
          }, timeout * ALERT.MINIMUM_TIME_MS || ALERT.MAXIMUM_TIME_MS);
        },
        error: (text, timeout) => {
          setAlertText(text);
          setAlert(ALERT.ERROR);
          setTimeout(() => {
            setAlert(ALERT.NONE);
          }, timeout * ALERT.MINIMUM_TIME_MS || ALERT.MAXIMUM_TIME_MS);
        },
        clear: () => setAlert(ALERT.NONE),
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export { AlertProvider };
export default AlertContext;
