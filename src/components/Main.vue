<template>
  <div style="width: 100%;height: 100%;color: white;">
    <el-container style="height: 100%;">
      <el-header style="font-size: 30px;text-align: center;line-height: 70px;height: 70px;">
        东台市教育大数据
      </el-header>
      <el-container style="background-color: #0C0A36;height: 100%;padding-top: 10px;padding-bottom: 10px;">
        <el-aside style="border: #055693 solid 1px;">
          <div style="display: flex;align-items: center;padding: 10px;">
            <div class="dot_class"></div>
            <span style="margin-left: 8px;font-size: 12px;">各区镇学校情况</span>
          </div>

          <div style="padding-left: 15px;padding-right: 10px;">
            <table style="font-size: 10px;color: #02D4F9;width: 100%;">
              <thead>
              <td></td>
              <td align="center">区镇名称</td>
              <td align="center">学校总人数</td>
              <td align="center">教师总数</td>
              <td align="center">学生总数</td>
              </thead>
              <tr v-for="(item,index) of datas">
                <td>
                  <div :class=" index <=2 ?'badge_top_class':'badge_other_class'">
                    {{index+1}}
                  </div>
                </td>
                <td align="center">{{item.name}}</td>
                <td align="center">6231</td>
                <td align="center">58</td>
                <td align="center">89</td>
              </tr>
            </table>
          </div>

          <div style="display: flex;align-items: center;padding: 10px;">
            <div class="dot_class"></div>
            <span style="margin-left: 8px;font-size: 12px;">学生信息-男女比例</span>
          </div>

          <el-row>
            <el-col :span="8">
              <div id="ring_x" style="height: 100px;"></div>
            </el-col>
            <el-col :span="8">
              <div id="ring_c" style="height: 100px;"></div>
            </el-col>
            <el-col :span="8">
              <div id="ring_g" style="height: 100px;"></div>
            </el-col>
          </el-row>

          <div style="display: flex;align-items: center;padding: 10px;">
            <div class="dot_class"></div>
            <span style="margin-left: 8px;font-size: 12px;">学生人数统计</span>
          </div>
          <div id="lef_line" style="width: 100%;height: 160px;"></div>
        </el-aside>
        <el-main style="margin: 0px;padding: 0px 5px 0px 5px;display: flex;flex-direction: column;">
          <div
            style="display: grid;grid-template-columns: 1fr 1fr 1fr;grid-column-gap: 30px;padding-left: 30px;padding-right: 30px;color: #02D4F9;">
            <div
              style="border: #0166FF solid 1px;display: flex;flex-direction: column;align-items: center;justify-content: center;height: 80px;">
              <div>
                学校总数
              </div>
              <div>
                71
              </div>
            </div>
            <div
              style="border: #0166FF solid 1px;display: flex;flex-direction: column;align-items: center;justify-content: center;height: 80px;">
              <div>
                学生总数（人）
              </div>
              <div>
                38731
              </div>
            </div>
            <div
              style="border: #0166FF solid 1px;display: flex;flex-direction: column;align-items: center;justify-content: center;height: 80px;">
              <div>
                教师总数（人）
              </div>
              <div>
                6540
              </div>
            </div>
          </div>

          <div style="flex-grow: 1;" id="map">
          </div>

          <div style="border: #055693 solid 1px;height: 200px;">
            <el-row>
              <el-col :span="6">
                <div style="width: 100%;height: 200px;display: flex;flex-direction: column;">
                  <div style="display: flex;align-items: center;padding: 10px;">
                    <div class="dot_class"></div>
                    <span style="margin-left: 8px;font-size: 12px;">办学规模</span>
                  </div>
                  <div id="line_bxgm" style="flex-grow: 1;width: 100%;"></div>
                  <div>
                    <span style="margin-left: 35px;font-size: 12px;color: #02D4F9;">班级</span>
                    <span style="font-size: 12px;margin-left: 20px;color: #02D4F9;">学生</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div style="width: 100%;height: 200px;display: flex;flex-direction: column;">
                  <div style="display: flex;align-items: center;padding: 10px;">
                    <div class="dot_class"></div>
                    <span style="margin-left: 8px;font-size: 12px;">师生比</span>
                  </div>
                  <div id="line_ssb" style="flex-grow: 1;width: 100%;"></div>
                  <div>
                    <span style="margin-left: 35px;font-size: 12px;color: #02D4F9;">教师</span>
                    <span style="font-size: 12px;margin-left: 20px;color: #02D4F9;">学生</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div style="width: 100%;height: 200px;display: flex;flex-direction: column;">
                  <div style="display: flex;align-items: center;padding: 10px;">
                    <div class="dot_class"></div>
                    <span style="margin-left: 8px;font-size: 12px;">办学层次</span>
                  </div>
                  <div id="line_bxcc" style="flex-grow: 1;width: 100%;"></div>
                </div>
              </el-col>
              <el-col :span="6">
                <div style="width: 100%;height: 200px;display: flex;flex-direction: column;">
                  <div style="display: flex;align-items: center;padding: 10px;">
                    <div class="dot_class"></div>
                    <span style="margin-left: 8px;font-size: 12px;">学校等级</span>
                  </div>
                  <div id="line_xxdj" style="flex-grow: 1;width: 100%;"></div>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-main>
        <el-aside style="border: #055693 solid 1px;">
          <div style="display: flex;align-items: center;padding: 10px;">
            <div class="dot_class"></div>
            <span style="margin-left: 8px;font-size: 12px;">教师信息-学历</span>
          </div>
          <div id="pie_xl" style="width: 100%;height: 300px;"></div>
          <div style="display: flex;align-items: center;padding: 10px;">
            <div class="dot_class"></div>
            <span style="margin-left: 8px;font-size: 12px;">教师职称</span>
          </div>
          <div id="right_bar" style="width: 100%;height: 160px;"></div>
          <div style="display: flex;align-items: center;padding: 10px;">
            <div class="dot_class"></div>
            <span style="margin-left: 8px;font-size: 12px;">学科占比</span>
          </div>
          <div id="right_line" style="width: 100%;height: 180px;"></div>
        </el-aside>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import GeoJson from '@/assets/dongtai';

  export default {
    name: "Main",
    data() {
      return {
        datas: [{name: '东台镇'}, {name: '富安镇'}, {name: '溱东镇'}, {name: '溱东镇'}, {name: '溱东镇'}, {name: '溱东镇'}, {name: '溱东镇'}, {name: '溱东镇'}, {name: '溱东镇'}, {name: '溱东镇'}, {name: '溱东镇'}, {name: '溱东镇'}, {name: '溱东镇'}, {name: '溱东镇'}],
      }
    },
    created() {
    },
    mounted() {
      this.$nextTick(function () {
        this.drawThree();
      });
    },
    methods: {
      drawThree() {
        this.drawRing(document.getElementById('ring_x'), "小学", 34, 35);
        this.drawRing(document.getElementById('ring_c'), "中学", 34, 35);
        this.drawRing(document.getElementById('ring_g'), "高中", 34, 35);
        this.drawLeftBar(document.getElementById('lef_line'));
        this.drawBXGM();
        this.drawSSB();
        this.drawBXCC();
        this.drawLineXXDJ();
        this.drawMap();
        this.drawRightBar(document.getElementById('right_bar'));
        this.drawRightLine();
        this.drawPie();
      },
      drawPie() {
        let pie = this.$echarts.init(document.getElementById('pie_xl'));
        var option = {
          grid: {
            left: 0,
            right: 0,
            bottom: 0,
            top: 0
          },
          legend: {
            show: true,
            orient: 'horizontal',
            top: 0,
            data: [
              {name: '直达', icon: 'pin', textStyle: {color: '#FFF', fontSize: 8}},
              {name: '营销广告', icon: 'circle', textStyle: {color: '#FFF', fontSize: 8}},
              {name: '搜索引擎', icon: 'circle', textStyle: {color: '#FFF', fontSize: 8}},
              {name: '邮件营销', icon: 'circle', textStyle: {color: '#FFF', fontSize: 8}},
              {name: '联盟广告', icon: 'circle', textStyle: {color: '#FFF', fontSize: 8}},
            ]
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              selectedMode: 'single',
              radius: [0, '30%'],
              center: ['50%', '60%'],
              label: {
                normal: {
                  position: 'inner',
                  formatter: '{b|{b}}\n{per|{d}%}',
                  rich: {
                    b: {
                      fontSize: 8,
                      color: '#FFF',
                      lineHeight: 25
                    },
                    per: {
                      fontSize: 8,
                      color: '#FFF'
                    }
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: [
                {value: 335, name: '直达', selected: true},
                {value: 679, name: '营销广告'},
                {value: 1548, name: '搜索引擎'}
              ]
            },
            {
              name: '访问来源',
              type: 'pie',
              radius: ['40%', '55%'],
              center: ['50%', '60%'],
              label: {
                normal: {
                  formatter: '{b|{b}} {per|{d}%}',
                  rich: {
                    b: {
                      fontSize: 8,
                      lineHeight: 33
                    },
                    per: {
                      fontSize: 8
                    }
                  }
                }
              },
              data: [
                {value: 335, name: '直达'},
                {value: 310, name: '邮件营销'},
                {value: 234, name: '联盟广告'},
                {value: 135, name: '视频广告'},
                {value: 1048, name: '百度'},
                {value: 251, name: '谷歌'},
                {value: 147, name: '必应'},
                {value: 102, name: '其他'}
              ]
            }
          ]
        };
        pie.setOption(option);
      },
      drawRightLine() {
        let line = this.$echarts.init(document.getElementById('right_line'));
        var option = {
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['邮件营销', '联盟广告', '视频广告'],
            top: '10%',
            textStyle: {
              color: 'white',
              fontSize: 10
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: 0,
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['语文', '数学', '英语', '政治', '历史', '地理'],
            axisLine: {
              lineStyle: {
                color: 'white'
              }
            }
          },
          yAxis: {
            type: 'value',
            axisLine: {
              show: false,
              lineStyle: {
                color: 'white'
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              lineStyle: {
                color: 'grey',
                type: 'dashed'
              }
            }
          },
          series: [
            {
              name: '邮件营销',
              type: 'line',
              stack: '总量',
              data: [12, 13, 10, 13, 90, 23, 21]
            },
            {
              name: '联盟广告',
              type: 'line',
              stack: '总量',
              data: [220, 182, 19, 23, 29, 33, 31]
            },
            {
              name: '视频广告',
              type: 'line',
              stack: '总量',
              data: [150, 232, 201, 154, 190, 330, 41]
            }
          ]
        };
        line.setOption(option);
      },
      drawRightBar(barDiv) {
        let line = this.$echarts.init(barDiv);
        var option = {
          grid: {
            left: 0,
            right: '10%',
            bottom: 0,
            top: '10%',
            containLabel: true
          },
          legend: {
            left: 'right',
            textStyle: {
              color: 'white',
              fontSize: 10
            }
          },
          tooltip: {},
          dataset: {
            source: [
              ['product', '总体', '男', '女'],
              ['正高级', 43.3, 85.8, 93.7],
              ['高级', 83.1, 73.4, 55.1],
              ['一级', 86.4, 65.2, 82.5],
              ['二级', 86.4, 65.2, 82.5],
              ['三级', 86.4, 65.2, 82.5]
            ]
          },
          xAxis: {
            type: 'category',
            axisLine: {
              lineStyle: {
                color: 'white'
              }
            }
          },
          yAxis: {
            axisLine: {
              show: false,
              lineStyle: {
                color: 'white'
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              lineStyle: {
                color: 'grey',
                type: 'dashed'
              }
            }
          },
          series: [
            {type: 'bar', barWidth: 5,},
            {type: 'bar', barWidth: 5,},
            {type: 'bar', barWidth: 5,}
          ]
        };
        line.setOption(option);
      },
      drawMap() {
        var geoJson = GeoJson.getGeoJson();
        var geoCoordMap = {
          '五烈镇': [120.257492, 32.858675],
          '南沈灶镇': [120.536721, 32.78619]
        };
        var data = [
          {name: '五烈镇', value: [2, 1, 1]},
          {name: '南沈灶镇', value: [2, 2, 2]},
        ];
        var convertData = function (data) {
          var res = [];
          for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
              res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
              });
            }
          }
          return res;
        };

        let map = this.$echarts.init(document.getElementById('map'));
        this.$echarts.registerMap('ls', geoJson);
        var option = {
          grid: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
          },
          tooltip: {
            formatter: function (e) {
              if (typeof (e.value)[2] == "undefined") {
                return e.name;
              } else {
                return e.name + '<br>'
                  + '小学  ：' + '<font color="#35F2EB">' + e.value[2] + '</font>' + '  所<br>'
                  + '初中  ：' + '<font color="#35F2EB">' + e.value[2] + '</font>' + '  所<br>'
                  + '高中  ：' + '<font color="#35F2EB">' + e.value[2] + '</font>' + '  所';
              }
            }
          },
          geo: {
            map: 'ls',
            show: true,
            label: {
              emphasis: {
                show: false
              }
            },
            itemStyle: {
              normal: {
                areaColor: '#C9E6FF',
                borderColor: '#fff',
                borderWidth: 2,
                shadowColor: '#5AB2FE',
                shadowBlur: 20
              }
            },
            zoom: 1.2,
          },
          series: [{
            type: 'map',
            map: 'ls',
            geoIndex: 1,
            zoom: 1.2,
            label: {
              emphasis: {
                show: false,
                textStyle: {
                  color: '#05C3F9'
                }
              }
            },
            roam: false,
            itemStyle: {
              normal: {
                areaColor: '#29617B',
                borderColor: '#136672',
                borderWidth: 2,
                label: {
                  show: false
                }
              },
              emphasis: {
                areaColor: '#2D688A',
                shadowColor: '#35F2EB',
                shadowBlur: 20,
                label: {
                  show: false
                }
              }
            },
            data: data,
          },
            {
              name: '企业数',
              type: 'scatter',
              coordinateSystem: 'geo',
              symbol: 'circle',
              symbolSize: function (val) {
                var num = val[2];
                if (num < 20) {
                  return 20
                } else {
                  return num;
                }
              },
              label: {
                normal: {
                  show: true,
                  formatter: function (value) {
                    return value.name
                  },
                  textStyle: {
                    color: '#fff',
                    fontSize: 12,
                  },
                  position: 'top'
                }
              },
              itemStyle: {
                normal: {
                  color: '#B7A523', //标志颜色
                }
              },
              zlevel: 6,
              data: convertData(data),
            }
          ]
        };
        map.setOption(option);
      },
      drawLineXXDJ() {
        let line = this.$echarts.init(document.getElementById('line_xxdj'));
        var option = {
          grid: {
            top: '5%',
            bottom: '20%',
            left: '15%',
            right: 0
          },
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisLine: {
              lineStyle: {
                color: 'white'
              }
            }
          },
          yAxis: {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: 'white'
              }
            }
          },
          series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            }
          }]
        };
        line.setOption(option);
      },
      drawBXCC() {
        let line = this.$echarts.init(document.getElementById('line_bxcc'));
        var labelRight = {
          normal: {
            position: 'right'
          }
        };
        var option = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            top: 0,
            bottom: '10%'
          },
          xAxis: {
            show: false,
            type: 'value',
            position: 'top',
            splitLine: {lineStyle: {type: 'dashed'}},
          },
          yAxis: {
            type: 'category',
            axisLine: {show: false},
            axisLabel: {show: false},
            axisTick: {show: false},
            splitLine: {show: false},
            data: ['38%', '高中', '20%', '初中', '60%', '小学']
          },
          series: [
            {
              name: '生活费',
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  formatter: '{b}'
                }
              },
              data: [
                0.2,
                {value: 0, label: labelRight},
                0.08,
                {value: 0, label: labelRight},
                0.47,
                {value: 0, label: labelRight},
              ]
            }
          ]
        };
        line.setOption(option);
      },
      drawSSB() {
        let line = this.$echarts.init(document.getElementById('line_ssb'));
        var option = {
          grid: {
            left: '10%',
            right: '20%',
            bottom: 0,
            top: 0
          },
          legend: {},
          tooltip: {},
          dataset: {
            source: [
              ['班级', 43.3, 85.8]
            ]
          },
          xAxis: {
            type: 'category',
            show: false
          },
          yAxis: {
            show: false
          },
          series: [
            {type: 'bar'},
            {type: 'bar'}
          ]
        };
        line.setOption(option);
      },
      drawBXGM() {
        let line = this.$echarts.init(document.getElementById('line_bxgm'));
        var option = {
          grid: {
            left: '10%',
            right: '20%',
            bottom: 0,
            top: 0
          },
          legend: {},
          tooltip: {},
          dataset: {
            source: [
              ['班级', 43.3, 85.8]
            ]
          },
          xAxis: {
            type: 'category',
            show: false
          },
          yAxis: {
            show: false
          },
          series: [
            {type: 'bar'},
            {type: 'bar'}
          ]
        };
        line.setOption(option);
      },
      drawLeftBar(lineDiv) {
        let line = this.$echarts.init(lineDiv);
        var option = {
          grid: {
            left: '10%',
            right: '10%',
            bottom: '15%',
            top: '10%'
          },
          legend: {
            left: 'right'
          },
          tooltip: {},
          dataset: {
            source: [
              ['product', '总体', '男', '女'],
              ['小学', 43.3, 85.8, 93.7],
              ['初中', 83.1, 73.4, 55.1],
              ['高中', 86.4, 65.2, 82.5]
            ]
          },
          xAxis: {
            type: 'category',
            axisLine: {
              lineStyle: {
                color: 'white'
              }
            }
          },
          yAxis: {
            axisLine: {
              lineStyle: {
                color: 'white'
              }
            }
          },
          series: [
            {type: 'bar', barWidth: 5,},
            {type: 'bar', barWidth: 5,},
            {type: 'bar', barWidth: 5,}
          ]
        };
        line.setOption(option);
      },
      drawRing(ringDiv, title, mNum, fNum) {
        let ring = this.$echarts.init(ringDiv);
        var option = {
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          series: [
            {
              name: '',
              type: 'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'right'
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '12',
                    fontWeight: 'bold'
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: [
                {value: mNum, name: '男'},
                {value: fNum, name: '女'}
              ]
            }
          ]
        };
        ring.setOption(option);
      }
    }
  }
</script>

<style scoped>
  .dot_class {
    background-color: #F99563;
    width: 8px;
    height: 8px;
    border-radius: 4px;
  }

  .badge_top_class {
    width: 14px;
    height: 14px;
    line-height: 14px;
    background-color: #EE4763;
    color: #FDFDFD;
    text-align: center;
    border-radius: 10px;
  }

  .badge_other_class {
    width: 14px;
    height: 14px;
    line-height: 14px;
    background-color: #546398;
    color: #C1C7D9;
    text-align: center;
    border-radius: 10px;
  }
</style>
