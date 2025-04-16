import { CreateNotification, Notification } from '@/helpers/types'
import { createUUID } from '@/helpers/utils'

const defaultNotificationOptions = {
  type: 'info',
  title: '',
  message: '',
  autoClose: true,
  duration: 5
}

export const useNotifications = () => {
  const notifications = ref<Notification[]>([])

  const createNotification: CreateNotification = options => {
    const _options = Object.assign({ ...defaultNotificationOptions }, options)

    notifications.value.push(
      ...[
        {
          id: createUUID(),
          ..._options
        }
      ]
    )
  }

  const removeNotifications = (id: string) => {
    const index = notifications.value.findIndex(item => item.id === id)
    if (index !== -1) notifications.value.splice(index, 1)
  }

  // const stopBodyOverflow = () => {
  //   document && document.body.classList.add(...['hide-overflow'])
  // }

  // const allowBodyOverflow = () => {
  //   document && document.body.classList.remove(...['hide-overflow'])
  // }

  return {
    notifications,
    createNotification,
    removeNotifications
  }
}
