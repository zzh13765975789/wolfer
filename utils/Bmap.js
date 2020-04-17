// 初始化地图

export default{
    install(Vue,options)
    {
      Vue.prototype.initMap = function () {
        const self = this
    const map = new BMap.Map('allmap')
    // 创建点坐标
    const point = new BMap.Point(116.404, 39.915)
    map.centerAndZoom(point, 5)
    // 开启鼠标滚轮缩放
    map.enableScrollWheelZoom(true)
    // 鱼骨图
    map.addControl(new BMap.NavigationControl())
    // 创建信息窗口
    const infoWindow = new BMap.InfoWindow()
    map.openInfoWindow(infoWindow)
    // 添加地图类型控件（右上角）
    map.addControl(
      new BMap.MapTypeControl()
    )
    // map.addControl(new BMap.CityListControl()) // 城市列表
    // var size = new BMap.Size(10, 20);
    self.mapObj = map
      }
    }
  }


 