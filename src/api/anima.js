import request from '../utils/request'


export function getmonkey() {
  return request({
    url: '/monkey/list',
    method: 'get'
  })
}

export function deletemonkey(data) {
  return request({
    url: '/monkey/delete',
    method: 'post',
    data
  })
}

export function editmonkey(data) {
  return request({
    url: '/monkey/edit',
    method: 'post',
    data
  })
}
export function getcolumnlist(data) {
  return request({
    url: '/monkey/columnlist',
    method: 'post',
    data
  })
}


export function addmonkey(data) {
  return request({
    url: '/monkey/add',
    method: 'post',
    data
  })
}