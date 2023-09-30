import { computed, onMounted, onUnmounted, ref } from 'vue'

const WINDOW_SIZES = {
  xxs: 0,
  xs: 375,
  s: 768,
  m: 1024,
  l: 1440
}

export default function () {
  const windowWidth = ref(window.innerWidth)

  const windowSize = computed(() => {
    const keys = Object.keys(WINDOW_SIZES)

    let count = 0
    let windowKey = null

    while (keys.length - 1 > count) {
      const leftKey = keys[count]
      const rightKey = keys[count + 1]
      const leftCount = WINDOW_SIZES[leftKey]
      const rightCount = WINDOW_SIZES[rightKey]

      console.log(leftKey, rightKey)
      if (windowWidth.value >= leftCount && windowWidth.value < rightCount) {
        windowKey = leftKey
        break
      }
      count++
    }

    return windowKey ?? 'l'
  })

  const handleResize = () => {
    windowWidth.value = window.innerWidth
  }

  onMounted(() => {
    window.addEventListener('resize', handleResize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })
  return { windowSize }
}
