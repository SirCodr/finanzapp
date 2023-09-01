import type { LanguageType } from '@src/types/language'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface LanguagesState {
  languages: LanguageType[]
  setLanguages: (languages: LanguageType[]) => void
}

export const useLanguagesStore = create<LanguagesState>()(
  persist((set) => ({
    languages: [],
    setLanguages: (languages) => {
      set(() => ({ languages }))
    }
  }), {
    name: 'languages-storage'
  })
)
