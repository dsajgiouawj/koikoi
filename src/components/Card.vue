<template>
  <div class="card"
       @click="$emit('click')"
  >
    <img class="img" :src="'/images/'+card.month+'-'+card.number+'.png'">
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    card: Object
  }
}
</script>

<style lang="scss" scoped>
.card {
  .img {
    width: auto;
    height: 100%;
  }
}
</style>