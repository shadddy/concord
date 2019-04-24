<template>
  <div class="location">
    <my-head></my-head>
    <div id="map"></div>
    <div class="line"></div>
    <div class="content">
      <h1>{{$t('location.asia')}}</h1>
      <div class="part">
        <p class="title">{{$t('location.Hongkong.name')}}</p>
        <div
          v-for="(item,index) in $t('location.Hongkong.list')"
          :key="index"
        >
          <p>{{item.title}}</p>
          <p class="gray">{{item.address}}</p>
          <p>{{$t('location.tel')}}:<span class="gray">{{item.tel}}</span></p>
          <p>{{$t('location.fax')}}:<span class="gray">{{item.fax}}</span></p>
          <p>{{$t('location.email')}}:<span class="blue">{{item.email}}</span></p>
        </div>
      </div>
      <div class="part">
        <p class="title">{{$t('location.Guangzhou.name')}}</p>
        <p>{{$t('location.Guangzhou.title')}}</p>
        <p class="gray">{{$t('location.Guangzhou.address')}}</p>
        <p>{{$t('location.tel')}}:<span class="gray">{{$t('location.Guangzhou.tel')}}</span></p>
        <p>{{$t('location.email')}}:<span class="blue">{{$t('location.Guangzhou.email')}}</span></p>
      </div>
      <div class="part">
        <p class="title">{{$t('location.Zhongshan.name')}}</p>
        <p>{{$t('location.Zhongshan.title')}}</p>
        <p class="gray">{{$t('location.Zhongshan.address')}}</p>
        <p>{{$t('location.tel')}}:<span class="gray">{{$t('location.Zhongshan.tel')}}</span></p>
        <p>{{$t('location.fax')}}:<span class="gray">{{$t('location.Zhongshan.fax')}}</span></p>
        <p>{{$t('location.email')}}:<span class="blue">{{$t('location.Zhongshan.email')}}</span></p>
      </div>
      <div class="part">
        <p class="title">{{$t('location.Qingdao.name')}}</p>
        <p>{{$t('location.Qingdao.title')}}</p>
        <p class="gray">{{$t('location.Qingdao.address')}}</p>
        <p>{{$t('location.tel')}}:<span class="gray">{{$t('location.Qingdao.tel')}}</span></p>
        <p>{{$t('location.fax')}}:<span class="gray">{{$t('location.Qingdao.fax')}}</span></p>
        <p>{{$t('location.email')}}:<span class="blue">{{$t('location.Qingdao.email')}}</span></p>
      </div>
      <div class="part">
        <p class="title">{{$t('location.Shanghai.name')}}</p>
        <p>{{$t('location.Shanghai.title')}}</p>
        <p class="gray">{{$t('location.Shanghai.address')}}</p>
        <p>{{$t('location.post')}}:<span class="gray">{{$t('location.Shanghai.post')}}</span></p>
        <p>{{$t('location.tel')}}:<span class="gray">{{$t('location.Shanghai.tel')}}</span></p>
        <p>{{$t('location.email')}}:<span class="blue">{{$t('location.Shanghai.email')}}</span></p>
      </div>
      <h1>{{$t('location.us')}}</h1>
      <div class="part">
        <p class="title">{{$t('location.Columbus.name')}}</p>
        <p>{{$t('location.Columbus.title')}}</p>
        <p class="gray">{{$t('location.Columbus.address')}}</p>
        <p>{{$t('location.tel')}}:<span class="gray">{{$t('location.Columbus.tel')}}</span></p>
        <p>{{$t('location.fax')}}:<span class="gray">{{$t('location.Columbus.fax')}}</span></p>
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
        
        Shanghai: [121.473701, 31.230416],
        Qingdao: [120.391183, 36.074094],
        Guangzhou: [113.276028, 23.150223],
        Zhongshan: [113.39712, 22.525519],
        Columbus: [-82.204635, 35.265474],
        Xiamen: [118.09356, 24.484356],
        Shenzhen: [114.065702, 22.543649],
        Wuhan: [114.312736, 30.606424],
        Ningbo: [121.563607, 29.878561],
        Tianjin: [117.223893, 39.011631],
        Dalian: [121.621053, 38.917606],
        "Los Angeles": [-118.292319, 34.07264],
        "New York": [-73.862847, 40.854046],
        Chicago: [-87.642422, 41.893402],
        Toronto: [-73.465006, 2.467951],
        Hanoi: [108.792415, 13.985297],
        Vienna: [106.736517, 10.766347],
        Barcelona: [2.203076, 41.377115],
        "Buenos Aires": [-63.36489, -37.809283],
        "Ho Chi Minh City": [106.701418, 10.789086],
        Brussels: [4.414776, 50.875801],
        Madrid: [-3.606445, 40.501685],
        "La Paz": [-63.765606, -15.368843],
        Jakarta: [119.779625, -2.245291],
        Prague: [16.009673, 49.706066],
        Zurich: [8.531171, 47.385639],
        "Sao Paulo": [-46.680812, -23.557664],
        Macau: [113.541246, 22.202402],
        "Hong Kong": [114.109497, 22.396428],
        Copenhagen: [12.434302, 55.666915],
        Instanbul: [28.991869, 41.026256],
        Guayaquil: [-79.921823, -2.157375],
        Seoul: [126.897684, 37.575363],
        Helsinki: [24.90307, 60.172844],
        London: [-0.117253, 51.568964],
        "Panama City": [-79.409603, 9.147605],
        Singapore: [103.773977, 1.55571],
        Paris: [2.358878, 48.854517],
        Manchester: [-2.35083, 53.498267],
        Callao: [-74.928166, -8.470462],
        Taipei: [121.538263, 25.079197],
        Lyon: [4.862606, 45.777922],
        Glasgow: [-4.244056, 55.874333],
        Valencia: [-0.371425, 39.447185],
        Frankfurt: [10.326603, 51.194804],
        Cork: [-7.88672, 53.777075],
        "Puerto Cortes": [-85.20136, 15.208114],
        Bangkok: [100.427365, 13.774093],
        Hamburg: [9.949459, 53.574987],
        Shannon: [-9.501083, 51.877471],
        "Mexico City": [-99.132713, 19.50043],
        Tokyo: [139.665895, 35.797382],
        Munich: [11.583914, 48.157684],
        Osaka: [132.33923, 34.604407],
        Dusseldorf: [6.777679, 51.246794],
        Nagoya: [136.883362, 35.210655],
        Athens: [23.72159, 38.042458],
        Dhaka: [90.420989, 23.807592],
        Milan: [9.183126, 45.481039],
        Mellbourne: [144.899985, -37.780084],
        Amman: [35.914398, 31.915358],
        "Phnom Penh": [104.867467, 11.606522],
        Rome: [12.549831, 41.905],
        Sydney: [151.247052, -33.886318],
        "Tel Aviv": [33.803308, 29.980936],
        Mumbai: [72.833173, 18.98492],
        Dublin: [-6.238408, 53.36092],
        Muscat: [58.414839, 23.603191],
        "New Delhi": [77.088096, 28.747],
        Rotterdam: [4.473965, 51.92794],
        Dahab: [35.528602, 23.119088],
        Chennai: [80.252431, 13.079544],
        Oslo: [10.747443, 59.937675],
        Jeddah: [39.15287, 21.484159],
        "Kuala Lumpur": [101.666884, 3.229263],
        Warsaw: [21.013135, 52.211389],
        Alexandria: [29.917426, 31.213328],
        Dubai: [55.324093, 25.295737],
        Manila: [121.076032, 14.670292],
        Lisbon: [-9.213624, 38.779775],
        Mauritius: [57.494974, -20.154475],
        Sharjah: [57.494974, -20.154475],
        Colombo: [79.893683, 7.010351],
        Bucharest: [26.08159, 44.428616],
        Durban: [30.828093, -29.861781],
        Johannesburg: [30.828093, -29.861781],
        Lusaka: [28.353656, -15.325373]
      };
      var rawData = [
        
        ["Shanghai", 100, 100],
        ["Qingdao", 100, 100],
        ["Guangzhou", 100, 100],
        ["Zhongshan", 100, 100],
        ["Columbus", 100, 100],
        ["Xiamen", 100, 100],
        ["Shenzhen", 100, 100],
        ["Wuhan", 100, 100],
        ["Ningbo", 100, 100],
        ["Tianjin", 100, 100],
        ["Dalian", 100, 100],
        ["Los Angeles", 100, 100],
        ["New York", 100, 100],
        ["Chicago", 100, 100],
        ["Columbus", 100, 100],
        ["Toronto", 100, 100],
        ["Hanoi", 100, 100],
        ["Vienna", 100, 100],
        ["Barcelona", 100, 100],
        ["Buenos Aires", 100, 100],
        ["Ho Chi Minh City", 100, 100],
        ["Brussels", 100, 100],
        ["Madrid", 100, 100],
        ["La Paz", 100, 100],
        ["Jakarta", 100, 100],
        ["Prague", 100, 100],
        ["Zurich", 100, 100],
        ["Sao Paulo", 100, 100],
        ["Macau", 100, 100],
        ["Hong Kong", 100, 100],
        ["Copenhagen", 100, 100],
        ["Instanbul", 100, 100],
        ["Guayaquil", 100, 100],
        ["Seoul", 100, 100],
        ["Helsinki", 100, 100],
        ["London", 100, 100],
        ["Panama City", 100, 100],
        ["Singapore", 100, 100],
        ["Paris", 100, 100],
        ["Manchester", 100, 100],
        ["Callao", 100, 100],
        ["Taipei", 100, 100],
        ["Lyon", 100, 100],
        ["Glasgow", 100, 100],
        ["Valencia", 100, 100],
        ["Frankfurt", 100, 100],
        ["Cork", 100, 100],
        ["Puerto Cortes", 100, 100],
        ["Bangkok", 100, 100],
        ["Hamburg", 100, 100],
        ["Shannon", 100, 100],
        ["Mexico City", 100, 100],
        ["Tokyo", 100, 100],
        ["Munich", 100, 100],
        ["Osaka", 100, 100],
        ["Dusseldorf", 100, 100],
        ["Nagoya", 100, 100],
        ["Athens", 100, 100],
        ["Dhaka", 100, 100],
        ["Milan", 100, 100],
        ["Mellbourne", 100, 100],
        ["Amman", 100, 100],
        ["Phnom Penh", 100, 100],
        ["Rome", 100, 100],
        ["Sydney", 100, 100],
        ["Tel Aviv", 100, 100],
        ["Mumbai", 100, 100],
        ["Dublin", 100, 100],
        ["Muscat", 100, 100],
        ["New Delhi", 100, 100],
        ["Rotterdam", 100, 100],
        ["Dahab", 100, 100],
        ["Chennai", 100, 100],
        ["Oslo", 100, 100],
        ["Jeddah", 100, 100],
        ["Kuala Lumpur", 100, 100],
        ["Warsaw", 100, 100],
        ["Alexandria", 100, 100],
        ["Dubai", 100, 100],
        ["Manila", 100, 100],
        ["Lisbon", 100, 100],
        ["Mauritius", 100, 100],
        ["Sharjah", 100, 100],
        ["Colombo", 100, 100],
        ["Bucharest", 100, 100],
        ["Durban", 100, 100],
        ["Johannesburg", 100, 100],
        ["Lusaka", 100, 100]
      ];

      function makeMapData(rawData) {
        var mapData = [];
        for (var i = 0; i < rawData.length; i++) {
          var geoCoord = geoCoordMap[rawData[i][0]];
          if (geoCoord) {
            if (i == 29) {
              mapData.push({
                name: rawData[i][0],
                value: geoCoord.concat(rawData[i].slice(1, 3)),
                itemStyle:{
                  borderWidth:0,
                  color:'red'
                },
                symbolSize:16,
                symbol:'path://M559.826357 38.096844l114.290533 234.930541c6.349474 19.048422 25.397896 31.74737 44.446319 31.74737l247.629488 38.096844c50.795792 6.349474 69.844215 69.844215 31.74737 107.941059L820.154794 634.947406c-12.698948 12.698948-19.048422 31.74737-19.048422 57.145267l44.446318 260.328436c6.349474 50.795792-44.446318 88.892637-82.543163 63.494741l-222.231592-120.640008c-19.048422-6.349474-38.096844-6.349474-57.145266 0L261.401076 1015.91585c-44.446318 25.397896-95.242111-12.698948-82.543162-63.494741l44.446318-260.328436c6.349474-19.048422 0-38.096844-19.048422-57.145267L20.121062 444.463184c-38.096844-31.74737-19.048422-95.242111 31.74737-101.591585l247.629489-38.096844c19.048422 0 38.096844-12.698948 44.446318-31.74737L458.234772 38.096844c19.048422-50.795792 82.543163-50.795792 101.591585 0z m0 0'
              });
            }else{
              mapData.push({
                name: rawData[i][0],
                value: geoCoord.concat(rawData[i].slice(1, 3)),
              });
            }
          }
        }
        return mapData;
      }
      console.log(makeMapData(rawData));
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
      // mychart.dispatchAction({
      //   type: "highlight",
      //   seriesIndex: 0,
      //   dataIndex: 0
      // });
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
    .part {
      margin-bottom: 0.6rem;
      p {
        color: black;
        font-size: 0.2rem;
        line-height: 0.4rem;
        letter-spacing: 0.01rem;
        //  font-family: 'HelveticaExt';
      }
      .title {
        font-size: 0.24rem;
        color: black;
        font-family: "biminbold";
      }
      .gray {
        color: #666666;
      }
      .blue {
        color: #3f6fb7;
      }
    }
    h3 {
      color: #333;
      font-family: "biminbold";
      font-size: 0.24rem;
      text-align: center;
      margin: 0.2rem 0 2.4rem 0;
      padding-top: 0.4rem;
    }
  }
}
@media (min-device-width: 375px) and (max-device-width: 812px) {
  .location {
    .content {
      width: 12rem;
      h1 {
        font-size: 0.8rem;
      }
      .part {
        p {
          font-size: 0.4rem;
          line-height: 0.8rem;
        }
        .title {
          font-size: 0.4rem;
        }
      }
      h3 {
        font-size: 0.4rem;
      }
    }
  }
}
</style>