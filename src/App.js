import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import Home from './pages/Home/index'
import Map from './pages/Map/index'
import City from './pages/City/index'
import NoFound from './pages/NotFound/404'
class App extends React.Component {
  render() {
    return (
      <Router>
        {/* 设置匹配规则 */}

        <Switch>
          {/* 如果写了Redirect，且用了from这个属性，就一定要写Switch，要不然会一直跳到/home这个地址 */}
          <Redirect exact from="/" to="/home" />
          <Route path="/home" component={Home} />
          <Route path="/map" component={Map} />
          <Route path="/city" component={City} />
          <Route component={NoFound} />
        </Switch>
      </Router>
    )
  }
}
export default App
