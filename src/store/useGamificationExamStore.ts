import { create } from 'zustand'

interface IGamificationExamResult {
    score: string
    level: string
    completionTime: string
}

interface UserAnswerState {
    userResult: IGamificationExamResult
    setUserAnswer: (data: IGamificationExamResult) => void
}

const useGamificationExamStore = create<UserAnswerState>()((set) => ({
    userResult: {
        score: '',
        level: '',
        completionTime: '',
    },
    setUserAnswer: (data: IGamificationExamResult) =>
        set(() => ({
            userResult: data,
        })),
}))

export default useGamificationExamStore
