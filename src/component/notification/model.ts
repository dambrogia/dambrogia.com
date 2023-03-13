import {atom} from 'jotai'
import {ReactNode} from 'react'

export enum NotificationTypes {
  info = 'info',
  success = 'success',
  warning = 'warning',
  error = 'error'
}

export type Notification = {
  type: NotificationTypes
  durationMs?: number;
  iconAlign?: 'items-start' | 'items-center' | 'items-end'
  children?: ReactNode | null
}


export const createNotification = (): Notification => ({
  type: NotificationTypes.info,
  durationMs: 3000,
  iconAlign: 'items-center',
})

export var ATOM_NOTIFICATION_STACK = atom<Notification[]>([])
