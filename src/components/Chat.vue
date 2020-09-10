<template>
  <div class="chat">
    <p v-for="(message,index) in messages" :key="index">
      {{ message.from + '> ' + message.message }}
    </p>
    <input v-model="draft">
    <button type="button" v-on:click="sendMessage()">送信</button>
  </div>
</template>

<script>
import {socket} from '@/components/IO.js';

export default {
  name: "Chat",
  data() {
    return {
      messages: [
        {from: "Alice", message: "Hello"},
        {from: "Bob", message: "こんにちは"}
      ],
      draft: '',
      enabled: false
    }
  }, created() {
    socket.on('s2c_chat', this.receiveMessage);
  },
  methods: {
    sendMessage() {
      socket.emit('c2s_chat', {"message": this.draft});
      this.messages.push({from: "You", message: this.draft});
      this.draft = '';
    },
    receiveMessage(data) {
      console.log(this.messages);
      this.messages.push(data);
    }
  }
}
</script>

<style scoped>
p {
  text-align: left;
}
</style>