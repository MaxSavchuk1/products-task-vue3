import type { RawAxiosRequestHeaders, ResponseType } from 'axios'

export type ApiOptions = {
  baseURL?: string
  timeout?: number
  headers?: RawAxiosRequestHeaders
  responseType?: ResponseType
  dataOnly?: boolean
  signal?: AbortSignal
  silent?: boolean
  successNotification?: string
  onRequest?: (...args: any[]) => any
  onSuccess?: (...args: any[]) => any
  onError?: (...args: any[]) => any
  onFinally?: (...args: any[]) => any
  wrapResponse?: (...args: any[]) => any
}

export type Product = {
  id: number
  title: string
  description: string
  price: number
  thumbnail: string
  discountPercentage: number
  rating: number
  stock: number
  tags: Array<string>
  availabilityStatus: string
  sku: string
}

export type CartItem = {
  productId: number
  amount: number
  price: number
}

export type Query = Record<string, string | number | string[] | undefined>

export interface Notification {
  id: string
  type: string
  title: string
  message: string
  autoClose: boolean
  duration: number
}

export type CreateNotification = {
  (options: {
    type?: string
    title?: string
    message?: string
    autoClose?: boolean
    duration?: number
  }): void
}
