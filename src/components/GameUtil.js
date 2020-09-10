import {socket} from "@/components/IO";

export function send(operation, next, gameInfo, additionalInfos) {
    console.log('send c2s_play:' + operation + next + gameInfo + JSON.stringify(additionalInfos));
    socket.emit('c2s_play', Object.assign({operation: operation, next: next, gameInfo: gameInfo}, additionalInfos));
}