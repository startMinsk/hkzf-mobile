import React from 'react'
import Yasuo from '../../assets/yasuo.jpg'
class NoFound extends React.Component {
  render() {
    return (
      <div>
        <h1>别拦我，我要玩压缩，</h1>
        <img src={Yasuo} alt="" style={{ width: '100%' }} />
      </div>
    )
  }
}

export default NoFound
