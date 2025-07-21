export const useLoader = (initialState = false) => {
  const loading = ref(initialState)

  const setLoading = (value: boolean) => {
    loading.value = value
  }

  return {
    loading,
    setLoading
  }
}
