export interface SportsResponse {
  id: number;
  event_name: string;
  event_category: string;
  start_time: string;
  end_time: string;
}

export interface SportsCard {
  id: number;
  name: string;
  category: string;
  startTime: string;
  endTime: string;
}

export enum NotificationTypes {
  TOAST = "TOAST",
}

export interface Notifications {
  type: NotificationTypes;
  message: string;
  show: boolean;
  isDismissable?: boolean;
  duration?: number;
}
