import { defineStore } from 'pinia'

export const useAppStore = defineStore({
  id: 'appConfig',
  state: () => {
    return {
      downloadUrl: '',
    }
  },
})
