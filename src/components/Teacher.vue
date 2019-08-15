<script src="../api/school.js"></script>
<template>
  <div style="width: 1920px;height: 1152px;color: white;background-color: #000927;">
    <el-container style="height: 100%;">
      <el-header style="font-size: 30px;text-align: center;line-height: 85px;height: 85px;">
        <img src="../assets/titlet.png" height="107" width="1908"/></el-header>
      <el-container style="height: 100%;padding-top: 10px;padding-bottom: 10px;">
        <el-aside style="width: 488px;margin-left: 12px;">
          <div style="height: 400px;width: 100%;background: url('~@/../static/images/skcs.png');">
            <div style="height: 10px;"></div>
            <div style="font-size: 20px;height: 40px;line-height: 40px;padding-left: 25px;">
              备授课次数
            </div>
            <div id="line_left" style="height: 345px;width: 96%;margin-left: 2%;"></div>
          </div>
          <div style="margin-top: 15px;height: 608px;width: 100%;background: url('~@/../static/images/bktop10.png');">
            <div style="height: 10px;"></div>
            <div style="height: 45px;display: flex;">
              <div style="display: flex;flex-direction: column;cursor:pointer;" @click="leftSelectClick(0)">
                <div style="flex-grow: 1;display: flex;align-items: center;justify-content: center;"
                     :class="leftSelect==0?'selectText':'unselectText'">备课top10
                </div>
                <img src="../assets/selecttag.png" height="4" width="172" v-if="leftSelect==0"/>
                <div style="width: 172px;height: 4px;" v-if="leftSelect!=0"></div>
              </div>
              <div style="display: flex;flex-direction: column;cursor:pointer;" @click="leftSelectClick(1)">
                <div style="flex-grow: 1;display: flex;align-items: center;justify-content: center;"
                     :class="leftSelect==1?'selectText':'unselectText'">授课top10
                </div>
                <img src="../assets/selecttag.png" height="4" width="172" v-if="leftSelect==1"/>
                <div style="width: 172px;height: 4px;" v-if="leftSelect!=1"></div>
              </div>
            </div>
            <div id="bar_left_0" style="height: 500px;width: 96%;margin-left: 2%;" v-show="leftSelect==0"></div>
            <div id="bar_left_1" style="height: 500px;width: 96%;margin-left: 2%;" v-show="leftSelect==1"></div>
          </div>
        </el-aside>
        <el-main style="margin: 0px;padding: 0px 5px 0px 5px;display: flex;flex-direction: column;width: 920px;">
          <div
            style="display: grid;grid-template-columns: 1fr 1fr 1fr;grid-column-gap: 30px;padding-left: 30px;padding-right: 30px;color: #02D4F9;margin-top: 22px;">
            <div
              style="border: #056D98 solid 1px;height: 80px;padding: 6px;">
              <div
                style="background-color: #033251;display: flex;flex-direction: column;align-items: center;justify-content: center;height: 100%;">
                <span>教育资源上传总数 &nbsp;&nbsp; <span style="color: white;font-size: 20px;">{{centerData.resource}}</span>个</span>
              </div>
            </div>
            <div
              style="border: #056D98 solid 1px;height: 80px;padding: 6px;">
              <div
                style="background-color: #033251;display: flex;flex-direction: column;align-items: center;justify-content: center;height: 100%;">
                <span>微课上传个数 &nbsp;&nbsp; <span style="color: white;font-size: 20px;">{{centerData.class}}</span>个</span>
              </div>
            </div>
            <div
              style="border: #056D98 solid 1px;height: 80px;padding: 6px;">
              <div
                style="background-color: #033251;display: flex;flex-direction: column;align-items: center;justify-content: center;height: 100%;">
                <span>习题上传个数 &nbsp;&nbsp; <span style="color: white;font-size: 20px;">{{centerData.exe}}</span>个</span>
              </div>
            </div>
          </div>
          <div style="margin-left: 30px;margin-top: 10px;color: #8DC9DA;">(教学资源包括：操作、教室、习题、微课、试卷文档、视频、素材、学案、白板文件等)</div>

          <div style="display: flex;align-items: center;margin-left: 18px;margin-top: 20px;">
            <img src="../assets/sjx.png" height="21" width="13"/>
            <div style="color: #4EC8EF;margin-left: 5px;font-size: 18px;">教学资源积累top10</div>
          </div>

          <div id="center_0" style="width: 100%;height: 250px;"></div>

          <div style="display: flex;align-items: center;margin-left: 18px;margin-top: 10px;">
            <img src="../assets/sjx.png" height="21" width="13"/>
            <div style="color: #4EC8EF;margin-left: 5px;font-size: 18px;">月度教学资源积累top10</div>
          </div>

          <div id="center_1" style="width: 100%;height: 250px;"></div>

          <div style="display: flex;align-items: center;margin-left: 18px;margin-top: 10px;">
            <img src="../assets/sjx.png" height="21" width="13"/>
            <div style="color: #4EC8EF;margin-left: 5px;font-size: 18px;">学校上传教学资源统计</div>
          </div>

          <div id="center_2" style="width: 100%;height: 250px;"></div>

        </el-main>
        <el-aside style="width: 488px;margin-right: 12px;">
          <div style="height: 400px;width: 100%;background: url('~@/../static/images/hydtj.png');">
            <div style="height: 10px;"></div>
            <div style="font-size: 20px;height: 40px;line-height: 40px;padding-left: 25px;">
              学校活跃度统计
            </div>
            <div id="line_right" style="height: 345px;width: 96%;margin-left: 2%;"></div>
          </div>

          <div style="margin-top: 15px;height: 608px;width: 100%;background: url('~@/../static/images/bktop10.png');">
            <div style="height: 10px;"></div>
            <div style="height: 45px;width: 100%;">
              <el-row style="width: 100%;">
                <el-col :span="8">
                  <div style="height: 45px;display: flex;flex-direction: column;cursor:pointer;" @click="rightSelectClick(0)">
                    <div style="flex-grow: 1;display: flex;align-items: center;justify-content: center;"
                         :class="rightSelect==0?'selectText':'unselectText'">课前发布top10
                    </div>
                    <img src="../assets/selecttag.png" height="4" width="100%" v-if="rightSelect==0"/>
                    <div style="width: 100%;height: 4px;" v-if="rightSelect!=0"></div>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div style="height: 45px;display: flex;flex-direction: column;cursor:pointer;" @click="rightSelectClick(1)">
                    <div style="flex-grow: 1;display: flex;align-items: center;justify-content: center;"
                         :class="rightSelect==1?'selectText':'unselectText'">课中发布top10
                    </div>
                    <img src="../assets/selecttag.png" height="4" width="100%" v-if="rightSelect==1"/>
                    <div style="width: 100%;height: 4px;" v-if="rightSelect!=1"></div>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div style="height: 45px;display: flex;flex-direction: column;cursor:pointer;" @click="rightSelectClick(2)">
                    <div style="flex-grow: 1;display: flex;align-items: center;justify-content: center;"
                         :class="rightSelect==2?'selectText':'unselectText'">课后发布top10
                    </div>
                    <img src="../assets/selecttag.png" height="4" width="100%" v-if="rightSelect==2"/>
                    <div style="width: 100%;height: 4px;" v-if="rightSelect!=2"></div>
                  </div>
                </el-col>
              </el-row>
            </div>
            <div id="bar_right_0" style="height: 500px;width: 96%;margin-left: 2%;" v-show="rightSelect==0"></div>
            <div id="bar_right_1" style="height: 500px;width: 96%;margin-left: 2%;" v-show="rightSelect==1"></div>
            <div id="bar_right_2" style="height: 500px;width: 96%;margin-left: 2%;" v-show="rightSelect==2"></div>
          </div>
        </el-aside>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import schoolApi from '@/api/school';

  export default {
    name: "Teacher",
    data() {
      return {
        leftSelect: 0,
        rightSelect: 0,
        leftBarData: [],
        rightBarBarData: [],
        centerData: {},
      }
    },
    created() {
      this.loadData();
    },
    methods: {
      drawCenter2() {
        let bar = this.$echarts.init(document.getElementById('center_2'));
        var option = {
          grid: {
            left: '2%',
            right: '2%',
            top: '12%',
            bottom: '2%',
            containLabel: true
          },
          backgroundColor: '#000927',
          legend: {
            right: '10%',
            data: [
              {name: '总数', icon: 'circle', textStyle: {color: '#5E7AD1', fontSize: 10}},
              {name: '微课', icon: 'circle', textStyle: {color: '#5E7AD1', fontSize: 10}},
              {name: '试题', icon: 'circle', textStyle: {color: '#5E7AD1', fontSize: 10}}],
          },
          xAxis: {
            type: 'category',
            data: ['2019-01', '2019-02', '2019-03', '2019-04', '2019-05', '2019-06'],
            axisLabel: {
              color: '#FFFFFF'
            },
            axisLine: {
              lineStyle: {
                color: '#003C7A'
              }
            },
            axisTick: {
              show: false
            }
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              color: '#FFFFFF'
            },
            axisLine: {
              lineStyle: {
                color: '#003C7A'
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              lineStyle: {
                color: '#003C7A',
                type: 'dotted'
              }
            }
          },
          series: [{
            name: '总数',
            type: 'bar',
            barGap: 0,
            data: [320, 332, 301, 334, 390, 220],
            itemStyle: {
              normal: {
                color: '#A953FF',
                barBorderRadius: [5, 5, 0, 0],
              }
            },
            barWidth: 20
          },
            {
              name: '微课',
              type: 'bar',
              data: [220, 182, 191, 234, 290, 220],
              itemStyle: {
                normal: {
                  color: '#29AAFF',
                  barBorderRadius: [5, 5, 0, 0],
                }
              },
              barWidth: 20
            },
            {
              name: '试题',
              type: 'bar',
              data: [150, 232, 201, 154, 190, 220],
              itemStyle: {
                normal: {
                  color: '#FF973A',
                  barBorderRadius: [5, 5, 0, 0],
                }
              },
              barWidth: 20
            }]
        };
        bar.setOption(option);
      },
      drawCenter1(centerData) {
        var names = centerData.names;
        var nums = centerData.nums;
        var data = [];
        for (let i = 0; i < names.length; i++) {
          var item = [];
          item.push(names[i]);
          item.push(nums[i]);
          data.push(item);
        }
        console.log(JSON.stringify(data));

        let scatter = this.$echarts.init(document.getElementById('center_1'));
        var min = data[data.length - 1][1];
        var step = (data[0][1] - min) / data.length;
        var option = {
          grid: {
            left: '2%',
            right: '3%',
            top: '10%',
            bottom: '2%',
            containLabel: true
          },
          backgroundColor: '#000927',
          xAxis: {
            type: 'category',
            data: names,
            axisLine: {
              lineStyle: {
                color: '#003C7A'
              }
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              color: '#FFFFFF'
            },
            axisTick: {
              show: false
            },
          },
          yAxis: {
            axisLabel: {
              color: '#FFFFFF'
            },
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: '#003C7A'
              }
            },
            splitLine: {
              lineStyle: {
                type: 'dotted',
                color: '#003C7A'
              }
            },
            scale: true
          },
          series: [{
            data: data,
            type: 'scatter',
            symbolSize: function (itemData) {
              var res = 35 + 2 * (itemData[1] - min) / step;
              return res;
            },
            label: {
              normal: {
                show: true,
                color: '#FFFFFF'
              }
            },
            itemStyle: {
              normal: {
                shadowColor: 'rgba(25, 100, 150, 0.5)',
                shadowOffsetY: 5,
                color: new this.$echarts.graphic.RadialGradient(0.5, 0.5, 1, [{
                  offset: 0,
                  color: 'rgba(129, 227, 238,0.1)'
                }, {
                  offset: 1,
                  color: 'rgb(25, 183, 207)'
                }])
              }
            }
          }]
        };
        scatter.setOption(option);
      },
      drawCenter0(centerData) {
        let bar = this.$echarts.init(document.getElementById('center_0'));
        var option = {
          backgroundColor: '#000927',
          grid: {
            left: '2%',
            right: '2%',
            top: '12%',
            bottom: '2%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            axisLabel: {
              color: '#FFFFFF'
            },
            axisLine: {
              lineStyle: {
                color: '#003C7A'
              }
            },
            axisTick: {
              show: false
            },
            data: centerData.names
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              color: '#FFFFFF'
            },
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: '#003C7A'
              }
            },
            splitLine: {
              lineStyle: {
                color: '#003C7A',
                type: 'dotted'
              }
            }
          },
          series: [{
            data: centerData.nums,
            type: 'bar',
            barWidth: 20,
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    {offset: 0, color: '#F29237'},
                    {offset: 0.5, color: '#FFA936'},
                    {offset: 1, color: '#FFB736'}
                  ]
                )
              }
            },
            label: {
              normal: {
                show: true,
                position: 'top',
                color: '#5FFFFF'
              }
            }
          }]
        };
        bar.setOption(option);
      },
      leftSelectClick(index) {
        this.leftSelect = index;
        this.$nextTick(function () {
          if (index == 0) {
            this.drawLeftBar(document.getElementById('bar_left_0'), this.leftBarData[0]);
          } else if (index == 1) {
            this.drawLeftBar(document.getElementById('bar_left_1'), this.leftBarData[1]);
          }
        });
      },
      rightSelectClick(index) {
        this.rightSelect = index;
        this.$nextTick(function () {
          if (index == 0) {
            this.drawRightBar(document.getElementById('bar_right_0'), this.rightBarBarData[0]);
          } else if (index == 1) {
            this.drawRightBar(document.getElementById('bar_right_1'), this.rightBarBarData[1]);
          } else if (index == 2) {
            this.drawRightBar(document.getElementById('bar_right_2'), this.rightBarBarData[2]);
          }
        });
      },
      loadData() {
        schoolApi.findBSKNum()
          .then(response => {
            var ret = response.data;
            if (ret.flag) {
              var data = ret.data;
              this.drawLine(document.getElementById('line_left'), data);
            } else {
              console.log(ret.message);
            }
          })
          .catch(error => {
            console.log(error);
          });
        schoolApi.findClassMonth()
          .then(response => {
            var ret = response.data;
            if (ret.flag) {
              var data = ret.data;
              this.drawLine(document.getElementById('line_right'), data);
            } else {
              console.log(ret.message);
            }
          })
          .catch(error => {
            console.log(error);
          });
        this.$axios.all([schoolApi.findBKTop10(), schoolApi.findSKTop10()])
          .then(this.$axios.spread((resBK, resSK) => {
            var retBK = resBK.data;
            var retSK = resSK.data;
            this.leftBarData.push(retBK.data);
            this.leftBarData.push(retSK.data);
            this.drawLeftBar(document.getElementById('bar_left_0'), this.leftBarData[0]);
          }))
          .catch(error => {
            console.log(error);
          });
        this.$axios.all([schoolApi.findBClass(), schoolApi.findMClass(), schoolApi.findAClass()])
          .then(this.$axios.spread((resB, resM, resA) => {
            var retB = resB.data;
            var retM = resM.data;
            var retA = resA.data;
            this.rightBarBarData.push(retB.data);
            this.rightBarBarData.push(retM.data);
            this.rightBarBarData.push(retA.data);
            this.drawRightBar(document.getElementById('bar_right_0'), this.rightBarBarData[0]);
          }))
          .catch(error => {
            console.log(error);
          });
        schoolApi.findResourceNums()
          .then(response => {
            var ret = response.data;
            if (ret.flag) {
              this.centerData = ret.data;
            } else {
              console.log(ret.message);
            }
          })
          .catch(error => {
            console.log(error);
          });
        schoolApi.findResourceTop10()
          .then(response => {
            var ret = response.data;
            if (ret.flag) {
              this.drawCenter0(ret.data);
            } else {
              console.log(ret.message);
            }
          })
          .catch(error => {
            console.log(error);
          });
        var date = DateUtil.format(new Date(), "yyyy-MM");
        schoolApi.findResourceMonthTop10(date)
          .then(response => {
            var ret = response.data;
            if (ret.flag) {
              this.drawCenter1(ret.data);
            } else {
              console.log(ret.message);
            }
          })
          .catch(error => {
            console.log(error);
          });

        this.drawCenter2();
      },
      drawRightBar(barDiv, barData) {
        let bar = this.$echarts.init(barDiv);
        var option = {
          backgroundColor: '#000927',
          grid: {
            left: '3%',
            right: '2%',
            bottom: '3%',
            top: '5%',
            containLabel: true
          },
          xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01],
            show: false
          },
          yAxis: [{
            type: 'category',
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: '#ffffff',
                fontSize: '12',
              }
            },
            data: barData.names
          }, {
            axisTick: 'none',
            axisLine: 'none',
            axisLabel: {
              textStyle: {
                color: '#ffffff',
                fontSize: '12',
              }
            },
            data: barData.nums
          }],
          series: [
            {
              name: '2011年',
              type: 'bar',
              barWidth: 20,
              yAxisIndex: 0,
              data: barData.nums,
              itemStyle: {
                normal: {
                  color: new this.$echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                    offset: 0,
                    color: 'rgb(32, 69, 242)'
                  }, {
                    offset: 1,
                    color: 'rgb(102, 128, 246)'
                  }
                  ])
                }
              },
              z: 1
            },
            {
              name: '2011年',
              type: 'bar',
              barWidth: 20,
              yAxisIndex: 1,
              data: [100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000],
              itemStyle: {
                normal: {
                  color: '#033458'
                }
              },
              z: 0
            }
          ]
        };
        bar.setOption(option);
      },
      drawLeftBar(barDiv, barData) {
        let bar = this.$echarts.init(barDiv);
        var option = {
          backgroundColor: '#000927',
          grid: {
            left: '3%',
            right: '2%',
            bottom: '3%',
            top: '5%',
            containLabel: true
          },
          xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01],
            show: false
          },
          yAxis: [{
            type: 'category',
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: '#ffffff',
                fontSize: '12',
              }
            },
            data: barData.names
          }, {
            axisTick: 'none',
            axisLine: 'none',
            axisLabel: {
              textStyle: {
                color: '#ffffff',
                fontSize: '12',
              }
            },
            data: barData.nums
          }],
          series: [
            {
              name: '2011年',
              type: 'bar',
              barWidth: 20,
              yAxisIndex: 0,
              data: barData.nums,
              itemStyle: {
                normal: {
                  color: new this.$echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                    offset: 0,
                    color: 'rgb(32, 69, 242)'
                  }, {
                    offset: 1,
                    color: 'rgb(102, 128, 246)'
                  }
                  ])
                }
              },
              z: 1
            },
            {
              name: '2011年',
              type: 'bar',
              barWidth: 20,
              yAxisIndex: 1,
              data: [10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000],
              itemStyle: {
                normal: {
                  color: '#033458'
                }
              },
              z: 0
            }
          ]
        };
        bar.setOption(option);
      },
      drawLine(lineDiv, data) {
        let line = this.$echarts.init(lineDiv);
        var option = {
            backgroundColor: '#000927',
            grid: {
              left: '1%',
              right: 0,
              top: '10%',
              bottom: '2%',
              containLabel: true
            },
            legend: {
              data: ['总数', '备课次数', '授课次数'],
              right: "1%",
              textStyle: {
                color: '#FFF'
              }
            },
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: data.names,
              axisLabel: {
                color: '#FFF'
              },
              axisTick: {
                show: false
              },
              axisLine: {
                lineStyle: {
                  color: '#292F4E'
                }
              }
            },
            yAxis: {
              type: 'value',
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                color: '#FFF'
              },
              splitLine: {
                lineStyle: {
                  color: '#292F4E'
                }
              }
            },
            series: [
              {
                name: '总数',
                data: data.num1,
                type: 'line',
                showSymbol: false,
                symbol: 'circle',
                lineStyle: {
                  width: 3
                },
                itemStyle: {
                  normal: {
                    color: '#A950FF'
                  }
                },
                areaStyle: {
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(167, 82, 255,0.3)'
                  }, {
                    offset: 1,
                    color: 'rgba(255, 255, 255,0)'
                  }
                  ])
                }
              },
              {
                name: '备课次数',
                data: data.num2,
                type: 'line',
                showSymbol: false,
                symbol: 'circle',
                lineStyle: {
                  width: 3
                },
                itemStyle: {
                  normal: {
                    color: '#70BCFF'
                  }
                },
                areaStyle: {
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(110, 187, 255,0.2)'
                  }, {
                    offset: 1,
                    color: 'rgba(255, 255, 255,0)'
                  }])
                }
              },
              {
                name: '授课次数',
                data: data.num3,
                type: 'line',
                showSymbol: false,
                symbol: 'circle',
                lineStyle: {
                  width: 3
                },
                itemStyle: {
                  normal: {
                    color: '#FF9A39'
                  }
                },
                areaStyle: {
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(255, 1, 55,0.3)'
                  }, {
                    offset: 1,
                    color: 'rgba(255, 255, 255,0)'
                  }])
                }
              }
            ]
          }
        ;
        line.setOption(option);
      },
      drawLineRight(lineDiv) {
        let line = this.$echarts.init(lineDiv);
        var option = {
            backgroundColor: '#000927',
            grid: {
              left: '1%',
              right: 0,
              top: '10%',
              bottom: '2%',
              containLabel: true
            },
            legend: {
              data: ['课前发布次数', '课中发布次数', '课后发布次数'],
              right: "1%",
              textStyle: {
                color: '#FFF'
              }
            },
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['2019-01', '2019-02', '2019-03', '2019-04', '2019-05', '2019-06'],
              axisLabel: {
                color: '#FFF'
              },
              axisTick: {
                show: false
              },
              axisLine: {
                lineStyle: {
                  color: '#292F4E'
                }
              }
            },
            yAxis: {
              type: 'value',
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                color: '#FFF'
              },
              splitLine: {
                lineStyle: {
                  color: '#292F4E'
                }
              }
            },
            series: [
              {
                name: '课前发布次数',
                data: [820, 932, 901, 934, 1290, 1330],
                type: 'line',
                showSymbol: false,
                symbol: 'circle',
                lineStyle: {
                  width: 3
                },
                itemStyle: {
                  normal: {
                    color: '#A950FF'
                  }
                },
                areaStyle: {
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(167, 82, 255,0.3)'
                  }, {
                    offset: 1,
                    color: 'rgba(255, 255, 255,0)'
                  }
                  ])
                }
              },
              {
                name: '课中发布次数',
                data: [800, 902, 90, 934, 120, 130],
                type: 'line',
                showSymbol: false,
                symbol: 'circle',
                lineStyle: {
                  width: 3
                },
                itemStyle: {
                  normal: {
                    color: '#70BCFF'
                  }
                },
                areaStyle: {
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(110, 187, 255,0.2)'
                  }, {
                    offset: 1,
                    color: 'rgba(255, 255, 255,0)'
                  }])
                }
              },
              {
                name: '课后发布次数',
                data: [900, 252, 901, 954, 1200, 1130],
                type: 'line',
                showSymbol: false,
                symbol: 'circle',
                lineStyle: {
                  width: 3
                },
                itemStyle: {
                  normal: {
                    color: '#FF9A39'
                  }
                },
                areaStyle: {
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(255, 1, 55,0.3)'
                  }, {
                    offset: 1,
                    color: 'rgba(255, 255, 255,0)'
                  }])
                }
              }
            ]
          }
        ;
        line.setOption(option);
      }
    }
  }
</script>

<style scoped>
  .selectText {
    font-size: 20px;
    color: white;
  }

  .unselectText {
    font-size: 18px;
    color: #6886E6;
  }
</style>
