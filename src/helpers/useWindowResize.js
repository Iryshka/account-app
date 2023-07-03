import { ref, onMounted } from 'vue'

export default function useWindowResize() {
  const modifier = ref(window.innerWidth >= 820 ? 'desktop' : 'mobile')

  function handleWindowResize() {
    modifier.value = window.innerWidth >= 820 ? 'desktop' : 'mobile'
  }

  onMounted(() => {
    window.addEventListener('resize', handleWindowResize)
  })

  return { modifier }
}
