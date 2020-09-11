<template>
  <div class="hand">
    <card class="card"
          v-for="(card,index) in cards" :key="index"
          :card="card"
          @click="select(index)"
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
  }, methods: {
    select(index) {
      this.$emit('select', index);
    }
  }
}
</script>

<style lang="scss" scoped>
.hand {
  display: flex;

  .card {
    height: 100%;
    margin: 0 2px;
  }
}
</style>