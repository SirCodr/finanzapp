import type { LanguageType } from '@src/types/language'
import { create } from 'zustand'

interface LanguagesState {
  languages: LanguageType[]
  setLanguages: (languages: LanguageType[]) => void
}

export const useLanguagesStore = create<LanguagesState>()((set) => ({
  languages: [],
  setLanguages: (languages) => {
    set(() => ({ languages }))
  }
}))
