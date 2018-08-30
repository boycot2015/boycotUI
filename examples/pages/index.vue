<template>
  <div class="pg-index w">
    <div class="index-container">
      <!-- <img src="../assets/img/logo.png"> -->
      <h2>移动端 UI 组件库</h2>
      <p>一款轻量级、模块化的移动端 UI 组件库</p>
      <ul class="block-list clearfix">
        <li>
          <div class="item">
            <div class="img">
              <img src="../assets/images/guide.png" alt="">
            </div>
            <p class="name">指南</p>
            <p class="desc">了解设计指南，帮助产品设计人员搭建逻辑清晰、结构合理且高效易用的产品。</p>
            <a href="" class="details">查看详情</a>
          </div>
        </li>
        <li>
          <div class="item">
            <div class="img">
              <img src="../assets/images/component.png" alt="">
            </div>
            <p class="name">组件</p>
            <p class="desc">使用组件 Demo 快速体验交互细节；使用前端框架封装的代码帮助工程师快速开发。</p>
            <a href="" class="details">查看详情</a>
          </div>
        </li>
        <li>
          <div class="item">
            <div class="img">
              <img src="../assets/images/resource.png" alt="">
            </div>
            <h3 class="name">资源</h3>
            <p class="desc">下载相关资源，用其快速搭建页面原型或高保真视觉稿，提升产品设计效率。</p>
            <a href="" class="details">查看详情</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      height: document.documentElement.clientHeight
    };
  }
};
</script>
<style type="text/scss" lang="scss">
.pg-index {
  .index-container {
    text-align: center;
    padding: 100px 0;
    h2 {
      font-size: 36px;
    }
    p {
      margin: 60px 0;
      color: #00aeff;
      font-size: 28px;
    }
    .block-list {
      li {
        float: left;
        width: 30%;
        margin: 0 20px;
        transform: translateY(0);
        transition: all 0.3s;
        &:hover {
          transform: translateY(-5px);
        }
        .item {
          height: 440px;
          border: 1px solid #e8e8e8;
          border-radius: 5px;
          position: relative;
          .img {
            width: 160px;
            height: 160px;
            margin: 60px auto;
            img {
              width: 100%;
            }
          }
          .name {
            margin: 0;
            font-size: 18px;
            color: #1f2f3d;
            font-weight: 400;
          }
          .desc {
            font-size: 14px;
            color: #99a9bf;
            padding: 0 25px;
            line-height: 20px;
            margin: 20px 0;
          }
          .details {
            height: 53px;
            line-height: 52px;
            font-size: 14px;
            color: #409eff;
            text-align: center;
            border: 0;
            border-top: 1px solid #eaeefb;
            padding: 0;
            cursor: pointer;
            width: 100%;
            position: absolute;
            bottom: 0;
            left: 0;
            background-color: #fff;
            border-radius: 0 0 5px 5px;
            transition: all 0.3s;
            text-decoration: none;
            display: block;
            &:hover {
              background: #00aeff;
              color: #fff;
            }
          }
        }
      }
    }
  }
}
</style>