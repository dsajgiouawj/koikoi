<template>
  <div id="room">
    <Chat/>
  </div>
</template>

<script>
import {socket} from '@/components/IO.js';
import Chat from "@/components/Chat";

export default {
  name: "Room",
  components: {
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

<style scoped>

</style>