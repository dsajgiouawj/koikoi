<template>
  <div class="game">
    <Table class="table"
           :cards="tableCards"/>
    <Hand class="hand"
          :cards="handCards"/>
  </div>
</template>

<script>
import {socket} from "@/components/IO.js"
import {hanafudaPack} from "@/components/HanafudaPack";
import Table from "@/components/Table";
import Hand from "@/components/Hand";

export default {
  name: "Game",
  components: {
    Table,
    Hand
  },
  data() {
    return {
      socket: socket,
      hanafudaPack: hanafudaPack,
      handCards: [],
      tableCards: []
    }
  }, created() {
    socket.on('s2c_game-start', this.gameStart);
    socket.on('s2c_play_response', this.receiveResponse);
    socket.on('s2c_play_broadcast', this.receiveBroadcast);
  }, methods: {
    gameStart(data) {
      console.log(this.messages);
      let turn = data.turn;
      if (turn === 0) {
        //deal
        this.init();
      }
    }, init() {
      this.send({operation: "add-cards-to-deck", next: 0, cards: hanafudaPack});
      for (let i = 0; i < 8; i++) {
        this.send({operation: "draw-expose", next: 0});
        //todo: discard
      }
      for (let i = 0; i < 8; i++) {
        this.send({operation: "draw", next: 0});
      }
      this.send({operation: "pass", next: 1});
    }, send(param) {
      socket.emit('c2s_play', param);
    }, receiveResponse(data) {
      let operation = data.operation;
      switch (operation) {
        case "draw":
          this.handCards.push(data.card);
          break;
        case "draw-expose":
          this.tableCards.push(data.card);
          break;
      }
    }, receiveBroadcast(data) {
      let operation = data.operation;
      switch (operation) {
        case "draw":
          break;
        case "draw-expose":
          this.tableCards.push(data.card);
          break;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.table {
  height: 30%;
  width: 100%
}

.hand {
  height: 10%;
}
</style>