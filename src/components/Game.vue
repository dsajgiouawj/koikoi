<template>
  <div class="game">
    <point-pile class="opPointPile"
                :cards="opPointPile"/>
    <span class="table">
      <img class="deck" src="images/black.png"/>

      <transition-group name="table" tag="div" class="transition-group">
        <card v-for="(card,index) in tableCards" :key="JSON.stringify(card)"
              class="card"
              :card="card"
              :border-color="card!==undefined&&card.month===selectedMonth?'yellow':'transparent'"
              @click="selectTable(index)"/>
      </transition-group>
    </span>

    <span class="hand">
      <card class="card"
            v-for="(card,index) in handCards" :key="JSON.stringify(card)"
            :card="card"
            @click="selectHand(index)"
      />
    </span>

    <point-pile class="myPointPile"
                :cards="myPointPile"/>
  </div>
</template>

<script>
import {socket} from "@/components/IO.js"
import {Initializer0} from "@/components/Initializer0";
import {Initializer1} from "@/components/Initializer1";
import {MyTurnHandler} from "@/components/MyTurnHandler";
import {OpTurnHandler} from "@/components/OpTurnHandler";
import Card from "@/components/Card";
import {equal} from "@/components/GameUtil";
import PointPile from "@/components/PointPile";

export default {
  name: "Game",
  components: {
    PointPile,
    Card
  },
  data() {
    return {
      handCards: [],
      tableCards: [],
      myPointPile: [],
      opPointPile: [],
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
    addTable(card) {
      this.tableCards.push(card);
    },
    endInitialization(hand, table) {
      this.handCards = hand;
      this.tableCards = table;
      if (this.playerTurn === 0) this.state = new MyTurnHandler(this, 0);
      else this.state = new OpTurnHandler(this, 0);
    },
    endMyTurn() {
      this.state = new OpTurnHandler(this, 0);
    },
    endOpTurn() {
      this.state = new MyTurnHandler(this, 0);
    },
    selectHand(index) {
      if (this.state instanceof MyTurnHandler)
        this.state.selectHand(this.handCards[index]);
    },
    selectTable(index) {
      if (this.state instanceof MyTurnHandler)
        this.state.selectTable(this.tableCards[index]);
    },
    match(selectedHand, selectedTable, isMyTurn) {
      console.log(isMyTurn);
      switch (this.tableCandidates(selectedHand.month).length) {
        case 2:
          console.assert(selectedHand.month === selectedTable.month);
          if (isMyTurn) {
            this.myPointPile.push(selectedHand, selectedTable);
            this.handCards = this.handCards.filter(c => !equal(c, selectedHand));
          } else {
            this.opPointPile.push(selectedHand, selectedTable);
          }
          this.tableCards = this.tableCards.filter(c => !equal(c, selectedTable));
          break;
        case 1:
        case 3:
          this.tableCards
              .filter(c => c.month === selectedHand.month)
              .forEach(c => isMyTurn ? this.myPointPile.push(c) : this.opPointPile.push(c));
          if (isMyTurn) {
            this.myPointPile.push(selectedHand);
            this.handCards = this.handCards.filter(c => !equal(c, selectedHand));
          } else {
            this.opPointPile.push(selectedHand);
          }
          this.tableCards = this.tableCards.filter(c => c.month !== selectedHand.month);
          break;
        default:
          console.assert(false);
      }
    },
    tableCandidates(month) {
      return this.tableCards.filter(c => c.month === month);
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
    width: 100%;
    background-color: darkgreen;

    display: flex;
    align-items: center;

    .deck {
      height: 45%;
      margin: 0 30px;
    }

    .transition-group {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: center;
      align-content: flex-start;

      .card {
        height: calc(50% - 4px);
        margin: 2px;
      }
    }

    .table-enter-active, .table-leave-active {
      transition: all 1s;
    }

    .table-enter, .table-leave-to {
      opacity: 0;
    }
  }

  .hand {
    height: 10%;
    width: 100%;

    display: flex;

    .card {
      height: calc(100% - 4px);
      margin: 0 2px;
    }
  }

  .opPointPile {
    height: 30%;
    width: 100%;
  }

  .myPointPile {
    height: 30%;
    width: 100%;
  }
}
</style>
