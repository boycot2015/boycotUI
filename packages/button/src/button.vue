<template>
  <button
    @click="$emit('click')"
    class="w__button"
    :disabled="disabled"
    :class="[
    'w__button--'+type,
    {'is-plain': plain, 'is-disabled': disabled, 'is-round': round},
    'w__button--size-'+size
    ]"
  >
    <slot name="icon"></slot>
    <i v-if="icon !== ''" :class="'byt-icon-'+icon"></i>
    <slot></slot>
  </button>
</template>
<script>
  export default{
    name: 'bytButton',
    props: {
      type: {
        type: String,
        default: 'default'
      },
      size: {
        type: String,
        default: 'default'
      },
      icon: {
        type: String,
        default: ''
      },
      plain: Boolean,
      disabled: Boolean,
      round: Boolean
    },
    data () {
      return {
        msg: 'button'
      }
    }
  }
</script>
