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
import {MyTurnHandler} from "@/components/MyTurnHandler";
import {OpTurnHandler} from "@/components/OpTurnHandler";
import {equal} from "@/components/GameUtil";

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
      state: undefined,
      // 0|1
      playerTurn: undefined
    }
  },
  computed: {
    opponentTurn() {
      return 1 - this.playerTurn;
    },
    selectedCard() {
      if (this.state instanceof MyTurnHandler) return this.state.selectedCard;
      else return undefined;
    },
    selectedMonth() {
      if (this.selectedCard) return this.selectedCard.month;
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
        this.state = new Initializer0(this);
      else
        this.state = new Initializer1(this);
    },
    endInitialization() {
      if (this.playerTurn === 0) this.state = new MyTurnHandler(this, 0);
      else this.state = new OpTurnHandler(this, 0);
    },
    addTable(card) {
      this.tableCards.push(card);
    },
    addHand(card) {
      this.handCards.push(card);
    },
    endMyTurn() {

    },
    endOpTurn() {

    },
    selectHand(index) {
      if (this.state instanceof MyTurnHandler)
        this.state.selectHand(this.handCards[index]);
    },
    selectTable(index) {
      if (this.state instanceof MyTurnHandler)
        this.state.selectTable(this.tableCards[index]);
    },
    myTurn_match(hand, table) {
      if (table === undefined) {
        let filtered = this.tableCards.filter(c => c !== undefined && c.month === hand.month);
        console.assert(filtered.length === 1 || filtered.length === 3);
        filtered.map(c => undefined);// eslint-disable-line no-unused-vars
      } else {
        let cnt = 0;
        console.assert(this.tableCards.filter(c => c.month === hand.month).length === 2);
        for (let i = 0; i < this.tableCards.length; i++) {
          if (equal(this.tableCards[i], table)) {
            this.tableCards[i] = undefined;
            cnt += 1;
          }
        }
        console.assert(cnt === 1);
      }
    },
    opTurn_match(hand, table) {
      if (table === undefined) {
        let filtered = this.tableCards.filter(c => c !== undefined && c.month === hand.month);
        console.assert(filtered.length === 1 || filtered.length === 3);
        filtered.map(c => undefined);// eslint-disable-line no-unused-vars
      } else {
        let cnt = 0;
        console.assert(this.tableCards.filter(c => c.month === hand.month).length === 2);
        for (let i = 0; i < this.tableCards.length; i++) {
          if (equal(this.tableCards[i], table)) {
            this.tableCards[i] = undefined;
            cnt += 1;
          }
        }
        console.assert(cnt === 1);
      }
    },
    tableCandidates(month) {
      return this.tableCards.filter(c => c !== undefined && c.month === month);
    },
    receiveResponse(data) {
      this.state.receive(data);
    },
    receiveBroadcast(data) {
      this.state.receive(data);
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
