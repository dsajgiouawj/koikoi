<template>
  <div class="hand">
    <card class="card"
          v-for="(card,index) in cards" :key="index"
          :card="card"
          @click="selectHand(index)"
    />
  </div>
</template>

<script>
import Card from "@/components/Card";

export default {
  name: "Hand",
  components: {Card},
  props: {
    cards: Array
  }
}
</script>

<style lang="scss" scoped>
.hand {
  display: flex;

  .card {
    height: 100%;
    margin: 0 1%;
  }
}
</style>