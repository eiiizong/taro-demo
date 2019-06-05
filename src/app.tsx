import Taro, { Component, Config } from '@tarojs/taro'
import Index from './pages/index'

import '@tarojs/async-await'
import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/index/index',
      'pages/shoppingCar/index',
      'pages/orders/index',
      'pages/my/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fa7570',
      navigationBarTitleText: 'taro-demo',
      navigationBarTextStyle: 'white',
    },
    tabBar: {
      color: '#dbdbdb',
      backgroundColor: '#fafafa',
      selectedColor: '#fa7570',
      borderStyle: 'white',
      list: [
        {
          text: '首页',
          pagePath: 'pages/index/index',
          iconPath: 'static/img/tabs/home.png',
          selectedIconPath: 'static/img/tabs/home-active.png'
        },
        {
          text: '购物车',
          pagePath: 'pages/shoppingCar/index',
          iconPath: 'static/img/tabs/shopping-car.png',
          selectedIconPath: 'static/img/tabs/shopping-car-active.png'
        },
        {
          text: '订单',
          pagePath: 'pages/orders/index',
          iconPath: 'static/img/tabs/orders.png',
          selectedIconPath: 'static/img/tabs/orders-active.png'
        },
        {
          text: '我的',
          pagePath: 'pages/my/index',
          iconPath: 'static/img/tabs/my.png',
          selectedIconPath: 'static/img/tabs/my-active.png'
        }
      ]
    }
  }

  componentDidMount() {
    console.log(Taro);
    console.log(this);
  }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
