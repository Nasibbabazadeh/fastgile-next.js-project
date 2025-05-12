import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface IAuthData {
    token: string;
}

interface IState {
    authData: IAuthData | null;
}

interface IAction {
    setAuth: (authData: IAuthData | null) => void;
    resetToken: () => void;
}

export const useAuthStore = create<IState & IAction>()(
    persist<IState & IAction>(
        (set) => ({
            authData: null,
            setAuth: (authData) => set(() => ({ authData })),
            resetToken: () => {
                set({ authData: null });
                useAuthStore.persist.clearStorage();
            }


        }),
        {
            name: "__auth",
        }
    )
);
