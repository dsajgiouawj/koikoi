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
import {hanafudaPack, gameProtocol} from "@/components/Rule";
import {send} from "@/components/GameUtil";
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
      // 'init'|'myturn'|'opturn'
      state: 'init',
      // 0|1
      playerTurn: undefined,
      cntCommand: 0
    }
  }, created() {
    socket.on('s2c_game-start', this.gameStart);
    socket.on('s2c_play_response', this.receiveResponse);
    socket.on('s2c_play_broadcast', this.receiveBroadcast);
  }, methods: {
    //initialization ↓
    gameStart(data) {
      this.playerTurn = data.turn;
      if (this.playerTurn === 0) {
        send("add-cards-to-deck", 0, undefined, {cards: hanafudaPack});
      }
    },
    //相手のターンにします。
    send_pass(playerTurn) {
      send("send_pass", 1 - playerTurn);
    },
    dealMe() {
      send("draw", this.playerTurn);
    },
    dealTable() {
      console.assert(this.playerTurn === 0);
      send("draw-and-discard-expose", this.playerTurn);
    },
//initialization ↑
    verifyProtocol(operation, next) {
      console.assert(gameProtocol[this.cntCommand].operation === operation,
          '\nexpected:' + gameProtocol[this.cntCommand].operation + '\nactual:' + operation);
      console.assert(gameProtocol[this.cntCommand].next === next,
          '\nexpected:' + gameProtocol[this.cntCommand].next + '\nactual:' + next);
      this.cntCommand += 1;
    }
    ,
    receiveResponse(data) {
      let operation = data.operation;
      let next = data.next;
      this.verifyProtocol(operation, next);

      if (this.state === 'init') {
        switch (operation) {
          case "add-cards-to-deck":
            this.dealTable();
            break;
          case "draw-and-discard-expose":
            this.tableCards.push(data.card);
            if (this.tableCards.length < 8) {
              this.dealTable();
            } else {
              this.dealMe();
            }
            break;
          case "draw":
            this.handCards.push(data.card);
            if (this.handCards.length < 8) {
              this.dealMe();
            } else {
              send_pass();
            }
            break;
          case "pass":
            if (data.next === 0) {
              this.state = 'opturn';
            }
            break;
        }
      } else {
        console.assert(this.state === 'myturn');
        switch (operation) {
          case "discard-expose":
            break;
          case "draw-and-discard-expose":
            break;
          case "pass":
            break;
        }
      }
    }
    ,
    receiveBroadcast(data) {
      let operation = data.operation;
      let next = data.next;
      this.verifyProtocol(operation, next);

      if (this.state === 'init') {
        switch (operation) {
          case "add-cards-to-deck":
            console.assert(data.cards === hanafudaPack);
            break;
          case "draw-and-discard-expose":
            this.tableCards.push(data.card);
            break;
          case "pass":
            if (data.next === 0) {
              this.state = 'myturn';
            } else {
              this.dealMe();
            }
            break;
        }
      } else {
        console.assert(this.state === 'opturn');
        switch (operation) {
          case "discard-expose":
            break;
          case "draw-and-discard-expose":
            break;
          case "pass":
            break;
        }
      }
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
