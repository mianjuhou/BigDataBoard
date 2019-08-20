<template>
  <div style="width: 1920px;height: 1152px;color: white;background-color: #000927;">
    <el-container style="height: 100%;">
      <el-header style="font-size: 30px;text-align: center;line-height: 85px;height: 85px;">
        <img src="../assets/title.png" height="107" width="1908"/></el-header>
      <el-container style="height: 100%;padding-top: 10px;padding-bottom: 0px;">
        <el-aside style="width: 475px;margin-left: 20px;display: flex;flex-direction: column;">
          <div>
            <div style="display: flex;align-items: center;width: 96%;margin-top: 10px;margin-bottom: 10px;">
              <div style="width: 12px;height: 20px;background-color: #51C8EF;margin-left: 15px;"></div>
              <span style="color: #4ABBE0;font-size: 18px;margin-left: 10px;">学校情况</span>
            </div>
            <div style="width: 100%;height: 460px;">
              <table style="width: 100%;background-color: #00133B;">
                <thead style="background-color: #001C4E;">
                <th style="width: 50%;padding-left: 25px;padding-top: 12px;padding-bottom: 12px;" align="left">学校名称</th>
                <th style="width: 15%;" align="left">学生总数</th>
                <th style="width: 15%;" align="left">教师总数</th>
                </thead>
                <tr v-for="school of schools.school0" style="background-color: #00133B;color: #37EFE9;font-size: 13px;">
                  <th align="left" style="padding-left: 25px;padding-top: 6px;padding-bottom: 6px;">
                    {{school.name}}
                  </th>
                  <th align="left" style="padding-left: 5px;">
                    {{school.snum}}
                  </th>
                  <th align="left" style="padding-left: 5px;">
                    {{school.tnum}}
                  </th>
                </tr>
                <tr>
                  <th style="padding-top: 6px;padding-bottom: 6px;">
                    <div style="width: 100%;border-top: #072A71 dashed 2px;"></div>
                  </th>
                  <th>
                    <div style="width: 100%;border-top: #072A71 dashed 2px;"></div>
                  </th>
                  <th>
                    <div style="width: 100%;border-top: #072A71 dashed 2px;"></div>
                  </th>
                </tr>
                <tr v-for="school of schools.school1" style="background-color: #00133B;color: #37EFE9;font-size: 13px;">
                  <th align="left" style="padding-left: 25px;padding-top: 6px;padding-bottom: 6px;">
                    {{school.name}}
                  </th>
                  <th align="left" style="padding-left: 5px;">
                    {{school.snum}}
                  </th>
                  <th align="left" style="padding-left: 5px;">
                    {{school.tnum}}
                  </th>
                </tr>
                <tr>
                  <th style="padding-top: 6px;padding-bottom: 6px;">
                    <div style="width: 100%;border-top: #072A71 dashed 2px;"></div>
                  </th>
                  <th>
                    <div style="width: 100%;border-top: #072A71 dashed 2px;"></div>
                  </th>
                  <th>
                    <div style="width: 100%;border-top: #072A71 dashed 2px;"></div>
                  </th>
                </tr>
                <tr v-for="school of schools.school2" style="background-color: #00133B;color: #37EFE9;font-size: 13px;">
                  <th align="left" style="padding-left: 25px;padding-top: 6px;padding-bottom: 6px;">
                    {{school.name}}
                  </th>
                  <th align="left" style="padding-left: 5px;">
                    {{school.snum}}
                  </th>
                  <th align="left" style="padding-left: 5px;">
                    {{school.tnum}}
                  </th>
                </tr>
              </table>
            </div>
          </div>
          <div style="margin-top: 10px;">
            <div style="display: flex;align-items: center;width: 96%;margin-top: 10px;margin-bottom: 10px;">
              <div style="width: 12px;height: 20px;background-color: #51C8EF;margin-left: 15px;"></div>
              <span style="color: #4ABBE0;font-size: 18px;margin-left: 10px;">学生信息-男女比例</span>
            </div>
            <el-row>
              <el-col :span="8">
                <div id="ring_x" style="height: 130px;"></div>
              </el-col>
              <el-col :span="8">
                <div id="ring_c" style="height: 130px;"></div>
              </el-col>
              <el-col :span="8">
                <div id="ring_g" style="height: 130px;"></div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <div style="text-align: center;width: 100%;font-size: 14px;">小学</div>
              </el-col>
              <el-col :span="8">
                <div style="text-align: center;width: 100%;font-size: 14px;">初中</div>
              </el-col>
              <el-col :span="8">
                <div style="text-align: center;width: 100%;font-size: 14px;">高中</div>
              </el-col>
            </el-row>
          </div>
          <div style="margin-top: 20px;height: 305px;width: 100%;background: url('~@/../static/images/xxrstj.png');">
            <div style="height: 10px;"></div>
            <div style="font-size: 20px;height: 40px;line-height: 40px;padding-left: 25px;">
              学生人数统计
            </div>
            <div id="bar_left" style="height: 255px;width: 96%;margin-left: 2%;"></div>
          </div>
        </el-aside>
        <el-main style="margin: 0px;padding: 0px 5px 0px 5px;display: flex;flex-direction: column;width: 920px;">
          <div
            style="display: grid;grid-template-columns: 1fr 1fr 1fr;grid-column-gap: 30px;padding-left: 30px;padding-right: 30px;color: #02D4F9;margin-top: 22px;">
            <div
              style="border: #056D98 solid 1px;height: 80px;padding: 6px;">
              <div
                style="background-color: #033251;display: flex;flex-direction: column;align-items: center;justify-content: center;height: 100%;">
                <span>学校总数 &nbsp;&nbsp; <span style="color: white;font-size: 20px;">{{fourData['学校']}}</span>个</span>
              </div>
            </div>
            <div
              style="border: #056D98 solid 1px;height: 80px;padding: 6px;">
              <div
                style="background-color: #033251;display: flex;flex-direction: column;align-items: center;justify-content: center;height: 100%;">
                <span>学生总人数 &nbsp;&nbsp; <span style="color: white;font-size: 20px;">{{fourData['学生']}}</span>个</span>
              </div>
            </div>
            <div
              style="border: #056D98 solid 1px;height: 80px;padding: 6px;">
              <div
                style="background-color: #033251;display: flex;flex-direction: column;align-items: center;justify-content: center;height: 100%;">
                <span>教师总人数 &nbsp;&nbsp; <span style="color: white;font-size: 20px;">{{fourData['教师']}}</span>个</span>
              </div>
            </div>
          </div>

          <div id="map" style="flex-grow: 1;">

          </div>

          <div style="height: 335px;width: 100%;background-color: #011848;display: flex;">
            <div style="width: 260px;display: flex;flex-direction: column;">
              <div style="display: flex;padding-left: 8px;margin-top: 30px;">
                <div style="display: flex;align-items: center;flex-grow: 1;">
                  <img src="../assets/sjx.png" height="14" width="14"/>
                  <span style="font-size: 12px;color: #51C8EF;margin-left: 10px;">办学规模</span>
                </div>
                <div style="display: flex;align-items: center;flex-grow: 1;">
                  <img src="../assets/yh.png" height="14" width="14"/>
                  <span style="font-size: 12px;color: #51C8EF;margin-left: 10px;">师生比</span>
                </div>
              </div>
              <div id="bottom_0" style="flex: 1;"></div>
              <div style="width: 100%;">
                <el-row style="margin-top: 10px;margin-bottom: 20px;">
                  <el-col :span="6" style="text-align: right;">班级&nbsp;&nbsp;&nbsp;</el-col>
                  <el-col :span="6">学生</el-col>
                  <el-col :span="5">&nbsp;&nbsp;教师</el-col>
                  <el-col :span="7">学生</el-col>
                </el-row>
              </div>
            </div>
            <div style="width: 300px;display: flex;flex-direction: column;">
              <div style="display: flex;align-items: center;margin-top: 30px;padding-left: 18px;">
                <img src="../assets/suo.png" height="14" width="14"/>
                <span style="font-size: 12px;color: #51C8EF;margin-left: 10px;">办学层次</span>
              </div>
              <div id="bottom_1" style="flex: 1;"></div>
            </div>
            <div style="width: 300px;flex-grow: 1;display: flex;flex-direction: column;">
              <div style="display: flex;align-items: center;margin-top: 30px;padding-left: 12px;">
                <img src="../assets/suo.png" height="14" width="14"/>
                <span style="font-size: 12px;color: #51C8EF;margin-left: 10px;">学校等级</span>
              </div>
              <div id="bottom_2" style="flex: 1;"></div>
            </div>
          </div>
        </el-main>
        <el-aside style="width: 475px;margin-right: 20px;">
          <div style="height: 584px;width: 100%;background: url('~@/../static/images/jsxx.png');">
            <div style="height: 10px;"></div>
            <div style="font-size: 20px;height: 40px;line-height: 40px;padding-left: 25px;">
              教师信息-学历
            </div>
            <div id="pie_right" style="height: 534px;width: 96%;margin-left: 2%;"></div>
          </div>
          <div style="margin-top: 5px;height: 450px;width: 100%;background: url('~@/../static/images/jszc.png');">
            <div style="height: 10px;"></div>
            <div style="font-size: 20px;height: 40px;line-height: 40px;padding-left: 25px;">
              教师职称
            </div>
            <div id="bar_right" style="height: 400px;width: 96%;margin-left: 2%;"></div>
          </div>
        </el-aside>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import GeoJson from '@/assets/dongtai';
  import mainDataApi from '@/api/mainData';

  export default {
    name: "MainIndex",
    data() {
      return {
        schools: {},
        studentGender: {},
        fourData: {},
        teacherEdu: {},
        teacherTitle: {},
      }
    },
    created() {
      this.loadData();
    },
    methods: {
      loadData() {
        mainDataApi.getSchoolInfo()
          .then(response => {
            var ret = response.data;
            if (ret.flag) {
              this.schools = ret.data;
            } else {
              console.log(ret.message);
            }
          })
          .catch(error => {
            console.log(error);
          });
        mainDataApi.getStudentInfo()
          .then(response => {
            var ret = response.data;
            if (ret.flag) {
              this.studentGender = ret.data;
              this.drawRing(document.getElementById('ring_x'), "小学", this.studentGender['小学']['男'], this.studentGender['小学']['女']);
              this.drawRing(document.getElementById('ring_c'), "初中", this.studentGender['初中']['男'], this.studentGender['初中']['女']);
              this.drawRing(document.getElementById('ring_g'), "高中", this.studentGender['高中']['男'], this.studentGender['高中']['女']);
              this.drawLeftBar();
            } else {
              console.log(ret.message);
            }
          })
          .catch(error => {
            console.log(error);
          });
        mainDataApi.getFourTotalNum()
          .then(response => {
            var ret = response.data;
            if (ret.flag) {
              this.fourData = ret.data;
              this.drawBottom0();
            } else {
              console.log(ret.message);
            }
          })
          .catch(error => {
            console.log(error);
          });
        mainDataApi.getSchoolTypeNum()
          .then(response => {
            var ret = response.data;
            if (ret.flag) {
              this.schoolType = ret.data;
              this.drawBottom1();
              this.drawBottom2();
            } else {
              console.log(ret.message);
            }
          })
          .catch(error => {
            console.log(error);
          });
        mainDataApi.getTownSchoolInfo()
          .then(response => {
            var ret = response.data;
            if (ret.flag) {
              this.townData = ret.data;
              this.drawMap();
            } else {
              console.log(ret.message);
            }
          })
          .catch(error => {
            console.log(error);
          });
        mainDataApi.getTeacherEdu()
          .then(response => {
            var ret = response.data;
            if (ret.flag) {
              this.teacherEdu = ret.data;
              this.drawPie();
            } else {
              console.log(ret.message);
            }
          })
          .catch(error => {
            console.log(error);
          });
        mainDataApi.getTeacherTitle()
          .then(response => {
            var ret = response.data;
            if (ret.flag) {
              this.teacherTitle = ret.data;
              this.drawRightBar();
            } else {
              console.log(ret.message);
            }
          })
          .catch(error => {
            console.log(error);
          });
      },
      drawMap() {
        var geoJson = GeoJson.getGeoJson();
        var geoCoordMap = {
          '东台市': [120.32762, 32.874595],
          '五烈镇': [120.255874, 32.858561],
          '南沈灶镇': [120.541373, 32.786913],
          '溱东镇': [120.156738, 32.666001],
          '时堰镇': [120.199629, 32.723647],
          '梁垛镇': [120.379386, 32.779505],
          '安丰镇': [120.409011, 32.740666],
          '富安镇': [120.48897, 32.678994],
          '唐洋镇': [120.70495, 32.638932],
          '新街镇': [120.786107, 32.676804],
          '许河镇': [120.652977, 32.727891],
          '三仓镇': [120.696102, 32.774906],
          '头灶镇': [120.562447, 32.894671],
          '弶港镇': [120.856456, 32.737087],
        };
        var data = [
          {name: '五烈镇', value: this.townData['五烈镇']},
          {name: '南沈灶镇', value: this.townData['南沈灶镇']},
          {name: '溱东镇', value: this.townData['溱东镇']},
          {name: '时堰镇', value: this.townData['时堰镇']},
          {name: '梁垛镇', value: this.townData['梁垛镇']},
          {name: '安丰镇', value: this.townData['安丰镇']},
          {name: '富安镇', value: this.townData['富安镇']},
          {name: '唐洋镇', value: this.townData['唐洋镇']},
          {name: '新街镇', value: this.townData['新街镇']},
          {name: '许河镇', value: this.townData['许河镇']},
          {name: '三仓镇', value: this.townData['三仓镇']},
          {name: '头灶镇', value: this.townData['头灶镇']},
          {name: '弶港镇', value: this.townData['弶港镇']},
        ];
        var lineData = [
          {"fromName": "五烈镇", "toName": "五烈镇", "coords": [[120.292621, 32.925827], [120.272786, 32.911522]]},
          {"fromName": "五烈镇", "toName": "五烈镇", "coords": [[120.272786, 32.911522], [120.268762, 32.866894]]},
          {"fromName": "五烈镇", "toName": "五烈镇", "coords": [[120.268762, 32.866894], [120.270199, 32.839475]]},
          {"fromName": "五烈镇", "toName": "东台", "coords": [[120.270199, 32.839475], [120.29952, 32.795539]]},
          {"fromName": "东台", "toName": "时堰镇", "coords": [[120.29952, 32.795539], [120.214432, 32.718293]]},
          {"fromName": "时堰镇", "toName": "溱东镇", "coords": [[120.214432, 32.718293], [120.178213, 32.685723]]},
          {"fromName": "溱东镇", "toName": "溱东镇", "coords": [[120.178213, 32.685723], [120.174188, 32.64925]]},
          {"fromName": "溱东镇", "toName": "溱东镇", "coords": [[120.174188, 32.64925], [120.160965, 32.642926]]},
          {"fromName": "溱东镇", "toName": "溱东镇", "coords": [[120.160965, 32.642926], [120.160965, 32.642926]]},
          {"fromName": "溱东镇", "toName": "溱东镇", "coords": [[120.160965, 32.642926], [120.127045, 32.657518]]},
          {"fromName": "东台", "toName": "五烈南", "coords": [[120.29952, 32.795539], [120.330278, 32.737489]]},
          {"fromName": "五烈南", "toName": "五烈南", "coords": [[120.330278, 32.737489], [120.355287, 32.681833]]},
          {"fromName": "五烈南", "toName": "东台", "coords": [[120.330278, 32.737489], [120.398118, 32.752309]]},
          {"fromName": "东台", "toName": "东台", "coords": [[120.398118, 32.752309], [120.361898, 32.806221]]},
          {"fromName": "东台", "toName": "东台", "coords": [[120.361898, 32.806221], [120.337177, 32.857674]]},
          {"fromName": "东台", "toName": "东台", "coords": [[120.361898, 32.806221], [120.325679, 32.881934]]},
          {"fromName": "东台", "toName": "东台", "coords": [[120.325679, 32.881934], [120.303257, 32.879023]]},
          {"fromName": "东台", "toName": "东台", "coords": [[120.303257, 32.879023], [120.291759, 32.9251]]},
          {"fromName": "东台", "toName": "富安镇", "coords": [[120.398118, 32.752309], [120.497866, 32.671379]]},
          {"fromName": "东台", "toName": "富安镇", "coords": [[120.497866, 32.671379], [120.50304, 32.611545]]},
          {"fromName": "东台", "toName": "头灶镇", "coords": [[120.337177, 32.857674], [120.536385, 32.892606]]},
          {"fromName": "头灶镇", "toName": "海边", "coords": [[120.536385, 32.892606], [120.724095, 32.911522]]},
          {"fromName": "头灶镇", "toName": "海边", "coords": [[120.724095, 32.911522], [120.817806, 32.954189]]},
          {"fromName": "头灶镇", "toName": "海边", "coords": [[120.817806, 32.954189], [120.921866, 32.957582]]},
          {"fromName": "梁垛镇", "toName": "南沈灶镇", "coords": [[120.398118, 32.752309], [120.433188, 32.765426]]},
          {"fromName": "梁垛镇", "toName": "南沈灶镇", "coords": [[120.433188, 32.765426], [120.459634, 32.76154]]},
          {"fromName": "南沈灶镇", "toName": "三仓镇", "coords": [[120.459634, 32.76154], [120.518275, 32.777569]]},
          {"fromName": "南沈灶镇", "toName": "三仓镇", "coords": [[120.518275, 32.777569], [120.691325, 32.75571]]},
          {"fromName": "三仓镇", "toName": "弶港镇", "coords": [[120.691325, 32.75571], [120.721221, 32.759111]]},
          {"fromName": "三仓镇", "toName": "弶港镇", "coords": [[120.721221, 32.759111], [120.748816, 32.769312]]},
          {"fromName": "三仓镇", "toName": "弶港镇", "coords": [[120.748816, 32.769312], [120.909793, 32.762511]]},
          {"fromName": "三仓北", "toName": "三仓镇", "coords": [[120.667466, 32.922675], [120.691325, 32.821272]]},
          {"fromName": "三仓北", "toName": "三仓镇", "coords": [[120.691325, 32.821272], [120.69075, 32.719751]]},
          {"fromName": "三仓镇", "toName": "唐洋镇", "coords": [[120.69075, 32.719751], [120.687301, 32.705169]]},
          {"fromName": "三仓镇", "toName": "唐洋镇", "coords": [[120.687301, 32.705169], [120.695349, 32.679888]]},
          {"fromName": "三仓镇", "toName": "唐洋镇", "coords": [[120.695349, 32.679888], [120.699374, 32.603029]]},
          {"fromName": "东1", "toName": "东2", "coords": [[120.784461, 32.980845], [120.831604, 32.962429]]},
          {"fromName": "东2", "toName": "东3", "coords": [[120.831604, 32.962429], [120.883347, 32.897457]]},
          {"fromName": "东3", "toName": "东4", "coords": [[120.883347, 32.897457], [120.886221, 32.873201]]},
          {"fromName": "东3", "toName": "东5", "coords": [[120.886221, 32.873201], [120.923016, 32.832922]]},
          {"fromName": "东3", "toName": "东6", "coords": [[120.923016, 32.832922], [120.921291, 32.801851]]},
          {"fromName": "东3", "toName": "东7", "coords": [[120.921291, 32.801851], [120.910368, 32.763968]]},
          {"fromName": "东3", "toName": "东8", "coords": [[120.910368, 32.763968], [120.89312, 32.724612]]},
          {"fromName": "东3", "toName": "东9", "coords": [[120.89312, 32.724612], [120.891396, 32.602542]]},
        ];
        var dtData = [{name: '东台市', value: this.townData['东台市']},];
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
                  + '初中  ：' + '<font color="#35F2EB">' + e.value[3] + '</font>' + '  所<br>'
                  + '高中  ：' + '<font color="#35F2EB">' + e.value[4] + '</font>' + '  所';
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
                  return 30
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
                  color: new this.$echarts.graphic.RadialGradient(0.5, 0.5, 1, [{
                    offset: 0,
                    color: 'rgba(187, 167, 22, 0.4)'
                  }, {
                    offset: 1,
                    color: 'rgb(243, 192, 0)'
                  }]),
                }
              },
              zlevel: 6,
              data: convertData(data),
            },
            {
              name: '企业数',
              type: 'scatter',
              coordinateSystem: 'geo',
              symbol: 'circle',
              symbolSize: 15,
              label: {
                normal: {
                  show: false,
                }
              },
              itemStyle: {
                normal: {
                  color: new this.$echarts.graphic.RadialGradient(0.5, 0.5, 0.3, [{
                    offset: 0,
                    color: 'rgb(243, 192, 0)'
                  }, {
                    offset: 1,
                    color: 'rgba(187, 167, 22, 0.3)'
                  }]),
                }
              },
              zlevel: 3,
              data: convertData(data),
            },
            {
              name: '企业数',
              type: 'effectScatter',
              coordinateSystem: 'geo',
              symbol: 'circle',
              symbolSize: 25,
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
                  color: new this.$echarts.graphic.RadialGradient(0.5, 0.5, 1, [{
                    offset: 0,
                    color: 'rgb(243, 192, 0)'
                  }, {
                    offset: 1,
                    color: 'rgba(187, 167, 22, 0.2)'
                  }]),
                }
              },
              zlevel: 6,
              data: convertData(dtData),
            },
            {
              name: '线路',
              type: 'lines',
              coordinateSystem: 'geo',
              zlevel: 8,
              large: true,
              lineStyle: {
                normal: {
                  color: '#31BEC4',
                  width: 3,
                  opacity: 0.6
                }
              },
              data: lineData
            }
          ]
        };
        map.setOption(option);
      },
      drawBottom0() {
        let bar = this.$echarts.init(document.getElementById('bottom_0'));
        var option = {
          grid: {
            left: 0,
            right: '10%',
            top: '5%',
            bottom: 0
          },
          backgroundColor: '#011848',
          dataset: {
            dimensions: ['product', '2015', '2016'],
            source: [
              {product: 'Matcha Latte', '2015': this.fourData['班级'], '2016': this.fourData['学生']},
              {product: 'Milk Tea', '2015': this.fourData['教师'], '2016': this.fourData['学生']}
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
            {
              type: 'bar',
              label: {
                show: true,
                position: 'top',
                color: '#FFF'
              },
              barWidth: 30,
              itemStyle: {
                color: '#29AAFF'
              }
            },
            {
              type: 'bar',
              label: {
                show: true,
                position: 'top',
                color: '#FFF'
              },
              barWidth: 30,
              itemStyle: {
                color: '#A952FF'
              }
            }
          ]
        };
        bar.setOption(option);
      },
      drawBottom1() {
        var v1 = this.schoolType['小学'];
        var v2 = this.schoolType['初中'];
        var v3 = this.schoolType['高中'];
        var p1 = Math.round(v1 / (v1 + v2 + v3) * 100);
        var p2 = Math.round(v2 / (v1 + v2 + v3) * 100);
        var p3 = Math.round(v3 / (v1 + v2 + v3) * 100);
        let bar = this.$echarts.init(document.getElementById('bottom_1'));
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
            data: [p3 + '%', '高中', p2 + '%', '初中', p1 + '%', '小学']
          },
          series: [
            {
              name: '生活费',
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  formatter: '{b}',
                  color: '#FFF'
                }
              },
              barWidth: 20,
              yAxisIndex: 0,
              data: [
                0.2,
                {value: 0, label: labelRight},
                0.08,
                {value: 0, label: labelRight},
                0.47,
                {value: 0, label: labelRight},
              ],
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
            }
          ]
        };
        bar.setOption(option);
      },
      drawBottom2() {
        let line = this.$echarts.init(document.getElementById('bottom_2'));
        var option = {
          backgroundColor: '#021746',
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['省一级', '市一级', '区一级', '普通学校'],
            axisLabel: {
              color: '#FFF'
            },
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: '#213259'
              }
            }
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              color: '#FFF'
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            splitLine: {
              lineStyle: {
                color: '#213259'
              }
            }
          },
          series: [{
            data: [820, 932, 901, 934],
            type: 'line',
            markPoint: {
              data: [
                {name: '周最高', value: 820, xAxis: 0, yAxis: 820},
                {name: '周最高', value: 932, xAxis: 1, yAxis: 932},
                {name: '周最高', value: 901, xAxis: 2, yAxis: 901},
                {name: '周最高', value: 934, xAxis: 3, yAxis: 934},
              ]
            },
            itemStyle: {
              color: '#B57139'
            },
            lineStyle: {
              width: 3
            },
            areaStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(181, 113, 57,0.5)'
              }, {
                offset: 1,
                color: 'rgba(181, 113, 57,0)'
              }
              ])
            }
          }]
        };
        line.setOption(option);
      },
      drawRightBar() {
        let bar = this.$echarts.init(document.getElementById('bar_right'));
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
              {name: '总体', icon: 'circle', textStyle: {color: '#5E7AD1', fontSize: 10}},
              {name: '男', icon: 'circle', textStyle: {color: '#5E7AD1', fontSize: 10}},
              {name: '女', icon: 'circle', textStyle: {color: '#5E7AD1', fontSize: 10}}],
          },
          xAxis: {
            type: 'category',
            data: ['其它', '正高级', '高级', '一级', '二级', '三级'],
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
            name: '总体',
            type: 'bar',
            barGap: 0,
            data: this.teacherTitle['总体'],
            itemStyle: {
              normal: {
                color: '#A953FF',
                barBorderRadius: [5, 5, 0, 0],
              }
            },
            barWidth: 14
          },
            {
              name: '男',
              type: 'bar',
              data: this.teacherTitle['男'],
              itemStyle: {
                normal: {
                  color: '#29AAFF',
                  barBorderRadius: [5, 5, 0, 0],
                }
              },
              barWidth: 14
            },
            {
              name: '女',
              type: 'bar',
              data: this.teacherTitle['女'],
              itemStyle: {
                normal: {
                  color: '#FF973A',
                  barBorderRadius: [5, 5, 0, 0],
                }
              },
              barWidth: 14
            }]
        };
        bar.setOption(option);
      },
      drawPie() {
        let pie = this.$echarts.init(document.getElementById('pie_right'));
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
            top: '7%',
            right: 0,
            data: [
              {name: '教授', icon: 'pin', textStyle: {color: '#FFF', fontSize: 8}},
              {name: '博士', icon: 'pin', textStyle: {color: '#FFF', fontSize: 8}},
              {name: '硕士', icon: 'circle', textStyle: {color: '#FFF', fontSize: 8}},
              {name: '本科', icon: 'circle', textStyle: {color: '#FFF', fontSize: 8}},
              {name: '大专', icon: 'circle', textStyle: {color: '#FFF', fontSize: 8}},
              {name: '其它', icon: 'circle', textStyle: {color: '#FFF', fontSize: 8}},
            ]
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              selectedMode: 'single',
              radius: [0, '40%'],
              center: ['50%', '55%'],
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
                {
                  value: this.teacherEdu['男'], name: '男老师', selected: true,
                  itemStyle: {
                    color: '#1EC8CA'
                  }
                },
                {
                  value: this.teacherEdu['女'], name: '女老师',
                  itemStyle: {
                    color: '#B6A2E0'
                  }
                }
              ]
            },
            {
              name: '访问来源',
              type: 'pie',
              radius: ['50%', '65%'],
              center: ['50%', '55%'],
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
                {
                  value: this.teacherEdu['教授'], name: '教授',
                  itemStyle: {
                    color: '#FA5367'
                  }
                },
                {
                  value: this.teacherEdu['博士'], name: '博士',
                  itemStyle: {
                    color: '#A952FF'
                  }
                },
                {
                  value: this.teacherEdu['硕士'], name: '硕士',
                  itemStyle: {
                    color: '#70BCFF'
                  }
                },
                {
                  value: this.teacherEdu['本科'], name: '本科',
                  itemStyle: {
                    color: '#FF973A'
                  }
                },
                {
                  value: this.teacherEdu['大专'], name: '大专',
                  itemStyle: {
                    color: '#6887FF'
                  }
                },
                {
                  value: this.teacherEdu['其它'], name: '其它',
                  itemStyle: {
                    color: '#36F1EA'
                  }
                }
              ]
            }
          ]
        };
        pie.setOption(option);
      },
      drawLeftBar() {
        let bar = this.$echarts.init(document.getElementById('bar_left'));
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
              {name: '总体', icon: 'circle', textStyle: {color: '#5E7AD1', fontSize: 10}},
              {name: '男', icon: 'circle', textStyle: {color: '#5E7AD1', fontSize: 10}},
              {name: '女', icon: 'circle', textStyle: {color: '#5E7AD1', fontSize: 10}}],
          },
          xAxis: {
            type: 'category',
            data: ['小学', '初中', '高中'],
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
            name: '总体',
            type: 'bar',
            barGap: 0,
            data: [(this.studentGender['小学']['男'] + this.studentGender['小学']['女']), (this.studentGender['初中']['男'] + this.studentGender['初中']['女']), (this.studentGender['高中']['男'] + this.studentGender['高中']['女'])],
            itemStyle: {
              normal: {
                color: '#A953FF',
                barBorderRadius: [5, 5, 0, 0],
              }
            },
            barWidth: 20
          },
            {
              name: '男',
              type: 'bar',
              data: [this.studentGender['小学']['男'], this.studentGender['初中']['男'], this.studentGender['高中']['男']],
              itemStyle: {
                normal: {
                  color: '#29AAFF',
                  barBorderRadius: [5, 5, 0, 0],
                }
              },
              barWidth: 20
            },
            {
              name: '女',
              type: 'bar',
              data: [this.studentGender['小学']['女'], this.studentGender['初中']['女'], this.studentGender['高中']['女']],
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
      drawRing(ringDiv, title, mNum, fNum) {
        var percent = fNum / (mNum + fNum) * 100;
        percent = Math.round(percent);
        let ring = this.$echarts.init(ringDiv);
        var option = {
          title: {
            text: '女同学',
            subtext: ' ' + percent + "%",
            left: '33%',
            top: '35%',
            textStyle: {
              color: '#FFF',
              fontSize: 14
            },
            subtextStyle: {
              color: '#FFF',
              fontSize: 18
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          grid: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          },
          series: [
            {
              name: '',
              type: 'pie',
              radius: ['65%', '85%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: true,
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
                {
                  value: mNum, name: '男', itemStyle: {
                    color: '#0089FF'
                  }
                },
                {
                  value: fNum, name: '女', itemStyle: {
                    color: '#37F0EA'
                  }
                }
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
  .selectText {
    font-size: 20px;
    color: white;
  }

  .unselectText {
    font-size: 18px;
    color: #6886E6;
  }
</style>
