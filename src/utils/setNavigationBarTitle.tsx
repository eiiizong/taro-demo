import Taro from '@tarojs/taro'

// 动态设置当前页面的标题
const setNavigationBarTitle: (title: string) => void = (title: string): void => {
  Taro.setNavigationBarTitle({ title });
}

export default setNavigationBarTitle
