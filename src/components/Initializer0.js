import {assert, hanafudaPack, repeat8, send} from "@/components/GameUtil";


export class Initializer0 {
    constructor(game) {
        this.receive_addCards0 = (data) => {
            assert(data, 'add-cards-to-deck', 0);
            send('draw-and-discard-expose', 0);
        }
        this.receive_dealTable0 = (data) => {
            assert(data, 'draw-and-discard-expose', 0);
            game.addTable(data.card);
            if (this.protocol[0] === this.receive_dealTable0) send('draw-and-discard-expose', 0);
            else send('draw', 0);
        }
        this.receive_dealOpponent = (data) => {
            assert(data, 'draw', 1);
        }
        this.receive_dealMe = (data) => {
            assert(data, 'draw', 0);
            game.addHand(data.card);
            if (this.protocol[0] === this.receive_dealMe) send('draw', 0);
            else send('pass', 1);
        }
        this.receive_dealEndOpponent = (data) => {
            assert(data, 'pass', 0);
            game.endInitialization();
        }
        this.receive_dealEndMe = (data) => {
            assert(data, 'pass', 1);
        }
        this.protocol = [this.receive_addCards0]
            .concat(repeat8(this.receive_dealTable0))
            .concat(repeat8(this.receive_dealMe))
            .concat(this.receive_dealEndMe)
            .concat(repeat8(this.receive_dealOpponent))
            .concat(this.receive_dealEndOpponent);

        send("add-cards-to-deck", 0, undefined, {cards: hanafudaPack});
    }

    receive(data) {
        this.protocol.shift()(data);
    }
}
