import React from 'react'
import './index.scss'
import welcome from '@/images/welcome.png'
var Mock = require("mockjs");
var columnslist = [112, 113, 114, 115];
export default function index() {
  // let users = []
  // const count = 20
  // const tokens = []
  // for (let i = 0; i < count; i++) {
  //   users.push(
  //     Mock.mock({
  //       id: i,
  //       ID: 'token' + i + Mock.Random.guid().slice(0, 13),
  //       name: Mock.Random.cname(),
  //       addr: Mock.mock('@county(true)'),
  //       'age|18-60': 1,
  //       birth: Mock.Random.date(),
  //       sex: Mock.Random.integer(0, 1),
  //       confirm: Math.floor(Math.random() * 100 + 1),
  //     })
  //   )
  //   tokens.push('token' + i + users[i].ID)
  // }
  // for (let index = 0; index < List.length; index++) {
  //   // const element = array[index];

  // }
  // console.log(List.map(v=>v.id));
  // console.log(tokens);
  // console.log(users);
  return (
    <div className="welcome">
      <img src={welcome} alt="" />
    </div>
  )
}
