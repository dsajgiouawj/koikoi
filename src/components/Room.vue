<template>
  <div class="room">
    <Table class="table"
           :cards="[{month:1,number:1},{month:3,number:1},{month:8,number:1},{month:11,number:1},{month:12,number:1}]"/>
    <Hand class="hand"
          :cards="[{month:1,number:1},{month:3,number:1},{month:8,number:1},{month:11,number:1},{month:12,number:1}]"/>
    <Chat/>
  </div>
</template>

<script>
import {socket} from '@/components/IO.js';
import Chat from "@/components/Chat";
import Hand from "@/components/Hand";
import Table from "@/components/Table";

export default {
  name: "Room",
  components: {
    Table,
    Hand,
    Chat
  },
  data() {
    return {
      socket: socket
    }
  }, created() {
    socket.on('s2c_error', function (data) {
      alert(JSON.stringify(data));
    });
    socket.on('s2c_created-room', function (data) {
      alert(JSON.stringify(data));
    });
    socket.on('s2c_joined-room', function (data) {
      alert(JSON.stringify(data));
    });
    socket.on('s2c_game-start', function (data) {
      alert(JSON.stringify(data));
    });

    socket.emit('c2s_request-matching', {"gameID": 0, "nickname": "anonymous"});
  }
}
</script>

<style lang="scss" scoped>
.room {
  width: 100%;
  height: 100%;

  .table {
    height: 30%;
    width: 100%
  }

  .hand {
    height: 10%;
  }
}
</style>