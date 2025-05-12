import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface UserAnswerState {
  userAnswers: Record<string, string | string[]>;
  setUserAnswer: (questionId: string, answer: string | string[]) => void;
  resetAnswers: () => void;
  resetStore: () => void;
}

const useUserAnswersStore = create<UserAnswerState>()(
  persist(
    (set) => ({
      userAnswers: {},
      setUserAnswer: (questionId, answer) =>
        set((state) => ({
          userAnswers: {
            ...state.userAnswers,
            [questionId]: answer,
          },
        })),
      resetAnswers: () => set({ userAnswers: {} }),
      resetStore: () => {
        set({ userAnswers: {} });
        useUserAnswersStore.persist.clearStorage();
      },
    }),
    {
      name: 'user-answers-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useUserAnswersStore;
