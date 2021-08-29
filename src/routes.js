import Login from "./components/Auth/Login"
import Chat from "./components/Chats/Chat"
import Main from "./components/Main"
import { CHAT_ROUTE, LOGIN_ROUTE, MAIN_ROUTE } from "./utils/utils"

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
    {
        path: MAIN_ROUTE,
        Component: Main
    }
]

export const privateRoutes = [
    {
        path: CHAT_ROUTE,
        Component: Chat
    },
    {
        path: MAIN_ROUTE,
        Component: Main
    }
]