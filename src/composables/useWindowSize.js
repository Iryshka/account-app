import { ref } from 'vue'

const WINDOW_SIZES = {
  xs: 375,
  s: 768,
  m: 1024,
  l: 1440
}
export default function useWindowSize() {
  const windowSize = ref(null)

  const windowWidth = window.innerWidth
  for (const key in WINDOW_SIZES) {
    if (Number(windowWidth) <= WINDOW_SIZES[key]) {
      windowSize.value = key
      break
    }
  }

  // const modifier = ref(window.innerWidth >= 820 ? 'desktop' : 'mobile')
  //
  // function handleWindowResize() {
  //   modifier.value = window.innerWidth >= 820 ? 'desktop' : 'mobile'
  // }
  //
  // onMounted(() => {
  //   window.addEventListener('resize', handleWindowResize)
  // })

  return { windowSize }
}
