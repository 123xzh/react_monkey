import React from 'react'
import LoginFrom from './component/LoginFrom'
import './login.scss'
import Leftimg from '../../images/login_left-1b40bd1b.png'
import RightLogin from '../../images/logo192.png'
import Particles from 'react-tsparticles'
import { loadFull } from "tsparticles";

export default function Login() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  //粒子被正确加载到画布中时，这个函数被调用
  const particlesLoaded = (container) => {
    console.log("123", container);
  };
  //粒子参数
  const options = {
    "background": {
      "color": {
        "value": "#2376DD"
      },
      "position": "50% 50%",
      "repeat": "no-repeat",
      "size": "cover"
    },
    // 帧数，越低越卡,默认60
    "fpsLimit": 60,
    "fullScreen": {
      "zIndex": 1
    },
    "interactivity": {
      "events": {
        "onClick": {
          "enable": true,
          "mode": "push"
        },
        "onHover": {
          "enable": true,
          "mode": "slow"
        }
      },
      "modes": {
        "push": {
          //点击是添加1个粒子
          "quantity": 1,
        },
        "bubble": {
          "distance": 100,
          "duration": 2,
          "opacity": 0.8,
          "size": 20,
          "divs": {
            "distance": 100,
            "duration": 0.4,
            "mix": false,
            "selectors": []
          }
        },
        "grab": {
          "distance": 400
        },
        //击退
        "repulse": {
          "divs": {
            //鼠标移动时排斥粒子的距离
            "distance": 100,
            //翻译是持续时间
            "duration": 0.4,
            "factor": 100,
            "speed": 1,
            "maxSpeed": 10,
            "easing": "ease-out-quad",
            "selectors": []
          }
        },
        //缓慢移动
        "slow": {
          //移动速度
          "factor": 100,
          //影响范围
          "radius": 100,
        },
        //吸引
        "attract": {
          "distance": 200,
          "duration": 0.4,
          "easing": "ease-out-quad",
          "factor": 3,
          "maxSpeed": 50,
          "speed": 1

        },
      }
    },
    //  粒子的参数
    "particles": {
      //粒子的颜色
      "color": {
        "value": "#BC78EC"
      },
      //是否启动粒子碰撞
      "collisions": {
        "enable": true,
      },
      //粒子之间的线的参数
      "links": {
        "color": {
          "value": "#ffffff"
        },
        "distance": 150,
        "enable": true,
        "warp": true
      },
      "move": {
        "attract": {
          "rotate": {
            "x": 600,
            "y": 1200
          }
        },
        "enable": true,
        "outModes": {
          "bottom": "out",
          "left": "out",
          "right": "out",
          "top": "out"
        },
        "speed": 6,
        "warp": true
      },
      "number": {
        "density": {
          "enable": true
        },
        //初始粒子数
        "value": 40
      },
      //透明度
      "opacity": {
        "value": 0.5,
        "animation": {
          "speed": 1,
          "minimumValue": 0.1
        }
      },
      //大小
      "size": {
        "random": {
          "enable": true
        },
        "value": {
          "min": 1,
          "max": 3
        },
        "animation": {
          "speed": 10,
          "minimumValue": 0.1
        }
      }
    }
  }
  return (
    <div className="loginMain">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
      />
      <div className="loginMain_1">
        <div className="loginLeft">
          <img src={Leftimg} alt="pic" />
        </div>
        <div className="loginRIght">
          <div className="loginRIght_top">
            <img src={RightLogin} alt="" />
            <p>非人灵长类实验动物监测管理系统</p>
          </div>
          <LoginFrom />
        </div>
      </div>
    </div>
  )
}
