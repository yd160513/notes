import request from '@/util/request'

export function login(params) {
  return request({
    url: '/user/login',
    methods: 'get',
    params
  });
}