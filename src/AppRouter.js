import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { privateRoutes, publicRoutes } from './routes'
import { CHAT_ROUTE, LOGIN_ROUTE, MAIN_ROUTE } from './utils/utils'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useContext } from 'react'
import { Context } from './index'

function AppRouter() {
    const { auth } = useContext(Context)
    const [user] = useAuthState(auth)
    return user ? (
        <Switch>
            {privateRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} component={Component} exact={true} />


            )}
            {privateRoutes.map(({ path, Component }) =>
                console.log(path, Component)


            )}
            <Redirect to={MAIN_ROUTE} />
        </Switch>
    ) :
        (
            <Switch>
                {publicRoutes.map(({ path, Component }) =>
                    <Route key={path} path={path} component={Component} exact={true} />

                )}
                <Redirect to={MAIN_ROUTE} />
            </Switch>
        )

}


export default AppRouter
