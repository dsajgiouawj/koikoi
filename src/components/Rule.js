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

function repeat8(arr) {
    let arr2 = arr.concat(arr);
    let arr4 = arr2.concat(arr2);
    let arr8 = arr4.concat(arr4);
    return arr8;
}

let dealTable = repeat8([{operation: "draw-and-discard-expose", next: 0}]);
let deal0 = repeat8([{operation: "draw", next: 0}]);
let deal1 = repeat8([{operation: "draw", next: 1}]);
let passTo0 = [{operation: "pass", next: 0}];
let passTo1 = [{operation: "pass", next: 1}];

let init = [{operation: "add-cards-to-deck", next: 0}].concat(dealTable, deal0, passTo1, deal1, passTo0);

let turn0 = [
    {operation: "discard-expose", next: 0},
    {operation: "draw-expose", next: 0},
    {operation: "discard-expose", next: 1}
];
let turn1 = [
    {operation: "discard-expose", next: 1},
    {operation: "draw-expose", next: 1},
    {operation: "discard-expose", next: 0}
];
let turn = turn0.concat(turn1);

export const gameProtocol = init.concat(repeat8(turn));
