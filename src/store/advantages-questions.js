import { defineStore } from 'pinia'
import firstWindow from '@/assets/images/select-1-mobile.svg'
import secondWindow from '@/assets/images/select-2-mobile.svg'

export const useAdvantagesQuestionsStore = defineStore('advantages-questions', {
  state: () => {
    return {
      activePictureId: 1,
      pictures: [
        {
          id: 1,
          link: firstWindow,
          label: 'Connect your bank account'
        },
        {
          id: 2,
          link: secondWindow,
          label: 'Issue and send invoices to your clients'
        }
      ]
    }
  },
  getters: {
    activePicture() {
      return this.pictures.find((picture) => this.activePictureId === picture.id)
    }
  },

  actions: {
    switchPictures(id) {
      this.pictures = id
    },
    changePicture() {
      this.activePictureId = this.activePictureId === 1 ? 2 : 1
    }
  }
})
