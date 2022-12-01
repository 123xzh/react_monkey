var Mock = require("mockjs");
let img1 = require('./img/monkey1.png')
let img2 = require('./img/monkey2.png')
let img3 = require('./img/monkey3.jpg')
let img4 = require('./img/monkey4.jpg')
let img5 = require('./img/monkey5.jpg')
let img6 = require('./img/monkey6.jpg')
let img7 = require('./img/monkey7.jpg')
let img8 = require('./img/monkey8.jpg')
var imglist = [img1,img2,img3,img4,img5,img6,img7,img8]
var columnslist = ['第一栏', '第二栏', '第三栏', '第四栏'];
var Dong = ['第一栋', '第二栋', '第三栋', '第四栋'];
var Random = Mock.Random;


let users = []
const count = 20
const tokens = []
for (let i = 0; i < count; i++) {
  let title1 =Dong[Math.floor(Math.random() * Dong.length)];
  let value1 =columnslist[Math.floor(Math.random() * columnslist.length)];
  users.push(
      Mock.mock({
          id: i,
          ID: 'token' + i + Mock.Random.guid().slice(0, 13),
          title: Mock.Random.cname(),
          // mathdata1: Math.floor(Math.random() * 9 + 1) + '/' + Math.floor(Math.random() * (10 - 9 + 1) + 9),
          // mathdata2: Math.floor(Math.random() * 9 + 1) + '/' + Math.floor(Math.random() * (10 - 9 + 1) + 9),
          mathdata1: Math.floor(Math.random() * 10 + 1) + '/' + Math.floor(Math.random() * (10 - 9 + 1) + 9),
          mathdata2: Math.floor(Math.random() * 10 + 1) + '/' + Math.floor(Math.random() * (10 - 9 + 1) + 9),
          //   addr: Mock.mock('@county(true)'),
          age: Random.integer(20, 50),
          //   birth: Mock.Random.date(),
          sex: Mock.Random.integer(0, 1),
          addr: `${Random.province()}-${Random.city()}-${Random.county()}`,
          birth: Random.datetime("yyyy-MM-dd"),  // 值是指定格式的日期字符串
          confirm: Math.floor(Math.random() * 100 + 1),
          dongdata: Dong[Math.floor(Math.random() * Dong.length)],
          columnsdata: columnslist[Math.floor(Math.random() * columnslist.length)],
          avatar: imglist[Math.floor(Math.random() * imglist.length)],
          dongdata1: {
              'value': title1,
              'title': title1,
              'children': [
                  {
                      'value':value1,
                      'title':value1,
              }
              ]
          },

      })
  )
  tokens.push( users[i].ID)
}
// console.log(tokens);
// console.log(users);


export default {
  userInfo: (config) => {
    const token = config.body;
    const userInfo = users[token];
    if (!userInfo) {
      return {
        status: 1,
        message: "获取用户信息失败",
      };
    }
    return {
      status: 0,
      userInfo,
    };
  },
  getmonkey: () => {
    return {
      status: 0,
      users: Object.values(users),
    };
  },
  deletemonkey: (config) => {
    const { id } = JSON.parse(config.body);
    // console.log("id",id);
    const token = tokens[id];
    // console.log("token",token)
    if (token) {
    
      var a= users.filter(v=>v.ID==token);
      delete users[a.map(v=>v.id)[0]]
      delete tokens[id];
    }
    return {
      status: 0,
    };
  },
  editmonkey: (config) => {
    // console.log(config);
    const data = JSON.parse(config.body);
    // const data = JSON.parse(config.body);
    // console.log(data);
    const { id } = data;
    // console.log(title);
    const token = tokens[id];
    console.log(token);
    if (token) {
      users[token] = { ...users[token], ...data };
    }
    return {
      status: 0,
    };
  },
  getcolumnlist: (config) => {
    const data = config.body
    let Donglist= data.split(',')[0];
    let columlist= data.split(',')[1];
    // console.log(Donglist);
    // console.log(columlist);
    // const columnsdata = data;
    // var a = Object.values(users)
    var datacolumn1 = users.filter((item) => item.dongdata1.value== Donglist )
    var datacolumn2 = datacolumn1.filter((item)=>item.dongdata1.children[0].value==columlist)
    // console.log(datacolumn1);
    // console.log(datacolumn2);
    return datacolumn2;
  },
  ValidatUserID: (config) => {
    const userID = config.body;
    const token = tokens[userID];
    if (token) {
      return {
        status: 1,
      };
    } else {
      return {
        status: 0
      };
    }
  },
  addmonkey: (config) => {
    const data = JSON.parse(config.body);
    const { id } = data;
    tokens[id] = `${id}-token`
    users[`${id}-token`] = {
      ...users["guest-token"],
      ...data
    }
    return {
      status: 0,
    };
  },
  logout: (_) => {
    return {
      status: 0,
      data: "success",
    };
  },
};
