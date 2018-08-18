# bilibili game center

## 简介
![avatar](/doc/home.png)

## 目录结构

### src整体目录结构
```
 ├─src
    │  App.jsx
    │  App.less
    │  App.test.js
    │  index.css
    │  index.js
    │  normalize.css
    │  registerServiceWorker.js
    └─component
        ├─navBar                        #App下方导航条
        │  │  index.js                  
        │  └─view                       #导航条组件
        │      │  navBar.jsx
        │      │  style.less
        │      └─icons                  #导航条图标 
        ├─pages                         #App中间页面部分
        │  │  index.js
        │  └─view                       #App的5个分页
        │      ├─commonLess
        │      │      variable.less     #页面公共less变量(颜色、尺寸)
        │      ├─find                   #发现页
        │      ├─gameStrategy           #游戏攻略页
        │      ├─home                   #首页
        │      ├─my                     #用户
        │      └─rankingList            #游戏排行
        └─titleBar                      #标题栏
            │  index.js
            └─view                      #标题组件
                    style.less
                    titleBar.jsx
```

### home目录结构
```
 ├─home
    │  home.jsx
    │  style.less    │  
    ├─book-game                   #预约游戏板块
    ├─full-screen-carousel        #全屏轮播图
    ├─game-adver                  #游戏广告列表
    ├─hot-game                    #热门游戏板块
    ├─hot-strategy                #热门攻略                      
    ├─icons                       #板块公用的图标
    └─new-game                    #新游推荐板块
```

### find目录结构
```
```

### gameStrategy目录结构
```
```


### my目录结构
```
```
### rankList目录结构
```
```


### 待做事项记录
* hometitle显示消息数
* hometitle所链接的页面
* title组件的<a>和<Link/>修改
* 轮播图数据的请求
* 轮播图点入页面
* 热门游戏的数据请求
* more按钮链接页面
* 热门游戏图标点入页面（游戏介绍页面）
* 热门游戏下载按钮的进度功能
* 首页翻滚加载数据


