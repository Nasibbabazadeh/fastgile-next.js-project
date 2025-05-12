import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type SelectedQuestion = {
  index: number;
};

type SelectedQuestionsState = {
  selectedQuestions: SelectedQuestion[];
  addSelectedQuestion: (index: number) => void;
  clearSelectedQuestions: () => void;
  removeSelectedQuestion: (index: number) => void;
  resetStore: () => void;
};



export const useSelectedQuestions = create<SelectedQuestionsState>()(
  persist(
    (set) => ({
      selectedQuestions: [],
      addSelectedQuestion: (index) =>
        set((state) => ({
          selectedQuestions: [
            ...state.selectedQuestions,
            { index },
          ],
        })),
      removeSelectedQuestion: (index: number) =>
        set((state) => ({
          selectedQuestions: state.selectedQuestions.filter(
            (question) => question.index !== index
          ),
        })),

      clearSelectedQuestions: () => set(() => ({ selectedQuestions: [] })),

      resetStore: () => {
        set({ selectedQuestions: [] });
        useSelectedQuestions.persist.clearStorage();
      },
    }),
    {
      name: 'selected-questions-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
