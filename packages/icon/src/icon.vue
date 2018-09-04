<template>
  <i :class="'byt-icon-' + name"></i>
</template>

<script>
  export default {
    name: 'bytIcon',

    props: {
      name: String
    }
  };
</script>
