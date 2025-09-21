import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
    isAuthenticated: boolean;
    setAuthenticated: (value: boolean) => void;
}

export const useAuthStore = create<AuthState>()(
    persist<
        AuthState,
        [],
        []
    >(
        (set) => ({
            isAuthenticated: false,
            setAuthenticated: (value: boolean) => set(() => ({ isAuthenticated: value })),
        }),
        {
            name: 'auth-storage', // nombre en localStorage
        }
    )
);
