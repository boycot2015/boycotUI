<template>
  <div id="app">
    <div class="header w clearfix">
      <div class="logo fl">
        <img src="./assets/logo.png" alt="">
      </div>
      <h2 class="website-name fl">BOYCOT</h2>
      <ul class="nav-list fr clearfix">
        <li>
          <a href="http://">指南</a>
        </li>
        <li>
          <a href="http://">组件</a>
        </li>
        <li>
          <a href="http://">资源</a>
        </li>
        <li>
          <a href="http://">中文</a>
        </li>
      </ul>
    </div>
    <router-view></router-view>
    <div class="footer  clearfix">
      <div class="w container">
        <dl class="fl">
          <dt>链接</dt>
          <dd>
            <a href="#">代码仓库</a>
          </dd>
          <dd>
            <a href="#">更新日志</a>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<style type="text/scss" lang="scss">
.w {
  width: 1200px;
  margin: 0 auto;
}
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: #333;
  &:hover {
    color: #00aeff;
  }
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.clearfix::after {
  content: "";
  display: block;
  height: 0;
  visibility: hidden;
  clear: both;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .header {
    line-height: 80px;
    overflow: hidden;
    .logo {
      width: 80px;
      height: 80px;
      img {
        width: 100%;
      }
    }
    .website-name {
      margin-left: 20px;
      color: #00aeff;
    }
    .nav-list {
      text-align: right;
      li {
        float: left;
        a {
          display: block;
          padding: 0 22px;
          color: #888;
          &:hover {
            color: #00aeff;
          }
        }
      }
    }
  }

  .footer {
    height: 260px;
    background: #f5f5f5;
    text-align: left;
    padding: 30px 0;
    dl {
      dt {
        font-size: 20px;
        color: #333;
        font-weight: 700;
        margin-bottom: 20px;
      }
      dd {
        color: #666;
        line-height: 28px;
        font-size: 14px;
      }
    }
  }
}
</style>
