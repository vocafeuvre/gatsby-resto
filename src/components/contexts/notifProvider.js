import React, { useState } from "react"
import NotifContext from "./notifContext"

export const DEFAULT_NOTIF = "DEFAULT"
export const SUCCESS_NOTIF = "SUCCESS"
export const ERROR_NOTIF = "ERROR"

const NotifProvider = ({children}) => {
    const [notifs, setNotifs] = useState([])

    const notifySuccess = text => notify(text, SUCCESS_NOTIF)
    const notifyError = text => notify(text, ERROR_NOTIF)

    const notify = (text, type = DEFAULT_NOTIF) => {
        const newNotif = {
            id: (new Date()).getTime(),
            text: text,
            type: type
        }

        setNotifs(notifs => {
            return [...notifs, newNotif]
        })


        setTimeout(() => {
            setNotifs(notifs => {
                return notifs.filter(val => {
                    return val.id !== newNotif.id
                })
            })
        }, 5000)
    }

    return (
        <NotifContext.Provider
            value={{
                notifs,
                notify,
                notifySuccess,
                notifyError
            }}
        >
            {children}
        </NotifContext.Provider>
    )
}

export default NotifProvider