<template>
  <div class="pointPile">
    <div class="hikarifuda">
      <span/>
      <card class="card"
            v-for="card in hikarifuda" :key="JSON.stringify(card)"
            :card="card"/>
    </div>
    <div class="tane">
      <card class="card"
            v-for="card in tane" :key="JSON.stringify(card)"
            :card="card"/>
    </div>
    <div class="tan">
      <card class="card"
            v-for="card in tan" :key="JSON.stringify(card)"
            :card="card"/>
    </div>
    <div class="kasu">
      <card class="card"
            v-for="card in kasu" :key="JSON.stringify(card)"
            :card="card"/>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";

export default {
  name: "PointPile",
  components: {
    Card
  },
  props: {
    cards: Array
  },
  computed: {
    hikarifuda() {
      return this.cards.filter(c => c.type.includes('hikari'));
    },
    tane() {
      return this.cards.filter(c => c.type.includes('tane'));
    },
    tan() {
      return this.cards.filter(c => c.type.includes('tan'));
    },
    kasu() {
      return this.cards.filter(c => c.type.includes('kasu'));
    }
  }
}
</script>

<style lang="scss" scoped>
.pointPile {
  height: 100%;
  width: 100%;
  background-color: darkred;

  .hikarifuda, .tane, .tan, .kasu {
    height: 25%;
    width: 100%;
    display: flex;

    .card {
      height: calc(100% - 2px);
      width: auto;
      margin: 2px;
    }
  }
}
</style>