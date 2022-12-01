import request from '../utils/request'


export function getveterinarian() {
  return request({
    url: '/veterinarian/list',
    method: 'get'
  })
}

export function deleteveterinarian(data) {
  return request({
    url: '/veterinarian/delete',
    method: 'post',
    data
  })
}

export function editveterinarian(data) {
  return request({
    url: '/veterinarian/edit',
    method: 'post',
    data
  })
}

export function addveterinarian(data) {
  return request({
    url: '/veterinarian/add',
    method: 'post',
    data
  })
}