import { create } from "zustand";

interface LevelUpState {
  levelUp: boolean;
  oldLevel: string;
  newLevel: string;
}

interface UseLevelUpState {
  levelUpData: LevelUpState;
  setLevelUp: (data: LevelUpState) => void;
}

const useLevelUpStore = create<UseLevelUpState>((set) => ({
  levelUpData: {
    levelUp: false,
    oldLevel: "",
    newLevel: "",
  },
  setLevelUp: (data: LevelUpState) => set({ levelUpData: data }),
}));

export default useLevelUpStore;
