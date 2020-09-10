<template>
  <div class="room">
    <game class="game"/>
    <chat class="chat"/>
  </div>
</template>

<script>
import {socket} from '@/components/IO.js';
import Game from "@/components/Game";
import Chat from "@/components/Chat";

export default {
  name: "Room",
  components: {
    Game,
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

  .game {
    height: 80%;
    width: 100%;
  }

  .chat {
    height: 20%;
    width: 100%;
  }
}
</style>