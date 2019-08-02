import React from 'react'
import { Button } from 'antd-mobile'
class Home extends React.Component {
  render() {
    return (
      <div className="home">
        我是home组件
        <Button type="primary" loading size="small">
          我是按钮
        </Button>
      </div>
    )
  }
}

export default Home
