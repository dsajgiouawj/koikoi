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
import {send, equal, repeat8, hanafudaPack, assert} from "@/components/GameUtil";
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
      handCards: [],
      tableCards: [],
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
      if (this.playerTurn === 0) {
        this.gameProtocol = [this.receive_addCards0]
            .concat(repeat8(this.receive_dealTable0))
            .concat(repeat8(this.receive_dealMe))
            .concat(this.receive_dealEndMe)
            .concat(repeat8(this.receive_dealOpponent))
            .concat(this.receive_dealEndOpponent);
        send("add-cards-to-deck", 0, undefined, {cards: hanafudaPack});
      } else {
        this.gameProtocol = [this.receive_addCards1]
            .concat(repeat8(this.receive_dealTable1))
            .concat(repeat8(this.receive_dealOpponent))
            .concat(this.receive_dealEndOpponent)
            .concat(repeat8(this.receive_dealMe))
            .concat(this.receive_dealEndMe);
      }
    },
    receive_addCards(data) {
      assert(data, 'add-cards-to-deck', 0);
      console.assert(equal(data.cards, hanafudaPack));
    },
    receive_addCards0(data) {
      this.receive_addCards(data);
      send('draw-and-discard-expose', 0);
    },
    receive_addCards1(data) {
      this.receive_addCards(data);
    },
    receive_dealTable(data) {
      assert(data, 'draw-and-discard-expose', 0);
      this.tableCards.push(data.card);
    },
    receive_dealTable0(data) {
      this.receive_dealTable(data);
      if (this.tableCards.length < 8) send('draw-and-discard-expose', 0);
      else send('draw', 0);
    },
    receive_dealTable1(data) {
      this.receive_dealTable(data);
    },
    receive_dealOpponent(data) {
      assert(data, 'draw', this.opponentTurn);
    },
    receive_dealMe(data) {
      assert(data, 'draw', this.playerTurn);
      this.handCards.push(data.card);
      if (this.handCards.length < 8) send('draw', this.playerTurn);
      else send('pass', this.opponentTurn);
    },
    receive_dealEndOpponent(data) {
      assert(data, 'pass', this.playerTurn);
      if (this.playerTurn === 0) this.beginMyTurn();
      else send('draw', this.playerTurn);
    },
    receive_dealEndMe(data) {
      assert(data, 'pass', this.opponentTurn);
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
      this.gameProtocol.shift()(data);
    },
    receiveBroadcast(data) {
      this.gameProtocol.shift()(data);
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
