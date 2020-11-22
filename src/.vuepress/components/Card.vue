<template>
  <div>
    {{title}}
    <img src="" alt="">
    {{icon}}
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Card',

  props: {
    title: {
      required: true
    },
    icon: {
      required: true
    }
  },

}
</script>
