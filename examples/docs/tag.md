## Tag 标记

### 使用指南

```js
import { Tag } from 'boycot-ui';
Vue.use(Tag);
```
### 代码演示

### 基础用法

通过 type 属性控制 Tag 颜色，默认为灰色

<byt-tag>标签</byt-tag>
<byt-tag type="success">标签</byt-tag>
<byt-tag type="danger">标签</byt-tag>
<byt-tag type="primary">标签</byt-tag>

:::demo
```html
<byt-tag></byt-tag>
<byt-tag type="success">标签</byt-tag>
<byt-tag type="danger">标签</byt-tag>
<byt-tag type="primary">标签</byt-tag>
```
:::

### 空心样式

设置plain属性设置为空心样式

<byt-tag plain>标签</byt-tag>
<byt-tag plain type="danger">标签</byt-tag>
<byt-tag plain type="primary">标签</byt-tag>
<byt-tag plain type="success">标签</byt-tag>

:::demo
```html
<byt-tag plain>标签</byt-tag>
<byt-tag plain type="danger">标签</byt-tag>
<byt-tag plain type="primary">标签</byt-tag>
<byt-tag plain type="success">标签</byt-tag>
```
:::

### 圆角样式

通过round设置为圆角样式

<byt-tag round>标签</byt-tag>
<byt-tag round type="danger">标签</byt-tag>
<byt-tag round type="primary">标签</byt-tag>
<byt-tag round type="success">标签</byt-tag>

:::demo
```html
<byt-tag round>标签</byt-tag>
<byt-tag round type="danger">标签</byt-tag>
<byt-tag round type="primary">标签</byt-tag>
<byt-tag round type="success">标签</byt-tag>
```
:::

### 自定义内容

当未设置name时，可通过solt设置自定义内容

<byt-tag round>自定义内容</byt-tag>
<byt-tag plain type="danger">自定义内容</byt-tag>
<byt-tag plain type="primary">自定义内容</byt-tag>
<byt-tag round type="success">自定义内容</byt-tag>

:::demo
```html
<byt-tag round>自定义内容</byt-tag>
<byt-tag plain type="danger">自定义内容</byt-tag>
<byt-tag plain type="primary">自定义内容</byt-tag>
<byt-tag round type="success">自定义内容</byt-tag>
```
:::

### Attributes

API

|参数	|说明	|类型	|默认值
|------|------|------|------
|type	|类型，可选值为primary success danger	String|-|	''
|plain	|是否为空心样式	|Boolean	|false
|round	|是否为圆角样式	|Boolean	|false

Slot

|名称	|说明|
|------|------
|自定义 |Tag 显示内容