<template>
  <div>
      <div id="map" style="width:50%;height:200PX;">
  
     <!-- 引入地图 -->
    <baidu-map
      :center='center'
      :zoom='zoom'
      @ready='handler'
      style='height:91vh;width:100vw;position: absolute;margin-top:60px;'
      @click='getClickInfo'
      :scroll-wheel-zoom='true'
      id='allmap'
    ></baidu-map>

 
</div>

  </div>
</template>

<script>
import {BMap} from '../../../utils/Bmap'


export default {
  components:{BMap },
  mounted () {
    // 地图初始化
    this.initMap()
},
// 引入地图
    handler ({BMap, map}) {
      var point = new BMap.Point(109.49926175379778, 36.60449676862417)
      map.centerAndZoom(point, 13)
      var marker = new BMap.Marker(point) // 创建标注
      map.addOverlay(marker) // 将标注添加到地图中
      var circle = new BMap.Circle(point, 6, { strokeColor: 'Red', strokeWeight: 6, strokeOpacity: 1, Color: 'Red', fillColor: '#f03' })
      map.addOverlay(circle)
      // s3
      map.addControl(new BMap.ScaleControl()) // 添加比例尺
      map.addControl(
        new BMap.MapTypeControl()
      )
      // 添加带有定位的导航控件
      var navigationControl = new BMap.NavigationControl()
      map.addControl(navigationControl)
      // 添加定位控件
      var geolocationControl = new BMap.GeolocationControl()
      geolocationControl.addEventListener('locationSuccess', function (e) {
      // 定位成功事件
        var address = ''
        address += e.addressComponent.province
        address += e.addressComponent.city
        address += e.addressComponent.district
        address += e.addressComponent.street
        address += e.addressComponent.streetNumber
        alert('当前定位地址为：' + address)
      })
      geolocationControl.addEventListener('locationError', function (e) {
      // 定位失败事件
        alert(e.message)
      })
      map.addControl(geolocationControl)
 }

}
</script>

<style>

</style>