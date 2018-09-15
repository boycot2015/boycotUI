<script>
  var iconList = require('../icon.json');

  export default {
    data() {
      return {
        icons: iconList
      };
    }
  }
</script>
<style lang="scss">
  .demo-icon .source > i {
    color: #606266;
    margin: 0 20px;
    font-size: 1.5em;
    vertical-align: middle;
  }
  
  .demo-icon .source > button {
    margin: 0 20px;
  }

  .byt-doc-content section ul.icons-list {
    overflow: hidden;
    list-style: none;
    padding: 0;
    background:#fff;
    border: solid 1px #eaeefb;
    border-radius: 4px;
  }
  .byt-doc-content section ul.icons-list li {
    margin:0;
    float: left;
    width: 16.66%;
    text-align: center;
    height: 120px;
    line-height: 120px;
    color: #666;
    font-size: 13px;
    transition: color .15s linear;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    margin-right: -1px;
    margin-bottom: -1px;
    @utils-vertical-center;
    &:after {
      height:0;
    }
    span {
      display: inline-block;
      line-height: normal;
      vertical-align: middle;
      font-family: 'Helvetica Neue',Helvetica,'PingFang SC','Hiragino Sans GB','Microsoft YaHei',SimSun,sans-serif;
      color: #99a9bf;
    }
    
    i {
      display: block;
      font-size: 32px;
      margin-bottom: 15px;
      color: #606266;
    }
    
    .icon-name {
      display: inline-block;
      padding: 0 3px;
      height: 1em;
      color: #606266;
    }
    
    &:hover {
      color: rgb(92, 182, 255);
    }
  }
</style>
## Icon 图标

提供了一套常用的图标集合。

### 使用方法

直接通过设置类名为 byt-icon-iconName 来使用即可。例如：

:::demo
```html
<i class="byt-icon-edit"></i>
<i class="byt-icon-share"></i>
<i class="byt-icon-delete"></i>
<byt-button type="primary" icon="byt-icon-search">搜索</byt-button>

```
:::

### 图标集合

<ul class="icons-list clearfix">
  <li v-for="name in icons" :key="name">
    <span>
      <i :class="'byt-icon-' + name"></i>
      <span class="icon-name">{{'byt-icon-' + name}}</span>
    </span>
  </li>
</ul>
