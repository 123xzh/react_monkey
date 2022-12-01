var Mock = require("mockjs");
let img1 = require('./img/monkey1.png')
let img2 = require('./img/monkey2.png')
let img3 = require('./img/monkey3.jpg')
let img4 = require('./img/monkey4.jpg')
let img5 = require('./img/monkey5.jpg')
let img6 = require('./img/monkey6.jpg')
let img7 = require('./img/monkey7.jpg')
let img8 = require('./img/monkey8.jpg')
var columnslist = ['第一栏', '第二栏', '第三栏', '第四栏'];
var Dong = ['第一栋', '第二栋', '第三栋', '第四栋'];
var Random = Mock.Random;



let users = []
const count = 20
const tokens = []
for (let i = 0; i < count; i++) {
    users.push(
        Mock.mock({
            id: i,
            ID: 'token' + i + Mock.Random.guid().slice(0, 13),
            name: Mock.Random.cname(),
            // mathdata1: Math.floor(Math.random() * 9 + 1) + '/' + Math.floor(Math.random() * (10 - 9 + 1) + 9),
            // mathdata2: Math.floor(Math.random() * 9 + 1) + '/' + Math.floor(Math.random() * (10 - 9 + 1) + 9),
            mathdata1: Math.floor(Math.random() * 10 + 1) + '/' +10,
            mathdata2: Math.floor(Math.random() * 10 + 1) + '/' + 10,
            //   addr: Mock.mock('@county(true)'),
            'age1|18-89': 1,
            'age2|18-89': 1,
            'age3|18-89': 1,
            'age4|90-100': 1,
            'ageid|100-150': 1,
              birth: Mock.Random.date(),
            sex1: Mock.Random.integer(0, 1),
            sex2: Mock.Random.integer(0, 1),
            sex3: Mock.Random.integer(0, 1),
            sex4: Mock.Random.integer(0, 1),
            confirm: Math.floor(Math.random() * 100 + 1),
            dongdata: Dong[Math.floor(Math.random() * Dong.length)],
            dongdata1: {
                'title': Dong[Math.floor(Math.random() * Dong.length)],
                'children': [
                    {
                        'title':columnslist[Math.floor(Math.random() * columnslist.length)]
                }
                ]
            },

        })
    )
    tokens.push(users[i].ID)
}




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
    getveterinarian: () => {
        return {
            status: 0,
            users: Object.values(users),
        };
    },
    deleteveterinarian: (config) => {
        const  uid  = JSON.parse(config.body);
        var uiddata= Object.values(uid);
        // console.log( uiddata[0]);
        // console.log( uiddata[0].length);
       
        // const token = tokens[id];
        // console.log(token);
        let arr = []
        // for (let i = 0; i < users.length; i++) {
            // const element = array[i];
            for (let l = 0; l < uiddata[0].length; l++) {
                arr.push(users.filter(v=>v.id==uiddata[0][l]))
            }
            
        // }
        // for (let i = 0; i < uid.length; i++) {
            // const element = array[i];
        // }
        // console.log("ssssssssss",arr);
        var deluser = []
        for (let i = 0; i < arr.length; i++) {
            // deluser = users.filter(v=>v.ID==arr[i][i].ID)
            // console.log(arr[i][0].id);
            // console.log(tokens);
            // console.log("dddddddddddddddddddddd",tokens[arr[i][0].id]);
            delete tokens[arr[i][0].id];
            delete users[arr[i][0].id];
        }
        return {
            status: 0,
        };
        // console.log(arr[3]);
        // if (token) {
            // delete tokens[id];
            // delete users[token];
        // }
    },
    editveterinarian: (config) => {
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
    addveterinarian: (config) => {
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
};
