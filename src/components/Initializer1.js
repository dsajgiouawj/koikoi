import {assert, equal, hanafudaPack, repeat8, send} from "@/components/GameUtil";


export class Initializer1 {
    constructor(game) {
        this.handCards = [];
        this.tableCards = [];

        this.receive_addCards1 = (data) => {
            assert(data, 'add-cards-to-deck', 0);
            console.assert(equal(data.cards, hanafudaPack));
        }
        this.receive_dealTable1 = (data) => {
            assert(data, 'draw-and-discard-expose', 0);
            this.tableCards.push(data.card);
        }
        this.receive_dealOpponent = (data) => {
            assert(data, 'draw', 0);
        }
        this.receive_dealMe = (data) => {
            assert(data, 'draw', 1);
            this.handCards.push(data.card);
            if (this.protocol[0] === this.receive_dealMe) send('draw', 1);
            else send('pass', 0);
        }
        this.receive_dealEndOpponent = (data) => {
            assert(data, 'pass', 1);
            send('draw', 1);
        }
        this.receive_dealEndMe = (data) => {
            assert(data, 'pass', 0);
            game.endInitialization(this.handCards, this.tableCards);
        }
        this.protocol = [this.receive_addCards1]
            .concat(repeat8(this.receive_dealTable1))
            .concat(repeat8(this.receive_dealOpponent))
            .concat(this.receive_dealEndOpponent)
            .concat(repeat8(this.receive_dealMe))
            .concat(this.receive_dealEndMe);
    }

    receive(data) {
        this.protocol.shift()(data);
    }
}
