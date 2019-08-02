import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom'
import Home from './pages/Home/index'
import Map from './pages/Map/index'
import City from './pages/City/index'
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">app</div>
        {/* 设置路由导航 */}
        <ul>
          <li>
            <NavLink to="/home">主页</NavLink>{' '}
          </li>
          <li>
            <NavLink to="/map">地图</NavLink>{' '}
          </li>
          <li>
            {' '}
            <NavLink to="/city">城市</NavLink>{' '}
          </li>
        </ul>

        {/* 设置匹配规则 */}

        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/map" component={Map} />
          <Route path="/city" component={City} />
        </Switch>
      </Router>
    )
  }
}
export default App
