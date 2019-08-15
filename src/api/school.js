import request from '@/util/request';

const group_name = 'school';
export default {
  findBSKNum() {
    return request({
      url: `/${group_name}/bsk`,
      method: 'get'
    })
  },
  findBKTop10() {
    return request({
      url: `/${group_name}/bk`,
      method: 'get'
    })
  },
  findSKTop10() {
    return request({
      url: `/${group_name}/sk`,
      method: 'get'
    })
  },
  findResourceNums() {
    return request({
      url: `/${group_name}/resource`,
      method: 'get'
    })
  },
  findResourceTop10() {
    return request({
      url: `/${group_name}/resourcetop`,
      method: 'get'
    })
  },
  findResourceMonthTop10(yearMonth) {
    return request({
      url: `/${group_name}/resourcemonthtop/${yearMonth}`,
      method: 'get'
    })
  },
  findClassMonth() {
    return request({
      url: `/${group_name}/classmoth`,
      method: 'get'
    })
  },
  findBClass() {
    return request({
      url: `/${group_name}/bclass`,
      method: 'get'
    })
  },
  findMClass() {
    return request({
      url: `/${group_name}/mclass`,
      method: 'get'
    })
  },
  findAClass() {
    return request({
      url: `/${group_name}/aclass`,
      method: 'get'
    })
  },
}
