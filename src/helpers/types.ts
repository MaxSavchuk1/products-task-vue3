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
  id: string | number
  title: string
  price: number
  thumbnail: string
  discountPercentage: number
  rating: number
  stock: number
  category: string
  availabilityStatus: string
}

export type Query = Record<string, string | number | string[] | undefined>
