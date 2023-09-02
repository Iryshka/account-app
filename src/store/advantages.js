import { defineStore } from 'pinia'
import firstWindow from '@/assets/images/select-1-mobile.svg'
import secondWindow from '@/assets/images/select-2-mobile.svg'

export const useAdvantagesStore = defineStore('advantages', {
  state: () => {
    return {
      activeImage: null,
      options: [
        {
          id: 1,
          label: 'Connect your bank account',
          image: 'src/assets/images/Group 11990.jpg'
        },
        {
          id: 2,
          label: 'Issue and send invoices to your clients',
          image: 'src/assets/images/Group 11990 (1).jpg'
        },
        {
          id: 3,
          label: 'Upload invoices for the period',
          image: 'src/assets/images/Group 11992.jpg'
        },
        {
          id: 4,
          label: 'Our accountant will create and file the report',
          image: 'src/assets/images/Group 12010.jpg'
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
