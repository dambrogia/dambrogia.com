import {useAtom, useAtomValue} from 'jotai'
import {PropsWithChildren, useEffect} from 'react'
import {Notification as NotificationProps, NotificationTypes, ATOM_NOTIFICATION_STACK} from './model'

function getIcon(type: NotificationTypes): string {
  const map = {
    'info': 'uil-info-circle',
    'warning': 'uil-exclamation-triangle',
    'success': 'uil-check-circle',
    'error': 'uil-times-circle',
  }

  return map[type] ?? 'uil-info-circle'
}

function getAlertClass(type: NotificationTypes): string {
  const map = {
    'info': 'alert-info',
    'warning': 'alert-warning',
    'success': 'alert-success',
    'error': 'alert-error',
  }

  return map[type] ?? 'alert-info'
}



export function Notification(props: PropsWithChildren<NotificationProps>) {
  return <div className={`alert ${getAlertClass(props.type)} shadow-lg mt-4`}>
    <div className={`flex justify-start ${props.iconAlign} px-4`}>
      <i className={`uil ${getIcon(props.type)} mr-4`}></i>
      <div className="alert-text">
        {props.children}
      </div>
    </div>
  </div>
}

export function NotificationStack() {
  let [notifications, setNotifications] = useAtom(ATOM_NOTIFICATION_STACK)

  useEffect(() => {
    if (notifications.length > 0) {
      const timer = setTimeout(() => setNotifications(notifications.slice(1)), notifications[0].durationMs)
      return () => clearTimeout(timer)
    }

  })

  return <div className="c-alerts fixed bottom-0 right-1/2 translate-x-1/2 w-full sm:w-auto">
    <div className="p-4">
      {notifications.map((n, i) => <Notification key={String(i) + n.type} {...n} />)}
    </div>
  </div>
}
