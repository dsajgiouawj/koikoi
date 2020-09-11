<template>
  <div class="game">
    <Table class="table"
           :cards="tableCards"
           :selected-month="selectedMonth"
           @select="selectTable"/>
    <Hand class="hand"
          :cards="handCards"
          @select="selectHand"/>
  </div>
</template>

<script>
import {socket} from "@/components/IO.js"
import Table from "@/components/Table";
import Hand from "@/components/Hand";
import {Initializer0} from "@/components/Initializer0";
import {Initializer1} from "@/components/Initializer1";

export default {
  name: "Game",
  components: {
    Table,
    Hand
  },
  data() {
    return {
      handCards: [],
      tableCards: [],
      initializer: undefined,
      // 'init'|'myTurnA'|'myTurnB'|'opTurnA'|'opTurnB'
      state: 'init',
      // 0|1
      playerTurn: undefined,
      gameProtocol: undefined,
      selectedCard: undefined,
      drawCard: undefined
    }
  },
  computed: {
    opponentTurn() {
      return 1 - this.playerTurn;
    },
    selectedMonth() {
      if (this.state === 'myTurnA')
        return this.selectedCard ? this.selectedCard.month : undefined;
      else if (this.state === 'myTurnB')
        return this.drawCard ? this.drawCard.month : undefined;
      else return undefined;
    }
  },
  created() {
    socket.on('s2c_game-start', this.gameStart);
    socket.on('s2c_play_response', this.receiveResponse);
    socket.on('s2c_play_broadcast', this.receiveBroadcast);
  }, methods: {
    gameStart(data) {
      this.playerTurn = data.turn;
      if (this.playerTurn === 0)
        this.initializer = new Initializer0(this);
      else
        this.initializer = new Initializer1(this);
    },
    addTable(card) {
      this.tableCards.push(card);
    },
    addHand(card) {
      this.handCards.push(card);
    },
    beginMyTurn() {
      this.state = 'myTurnA';
    },
    endMyTurn() {
      this.selectedCard = undefined;
      this.drawCard = undefined;
      this.state = 'opTurnA';
    },
    selectHand(index) {
      if (this.state !== 'myTurnA') return;
      this.selectedCard = this.handCards[index];
    },
    selectTable(index) {
      console.log(index);
    },
    receiveResponse(data) {
      this.initializer.receive(data);
    },
    receiveBroadcast(data) {
      this.initializer.receive(data);
    }
  }
}
</script>

<style lang="scss" scoped>
.game {
  height: 100%;
  width: 100%;

  .table {
    height: 30%;
    width: 100%
  }

  .hand {
    height: 10%;
    width: 100%;
  }
}
</style>
