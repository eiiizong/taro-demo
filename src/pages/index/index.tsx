import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

import Request from '../../utils/request'
import SetNavigationBarTitle from '../../utils/setNavigationBarTitle'

export default class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount() {
    console.log(`================== componentWillMount =========================`);
    const func = async () => {
      const url = "shops";
      const method = "POST";
      const data = {};
      const header = {
        'device-type': 'wechat'
      };
      const shopsData = await Request(url, data, header, method);
      console.log(`request resutl =>`, shopsData);
    };
    func();
    SetNavigationBarTitle('test');
  }
  componentDidShow() {
    console.log(`================== componentDidShow =========================`);
  }
  componentDidMount() {
    console.log(`================== componentDidMount =========================`);
  }
  componentWillUnmount() {
    console.log(`================== componentWillUnmount =========================`);
  }
  componentDidHide() {
    console.log(`================== componentDidHide =========================`);
  }

  render() {
    console.log(`================== render =========================`);
    return (
      <View className='index'>
        <Text>首页test</Text>
      </View>
    )
  }
}
