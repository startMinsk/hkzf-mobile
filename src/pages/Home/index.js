import React from 'react'
import { Route } from 'react-router-dom'
import './index.scss'

import Index from './Index/index.js'
import House from './House'
import My from './My'
import News from './News'

// 导入了tabBar
import { TabBar } from 'antd-mobile'

// 提取公共部分，尽量不要放在state里面 优化性能
const tabBar_list = [
  { name: '首页', path: '/home', icon: 'icon-ind' },
  { name: '找房', path: '/home/house', icon: 'icon-findHouse' },
  { name: '资讯', path: '/home/news', icon: 'icon-infom' },
  { name: '我的', path: '/home/my', icon: 'icon-my' }
]

class Home extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      // 默认选中的tab栏，这个地方不能写死'/home/index'，要不然会出现，在其他组件一刷新，就会在导航出高亮
      // 在地址栏里面拿到
      selectedTab: props.location.pathname,
      // 是否隐藏tabBar 在本实例基本不改
      hidden: false,
      // 是否全屏
      fullScreen: true
    }
  }

  renderList() {
    return tabBar_list.map(item => (
      <TabBar.Item
        icon={<i className={`iconfont ${item.icon}`} />}
        selectedIcon={<i className={`iconfont ${item.icon}`} />}
        title={item.name}
        key={item.name}
        dot
        selected={this.state.selectedTab === item.path}
        onPress={() => {
          this.setState({
            selectedTab: item.path
          })
          this.props.history.push(item.path)
        }}
      />
    ))
  }

  // 渲染tabBar的内容
  render() {
    return (
      <div className="home">
        {/* 这里为了一进来直接能匹配到/home/index,但是又不想直接看到index，所以就直接将、index去掉，为了不会模糊匹配，影响功能，所以加上exact */}
        <Route exact path="/home" component={Index} />
        <Route path="/home/house" component={House} />
        <Route path="/home/news" component={News} />
        <Route path="/home/my" component={My} />
        {/* 上面是路由规则 */}
        {/* 下面是导航链接 */}
        <div className="tabBar">
          {/* 
          unselectedTintColor: 未被选中的颜色
          tintColor	选中的字体颜色
          barTintColor	tabbar 背景色
           noRenderContent
           */}
          <TabBar
            noRenderContent={true}
            unselectedTintColor="#888"
            tintColor="#21b97a"
            barTintColor="white"
            hidden={this.state.hidden}
          >
            {/* 
            title	标题文字
            selectedIcon 选中的图标
            selected 控制是否被选中
            badge={1} 徽章
            onPress 点击事件
            */}
            {/* <TabBar.Item
              title="首页"
              key="首页"
              icon={<i className="iconfont icon-ind" />}
              selectedIcon={<i className="iconfont icon-ind" />}
              selected={this.state.selectedTab === '/home/index'}
              badge={1}
              onPress={() => {
                this.setState({
                  selectedTab: '/home/index'
                })
                // 为了实现在地址栏跳转下面的导航会跟着跳转(这是一个小bug点，让上面的判断和下面跳转的一致)
                this.props.history.push('/home/index')
              }}
              // 自定义属性
              // data-seed="logId"
            />
           */}
            {this.renderList()}
          </TabBar>
        </div>
      </div>
    )
  }
}

export default Home
