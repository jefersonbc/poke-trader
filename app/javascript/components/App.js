import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Trade from './Trades/Trade'

const App = () => {
    return(
        <Switch>
            <Route exact path="/" component={Trade} />
        </Switch>
    )
}

export default App