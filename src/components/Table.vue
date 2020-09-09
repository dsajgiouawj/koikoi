<template>
  <div class="table">
    <card class="card"
          v-for="(card,index) in cards" :key="index"
          :card="card"
          @click="selectTable(index)"
    />
  </div>
</template>

<script>
import Card from "@/components/Card";

export default {
  name: "Table",
  components: {Card},
  props: {
    cards: Array
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
  .card {
    box-sizing: border-box;
    height: 45%;
    margin: 2px 2px;
  }
}
</style>
