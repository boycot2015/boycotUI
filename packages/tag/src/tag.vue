<template>
  <span class="byt-tag" :class="[
  type?'byt-tag--'+type:'',
  round?'is-round':'',
  plain?'is-plain':''
  ]"><slot /></span>
</template>
<script>
  export default {
    name:"bytTag",
    data(){
      return {

      }
    },
    props:{
      type:{
        type:String,
        default:''
      },
      round:{
        type:Boolean,
        default:false
      },
      plain:{
        type:Boolean,
        default:false
      }
    }
  }
</script>
