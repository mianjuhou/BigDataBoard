import request from '@/util/request';

const group_name = 'main';
export default {
  getSchoolInfo() {
    return request({
      url: `/${group_name}/schoolinfo`,
      method: 'get'
    })
  },
  getStudentInfo() {
    return request({
      url: `/${group_name}/studentinfo`,
      method: 'get'
    })
  },
  getFourTotalNum() {
    return request({
      url: `/${group_name}/fourinfo`,
      method: 'get'
    })
  },
  getSchoolTypeNum() {
    return request({
      url: `/${group_name}/schoolnum`,
      method: 'get'
    })
  },
  getTownSchoolInfo() {
    return request({
      url: `/${group_name}/townschool`,
      method: 'get'
    })
  },
  getTeacherEdu() {
    return request({
      url: `/${group_name}/teacheredu`,
      method: 'get'
    })
  },
  getTeacherTitle() {
    return request({
      url: `/${group_name}/teachertitle`,
      method: 'get'
    })
  },
}
