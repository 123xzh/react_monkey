var Mock = require("mockjs");
const userrole= ['用户','管理员','超级管理员'];
var Random = Mock.Random;
const tokens = {
  1: "admin-token",
  2: "editor-token",
  3: "gsuest-token",
  4: "guedst-token",
  5: "guxesvst-token",
  6: "guvevst-token"
  
};

const users = {
  "admin-token": {
    id: 1,
    role:  ['管理员','超级管理员'],
    name: "难凉热血",
    age: Random.integer(20, 50),
    email: Random.email("qq.com"),
    avatar: "https://s1.ax1x.com/2020/04/28/J5hUaT.jpg",
    birth: Random.datetime("yyyy-MM-dd"),  // 值是指定格式的日期字符串
    // birth2: new Date(Random.datetime("yyyy-MM-dd HH:mm:ss")),  // 值是 Date 类型
    addr: `${Random.province()}-${Random.city()}-${Random.county()}`,
    title: Random.cname(),
    sex: Math.round(Math.random()), //随机性别


  },
  "editor-token": {
    id: 2,
    role:  ['管理员'],
    name: '游客',
    age: Random.integer(20, 50),
    email: Random.email("qq.com"),
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    birth: Random.datetime("yyyy-MM-dd"),  // 值是指定格式的日期字符串
    // birth2: new Date(Random.datetime("yyyy-MM-dd HH:mm:ss")),  // 值是 Date 类型
    addr: `${Random.province()}-${Random.city()}-${Random.county()}`,
    title: Random.cname(),
    sex: Math.round(Math.random()), //随机性别

  },
  "gsuest-token": {
    id: 3,
    role:  ['超级管理员'],
    name: "游客4",
    age: Random.integer(20, 50),
    email: Random.email("qq.com"),
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    birth: Random.datetime("yyyy-MM-dd"),  // 值是指定格式的日期字符串
    // birth2: new Date(Random.datetime("yyyy-MM-dd HH:mm:ss")),  // 值是 Date 类型
    addr: `${Random.province()}-${Random.city()}-${Random.county()}`,
    // title: Random.cname(),
    title: Random.cname(),
    sex: Math.round(Math.random()), //随机性别

  },
  "guedst-token": {
    id: 4,
    role:  ['管理员'],
    name: "游客34",
    age: Random.integer(20, 50),
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    birth: Random.datetime("yyyy-MM-dd"),  // 值是指定格式的日期字符串
    // birth2: new Date(Random.datetime("yyyy-MM-dd HH:mm:ss")),  // 值是 Date 类型
    addr: `${Random.province()}-${Random.city()}-${Random.county()}`,
    title: Random.cname(),
    sex: Math.round(Math.random()), //随机性别

  },
  "guxesvst-token": {
    id: 5,
    role: ['用户'],
    name: "游客1",
    age: Random.integer(20, 50),
    email: Random.email("qq.com"),
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    birth: Random.datetime("yyyy-MM-dd"),  // 值是指定格式的日期字符串
    // birth2: new Date(Random.datetime("yyyy-MM-dd HH:mm:ss")),  // 值是 Date 类型
    addr: `${Random.province()}-${Random.city()}-${Random.county()}`,
    title: Random.cname(),
    sex: Math.round(Math.random()), //随机性别

  },
  "guvevst-token": {
    id: 6,
    role: ['用户'],
    name: "游客2",
    age: Random.integer(20, 50),
    email: Random.email("qq.com"),
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    birth: Random.datetime("yyyy-MM-dd"),  // 值是指定格式的日期字符串
    // birth2: new Date(Random.datetime("yyyy-MM-dd HH:mm:ss")),  // 值是 Date 类型
    addr: `${Random.province()}-${Random.city()}-${Random.county()}`,
    title: Random.cname(),
     sex: Math.round(Math.random()), //随机性别
  },
};

export default {
  login: (config) => {
    const { username } = JSON.parse(config.body);
    const token = tokens[username];
    if (!token) {
      return {
        status: 1,
        message: "用户名或密码错误",
      };
    }
    return {
      status: 0,
      token,
    };
  },
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
  getUsers: () => {
    return {
      status: 0,
      users: Object.values(users),
    };
  },
  deleteUser: (config) => {
    const { id } = JSON.parse(config.body);
    const token = tokens[id];
    if (token) {
      delete tokens[id];
      delete users[token];
    }
    return {
      status: 0,
    };
  },
  editUser: (config) => {
    console.log(config);
    const data = JSON.parse(config.body);
    console.log(data);
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
  addUser: (config) => {
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
