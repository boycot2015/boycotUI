<template>
  <div id="app">
    <div :class="(hasAside?'fixed ':'')+'header w clearfix'">
      <div class="container">
        <div class="left fl clearfix">
          <router-link to="/">
            <div class="logo fl">
              <img src="./assets/logo.png" alt="">
            </div>
            <h2 class="website-name fl">BOYCOT</h2>
          </router-link>
        </div>
        <ul class="nav-list fr clearfix">
          <li v-for="(item,i) in navPath" :key="i">
            <router-link 
            :class="activeRouter.path==item.path?'active':''" 
            :to="item.path">
           {{item.name}}
            </router-link>
          </li>
        </ul>
        
      </div>
    </div>
    <div class="container clearfix" :style="hasAside?'margin-top:80px;':''">
      <div class="aside fl" v-if="hasAside">
        <div class="byt-scroll-container" ref="scrollContainer" @scroll="initScrollBar($event)">
          <ul class="list-item" ref="scrollItem">
            <li class="item" v-for="title in Object.keys(navData)" :key="title">
              <h3>{{title}}</h3>
              <div class="links" v-for="(val,i) in navData[title]" :key="i">
                <p class="title">
                  <span v-if="val.path=='/component'">{{val.desc}}</span>
                  <router-link v-else :class="activeRouter.path==val.path?'active':''" :to="val.path">
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
          <div class="byt-scroll-bar">
            <div class="byt-scrollbar__thumb" ref="scrollBar"></div>
          </div>
        </div>
      </div>
      <div :class="hasAside?'byt-doc-content ':'content' ">
        <router-view></router-view>
      </div>
    </div>
    <div class="footer" v-if="!hasAside">
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

</style>
<script>
import navData from "./nav.config.json";
export default {
  data() {
    return {
      hasAside: true,
      navData: {},
      navPath: [
        { name: "指南", path: "/guid" },
        { name: "组件", path: "/install" },
        { name: "资源", path: "/resource" },
        { name: "中文", path: "/language" }
      ],
      activeRouter: {},
      isOver:false
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
  mounted() {
    var scrollContainer = this.$refs.scrollContainer;
    this.initScrollBar(scrollContainer);
  },
  methods: {
    initScrollBar(e) {
      var scrollItem = this.$refs.scrollItem;
      var _this = e.target || e;
      var scrollBar = this.$refs.scrollBar;
      var scrollTop = _this.scrollTop;
      var itemH = scrollItem.scrollHeight;
      var scrollHeight = _this.scrollHeight;
      // scrollHeight/itemH = scrollBarHeight/scrollHeight
      var scrollBarHeight = scrollHeight * scrollHeight / itemH;
      scrollBar.style.height = scrollBarHeight / 2 + "px";
      scrollBar.style.top = scrollTop * 6 + "px";
      // document.addEventListener("scroll",function(e){

      // });
    }
  }
};
</script>