## Button 按钮

### 基础用法

使用type、plain和round属性来定义 Button 的样式。


<div style="margin:30px 0;">
  <byt-button>默认按钮</byt-button>
  <byt-button type="primary">主要按钮</byt-button>
  <byt-button type="success">成功按钮</byt-button>
  <byt-button type="info">信息按钮</byt-button>
  <byt-button type="warning">警告按钮</byt-button>
  <byt-button type="danger">危险按钮</byt-button>
</div>
<div style="margin:30px 0;">
  <byt-button plain>朴素按钮</byt-button>
  <byt-button type="primary" plain>主要按钮</byt-button>
  <byt-button type="success" plain>成功按钮</byt-button>
  <byt-button type="info" plain>信息按钮</byt-button>
  <byt-button type="warning" plain>警告按钮</byt-button>
  <byt-button type="danger" plain>危险按钮</byt-button>
</div>
<div style="margin:30px 0;">
  <byt-button round>圆形按钮</byt-button>
  <byt-button type="primary" round>主要按钮</byt-button>
  <byt-button type="success" round>成功按钮</byt-button>
  <byt-button type="info" round>信息按钮</byt-button>
  <byt-button type="warning" round>警告按钮</byt-button>
  <byt-button type="danger" round>危险按钮</byt-button>
</div>
<ul style="margin:30px 0;width:250px;height:30px;white-space: nowrap;overflow:hidden;text-overflow:ellipsis;">
  <li style="display:inline;" round>圆形按钮</li>
  <li style="display:inline;" type="primary">主要按钮</li>
  <li style="display:inline;" type="success">成功按钮</li>
  <li style="display:inline;" type="info">信息按钮</li>
  <li style="display:inline;" type="warning">警告按钮</li>
  <li style="display:inline;" type="danger">危险按钮</li>
</ul>

::: demo

```html
<div style="margin:30px 0;">
  <byt-button>默认按钮</byt-button>
  <byt-button type="primary">主要按钮</byt-button>
  <byt-button type="success">成功按钮</byt-button>
  <byt-button type="info">信息按钮</byt-button>
  <byt-button type="warning">警告按钮</byt-button>
  <byt-button type="danger">危险按钮</byt-button>
</div>
<div style="margin:30px 0;">
  <byt-button plain>朴素按钮</byt-button>
  <byt-button type="primary" plain>主要按钮</byt-button>
  <byt-button type="success" plain>成功按钮</byt-button>
  <byt-button type="info" plain>信息按钮</byt-button>
  <byt-button type="warning" plain>警告按钮</byt-button>
  <byt-button type="danger" plain>危险按钮</byt-button>
</div>
<div style="margin:30px 0;">
  <byt-button round>圆形按钮</byt-button>
  <byt-button type="primary" round>主要按钮</byt-button>
  <byt-button type="success" round>成功按钮</byt-button>
  <byt-button type="info" round>信息按钮</byt-button>
  <byt-button type="warning" round>警告按钮</byt-button>
  <byt-button type="danger" round>危险按钮</byt-button>
</div>

```
:::

### 禁用状态

按钮不可用状态。

<div style="margin:30px 0;">
  <byt-button disabled>默认按钮</byt-button>
  <byt-button type="primary" disabled>主要按钮</byt-button>
  <byt-button type="success" disabled>成功按钮</byt-button>
  <byt-button type="info" disabled>信息按钮</byt-button>
  <byt-button type="warning" disabled>警告按钮</byt-button>
  <byt-button type="danger" disabled>危险按钮</byt-button>
</div>
<div class="m-10" style="margin:30px 0;">
  <byt-button plain disabled>朴素按钮</byt-button>
  <byt-button type="primary" plain disabled>主要按钮</byt-button>
  <byt-button type="success" plain disabled>成功按钮</byt-button>
  <byt-button type="info" plain disabled>信息按钮</byt-button>
  <byt-button type="warning" plain disabled>警告按钮</byt-button>
  <byt-button type="danger" plain disabled>危险按钮</byt-button>
</div>

:::demo
```html
<div style="margin:30px 0;">
  <byt-button disabled>默认按钮</byt-button>
  <byt-button type="primary" disabled>主要按钮</byt-button>
  <byt-button type="success" disabled>成功按钮</byt-button>
  <byt-button type="info" disabled>信息按钮</byt-button>
  <byt-button type="warning" disabled>警告按钮</byt-button>
  <byt-button type="danger" disabled>危险按钮</byt-button>
</div>
<div class="m-10" style="margin:30px 0;">
  <byt-button plain disabled>朴素按钮</byt-button>
  <byt-button type="primary" plain disabled>主要按钮</byt-button>
  <byt-button type="success" plain disabled>成功按钮</byt-button>
  <byt-button type="info" plain disabled>信息按钮</byt-button>
  <byt-button type="warning" plain disabled>警告按钮</byt-button>
  <byt-button type="danger" plain disabled>危险按钮</byt-button>
</div>
```
:::

### 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。 设置icon属性即可，icon 的列表可以参考 Boycot-UI 的 icon 组件，也可以设置在文字右边的 icon ，只要使用i标签即可，可以通过solt插槽自定义图标。

<byt-button icon="home" type="primary"></byt-button>
<byt-button icon="close" type="primary"></byt-button>
<byt-button icon="setting" type="primary"></byt-button>
<byt-button icon="search" type="primary">搜索
</byt-button>
<byt-button icon="download" type="primary">下载</byt-button>
<byt-button type="primary"><byt-icon name="upload" solt="icon"></byt-icon>上传</byt-button>

:::demo
```html
<byt-button icon="home" type="primary"></byt-button>
<byt-button icon="close" type="primary"></byt-button>
<byt-button icon="setting" type="primary"></byt-button>
<byt-button icon="search" type="primary">搜索
</byt-button>
<byt-button icon="download" type="primary">下载</byt-button>
<byt-button type="primary"><byt-icon name="upload" solt="icon"></byt-icon>上传</byt-button>
```
:::


### 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。 额外的尺寸：medium、small，通过设置size属性来配置它们。

默认尺寸 中等按钮 小型按钮

<byt-button>默认尺寸</byt-button>
<byt-button size="medium">中等按钮</byt-button>
<byt-button size="small">小型按钮</byt-button>

:::demo
```html
<byt-button>默认尺寸</byt-button>
<byt-button size="medium">中等按钮</byt-button>
<byt-button size="small">小型按钮</byt-button>
```
:::

### Attributes

| 参数 |  说明  |	类型 |	可选值 |	默认值  |
|---------- |--------| --------------| --------------| --------------
| label-width | 表单域标签的的宽度，例如 '50px' | string |       —       | — |
| size | 尺寸 | string	|	default,medium,small|	— |
| type | 类型 | string	|	primary,success,warning,danger,info|	— |
| plain | 是否朴素按钮 | Boolean	|—|	false |
| icon | 图标，已有的图标库中的图标名 | string	|—|	— |
|	disabled |	是否禁用状态 |	boolean |	—	|	false |
