<template>
  <div class="table">
    <card class="card"
          v-for="(card,index) in cards" :key="index"
          :card="card"
          :border-color="card.month===selectedMonth?'yellow':'transparent'"
          @click="select(index)"
    />
  </div>
</template>

<script>
import Card from "@/components/Card";

export default {
  name: "Table",
  components: {Card},
  props: {
    cards: Array,
    selectedMonth: Number
  }, methods: {
    select(index) {
      this.$emit('select', index);
    }
  }
}
</script>

<style lang="scss" scoped>
.table {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  height: 100%;
  width: 100%;

  .card {
    box-sizing: border-box;
    height: 45%;
    margin: 2px 2px;
  }
}
</style>
