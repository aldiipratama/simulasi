import { PageProps, User } from '@/types';
import axios from 'axios';
import { create } from 'zustand'

interface UserStore {
  users: User[];
  addUser: (users: User[]) => void;
  fetchUsers: () => Promise<void>;
  authUser: {
    user: User | null;
  };
  getAuthUser: (auth: User, canLogin: boolean, canRegister: boolean) => void;
  canLogin: boolean;
  canRegister: boolean;
}

export const useUsers = create<UserStore>((set) => ({
  users: [],
  addUser: (users: User[]) => set({ users }),
  fetchUsers: async () => {
    try {
      const { data } = await axios.get(route('getAllUsers'))
      set({ users: data })
    } catch (error) {
      console.log(error);
    }
  },
  authUser: {
    user: null,
  },
  canLogin: false,
  canRegister: false,
  getAuthUser: (auth: User, canLogin, canRegister) => set({
    authUser: {
      user: auth,
    }, canLogin, canRegister
  }),
}))