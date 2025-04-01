export const useCartStore = defineStore(
  'cart-store',
  () => {
    const cartProductsIds: Ref<number[]> = ref([])

    const addToCart = (productId: number) => {
      cartProductsIds.value.push(productId)
    }

    const removeFromCart = (productId: number) => {
      cartProductsIds.value = cartProductsIds.value.filter(
        id => productId !== id
      )
    }

    const isInCart = (productId: number) =>
      cartProductsIds.value.includes(productId)

    return {
      cartProductsIds,

      addToCart,
      removeFromCart,
      isInCart
    }
  },
  // using persist plugin for saving cart
  {
    persist: {
      storage: localStorage,
      pick: ['cartProductsIds']
    }
  }
)
