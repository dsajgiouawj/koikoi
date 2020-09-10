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
      initPhase: true,
      turn: undefined,
      cntCommand: 0
    }
  }, created() {
    socket.on('s2c_game-start', this.gameStart);
    socket.on('s2c_play_response', this.receiveResponse);
    socket.on('s2c_play_broadcast', this.receiveBroadcast);
  }, methods: {
    gameStart(data) {
      this.turn = data.turn;
      if (this.turn === 0) {
        this.send({operation: "add-cards-to-deck", next: 0, cards: hanafudaPack});
      }
    },
    dealHand() {
      for (let i = 0; i < 8; i++) {
        this.send({operation: "draw", next: this.turn});
      }
    },
    send(param) {
      console.log('send c2s_play:' + JSON.stringify(param));
      socket.emit('c2s_play', param);
    },
    dealMe() {
      this.send({operation: "draw", next: this.turn});
    },
    pass() {
      this.send({operation: "pass", next: 1 - this.turn});
    },
    dealTable() {
      console.assert(this.turn === 0);
      this.send({operation: "draw-expose", next: this.turn});
    },
    discardTable() {
      //draw-exposeにより、場札が手札に入っている。
      console.assert(this.turn === 0);
      console.assert(this.handCards.length >= 1);
      this.send({operation: "discard-expose", next: this.turn, card: this.handCards.shift()});
    },
    verifyProtocol(operation, next) {
      console.assert(gameProtocol[this.cntCommand].operation === operation,
          '\nexpected:' + gameProtocol[this.cntCommand].operation + '\nactual:' + operation);
      console.assert(gameProtocol[this.cntCommand].next === next,
          '\nexpected:' + gameProtocol[this.cntCommand].next + '\nactual:' + next);
      this.cntCommand += 1;
    },
    receiveResponse(data) {
      let operation = data.operation;
      let next = data.next;
      this.verifyProtocol(operation, next);

      if (this.initPhase) {
        switch (operation) {
          case "add-cards-to-deck":
            this.dealTable();
            break;
          case "draw-expose":
            this.tableCards.push(data.card);
            this.handCards.push(data.card);//サーバー側と同じく手札にも加えて置き、後でdiscardする。
            if (this.tableCards.length < 8) {
              this.dealTable();
            } else {
              this.discardTable();
            }
            break;
          case "discard-expose":
            if (this.handCards.length >= 1) {
              this.discardTable();
            } else {
              this.dealMe();
            }
            break;
          case "draw":
            this.handCards.push(data.card);
            if (this.handCards.length < 8) {
              this.dealMe();
            } else {
              this.pass();
            }
            break;
          case "pass":
            if (data.next === 0) this.initPhase = false;
            break;
        }
      } else {
        switch (operation) {
          case "add-cards-to-deck":
            break;
          case "draw":
            this.handCards.push(data.card);
            break;
          case "draw-expose":
            this.tableCards.push(data.card);
            break;
        }
      }
    },
    receiveBroadcast(data) {
      let operation = data.operation;
      let next = data.next;
      this.verifyProtocol(operation, next);

      if (this.initPhase) {
        switch (operation) {
          case "add-cards-to-deck":
            console.assert(data.cards === hanafudaPack);
            break;
          case "draw-expose":
            this.tableCards.push(data.card);
            break;
          case "pass":
            if (data.next === 0) {
              this.initPhase = false;
            } else {
              this.dealMe();
            }
            break;
        }
      } else {
        switch (operation) {
          case "add-cards-to-deck":
            console.assert(data.card === hanafudaPack);
            break;
          case "draw":
            break;
          case "draw-expose":
            this.tableCards.push(data.card);
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