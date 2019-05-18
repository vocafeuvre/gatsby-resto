import React from "react"

const NotifContext = React.createContext({
    notifs: [],
    notify: text => {},
    notifySuccess: text => {},
    notifyError: text => {}
})

export default NotifContext