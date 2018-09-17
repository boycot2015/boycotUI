<template>
  <i :class="'byt-icon-' + name" 
  :style="'font-size:'+size+';color:'+color+';'"></i>
</template>

<script>
  export default {
    name: 'bytIcon',

    props: {
      name: String,
      size: {
        type: String,
        default: '16px'
      },
      color: {
        type: String,
        default: ''
      }
    }
  };
</script>
