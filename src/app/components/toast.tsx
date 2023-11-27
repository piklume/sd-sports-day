import { useCallback, useContext, useEffect, useMemo, useRef } from "react";

import { NotificationContext } from "../context/notificationContext";
import { NotificationTypes } from "../types";

const Toast = () => {
  const { notification, notify } = useContext(NotificationContext);
  const { type, message, show, isDismissable, duration = 5000 } = notification;

  const timeoutRef = useRef<NodeJS.Timeout>();

  const showToast = useMemo(
    () => type === NotificationTypes.TOAST && show,
    [type, show]
  );

  const closeToast = useCallback(() => {
    notify({ show: false });
    clearTimeout(timeoutRef.current); // clear timeout case when called from dismiss button
  }, [notify]);

  useEffect(() => {
    if (showToast) {
      timeoutRef.current = setTimeout(() => closeToast(), duration);
    }
  }, [closeToast, showToast, duration]);

  return (
    <>
      {showToast && (
        <div
          className="fixed top-16 max-w-xs bg-gray-100 border border-gray-700 rounded-xl shadow-lg"
          role="alert"
        >
          <div className="flex p-4">
            <div className="flex-shrink-0">
              <svg
                className="flex-shrink-0 h-4 w-4 text-red-500 mt-0.5"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
              </svg>
            </div>
            <div className="ms-3">
              <p className="text-sm text-gray-700 dark:text-gray-400">
                {message}
              </p>
            </div>
            {isDismissable && (
              <div className="ms-3">
                <button
                  type="button"
                  className="inline-flex flex-shrink-0 justify-center items-center h-5 w-5 rounded-lg text-black hover:text-red-500 opacity-50 hover:opacity-100 focus:outline-none focus:opacity-100"
                  onClick={closeToast}
                >
                  <span className="sr-only">Close</span>
                  <svg
                    className="flex-shrink-0 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Toast;
