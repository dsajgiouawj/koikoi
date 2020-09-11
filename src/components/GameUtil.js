import {socket} from "@/components/IO";

export function send(operation, next, gameInfo, additionalInfos) {
    console.log('send c2s_play:' + operation + ' ' + next + ' ' + gameInfo + ' ' + JSON.stringify(additionalInfos));
    socket.emit('c2s_play', Object.assign({operation: operation, next: next, gameInfo: gameInfo}, additionalInfos));
}

export function assert(data, operation, next) {
    console.assert(data.operation === operation && data.next === next,
        '\nexpected:' + operation + ', ' + next +
        '\nactual:' + data.operation + ', ' + data.next);
}

export const equal = require('fast-deep-equal');

export function repeat8(val) {
    return [val, val, val, val, val, val, val, val];
}

export const hanafudaPack = [
    {month: 1, number: 1, type: ["hikari"]},
    {month: 1, number: 2, type: ["tan", "akatan"]},
    {month: 1, number: 3, type: ["kasu"]},
    {month: 1, number: 4, type: ["kasu"]},

    {month: 2, number: 1, type: ["tane"]},
    {month: 2, number: 2, type: ["tan", "akatan"]},
    {month: 2, number: 3, type: ["kasu"]},
    {month: 2, number: 4, type: ["kasu"]},

    {month: 3, number: 1, type: ["hikari"]},
    {month: 3, number: 2, type: ["tan", "akatan"]},
    {month: 3, number: 3, type: ["kasu"]},
    {month: 3, number: 4, type: ["kasu"]},

    {month: 4, number: 1, type: ["tane"]},
    {month: 4, number: 2, type: ["tan"]},
    {month: 4, number: 3, type: ["kasu"]},
    {month: 4, number: 4, type: ["kasu"]},

    {month: 5, number: 1, type: ["tane"]},
    {month: 5, number: 2, type: ["tan"]},
    {month: 5, number: 3, type: ["kasu"]},
    {month: 5, number: 4, type: ["kasu"]},

    {month: 6, number: 1, type: ["tane", "inoshikacho"]},
    {month: 6, number: 2, type: ["tan", "aotan"]},
    {month: 6, number: 3, type: ["kasu"]},
    {month: 6, number: 4, type: ["kasu"]},

    {month: 7, number: 1, type: ["tane", "inoshikacho"]},
    {month: 7, number: 2, type: ["tan"]},
    {month: 7, number: 3, type: ["kasu"]},
    {month: 7, number: 4, type: ["kasu"]},

    {month: 8, number: 1, type: ["hikari"]},
    {month: 8, number: 2, type: ["tane"]},
    {month: 8, number: 3, type: ["kasu"]},
    {month: 8, number: 4, type: ["kasu"]},

    {month: 9, number: 1, type: ["tane"]},
    {month: 9, number: 2, type: ["tan", "aotan"]},
    {month: 9, number: 3, type: ["kasu"]},
    {month: 9, number: 4, type: ["kasu"]},

    {month: 10, number: 1, type: ["tane", "inoshikacho"]},
    {month: 10, number: 2, type: ["tan", "aotan"]},
    {month: 10, number: 3, type: ["kasu"]},
    {month: 10, number: 4, type: ["kasu"]},

    {month: 11, number: 1, type: ["hikari", "ame"]},
    {month: 11, number: 2, type: ["tane"]},
    {month: 11, number: 3, type: ["tan"]},
    {month: 11, number: 4, type: ["kasu"]},

    {month: 12, number: 1, type: ["hikari"]},
    {month: 12, number: 2, type: ["kasu"]},
    {month: 12, number: 3, type: ["kasu"]},
    {month: 12, number: 4, type: ["kasu"]},
];
