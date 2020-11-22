<template>
  <div class="card">
    {{title}}
    <div v-if="description">{{description}}</div>
    <div v-else>USD {{price}}/month * billed annually for single user</div>
    <ul>
      <li v-for="item in features">{{item}}</li>
    </ul>
    <a href="/trial-signup.html">{{ctaLabel}}</a>
  </div>
</template>

<script>
export default {
  name: 'PriceCard',

  props: {
    title: {
      required: true
    },
    description: {

    },
    features: {
      type: Array,
    },
  //   byLine: {
  //     required: true
  //   },
    price: {
      required: true,
      type: Number,
    }
  },
  computed: {
    ctaLabel () {
      return this.price > 0 ? 'Subscribe' : 'Free Sign Up'
    }
  }
}
</script>
<style scoped>
  .card {
    background: #EBF7FF;
    padding: 10px;
    border-radius: 10px;
    margin: 10px;
  }
</style>
