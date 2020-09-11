<template>
  <div class="card"
       @click="$emit('click')"
  >
    <img class="img" :style="{border: '1px solid '+ borderColor}" :src="'images/'+card.month+'-'+card.number+'.png'">
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    card: Object,
    borderColor: {
      type: String,
      default: 'transparent'
    }

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