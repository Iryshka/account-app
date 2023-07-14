import { ref, watch } from 'vue'

const WINDOW_SIZES = {
  xs: 375,
  s: 768,
  m: 1024,
  l: 1440
}

// export default function useWindowSize() {
//   window.addEventListener('resize', (e) => {
//     self.innerWidth = window.innerWidth
//   })
//
//   const test = ref(window.innerWidth)
//
//   watch(test, () => console.log(test.value))
//
//   return { windowSize }
// }
//
// function getCurrentSize() {
//   let windowSize = null
//
//   for (const key in WINDOW_SIZES) {
//     if (Number(window.innerWidth) <= WINDOW_SIZES[key]) {
//       windowSize = key
//       break;
//     }
//   }
// }
