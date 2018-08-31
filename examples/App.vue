<template>
  <div id="app">
    <div class="header w clearfix">
      <div class="left fl clearfix">
        <router-link to="/">
          <div class="logo fl">
            <img src="./assets/logo.png" alt="">
          </div>
          <h2 class="website-name fl">BOYCOT</h2>
        </router-link>
      </div>
      <ul class="nav-list fr clearfix">
        <li>
          <a href="http://">指南</a>
        </li>
        <li>
          <router-link to="/button">组件</router-link>
        </li>
        <li>
          <a href="/button">资源</a>
        </li>
        <li>
          <a href="http://">中文</a>
        </li>
      </ul>
    </div>
    <div class="container clearfix">
      <div class="aside fl" v-if="hasAside">
        <ul class="list-item">
          <li class="item" v-for="title in Object.keys(navData)" :key="title">
            <h3>{{title}}</h3>
            <div class="links" v-for="(val,i) in navData[title]" :key="i">
              <p class="title">
                <router-link :class="activeRouter.path==val.path&&val.path!='/component'?'active':''" :to="val.path">
                  {{val.desc}}
                </router-link>
              </p>
              <ul class="details" v-if="val.items">
                <li v-for="(obj,idx) in val.items" :key="idx">
                  <router-link :class="activeRouter.path==obj.path?'active':''" :to="{path:obj.path,name:obj.name}">
                    {{obj.desc}}
                  </router-link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div :class="(hasAside?'w1000 fl ':'')+'content' ">
        <router-view></router-view>
      </div>
    </div>
    <div class="footer">
      <div class="w container clearfix">
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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
  .container {
    width: 1200px;
    margin: 50px auto;
    .aside {
      width: 200px;
      line-height: 40px;
      .list-item {
        .item {
          .links {
            a {
              font-size: 14px;
            }
            .title {
              font-size: 16px;
              a {
                font-size: 16px;
                color: #666;
                &.active {
                  color: #00aeff;
                }
              }
            }
          }
          a.active {
            color: #00aeff;
          }
        }
      }
    }
    .content {
      &.w1000 {
        width: calc(100% - 215px);
      }
    }
  }
  .footer {
    min-height: 260px;
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
<script>
import navData from "./nav.config.json";
export default {
  data() {
    return {
      hasAside: true,
      navData: {},
      activeRouter: {}
    };
  },
  watch: {
    $route(to, from) {
      this.activeRouter = to;
      if (to.path == "/") {
        this.hasAside = false;
      } else {
        this.hasAside = true;
      }
    }
  },
  created() {
    for (const key in navData) {
      if (navData.hasOwnProperty(key)) {
        this.navData[key] = navData[key];
      }
    }
  },
  methods: {}
};
</script>