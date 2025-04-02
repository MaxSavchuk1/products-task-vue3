import { Product } from '@/helpers/types'
import { ShallowRef } from 'vue'

export const useProductsStore = defineStore('products-store', () => {
  const products: ShallowRef<Product[]> = ref([])
  const total: Ref<number> = ref(0)
  const skip: Ref<number> = ref(20) // 'Out of stock' items will be found with this skip value

  const fetchProducts = () =>
    useApi().products.getProductsPaginated(
      {
        onSuccess: res => {
          products.value = res.products
          total.value = res.total
        }
      },
      {
        skip: skip.value
      }
    )

  const findProductById = (id: number): Product => {
    return products.value.find(product => product.id === id)!
  }

  return {
    products,

    fetchProducts,
    findProductById
  }
})
