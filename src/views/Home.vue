<template>

	<!-- <script type="text/javascript" src="//api.map.baidu.com/api?v=2.0&ak=您的密钥"></script> -->

  <div class="all_silid">
    	 <!-- <baidu-map
      :center='center'
      :zoom='zoom'
      @ready='handler'
      style='height:91vh;width:100vw;position: absolute;margin-top:60px;'
      @click='getClickInfo'
      :scroll-wheel-zoom='true'
      id='allmap'
    ></baidu-map> -->

  </div>
 

</template>

<script>
// var map = new BMap.Map("allmap");
// 	var point = new BMap.Point(116.331398,39.897445);
// 	map.centerAndZoom(point,11);

// 	function theLocation(){
// 		var city = document.getElementById("cityName").value;
// 		if(city != ""){
// 			map.centerAndZoom(city,11);      // 用城市名设置地图中心点
// 		}
// 	}

// import BMap from 'vue-baidu-map'
// import Vue from 'vue'
// Vue.use(BMap, {
//   ak: 'RGUMatevLOAQ5QyaeP8YxvRpj3j6A25u'
// })
export default {
  // 引入地图
//     handler ({BMap, map}) {
//       var point = new BMap.Point(109.49926175379778, 36.60449676862417)
//       map.centerAndZoom(point, 13)
//       var marker = new BMap.Marker(point) // 创建标注
//       map.addOverlay(marker) // 将标注添加到地图中
//       var circle = new BMap.Circle(point, 6, { strokeColor: 'Red', strokeWeight: 6, strokeOpacity: 1, Color: 'Red', fillColor: '#f03' })
//       map.addOverlay(circle)
//       // s3
//       map.addControl(new BMap.ScaleControl()) // 添加比例尺
//       map.addControl(
//         new BMap.MapTypeControl()
//       )
//       // 添加带有定位的导航控件
//       var navigationControl = new BMap.NavigationControl()
//       map.addControl(navigationControl)
//       // 添加定位控件
//       var geolocationControl = new BMap.GeolocationControl()
//       geolocationControl.addEventListener('locationSuccess', function (e) {
//       // 定位成功事件
//         var address = ''
//         address += e.addressComponent.province
//         address += e.addressComponent.city
//         address += e.addressComponent.district
//         address += e.addressComponent.street
//         address += e.addressComponent.streetNumber
//         alert('当前定位地址为：' + address)

//       })
//       geolocationControl.addEventListener('locationError', function (e) {
//       // 定位失败事件
//         alert(e.message)
//       })
//       map.addControl(geolocationControl)
//  },




}
</script>

<style>
  	body, html{width: 100%;height: 100%;margin:0;font-family:"微软雅黑";}
		#allmap{height:500px;width:100%;}
    #r-result{width:100%; font-size:14px;}
    .all_silid{width: 100%;height:100%;position: relative;}
   
</style>