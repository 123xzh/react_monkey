import Mock from "mockjs";
import loginAPI from "./login";
import remoteSearchAPI from "./remoteSearch";
import excelAPI from "./excel";
import tableAPI from "./table";
import monitor from "./monitor";
import monkeydata from './anima'
import veterinariandata from './veterinarian'

// 登录与用户相关
Mock.mock(/\/login/, "post", loginAPI.login);
Mock.mock(/\/logout/, "post", loginAPI.logout);
Mock.mock(/\/userInfo/, "post", loginAPI.userInfo);
Mock.mock(/\/user\/list/, "get", loginAPI.getUsers);
Mock.mock(/\/user\/delete/, "post", loginAPI.deleteUser);
Mock.mock(/\/user\/edit/, "post", loginAPI.editUser);
Mock.mock(/\/user\/validatUserID/, "post", loginAPI.ValidatUserID);
Mock.mock(/\/user\/add/, "post", loginAPI.addUser);

// 猴子数据
Mock.mock(/\/monkey\/list/,"get",monkeydata.getmonkey);
Mock.mock(/\/monkey\/delete/,"post",monkeydata.deletemonkey);
Mock.mock(/\/monkey\/edit/,"post",monkeydata.editmonkey);
Mock.mock(/\/monkey\/columnlist/,"post",monkeydata.getcolumnlist);
Mock.mock(/\/monkey\/add/,"post",monkeydata.addmonkey);

// 兽医数据
Mock.mock(/\/veterinarian\/list/,"get",veterinariandata.getveterinarian);
Mock.mock(/\/veterinarian\/delete/,"post",veterinariandata.deleteveterinarian);
Mock.mock(/\/veterinarian\/edit/,"post",veterinariandata.editveterinarian);
Mock.mock(/\/veterinarian\/add/,"post",veterinariandata.addveterinarian);


// dashboard
Mock.mock(/\/transaction\/list/, "get", remoteSearchAPI.transactionList);

// excel
Mock.mock(/\/excel\/list/, "get", excelAPI.excelList);

// table
Mock.mock(/\/table\/list/, "post", tableAPI.tableList);
Mock.mock(/\/table\/delete/, "post", tableAPI.deleteItem);
Mock.mock(/\/table\/edit/, "post", tableAPI.editItem);

// monitor
Mock.mock(/\/monitor/, "post", monitor.monitor);

export default Mock;
