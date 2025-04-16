import type { CartItem } from '@/helpers/types'

export const useCartStore = defineStore(
  'cart-store',
  () => {
    const cartProducts: Ref<CartItem[]> = ref([])

    const totalPrice = computed(() =>
      cartProducts.value.reduce(
        (acc, cartItem) => acc + cartItem.price * cartItem.amount,
        0
      )
    )

    const addToCart = (productId: number, price: number) => {
      cartProducts.value.push({ productId, amount: 1, price })
    }

    const removeFromCart = (productId: number) => {
      cartProducts.value = cartProducts.value.filter(
        cartItem => productId !== cartItem.productId
      )
    }

    const isInCart = (productId: number) =>
      cartProducts.value.some(cartItem => cartItem.productId === productId)

    const updateAmount = (productId: number, delta: 1 | -1) => {
      cartProducts.value = cartProducts.value.map(cartItem =>
        cartItem.productId === productId
          ? { ...cartItem, amount: Math.max(1, cartItem.amount + delta) }
          : cartItem
      )
    }

    const increaseAmount = (productId: number) => updateAmount(productId, 1)

    const decreaseAmount = (productId: number) => updateAmount(productId, -1)

    const clearCart = () => {
      cartProducts.value = []
    }

    return {
      cartProducts,
      totalPrice,

      addToCart,
      removeFromCart,
      isInCart,
      increaseAmount,
      decreaseAmount,
      clearCart
    }
  },
  // using persist plugin for saving cart
  {
    persist: {
      storage: localStorage,
      pick: ['cartProducts']
    }
  }
)
