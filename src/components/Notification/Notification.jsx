// import React from 'react'
import css from './Notifications.module.css'

const Notification = ({notificationText}) => {
  return (
    <>
    <p className={css.text}>{notificationText}</p>
    </>
  )
}

export default Notification