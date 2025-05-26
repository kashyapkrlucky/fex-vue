/**
 * Represents the user object structure.
 */
export interface User {
  _id: string;
  name: string;
  email: string;
  avatar: string;
}

export interface ApiResponse {
  data: string | boolean | object | null;
  status: boolean;
  message: string;
}

/**
 * State interface for the user store.
 */
export interface UserState {
  user: User | null;
  token: string;
  userSearchResult: User;
}
export interface Meeting {
  _id: string;
  title: string;
  type: string;
  hostId: User;
  guestId: User!;
  status: "pending" | "confirmed";
  createdAt: string!;
  updatedAt: string!;
  scheduledTime?: string;
  endTime: string;
}
