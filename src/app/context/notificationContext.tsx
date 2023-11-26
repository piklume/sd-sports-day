"use client";

import { ReactNode, createContext, useState } from "react";
import { NotificationTypes, Notifications } from "../types";

interface ContextType {
  notification: Notifications;
  notify: (notifyObject: Partial<Notifications>) => void;
}

interface Props {
  children: ReactNode;
}

const initialValue = {
  type: NotificationTypes.TOAST,
  message: "",
  isDismissable: true,
  show: false,
};

export const NotificationContext = createContext<ContextType>({
  notification: initialValue,
  notify: () => {},
});

export const NotificationProvider = ({ children }: Props) => {
  const [notification, setNotification] = useState<Notifications>(initialValue);

  const notify = (notifyObject: Partial<Notifications>) =>
    setNotification((prev) => ({ ...prev, ...notifyObject }));

  return (
    <NotificationContext.Provider value={{ notification, notify }}>
      {children}
    </NotificationContext.Provider>
  );
};
