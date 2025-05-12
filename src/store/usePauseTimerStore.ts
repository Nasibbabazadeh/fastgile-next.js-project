import { create } from "zustand";



interface usePauseTimerState {
  paused:  boolean;
  setPaused: (data: boolean) => void;
  resetPaused : () => void;
}

const usePauseTimerStore = create<usePauseTimerState>((set) => ({
  paused: false, 
  setPaused: (data: boolean) => set({ paused: data }),
  resetPaused: () => set({ paused: false }),
  
}));

export default usePauseTimerStore;
