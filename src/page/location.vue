<template>
  <div class="location">
    <my-head></my-head>
    <div id="map"></div>
    <div class="line"></div>
    <div class="content">
      <h1>{{$t('location.asia')}}</h1>
      <div class="part">
        <p class="title">{{$t('location.Hongkong.name')}}</p>
        <div v-for="(item,index) in $t('location.Hongkong.list')" :key="index">
          <p>{{item.title}}</p>
          <p class="gray">{{item.address}}</p>
          <p>{{$t('location.tel')}}:<span  class="gray">{{item.tel}}</span></p>
          <p>{{$t('location.fax')}}:<span  class="gray">{{item.fax}}</span></p>
          <p>{{$t('location.email')}}:<span class="blue">{{item.email}}</span></p>
        </div>
      </div>
      <div class="part">
        <p class="title">{{$t('location.Guangzhou.name')}}</p>
        <p>{{$t('location.Guangzhou.title')}}</p>
        <p  class="gray">{{$t('location.Guangzhou.address')}}</p>
        <p>{{$t('location.tel')}}:<span  class="gray">{{$t('location.Guangzhou.tel')}}</span></p>
        <p>{{$t('location.email')}}:<span class="blue">{{$t('location.Guangzhou.email')}}</span></p>
      </div>
      <div class="part">
        <p class="title">{{$t('location.Zhongshan.name')}}</p>
        <p>{{$t('location.Zhongshan.title')}}</p>
        <p  class="gray">{{$t('location.Zhongshan.address')}}</p>
        <p>{{$t('location.tel')}}:<span  class="gray">{{$t('location.Zhongshan.tel')}}</span></p>
        <p>{{$t('location.fax')}}:<span  class="gray">{{$t('location.Zhongshan.fax')}}</span></p>
        <p>{{$t('location.email')}}:<span class="blue">{{$t('location.Zhongshan.email')}}</span></p>
      </div>
      <div class="part">
        <p class="title">{{$t('location.Qingdao.name')}}</p>
        <p>{{$t('location.Qingdao.title')}}</p>
        <p  class="gray">{{$t('location.Qingdao.address')}}</p>
        <p>{{$t('location.tel')}}:<span  class="gray">{{$t('location.Qingdao.tel')}}</span></p>
        <p>{{$t('location.fax')}}:<span  class="gray">{{$t('location.Qingdao.fax')}}</span></p>
        <p>{{$t('location.email')}}:<span class="blue">{{$t('location.Qingdao.email')}}</span></p>
      </div>
      <div class="part">
        <p class="title">{{$t('location.Shanghai.name')}}</p>
        <p>{{$t('location.Shanghai.title')}}</p>
        <p  class="gray">{{$t('location.Shanghai.address')}}</p>
        <p>{{$t('location.post')}}:<span  class="gray">{{$t('location.Shanghai.post')}}</span></p>
        <p>{{$t('location.tel')}}:<span  class="gray">{{$t('location.Shanghai.tel')}}</span></p>
        <p>{{$t('location.email')}}:<span class="blue">{{$t('location.Shanghai.email')}}</span></p>
      </div>
      <h1>{{$t('location.us')}}</h1>
      <div class="part">
        <p class="title">{{$t('location.Columbus.name')}}</p>
        <p>{{$t('location.Columbus.title')}}</p>
        <p  class="gray">{{$t('location.Columbus.address')}}</p>
        <p>{{$t('location.tel')}}:<span  class="gray">{{$t('location.Columbus.tel')}}</span></p>
        <p>{{$t('location.fax')}}:<span  class="gray">{{$t('location.Columbus.fax')}}</span></p>
        <p>{{$t('location.email')}}:<span class="blue">{{$t('location.Columbus.email[0]')}}</span></p>
        <p>{{$t('location.email')}}:<span class="blue">{{$t('location.Columbus.email[1]')}}</span></p>
      </div>
      <h3>
        {{$t('location.bottom')}}
      </h3>
    </div>
    <my-foot></my-foot>
  </div>
</template>

<script>
import myHead from "@/components/header";
import myFoot from "@/components/footer";
export default {
  components: {
    myHead,
    myFoot
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    randomData() {
      return Math.round(Math.random() * 1000);
    },
    drawMap() {
      let mychart = this.$echarts.init(document.getElementById("map"));
      var geoCoordMap = {
        "Hong Kong": [114.109497, 22.396428],
        Shanghai: [121.473701, 31.230416],
        qingdao: [120.391183, 36.074094],
        Guangzhou: [113.276028, 23.150223],
        Zhongshan: [113.39712, 22.525519],
        Columbus: [-82.204635, 35.265474]
      };
      var rawData = [
        ["Hong Kong", 100, 100],
        ["Shanghai", 100, 100],
        ["qingdao", 100, 100],
        ["Guangzhou", 100, 100],
        ["Zhongshan", 100, 100],
        ["Columbus", 100, 100]
      ];

      function makeMapData(rawData) {
        var mapData = [];
        for (var i = 0; i < rawData.length; i++) {
          var geoCoord = geoCoordMap[rawData[i][0]];
          if (geoCoord) {
            mapData.push({
              name: rawData[i][0],
              value: geoCoord.concat(rawData[i].slice(1, 3))
            });
          }
        }
        console.log(mapData);
        return mapData;
      }
      var option = {
        tooltip: {
          trigger: "item",
          formatter: function(params) {
            var value = (params.value + "").split(".");
            return params.name;
          }
        },
        toolbox: {
          show: true,
          left: "right",
          iconStyle: {
            normal: {
              borderColor: "#ddd"
            }
          },
          feature: {},
          z: 202
        },
        geo: {
          map: "world",
          silent: true,
          label: {
            emphasis: {
              show: false,
              areaColor: "#eee"
            }
          },
          itemStyle: {
            normal: {
              areaColor: "#a4cbef",
              borderWidth: 0.2,
              borderColor: "#fff"
            }
          },
          roam: true,
          top: "3%",
          bottom: "3%"
        },
        series: [
          {
            name: "Prices and Earnings 2012",
            type: "scatter",
            coordinateSystem: "geo",
            symbolSize: 8,
            data: makeMapData(rawData),
            activeOpacity: 1,
            label: {
              normal: {
                formatter: "{b}",
                position: "right",
                show: false
              },
              emphasis: {
                show: true
              }
            },
            symbolSize: 10,
            itemStyle: {
              normal: {
                borderColor: "#fcc400",
                color: "#bd9404",
                borderWidth: 5
              }
            }
          }
        ]
      };

      mychart.setOption(option);
    }
  },
  created() {},
  mounted() {
    this.drawMap();
  }
};
</script>
<style lang='less' scoped>
.location {
  overflow: hidden;
  .footer {
    position: relative;
    padding-top: 0.01rem;
  }
  #map {
    width: 100%;
    height: 8.6rem;
  }
  .line {
    background-image: url("../assets/img/service/icon.png");
    background-size: 11.4rem 10rem;
    width: 10.96rem;
    height: 0.02rem;
    background-position: 0 -4.89rem;
    margin: 0.8rem auto 0 auto;
  }
  .content {
    width: 10.3rem;
    margin: 0 auto;
    h1 {
      margin-top: 0.4rem;
      color: #333;
      font-family: "biminbold";
      font-size: 0.42rem;
      text-align: center;
      position: relative;
      color: #4c4c4c;
      margin-bottom: 0.6rem;
      &::after {
        content: "";
        background: #2a6ec1;
        width: 1.1rem;
        height: 0.06rem;
        display: block;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -0.05rem;
      }
    }
    .part{
      margin-bottom: 0.6rem;
      p{
       color: black;
       font-size: 0.2rem;
       line-height: 0.4rem; 
       letter-spacing: 0.01rem;
      //  font-family: 'HelveticaExt';
      }
      .title{
        font-size: 0.24rem;
        color: black;
        font-family: 'biminbold';
      }
      .gray{
       color: #666666;
      }
      .blue{
        color:#3f6fb7;
      }
      
    }
    h3{
       color: #333;
      font-family: "biminbold";
      font-size: 0.24rem;
      text-align: center;
      margin:0.2rem 0 2.4rem 0;
      padding-top: 0.4rem;
    }
    
  }
}
</style>