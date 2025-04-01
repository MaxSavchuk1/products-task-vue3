import { Product } from '@/helpers/types'
import { ShallowRef } from 'vue'

export const useProductsStore = defineStore('products-store', () => {
  const products: ShallowRef<Product[]> = ref([])
  const total: Ref<number> = ref(0)
  const skip: Ref<number> = ref(20) // with this skip value 'Out of stock' items will be found

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

  return {
    products,

    fetchProducts
  }
})
